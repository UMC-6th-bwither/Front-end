/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as P from '../Community.style';
import ButtonSelector from '../../../components/buttonselector/ButtonSelector';
import Button from '../../../components/button/Button';
import postDummy from '../dummyData';
import Pagination from '../../../components/Pagination/Pagination';
import PostCard from '../../../components/PostCard/PostCard';
import Dropbox from '../../../components/DropBoxes/Dropbox2';
import VerticalMenuSelector from '../../../components/VerticalMenuSelector/VerticalMenuSelector';
import { menuItems } from '../menuItems';

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/thumbs_up.svg" />
    </P.IconContainer>
  );
}

export default function CommunityBreederInformation() {
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState(null);
  const navigate = useNavigate();

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
            <Button
              icon="/icons/pencil_orange.svg"
              whiteBorder
              onClick={() => navigate('form')}
            >
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
