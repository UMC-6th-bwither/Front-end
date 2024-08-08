/* eslint-disable react/prop-types */
import { useState } from 'react';
import * as S from './BreederMobileDetail5.style';
import TimeStampParser from '../../TimeStampParser/TimeStampParser';

function StarIcon({ starRatio }) {
  return (
    <S.StarIconWrapper>
      <S.StarIconContainer $starRatio={1.0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
        >
          <g clipPath="url(#clip0_1519_8043)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6661 0.8955L13.7766 5.0085L18.4941 5.6685C19.8591 5.859 20.4066 7.4745 19.4166 8.4015L16.0026 11.6025L16.8096 16.125C17.0421 17.433 15.6141 18.432 14.3916 17.814L10.1721 15.6795L5.95258 17.814C4.73008 18.432 3.30208 17.433 3.53458 16.125L4.34158 11.6025L0.927576 8.4015C-0.0624245 7.4745 0.483576 5.859 1.85008 5.6685L6.56758 5.0085L8.67808 0.8955C9.29008 -0.2985 11.0541 -0.2985 11.6661 0.8955Z"
              fill="#e1e1e1"
            />
          </g>
          <defs>
            <clipPath id="clip0_1519_8043">
              <rect
                width="19.5"
                height="18"
                fill="white"
                transform="translate(0.421875)"
              />
            </clipPath>
          </defs>
        </svg>
      </S.StarIconContainer>
      <S.StarIconContainer $starRatio={starRatio}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
        >
          <g clipPath="url(#clip0_1519_8043)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6661 0.8955L13.7766 5.0085L18.4941 5.6685C19.8591 5.859 20.4066 7.4745 19.4166 8.4015L16.0026 11.6025L16.8096 16.125C17.0421 17.433 15.6141 18.432 14.3916 17.814L10.1721 15.6795L5.95258 17.814C4.73008 18.432 3.30208 17.433 3.53458 16.125L4.34158 11.6025L0.927576 8.4015C-0.0624245 7.4745 0.483576 5.859 1.85008 5.6685L6.56758 5.0085L8.67808 0.8955C9.29008 -0.2985 11.0541 -0.2985 11.6661 0.8955Z"
              fill="#FFCE21"
            />
          </g>
          <defs>
            <clipPath id="clip0_1519_8043">
              <rect
                width="19.5"
                height="18"
                fill="white"
                transform="translate(0.421875)"
              />
            </clipPath>
          </defs>
        </svg>
      </S.StarIconContainer>
    </S.StarIconWrapper>
  );
}

function CheckIcon({ name, checked = false, onClick }) {
  const [checkState, setCheckState] = useState(checked);

  const clickHandler = () => {
    if (typeof onClick === 'function') {
      onClick({
        itemName: name,
        checked: !checkState,
      });
    }

    setCheckState(!checkState);
  };

  return (
    <S.CheckIconContainer onClick={clickHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
      >
        <path
          d="M18 9.5C18 4.52944 13.9706 0.5 9 0.5C4.02944 0.5 0 4.52944 0 9.5C0 14.4706 4.02944 18.5 9 18.5C13.9706 18.5 18 14.4706 18 9.5Z"
          fill={checkState ? '#F87B45' : '#E1E1E1'}
        />
        <path
          d="M5 9.188L7.88 12L13 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </S.CheckIconContainer>
  );
}

function Review({
  reviewerName,
  imgSrcList,
  petName,
  starScore,
  reviewerContent,
  reviewTagList,
  reviewDate,
  replyOwner,
  replyOwnerProfileImgSrc,
  replyContent,
  replyTimeStampKR,
}) {
  return (
    <S.ReviewWrapper>
      <S.ReviewContainer>
        <S.ReviewerName>{reviewerName}</S.ReviewerName>
        {imgSrcList && (
          <S.ReviewImgLayout>
            {imgSrcList.slice(0, 3).map((value) => (
              <S.ReviewImgContainer key={`${reviewerName}_${value}`}>
                <S.ReviewImg key={`${reviewerName}_${value}`} src={value} />
              </S.ReviewImgContainer>
            ))}
            {imgSrcList.length === 4 && (
              <S.ReviewImgContainer>
                <S.ReviewImg src={imgSrcList[3]} />
              </S.ReviewImgContainer>
            )}
            {imgSrcList.length >= 5 && (
              <S.ReviewImgContainer>
                <S.ReviewImg src={imgSrcList[3]} />
                <S.ReviewImgFilter>+{imgSrcList.length - 3}</S.ReviewImgFilter>
              </S.ReviewImgContainer>
            )}
          </S.ReviewImgLayout>
        )}
        <S.ReviewContentWrapper>
          <S.ReviewContentTitle>
            <S.ReviewContentTitlePetName>{petName}</S.ReviewContentTitlePetName>
            <S.ReviewContentTitleStarLayout>
              <S.ReviewContentTitleStarContainer>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.8026 3.29593L13.6425 6.95162L17.7552 7.53824C18.9452 7.70756 19.4225 9.14344 18.5594 9.96736L15.5831 12.8125L16.2867 16.8321C16.4894 17.9947 15.2445 18.8826 14.1787 18.3333L10.5002 16.4361L6.82163 18.3333C5.75586 18.8826 4.51094 17.9947 4.71363 16.8321L5.41717 12.8125L2.44087 9.96736C1.57779 9.14344 2.05379 7.70756 3.2451 7.53824L7.35778 6.95162L9.1977 3.29593C9.73124 2.23469 11.2691 2.23469 11.8026 3.29593Z"
                    fill="#FFCE21"
                  />
                </svg>
              </S.ReviewContentTitleStarContainer>
              <S.ReviewContentTitleStarScore>
                {starScore.toFixed(1)}
              </S.ReviewContentTitleStarScore>
            </S.ReviewContentTitleStarLayout>
          </S.ReviewContentTitle>
          <S.ReviewContentContext>{reviewerContent}</S.ReviewContentContext>
          {reviewTagList && (
            <S.ReviewTagLayout>
              {reviewTagList.map((value) => (
                <S.ReviewTag key={`${reviewerName}_${replyOwner}_${petName}`}>
                  {value}
                </S.ReviewTag>
              ))}
            </S.ReviewTagLayout>
          )}
          <S.ReviewContentFooterLayout>
            <S.ReviewContentFooterDate>{reviewDate}</S.ReviewContentFooterDate>
            <S.ReviewContentFooterMoreButton>
              더보기
            </S.ReviewContentFooterMoreButton>
          </S.ReviewContentFooterLayout>
        </S.ReviewContentWrapper>
      </S.ReviewContainer>
      {replyOwner && (
        <S.ReplyContainer>
          <S.ReplyBreederProfileImgContainer>
            <S.ReplyBreederProfileImg src={replyOwnerProfileImgSrc} />
          </S.ReplyBreederProfileImgContainer>
          <S.ReplyContentContainer>
            <S.ReplyContentTitle>{replyOwner}</S.ReplyContentTitle>
            <S.ReplyContentText>{replyContent}</S.ReplyContentText>
            <S.ReplyContentDate>
              <TimeStampParser>{replyTimeStampKR}</TimeStampParser>
            </S.ReplyContentDate>
          </S.ReplyContentContainer>
        </S.ReplyContainer>
      )}
    </S.ReviewWrapper>
  );
}

const imgSrcArray = [
  '/img/breeder_mobile_review_example_1.jpeg',
  '/img/breeder_mobile_review_example_2.jpeg',
  '/img/breeder_mobile_review_example_3.jpeg',
  '/img/breeder_mobile_review_example_4.jpeg',
  '/img/breeder_mobile_review_example_4.jpeg',
  '/img/breeder_mobile_review_example_4.jpeg',
];

export default function BreederMobileDetail5({ starRatio = 4.6 }) {
  const fullStarCount = Math.floor(starRatio);
  const partStarRatio = starRatio - fullStarCount;

  return (
    <S.Container>
      <S.Title>브리더 후기</S.Title>
      <S.ReviewSummaryContainer>
        <S.ReviewSummaryStar>{starRatio.toFixed(1)}</S.ReviewSummaryStar>
        <div>
          <S.ReviewSummaryStarIconLayout>
            {Array.from({ length: fullStarCount }).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <StarIcon key={`star_icon_uuid_key_${index}`} starRatio={1.0} />
            ))}
            {partStarRatio !== 0 && <StarIcon starRatio={partStarRatio} />}
          </S.ReviewSummaryStarIconLayout>
          <S.ReviewSummaryReviewCount>22개 리뷰</S.ReviewSummaryReviewCount>
        </div>
      </S.ReviewSummaryContainer>
      <S.CategoryLayout>
        <S.Category $active>전체</S.Category>
        <S.Category>비글</S.Category>
        <S.Category>골든 리트리버</S.Category>
      </S.CategoryLayout>
      <S.CheckLayout>
        <S.CheckContainer>
          <CheckIcon checked name="사진 리뷰" onClick={() => {}} />
          <S.CheckContent>사진 리뷰</S.CheckContent>
        </S.CheckContainer>
        <S.CheckContainer>
          <CheckIcon name="거래 인증 리뷰" onClick={() => {}} />
          <S.CheckContent>거래 인증 리뷰</S.CheckContent>
        </S.CheckContainer>
      </S.CheckLayout>
      <S.ReviewLayout>
        <Review
          imgSrcList={imgSrcArray}
          petName="비글"
          starScore={5}
          reviewerName="김**"
          reviewerContent="아이들이 너무 귀엽네요.. 믿음이 가는 브리더님께 분양 받아 더욱 사랑으로 키울 예정입니다! ..."
          reviewDate="2024. 06. 05"
          replyOwnerProfileImgSrc="/img/breederprofile.png"
          replyOwner="해피 브리더"
          replyContent="고객님 감동적인 리뷰감사드려요~ㅠㅠ 예쁜 우리 아이들 입양해 주셔서 너무 감사합니다^^ 워낙 밝은 아이라 애교가 많을 거예요 ^^"
          replyTimeStampKR="2024-08-07T17:40:00+09:00"
        />
        <Review
          petName="리트리버"
          starScore={5}
          reviewerName="문**"
          reviewerContent="첫 입양이었는데 친절하게 설명해주셔서 너무 좋았어요."
          reviewTagList={['친절하게 상담해주세요', '약속시간을 잘 지키세요']}
          reviewDate="2024. 06. 05"
          replyOwnerProfileImgSrc="/img/breederprofile.png"
          replyOwner="해피 브리더"
          replyContent="고객님~감사해요^^ 늘 친절한 해피브리더가 되겠습니다~^^"
          replyTimeStampKR="2024-08-07T17:40:00+09:00"
        />
        <Review
          imgSrcList={imgSrcArray}
          petName="비글"
          starScore={5}
          reviewerName="김**"
          reviewerContent="아이들이 너무 귀엽네요.. 믿음이 가는 브리더님께 분양 받아 더욱 사랑으로 키울 예정입니다! ..."
          reviewDate="2024. 06. 05"
          replyOwnerProfileImgSrc="/img/breederprofile.png"
          replyOwner="해피 브리더"
          replyContent="고객님 감동적인 리뷰감사드려요~ㅠㅠ 예쁜 우리 아이들 입양해 주셔서 너무 감사합니다^^ 워낙 밝은 아이라 애교가 많을 거예요 ^^"
          replyTimeStampKR="2024-08-07T17:40:00+09:00"
        />
      </S.ReviewLayout>
      <S.MoreReviewLayout>
        <S.MoreReviewContent>리뷰 더보기</S.MoreReviewContent>
        <S.MoreReviewIconContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.54923 12.4002C8.69263 12.3996 8.82889 12.3374 8.92336 12.2295L14.8724 5.43083C15.0542 5.22302 15.0332 4.90713 14.8254 4.72529C14.6176 4.54344 14.3017 4.5645 14.1198 4.77231L8.54389 11.1445L2.86959 4.76915C2.686 4.56288 2.36995 4.54449 2.16368 4.72808C1.95741 4.91167 1.93901 5.22772 2.12261 5.43399L8.17363 12.2326C8.26896 12.3397 8.40576 12.4008 8.54923 12.4002Z"
              fill="#FE834D"
            />
          </svg>
        </S.MoreReviewIconContainer>
      </S.MoreReviewLayout>
    </S.Container>
  );
}
