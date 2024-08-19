/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import * as P from '../MyReview.style';
import ButtonSelector from '../../../components/buttonselector/ButtonSelector';
import postDummy from '../dummyData';
import Pagination from '../../../components/Pagination/Pagination';
import MyPostCard from '../../../components/PostCard/MyPostCard';
import Dropbox from '../../../components/DropBoxes/Dropbox2';
import extractTextFromBlocks from '../../../utils/extractContextFromBlocks';
import extractFirstImageUrl from '../../../utils/extractImgSrcFromBlocks';
import convertToKST from '../../../utils/convertToKST';

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/save_icon.svg" />
    </P.IconContainer>
  );
}

export default function MyReviewSave() {
  const [bookmarks, setBookmarks] = useState([]);
  const [filteredBookmarks, setFilteredBookmarks] = useState([]); // 필터링된 북마크를 관리할 상태 추가
  const [categoryFilter, setCategoryFilter] = useState('전체'); // 카테고리 필터 상태 추가
  const [petTypeFilter, setPetTypeFilter] = useState('전체'); // 동물 필터 상태 추가

  const fetchBookmarks = async () => {
    const res = await fetch(
      'http://ec2-3-37-97-6.ap-northeast-2.compute.amazonaws.com:8080/post/1/bookmarks',
      {
        headers: {
          Accept: '*/*',
        },
      },
    );
    const data = await res.json();
    setBookmarks(data.result);
    setFilteredBookmarks(data.result); // 처음 로드 시 전체 북마크를 보여주도록 설정
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  // 필터링 로직
  useEffect(() => {
    let filtered = bookmarks;

    if (categoryFilter !== '전체') {
      filtered = filtered.filter(
        (post) =>
          (categoryFilter === '꿀정보' && post.category === 'TIPS') ||
          (categoryFilter === '후기' && post.category === 'REVIEW'),
      );
    }

    if (petTypeFilter !== '전체') {
      filtered = filtered.filter(
        (post) =>
          (petTypeFilter === '강아지' && post.petType === 'DOG') ||
          (petTypeFilter === '고양이' && post.petType === 'CAT'),
      );
    }

    setFilteredBookmarks(filtered);
  }, [categoryFilter, petTypeFilter, bookmarks]);

  const [page, setPage] = useState(1);

  return (
    <P.Layout>
      <P.VerticalFlexGap20Nav>
        <div>
          <P.MenuTitle>커뮤니티</P.MenuTitle>
          <P.MenuSubtitleContainer>
            <P.MenuSubtitleActive to="/myreview/save">
              저장한 글
            </P.MenuSubtitleActive>
            <P.MenuSubtitleInActive to="/myreview/review">
              나의 후기
            </P.MenuSubtitleInActive>
          </P.MenuSubtitleContainer>
        </div>

        <div>
          <P.MenuTitle>스크랩</P.MenuTitle>
          <P.MenuSubtitleContainer>
            <P.MenuSubtitleInActive to="/myreview/animal">
              저장한 동물
            </P.MenuSubtitleInActive>
            <P.MenuSubtitleInActive to="/myreview/breeder">
              저장한 브리더
            </P.MenuSubtitleInActive>
          </P.MenuSubtitleContainer>
        </div>
      </P.VerticalFlexGap20Nav>
      <P.MainContainer>
        <Icon />
        <P.TitleLayout>
          <div>
            <P.MainTitle>저장한 글</P.MainTitle>
          </div>
        </P.TitleLayout>

        <P.FilterContainer>
          <P.FiltersContainer>
            <Dropbox
              defaultPlaceholder="카테고리"
              menuList={['전체', '꿀정보', '후기']}
              setCurrentMenu={setCategoryFilter} // 카테고리 필터 업데이트
              width={110}
            />
            <Dropbox
              defaultPlaceholder="전체"
              menuList={['전체', '강아지', '고양이']}
              setCurrentMenu={setPetTypeFilter} // 동물 필터 업데이트
              width={90}
            />
          </P.FiltersContainer>
          <P.SortContainer>
            <ButtonSelector paddingVertical="14px">편집</ButtonSelector>
          </P.SortContainer>
        </P.FilterContainer>

        <P.PostContainer>
          {filteredBookmarks.map((post) => (
            <MyPostCard
              category={post.category === 'TIPS' ? '꿀정보' : '후기'}
              petType={post.petType}
              key={post.id}
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
