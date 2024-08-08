/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import * as P from '../MyReview.style';
import BreederContactCard from '../../../components/BreederContactCard/BreederContactCard';
import BadgeVariant from '../../../components/badge/BadgeVariant';
import BreederReviewAnimalCard from '../../../components/BreederReviewAnimalCard/BreederReviewAnimalCard';

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/review_write.svg" />
    </P.IconContainer>
  );
}

export default function MyReview() {
  return (
    <P.Layout>
      <P.VerticalFlexGap20Nav>
        <div>
          <P.MenuTitle>커뮤니티</P.MenuTitle>
          <P.MenuSubtitleContainer>
            <P.MenuSubtitleInActive to="/myreview/post">
              내가 쓴 글
            </P.MenuSubtitleInActive>
            <P.MenuSubtitleInActive to="/myreview/comment">
              댓글 단 글
            </P.MenuSubtitleInActive>
            <P.MenuSubtitleActive to="/myreview/review">
              나의 후기
            </P.MenuSubtitleActive>
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
            <P.MainTitle>나의 후기</P.MainTitle>
            <P.MainSubTitle>당신의 후기를 기다려요!</P.MainSubTitle>
          </div>
        </P.TitleLayout>

        <P.BreederCardListTag>최근에 컨택한 브리더</P.BreederCardListTag>

        <P.BreederCardContainer>
          <BreederContactCard
            breederLocation="서울 강서구"
            breederName="해피 켄넬"
          />
          <BreederContactCard
            breederLocation="서울 강서구"
            breederName="해피 켄넬"
          />
          <BreederContactCard
            breederLocation="서울 강서구"
            breederName="해피 켄넬"
          />
          <BreederContactCard
            breederLocation="서울 강서구"
            breederName="😊 행복한 분양의 시작 - 해피 브리더"
            badgeComponents={[
              <BadgeVariant content="강아지 전문" />,
              <BadgeVariant content="본인인증" />,
              <BadgeVariant content="사업자등록증" />,
              <BadgeVariant content="혜택" />,
            ]}
          />
        </P.BreederCardContainer>
        <P.BreederCardListTag>내가 작성한 후기</P.BreederCardListTag>
        <P.ReviewCardContainer>
          <BreederReviewAnimalCard
            kennelName="켄넬 이름"
            star={5.0}
            context="강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것"
          />
          <BreederReviewAnimalCard
            kennelName="켄넬 이름"
            star={5.0}
            context="강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것"
          />
          <BreederReviewAnimalCard
            kennelName="켄넬 이름"
            star={5.0}
            context="강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것"
          />
          <BreederReviewAnimalCard
            kennelName="켄넬 이름"
            star={5.0}
            context="강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것"
          />
          <BreederReviewAnimalCard
            kennelName="켄넬 이름"
            star={5.0}
            context="강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것"
          />
          <BreederReviewAnimalCard
            kennelName="켄넬 이름"
            star={5.0}
            context="강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것"
          />
        </P.ReviewCardContainer>
      </P.MainContainer>
    </P.Layout>
  );
}
