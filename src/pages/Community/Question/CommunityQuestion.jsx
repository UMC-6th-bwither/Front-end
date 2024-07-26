/* eslint-disable react/prop-types */
import { useState } from 'react';

import * as P from '../Community.style';
import ButtonSelector from '../../../components/buttonselector/ButtonSelector';
import Button from '../../../components/button/Button';
import postDummy from '../dummyData';
import Pagination from '../../../components/Pagination/Pagination';
import PostCard from '../../../components/PostCard/PostCard';
import Dropbox from '../../../components/Dropbox/Dropbox';

function QuestionIcon() {
  return (
    <P.IconContainer>
      <P.SmallQuestionIconContainer>
        <P.IconImage src="/icons/question_mark.svg" />
      </P.SmallQuestionIconContainer>
      <P.BigQuestionIconContainer>
        <P.IconImage src="/icons/question_mark.svg" />
      </P.BigQuestionIconContainer>
      <P.SmallQuestionIconContainer>
        <P.IconImage src="/icons/question_mark.svg" />
      </P.SmallQuestionIconContainer>
    </P.IconContainer>
  );
}

export default function CommunityQuestion() {
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState(null);

  return (
    <P.Layout>
      <nav>
        <P.MenuTitle>커뮤니티</P.MenuTitle>
        <P.MenuSubtitleContainer>
          <P.MenuSubtitleActive to="/community/question">
            질문/고민
          </P.MenuSubtitleActive>
          <P.MenuSubtitleInActive to="/community/information">
            정보 공유
          </P.MenuSubtitleInActive>
          <P.MenuSubtitleInActive to="/community/daily">
            일상 이야기
          </P.MenuSubtitleInActive>
          <P.MenuSubtitleInActive to="/community/breederinformation">
            브리더의 꿀정보
          </P.MenuSubtitleInActive>
          <P.MenuSubtitleInActive>브위더 후기</P.MenuSubtitleInActive>
        </P.MenuSubtitleContainer>
      </nav>
      <P.MainContainer>
        <QuestionIcon />
        <P.TitleLayout>
          <div>
            <P.MainTitle>질문/고민</P.MainTitle>
            <P.MainSubTitle>
              전문가 브리더에게 궁금한 것을 물어보세요
            </P.MainSubTitle>
          </div>
          <P.TitleButtonContainer>
            <Button icon="/icons/pencil_orange.svg" whiteBorder>
              글 작성하기
            </Button>
          </P.TitleButtonContainer>
        </P.TitleLayout>

        <P.FilterContainer>
          <P.FiltersContainer>
            <ButtonSelector>전체</ButtonSelector>
            <ButtonSelector>강아지</ButtonSelector>
            <ButtonSelector>고양이</ButtonSelector>
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
          {postDummy.map((post) => {
            return (
              <PostCard
                key={post.id}
                profileImgSrc={post.profile.img}
                profileName={post.profile.name}
                postTitle={post.content.title}
                postContent={post.content.text}
                postThumbnailSrc="/img/post_thumbnail_example_1.jpeg"
                timeStampKR="2024-07-25T14:40:00+09:00"
                viewCount={159}
                commentCount={159}
                bookmarkCount={159}
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
