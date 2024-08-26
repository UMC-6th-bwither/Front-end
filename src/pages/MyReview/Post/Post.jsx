import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import extractTextFromBlocks from '../../../utils/extractContextFromBlocks';
import convertToKST from '../../../utils/convertToKST';

import * as P from '../MyReview.style';
import ButtonSelector from '../../../components/buttonselector/ButtonSelector';
import Button from '../../../components/button/Button';
import MyPostCard from '../../../components/PostCard/MyPostCard';
import Dropbox from '../../../components/DropBoxes/Dropbox2';

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/paper.svg" />
    </P.IconContainer>
  );
}

export default function MyReviewPost() {
  const navigate = useNavigate();
  const { isLoggedIn, token, userId, role } = useAuth();

  // const [page, setPage] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [savedPosts, setSavedPosts] = useState([]);
  const [deleteCheckedStates, setDeleteCheckedStates] = useState({});
  const [filterPetType, setFilterPetType] = useState('ALL');

  const setDeleteChecked = (postId, checked) => {
    setDeleteCheckedStates((prevState) => ({
      ...prevState,
      [postId]: checked,
    }));
  };

  const getDeleteCheckedPosts = () => {
    return savedPosts.filter((post) => deleteCheckedStates[post.id]);
  };

  const deleteCheckedPosts = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const postsToDelete = getDeleteCheckedPosts();

    await Promise.all(
      postsToDelete.map(async (post) => {
        const endPoint = `${apiUrl}/post/${post.id}`;
        await fetch(endPoint, {
          method: 'DELETE',
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
          },
        });
      }),
    );

    const remainingPosts = savedPosts.filter(
      (post) => !deleteCheckedStates[post.id],
    );

    setSavedPosts(remainingPosts);
  };

  const editButtonHandler = () => {
    if (editMode) deleteCheckedPosts();
    setEditMode(!editMode);
  };

  const fetchSavedPosts = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const endPoint = `${apiUrl}/post?category=BREEDER_REVIEWS&userId=${userId}`;
    const response = await fetch(endPoint, {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    });

    const { result } = await response.json();
    setSavedPosts(result);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchSavedPosts();
    }
  }, [isLoggedIn]);

  const filteredPosts = savedPosts.filter((post) => {
    if (filterPetType === 'ALL') return true;
    return post.petType === filterPetType;
  });

  return (
    <P.Layout>
      <P.VerticalFlexGap20Nav>
        <div>
          <P.MenuTitle>커뮤니티</P.MenuTitle>
          <P.MenuSubtitleContainer>
            <P.MenuSubtitleActive to="/myreview/post">
              내가 쓴 글
            </P.MenuSubtitleActive>
            <P.MenuSubtitleInActive to="/myreview/save">
              저장한 글
            </P.MenuSubtitleInActive>
            <P.MenuSubtitleInActive to="/breeder-review">
              받은 후기
            </P.MenuSubtitleInActive>
          </P.MenuSubtitleContainer>
        </div>
      </P.VerticalFlexGap20Nav>
      <P.MainContainer>
        <Icon />
        <P.TitleLayout>
          <div>
            <P.MainTitle>내가 쓴 글</P.MainTitle>
          </div>
          <P.TitleButtonContainer>
            {role === 'BREEDER' && (
              <Button
                icon="/icons/pencil_orange.svg"
                whiteBorder
                onClick={() => navigate('/Community/BreederInformation/form')}
              >
                글 작성하기
              </Button>
            )}
          </P.TitleButtonContainer>
        </P.TitleLayout>

        <P.FilterContainer>
          <P.FiltersContainer>
            <Dropbox
              defaultPlaceholder="전체"
              menuList={['전체', '강아지', '고양이']}
              setCurrentMenu={(selected) => {
                if (selected === '강아지') {
                  setFilterPetType('DOG');
                } else if (selected === '고양이') {
                  setFilterPetType('CAT');
                } else {
                  setFilterPetType('ALL');
                }
              }}
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
          {filteredPosts.length === 0 && (
            <P.NothingContainer>
              <img src="/img/nothing_bowl.svg" alt="No Posts" />
              조건에 맞는 게시글이 없습니다.
            </P.NothingContainer>
          )}
          {filteredPosts
            .slice()
            .reverse()
            .map((post) => {
              return (
                <MyPostCard
                  key={post.id}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/WritingDetail/${post.id}`);
                  }}
                  editMode={editMode}
                  petType={post.petType}
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
              );
            })}

          {/* <P.PaginationContainer>
            <Pagination
              currentPage={page}
              setCurrentPage={setPage}
              totalItems={20}
              itemsPerPage={10}
            />
          </P.PaginationContainer> */}
        </P.PostContainer>
      </P.MainContainer>
    </P.Layout>
  );
}
