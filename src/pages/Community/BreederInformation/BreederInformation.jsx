/* eslint-disable react/prop-types */
import { useState } from 'react';

import * as P from '../Community.style';
import ButtonSelector from '../../../components/buttonselector/ButtonSelector';
import Button from '../../../components/button/Button';
import postDummy from '../dummyData';
import Pagination from '../../../components/Pagination/Pagination';
import PostCard from '../../../components/PostCard/PostCard';

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/thumbs_up.svg" />
    </P.IconContainer>
  );
}

export default function CommunityBreederInformation() {
  const [page, setPage] = useState(1);

  return (
    <P.Layout>
      <nav>
        <P.MenuTitle>커뮤니티</P.MenuTitle>
        <P.MenuSubtitleContainer>
          <P.MenuSubtitleInActive to="/community/question">
            질문/고민
          </P.MenuSubtitleInActive>
          <P.MenuSubtitleInActive to="/community/information">
            정보 공유
          </P.MenuSubtitleInActive>
          <P.MenuSubtitleInActive to="/community/daily">
            일상 이야기
          </P.MenuSubtitleInActive>
          <P.MenuSubtitleActive to="/community/breederinformation">
            브리더의 꿀정보
          </P.MenuSubtitleActive>
          <P.MenuSubtitleInActive>브위더 후기</P.MenuSubtitleInActive>
        </P.MenuSubtitleContainer>
      </nav>
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
            <ButtonSelector>조회순</ButtonSelector>
          </P.SortContainer>
        </P.FilterContainer>

        <P.PostContainer>
          {postDummy.map((post) => {
            return (
              <PostCard
                key={post.id}
                profileImgSrc={post.profile.img}
                profileName={post.profile.name}
                postTitle={post.title}
                postContent={post.content.text}
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
