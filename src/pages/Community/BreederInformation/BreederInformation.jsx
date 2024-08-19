import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as P from '../Community.style';
import Button from '../../../components/button/Button';
import Pagination from '../../../components/Pagination/Pagination';
import PostCard from '../../../components/PostCard/PostCard';
import Dropbox from '../../../components/DropBoxes/Dropbox2';
import VerticalMenuSelector from '../../../components/VerticalMenuSelector/VerticalMenuSelector';
import extractFirstImageUrl from '../../../utils/extractImgSrcFromBlocks';
import extractTextFromBlocks from '../../../utils/extractContextFromBlocks';
import convertToKST from '../../../utils/convertToKST';
import useAuth from '../../../hooks/useAuth';

const menuItems = [
  { name: '브리더의 꿀정보', href: '/community/breederinformation' },
  { name: '브위더 후기', href: '/community/review' },
];

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/thumbs_up.svg" />
    </P.IconContainer>
  );
}

export default function CommunityBreederInformation() {
  const { isLoggedIn, role, token } = useAuth();

  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]); // 필터링된 포스트를 관리할 상태 추가

  const fetchPosts = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const endPoint = `${apiUrl}/post/tips`;
    const res = await fetch(endPoint, {
      headers: {
        Accept: '*/*',
      },
    });

    const data = await res.json();
    setPosts(data.result);
    setFilteredPosts(data.result); // 처음 로드 시 전체 포스트를 보여주도록 설정
  };

  const fetchUserInfo = async () => {
    if (!isLoggedIn) return;

    const apiUrl = import.meta.env.VITE_API_URL;
    const endPoint = `${apiUrl}/user`;
    const res = await fetch(endPoint, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setUserInfo(data.result);
  };

  useEffect(() => {
    fetchPosts();
    fetchUserInfo();
  }, []);

  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState(null);
  const [activeFilter, setActiveFilter] = useState('전체'); // 활성화된 필터를 관리할 상태 추가
  const navigate = useNavigate();

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName); // 필터 클릭 시 활성화된 필터 상태 업데이트

    if (filterName === '전체') {
      setFilteredPosts(posts); // '전체'를 선택하면 모든 포스트를 보여줌
    } else if (filterName === '강아지') {
      setFilteredPosts(posts.filter((post) => post.petType === 'DOG')); // '강아지'를 선택하면 DOG 포스트만 보여줌
    } else if (filterName === '고양이') {
      setFilteredPosts(posts.filter((post) => post.petType === 'CAT')); // '고양이'를 선택하면 CAT 포스트만 보여줌
    }
  };

  return (
    <P.Layout>
      <VerticalMenuSelector
        title="커뮤니티"
        items={menuItems}
        activeItemName="브리더의 꿀정보"
      />
      <P.MainContainer>
        <Icon />
        <P.TitleLayout>
          <div>
            <P.MainTitle>브리더의 꿀정보</P.MainTitle>
            <P.MainSubTitle>
              브리더가 직접 알려주는 반려동물 꿀정보를 받아가세요
            </P.MainSubTitle>
          </div>
          <P.TitleButtonContainer>
            {userInfo && userInfo.breederDTO && (
              <Button
                icon="/icons/pencil_orange.svg"
                whiteBorder
                onClick={() => navigate('form')}
              >
                글 작성하기
              </Button>
            )}
          </P.TitleButtonContainer>
        </P.TitleLayout>

        <P.FilterContainer>
          <P.FiltersContainer>
            {['전체', '강아지', '고양이'].map((filter) => (
              <P.Filter
                key={filter}
                $active={activeFilter === filter} // 활성화된 필터에만 $active prop 전달
                onClick={() => handleFilterClick(filter)} // 클릭 시 필터 업데이트
              >
                {filter}
              </P.Filter>
            ))}
          </P.FiltersContainer>
          <P.SortContainer>
            <Dropbox
              defaultPlaceholder="정렬 기준"
              menuList={['최신순', '조회순', '댓글순', '스크랩순']}
              currentMenu={sortOption}
              setCurrentMenu={setSortOption}
            />
          </P.SortContainer>
        </P.FilterContainer>

        <P.PostContainer>
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              petType={post.petType} // petType prop 전달
              profileImgSrc=""
              profileName={post.author}
              postTitle={post.title}
              postContent={extractTextFromBlocks(post.blocks)}
              postThumbnailSrc={extractFirstImageUrl(post.blocks)}
              timeStampKR={convertToKST(post.createdAt)}
              viewCount={post.viewCount}
              bookmarkCount={post.bookmarkCount}
            />
          ))}
        </P.PostContainer>
      </P.MainContainer>
    </P.Layout>
  );
}
