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
import convertBlobUrlToHttpUrl from '../../../utils/convertBlobUrlToHttpUrl';

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
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [sortOption, setSortOption] = useState('최신순'); // 기본 정렬 옵션을 '최신순'으로 설정
  const [page, setPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('전체');
  const navigate = useNavigate();

  const sortPosts = (option, posts) => {
    switch (option) {
      case '최신순':
        return [...posts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
      case '조회순':
        return [...posts].sort((a, b) => b.viewCount - a.viewCount);
      case '스크랩순':
        return [...posts].sort(
          (a, b) => (b.bookmarkCount || 0) - (a.bookmarkCount || 0),
        );
      default:
        return posts;
    }
  };

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
    setFilteredPosts(sortPosts(sortOption, data.result)); // 로드된 데이터를 바로 정렬
  };

  const fetchUserInfo = async () => {
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
    if (isLoggedIn && token) {
      fetchUserInfo();
    }
  }, [isLoggedIn]);

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);

    if (filterName === '전체') {
      setFilteredPosts(sortPosts(sortOption, posts)); // 필터링 후 정렬 적용
    } else if (filterName === '강아지') {
      setFilteredPosts(
        sortPosts(
          sortOption,
          posts.filter((post) => post.petType === 'DOG'),
        ),
      );
    } else if (filterName === '고양이') {
      setFilteredPosts(
        sortPosts(
          sortOption,
          posts.filter((post) => post.petType === 'CAT'),
        ),
      );
    }
  };

  useEffect(() => {
    setFilteredPosts(sortPosts(sortOption, filteredPosts)); // 정렬 옵션이 바뀔 때마다 필터된 포스트를 정렬
  }, [sortOption]);

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
                $active={activeFilter === filter}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </P.Filter>
            ))}
          </P.FiltersContainer>
          <P.SortContainer>
            <Dropbox
              defaultPlaceholder="정렬 기준"
              menuList={['최신순', '조회순', '스크랩순']}
              currentMenu={sortOption}
              setCurrentMenu={setSortOption}
            />
          </P.SortContainer>
        </P.FilterContainer>

        <P.PostContainer>
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              petType={post.petType}
              profileImgSrc={convertBlobUrlToHttpUrl(post.authorImage)}
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
