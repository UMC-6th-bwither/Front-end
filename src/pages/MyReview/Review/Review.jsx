/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import * as P from '../MyReview.style';
import BreederContactCard from '../../../components/BreederContactCard/BreederContactCard';
import BadgeVariant from '../../../components/badge/BadgeVariant';
import BreederReviewAnimalCard from '../../../components/BreederReviewAnimalCard/BreederReviewAnimalCard';
import extractTextFromBlocks from '../../../utils/extractContextFromBlocks';
import extractFirstImageUrl from '../../../utils/extractImgSrcFromBlocks';

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/review_write.svg" />
    </P.IconContainer>
  );
}

export default function MyReview() {
  const [myReviews, setMyReviews] = useState([]);

  const fetchMyReview = async () => {
    const res = await fetch(
      'http://ec2-3-37-97-6.ap-northeast-2.compute.amazonaws.com:8080/post/reviews',
      {
        headers: {
          Accept: '*/*',
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTIzIiwiaXNzIjoiYndpdGhlciB3ZWIiLCJpYXQiOjE3MjM5NzE2MzksImV4cCI6MTcyNDA1ODAzOX0.ffl6kqYoB73_OzdbE6hMZBrXjTgYc6EnLcmOeuoVqWd4LrSbL3s9BqUBEAXyArfWq5afib9O-dbLtisBpXvR_A',
        },
      },
    );
    const data = await res.json();
    // console.log(data.result);
    setMyReviews(data.result);
  };

  useEffect(() => {
    fetchMyReview();
  }, []);

  return (
    <P.Layout>
      <P.VerticalFlexGap20Nav>
        <div>
          <P.MenuTitle>커뮤니티</P.MenuTitle>
          <P.MenuSubtitleContainer>
            <P.MenuSubtitleInActive to="/myreview/save">
              저장한 글
            </P.MenuSubtitleInActive>
            <P.MenuSubtitleActive to="/myreview/review">
              나의 후기
            </P.MenuSubtitleActive>
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
          {myReviews.map((review) => (
            <BreederReviewAnimalCard
              key={review.id}
              kennelName={review.kennelName}
              star={review.rating}
              imgSrc={extractFirstImageUrl(review.blocks)}
              context={extractTextFromBlocks(review.blocks)}
            />
          ))}
        </P.ReviewCardContainer>
      </P.MainContainer>
    </P.Layout>
  );
}
