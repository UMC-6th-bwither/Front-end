/* eslint-disable react/prop-types */
import { useState } from 'react';

import * as P from '../MyReview.style';
import ButtonSelector from '../../../components/buttonselector/ButtonSelector';
import Button from '../../../components/button/Button';
import postDummy from '../dummyData';
import Pagination from '../../../components/Pagination/Pagination';
import MyCommentPostCard from '../../../components/PostCard/MyCommentPostCard';
import Dropbox from '../../../components/Dropbox/Dropbox';

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/comment.svg" />
    </P.IconContainer>
  );
}

export default function MyReviewComment() {
  const [page, setPage] = useState(1);

  return (
    <P.Layout>
      <P.VerticalFlexGap20Nav>
        <div>
          <P.MenuTitle>커뮤니티</P.MenuTitle>
          <P.MenuSubtitleContainer>
            <P.MenuSubtitleInActive to="/myreview/post">
              내가 쓴 글
            </P.MenuSubtitleInActive>
            <P.MenuSubtitleActive to="/myreview/comment">
              댓글 단 글
            </P.MenuSubtitleActive>
            <P.MenuSubtitleInActive to="/myreview/review">
              나의 후기
            </P.MenuSubtitleInActive>
          </P.MenuSubtitleContainer>
        </div>

        <div>
          <P.MenuTitle>스크랩</P.MenuTitle>
          <P.MenuSubtitleContainer>
            <P.MenuSubtitleInActive to="/myreview/post">
              저장한 동물
            </P.MenuSubtitleInActive>
            <P.MenuSubtitleInActive to="/myreview/comment">
              저장한 브리더
            </P.MenuSubtitleInActive>
            <P.MenuSubtitleInActive to="/myreview/save">
              저장한 글
            </P.MenuSubtitleInActive>
          </P.MenuSubtitleContainer>
        </div>
      </P.VerticalFlexGap20Nav>
      <P.MainContainer>
        <Icon />
        <P.TitleLayout>
          <div>
            <P.MainTitle>댓글 단 글</P.MainTitle>
          </div>
          <P.TitleButtonContainer>
            <Button icon="/icons/pencil_orange.svg" whiteBorder>
              글 작성하기
            </Button>
          </P.TitleButtonContainer>
        </P.TitleLayout>

        <P.FilterContainer>
          <P.FiltersContainer>
            <Dropbox
              defaultPlaceholder="카테고리"
              menuList={['질문/고민', '정보', '일상', '꿀정보']}
              setCurrentMenu={() => {}}
              width={110}
            />
            <Dropbox
              defaultPlaceholder="종류"
              menuList={['강아지', '고양이']}
              setCurrentMenu={() => {}}
              width={110}
            />
          </P.FiltersContainer>
          <P.SortContainer>
            <ButtonSelector>편집</ButtonSelector>
          </P.SortContainer>
        </P.FilterContainer>

        <P.PostContainer>
          {postDummy.map((post) => {
            return (
              <MyCommentPostCard
                key={post.id}
                postTitle={post.content.title}
                postContent={post.content.text}
                postThumbnailSrc="/img/post_thumbnail_example_2.jpeg"
                timeStampKR="2024-07-25T14:40:00+09:00"
                likeCount={0}
              />
            );
          })}

          <P.PaginationContainer>
            <Pagination
              currentPage={page}
              setCurrentPage={setPage}
              totalItems={20}
              itemsPerPage={10}
            />
          </P.PaginationContainer>
        </P.PostContainer>
      </P.MainContainer>
    </P.Layout>
  );
}
