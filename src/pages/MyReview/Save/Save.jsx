/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as P from '../MyReview.style';
import ButtonSelector from '../../../components/buttonselector/ButtonSelector';
import MyPostCard from '../../../components/PostCard/MyPostCard';
import Dropbox from '../../../components/DropBoxes/Dropbox2';
import extractTextFromBlocks from '../../../utils/extractContextFromBlocks';
import convertToKST from '../../../utils/convertToKST';
import useAuth from '../../../hooks/useAuth';

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/save_icon.svg" />
    </P.IconContainer>
  );
}

export default function MyReviewSave() {
  const navigate = useNavigate();
  const { isLoggedIn, token, role } = useAuth();

  const [bookmarks, setBookmarks] = useState([]);
  const [filteredBookmarks, setFilteredBookmarks] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('전체');
  const [petTypeFilter, setPetTypeFilter] = useState('전체');
  const [editMode, setEditMode] = useState(false); // 편집 모드 상태 추가
  const [deleteCheckedStates, setDeleteCheckedStates] = useState({}); // 체크된 상태 관리

  const setDeleteChecked = (postId, checked) => {
    setDeleteCheckedStates((prevState) => ({
      ...prevState,
      [postId]: checked,
    }));
  };

  const getDeleteCheckedPosts = () => {
    return filteredBookmarks.filter((post) => deleteCheckedStates[post.id]);
  };

  const deleteCheckedBookmarks = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const postsToDelete = getDeleteCheckedPosts();

    await Promise.all(
      postsToDelete.map(async (post) => {
        const endPoint = `${apiUrl}/post/${post.id}/bookmark`;
        await fetch(endPoint, {
          method: 'DELETE',
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
          },
        });
      }),
    );

    const remainingPosts = filteredBookmarks.filter(
      (post) => !deleteCheckedStates[post.id],
    );

    setBookmarks(remainingPosts);
    setFilteredBookmarks(remainingPosts);
  };

  const editButtonHandler = () => {
    if (editMode) deleteCheckedBookmarks();
    setEditMode(!editMode);
  };

  const fetchBookmarks = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const endPoint = `${apiUrl}/post/bookmarks`;
    const res = await fetch(endPoint, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setBookmarks(data.result);
    setFilteredBookmarks(data.result);
  };

  useEffect(() => {
    if (isLoggedIn && token) {
      if (role === 'BREEDER') setCategoryFilter('꿀정보');
      fetchBookmarks();
    }
  }, [isLoggedIn]);

  // 필터링 로직
  useEffect(() => {
    if (!Array.isArray(bookmarks)) return;
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

  return (
    <P.Layout>
      <P.VerticalFlexGap20Nav>
        {role === 'MEMBER' && (
          <>
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
          </>
        )}
        {role === 'BREEDER' && (
          <div>
            <P.MenuTitle>커뮤니티</P.MenuTitle>
            <P.MenuSubtitleContainer>
              <P.MenuSubtitleInActive to="/myreview/post">
                내가 쓴 글
              </P.MenuSubtitleInActive>
              <P.MenuSubtitleActive to="/myreview/save">
                저장한 글
              </P.MenuSubtitleActive>
              <P.MenuSubtitleInActive to="/breeder-review">
                받은 후기
              </P.MenuSubtitleInActive>
            </P.MenuSubtitleContainer>
          </div>
        )}
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
            {role === 'MEMBER' && (
              <Dropbox
                defaultPlaceholder="카테고리"
                menuList={['전체', '꿀정보', '후기']}
                setCurrentMenu={setCategoryFilter}
                width={110}
              />
            )}
            <Dropbox
              defaultPlaceholder="전체"
              menuList={['전체', '강아지', '고양이']}
              setCurrentMenu={setPetTypeFilter}
              width={90}
            />
          </P.FiltersContainer>
          <P.SortContainer>
            <ButtonSelector onClick={editButtonHandler}>
              {editMode ? '삭제' : '편집'}
            </ButtonSelector>
          </P.SortContainer>
        </P.FilterContainer>

        <P.PostContainer>
          {(filteredBookmarks.length === 0 ||
            !Array.isArray(filteredBookmarks)) && (
            <P.NothingContainer>
              <img src="/img/nothing_bowl.svg" alt="No Posts" />
              조건에 맞는 게시글이 없습니다.
            </P.NothingContainer>
          )}
          {Array.isArray(filteredBookmarks) &&
            filteredBookmarks
              .slice()
              .reverse()
              .map((post) => (
                <MyPostCard
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/WritingDetail/${post.id}`);
                  }}
                  editMode={editMode}
                  category={post.category === 'TIPS' ? '꿀정보' : '후기'}
                  petType={post.petType}
                  key={post.id}
                  postTitle={post.title}
                  postContent={extractTextFromBlocks(post.blocks)}
                  postThumbnailSrc={post.coverImage}
                  timeStampKR={convertToKST(post.createdAt)}
                  viewCount={post.viewCount}
                  bookmarkCount={post.bookmarkCount}
                  deleteChecked={deleteCheckedStates[post.id] || false}
                  setDeleteChecked={(checked) =>
                    setDeleteChecked(post.id, checked)
                  }
                />
              ))}
        </P.PostContainer>
      </P.MainContainer>
    </P.Layout>
  );
}
