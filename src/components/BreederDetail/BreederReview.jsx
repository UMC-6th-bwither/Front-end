import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as A from '../../pages/BreederDetail/BreederDetail.style';

const BreederReview = React.forwardRef((props, ref) => {
  const [activeButton, setActiveButton] = useState('전체');
  const [selectedReviewType, setSelectedReviewType] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const reviewScore = 5.0;
  const reviewCount = 22;

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleReviewTypeClick = (type) => {
    setSelectedReviewType(type);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    return Array.from({ length: fullStars }).map(() => (
      <svg
        key={uuidv4()}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
      >
        <g clipPath="url(#clip0_1081_3981)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6641 0.894035L13.7746 5.00703L18.4921 5.66703C19.8571 5.85753 20.4046 7.47303 19.4146 8.40003L16.0006 11.601L16.8076 16.1235C17.0401 17.4315 15.6121 18.4305 14.3896 17.8125L10.1701 15.678L5.95062 17.8125C4.72812 18.4305 3.30012 17.4315 3.53262 16.1235L4.33962 11.601L0.925622 8.40003C-0.0643776 7.47303 0.481622 5.85753 1.84812 5.66703L6.56562 5.00703L8.67612 0.894035C9.28812 -0.299965 11.0521 -0.299965 11.6641 0.894035Z"
            fill="#FFCE21"
          />
        </g>
        <defs>
          <clipPath id="clip0_1081_3981">
            <rect
              width="19.5"
              height="18"
              fill="white"
              transform="translate(0.419922)"
            />
          </clipPath>
        </defs>
      </svg>
    ));
  };

  return (
    <div ref={ref} style={{ marginBottom: '64px' }}>
      <A.ReviewInfoItem>
        <A.LatestOrderButton>
          최신순
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
          >
            <path
              d="M1 1.5L5.5 6.5L10 1.5"
              stroke="#272727"
              strokeLinecap="square"
            />
          </svg>
        </A.LatestOrderButton>
        <A.InfoTitle>브리더 후기</A.InfoTitle>

        <A.ReviewScoreBox>
          <A.ReviewScore>{reviewScore.toFixed(1)}</A.ReviewScore>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex' }}>{renderStars(reviewScore)}</div>
            <A.ReviewScoreText>{reviewCount}개 리뷰</A.ReviewScoreText>
          </div>
        </A.ReviewScoreBox>
        <A.CommuBtnBox>
          <A.CommuBtn
            className={activeButton === '전체' ? 'active' : ''}
            onClick={() => handleButtonClick('전체')}
          >
            전체
          </A.CommuBtn>
          <A.CommuBtn
            className={activeButton === '비글' ? 'active' : ''}
            onClick={() => handleButtonClick('비글')}
          >
            비글
          </A.CommuBtn>
          <A.CommuBtn
            className={activeButton === '골든 리트리버' ? 'active' : ''}
            onClick={() => handleButtonClick('골든 리트리버')}
          >
            골든 리트리버
          </A.CommuBtn>
        </A.CommuBtnBox>
        <A.ReviewTypeContainer>
          <A.ReviewType onClick={() => handleReviewTypeClick('사진 리뷰')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M18 9.5C18 4.52944 13.9706 0.5 9 0.5C4.02944 0.5 0 4.52944 0 9.5C0 14.4706 4.02944 18.5 9 18.5C13.9706 18.5 18 14.4706 18 9.5Z"
                fill={
                  selectedReviewType === '사진 리뷰' ? '#F87B45' : '#E1E1E1'
                }
              />
              <path
                d="M5 9.188L7.88 12L13 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <A.ReviewTypeText>사진 리뷰</A.ReviewTypeText>
          </A.ReviewType>
          <A.ReviewType onClick={() => handleReviewTypeClick('거래인증 리뷰')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M18 9.5C18 4.52944 13.9706 0.5 9 0.5C4.02944 0.5 0 4.52944 0 9.5C0 14.4706 4.02944 18.5 9 18.5C13.9706 18.5 18 14.4706 18 9.5Z"
                fill={
                  selectedReviewType === '거래인증 리뷰' ? '#F87B45' : '#E1E1E1'
                }
              />
              <path
                d="M5 9.188L7.88 12L13 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <A.ReviewTypeText>거래인증 리뷰</A.ReviewTypeText>
          </A.ReviewType>
        </A.ReviewTypeContainer>
        <A.ReviewContainer>
          <A.ReviewItem>
            <A.ReviewerName>김**</A.ReviewerName>
            <A.ReviewImages>
              <A.ReviewImage src="image1.jpg" alt="리뷰 이미지 1" />
              <A.ReviewImage src="image2.jpg" alt="리뷰 이미지 2" />
              <A.ReviewImage src="image3.jpg" alt="리뷰 이미지 3" />
              <A.ReviewImage src="image4.jpg" alt="리뷰 이미지 4" />
            </A.ReviewImages>
            <A.ReviewInfo>
              <span>비글</span>
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
              <p>5.0</p>
            </A.ReviewInfo>
            <A.ReviewTextContainer>
              <A.ReviewText isExpanded={isExpanded}>
                아이들이 너무 귀엽네요.. 믿음이 가는 브리더님께 분양 받아 더욱
                사랑으로 키울 예정입니다!아이들이 너무 귀엽네요.. 믿음이 가는
                브리더님께 분양 받아 더욱 사랑으로 키울 예정입니다!아이들이 너무
                귀엽네요.. 믿음이 가는 브리더님께 분양 받아 더욱 사랑으로 키울
                예정입니다!아이들이 너무 귀엽네요.. 믿음이 가는 브리더님께 분양
                받아 더욱 사랑으로 키울 예정입니다!
              </A.ReviewText>
              <A.MoreButton onClick={toggleExpand}>
                {isExpanded ? '접기' : '더보기'}
              </A.MoreButton>
            </A.ReviewTextContainer>
            <A.ReviewFooter>
              <A.ReviewDate>2024.06.05</A.ReviewDate>
            </A.ReviewFooter>
          </A.ReviewItem>
          <A.BreederCommentBox>
            <A.BreederProfileImage
              src="breeder_profile.jpg"
              alt="브리더 프로필"
            />
            <A.BreederCommentContent>
              <A.BreederCommentAuthor>해피 브리더</A.BreederCommentAuthor>
              <A.BreederCommentText>
                고객님 감동적인 리뷰 감사드려요~ㅠㅠ 예쁜 우리 아이들 입양해
                주셔서 너무 감사합니다^^
              </A.BreederCommentText>
              <A.BreederCommentDate>어제</A.BreederCommentDate>
            </A.BreederCommentContent>
          </A.BreederCommentBox>
        </A.ReviewContainer>

        <A.ReviewContainer>
          <A.ReviewItem>
            <A.ReviewerName>문**</A.ReviewerName>
            <A.ReviewInfo>
              <span>리트리버</span>
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
              <p>5.0</p>
            </A.ReviewInfo>
            <A.ReviewText isExpanded={isExpanded}>
              첫 입양이었는데 친절하게 설명해주셔서 너무 좋았어요.
            </A.ReviewText>
            <A.ReviewLabelBox>
              <A.ReviewLabel>친절하게 상담해주세요</A.ReviewLabel>
              <A.ReviewLabel>친절하게 상담해주세요</A.ReviewLabel>
            </A.ReviewLabelBox>
            <A.ReviewFooter>
              <A.ReviewDate>2024.06.05</A.ReviewDate>
            </A.ReviewFooter>
          </A.ReviewItem>
          <A.BreederCommentBox>
            <A.BreederProfileImage
              src="breeder_profile.jpg"
              alt="브리더 프로필"
            />
            <A.BreederCommentContent>
              <A.BreederCommentAuthor>해피 브리더</A.BreederCommentAuthor>
              <A.BreederCommentText>
                고객님~감사해요^^ 늘 친절한 해피브리더가 되겠습니다~^^
              </A.BreederCommentText>
              <A.BreederCommentDate>어제</A.BreederCommentDate>
            </A.BreederCommentContent>
          </A.BreederCommentBox>
        </A.ReviewContainer>
        <A.MoreReviewBox>
          <A.MoreReviewTextBox>
            <A.MoreReviewText>리뷰 더보기</A.MoreReviewText>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.04727 12.699C8.19067 12.6984 8.32694 12.6362 8.42141 12.5283L14.3704 5.72966C14.5523 5.52184 14.5312 5.20596 14.3234 5.02412C14.1156 4.84227 13.7997 4.86332 13.6179 5.07114L8.04194 11.4434L2.36764 5.06798C2.18405 4.8617 1.868 4.84332 1.66173 5.0269C1.45545 5.2105 1.43706 5.52654 1.62065 5.73282L7.67167 12.5314C7.76701 12.6386 7.90381 12.6996 8.04727 12.699Z"
                fill="#FE834D"
              />
            </svg>
          </A.MoreReviewTextBox>
        </A.MoreReviewBox>
      </A.ReviewInfoItem>
    </div>
  );
});

BreederReview.displayName = 'BreederReview';

export default BreederReview;
