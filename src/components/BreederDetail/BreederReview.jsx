import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as A from '../../pages/BreederDetail/BreederDetail.style';

const reviewData = [
  {
    id: uuidv4(),
    reviewerName: '김**',
    dogType: '비글',
    reviewText:
      '아이들이 너무 귀엽네요.. 믿음이 가는 브리더님께 분양 받아 더욱 사랑으로 키울 예정입니다!',
    reviewDate: '2024.06.05',
    reviewScore: 5.0,
    images: ['/img/kennelex.png', 'image2.jpg', 'image3.jpg', 'image4.jpg'],
    isVerified: true, // 거래인증 여부
    breederComment: {
      author: '해피 브리더',
      text: '고객님 감동적인 리뷰 감사드려요~ㅠㅠ 예쁜 우리 아이들 입양해 주셔서 너무 감사합니다^^',
      date: '어제',
    },
  },
  {
    id: uuidv4(),
    reviewerName: '문**',
    dogType: '골든 리트리버',
    reviewText: '첫 입양이었는데 친절하게 설명해주셔서 너무 좋았어요.',
    reviewDate: '2024.06.05',
    reviewScore: 5.0,
    images: [], // 사진이 없는 경우
    isVerified: true, // 거래인증 여부
    breederComment: {
      author: '해피 브리더',
      text: '고객님~감사해요^^ 늘 친절한 해피브리더가 되겠습니다~^^',
      date: '어제',
    },
  },
  {
    id: uuidv4(),
    reviewerName: '이**',
    dogType: '시츄',
    reviewText: '첫 입양이었는데 친절하게 설명해주셔서 너무 좋았어요.',
    reviewDate: '2024.06.05',
    reviewScore: 5.0,
    images: ['/img/kennelex.png'], // 사진이 없는 경우
    isVerified: true, // 거래인증 여부
    breederComment: {
      author: '해피 브리더',
      text: '고객님~감사해요^^ 늘 친절한 해피브리더가 되겠습니다~^^',
      date: '어제',
    },
  },
  {
    id: uuidv4(),
    reviewerName: '박**',
    dogType: '포메라니안',
    reviewText:
      '브리더님이 친절하게 잘 설명해주셔서 마음 편하게 입양할 수 있었어요.',
    reviewDate: '2024.06.06',
    reviewScore: 4.8,
    images: ['/img/kennelex.png', 'image2.jpg'],
    isVerified: true,
    breederComment: {
      author: '해피 브리더',
      text: '입양해주셔서 정말 감사합니다. 포메라니안 잘 키우시길 바랍니다!',
      date: '어제',
    },
  },
  {
    id: uuidv4(),
    reviewerName: '최**',
    dogType: '불독',
    reviewText:
      '아이들을 보고 바로 입양 결정을 내릴 수 있었습니다. 너무 예뻐요!',
    reviewDate: '2024.06.07',
    reviewScore: 5.0,
    images: ['/img/kennelex.png', 'image2.jpg', 'image3.jpg'],
    isVerified: true,
    breederComment: {
      author: '해피 브리더',
      text: '아이들이 좋은 주인님을 만나 정말 다행입니다. 감사합니다!',
      date: '어제',
    },
  },
];

const BreederReview = React.forwardRef((props, ref) => {
  const [activeButton, setActiveButton] = useState('전체');
  const [selectedReviewType, setSelectedReviewType] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);

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

  const filteredReviews = reviewData.filter((review) => {
    const matchesCategory =
      activeButton === '전체' || activeButton === review.dogType;
    const matchesReviewType =
      !selectedReviewType ||
      (selectedReviewType === '사진 리뷰' && review.images.length > 0) ||
      (selectedReviewType === '거래인증 리뷰' && review.isVerified);

    return matchesCategory && matchesReviewType;
  });

  const handleMoreClick = () => {
    setDisplayCount(displayCount + 5);
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
              flexDirection: 'column',
            }}
          >
            <div>{renderStars(reviewScore)}</div>
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

        {filteredReviews.slice(0, displayCount).map((review) => (
          <A.ReviewContainer key={review.id}>
            <A.ReviewItem>
              <A.ReviewerName>{review.reviewerName}</A.ReviewerName>
              {review.images.length > 0 && (
                <A.ReviewImages>
                  {review.images.map((image, index) => (
                    <A.ReviewImage
                      key={uuidv4()}
                      src={image}
                      alt={`리뷰 이미지 ${index + 1}`}
                    />
                  ))}
                </A.ReviewImages>
              )}
              <A.ReviewInfo>
                <span>{review.dogType}</span>
                <div>{renderStars(review.reviewScore)}</div>
                <p>{review.reviewScore.toFixed(1)}</p>
              </A.ReviewInfo>
              <A.ReviewTextContainer>
                <A.ReviewText isExpanded={isExpanded}>
                  {review.reviewText}
                </A.ReviewText>
                <A.MoreButton onClick={toggleExpand}>
                  {isExpanded ? '접기' : '더보기'}
                </A.MoreButton>
              </A.ReviewTextContainer>
              <A.ReviewFooter>
                <A.ReviewDate>{review.reviewDate}</A.ReviewDate>
              </A.ReviewFooter>
            </A.ReviewItem>

            {review.breederComment && (
              <A.BreederCommentBox>
                <A.BreederProfileImage
                  src="breeder_profile.jpg"
                  alt="브리더 프로필"
                />
                <A.BreederCommentContent>
                  <A.BreederCommentAuthor>
                    {review.breederComment.author}
                  </A.BreederCommentAuthor>
                  <A.BreederCommentText>
                    {review.breederComment.text}
                  </A.BreederCommentText>
                  <A.BreederCommentDate>
                    {review.breederComment.date}
                  </A.BreederCommentDate>
                </A.BreederCommentContent>
              </A.BreederCommentBox>
            )}
          </A.ReviewContainer>
        ))}

        {displayCount < filteredReviews.length &&
          filteredReviews.length > 4 && (
            <A.MoreReviewBox>
              <A.MoreReviewTextBox onClick={handleMoreClick}>
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
          )}
      </A.ReviewInfoItem>
    </div>
  );
});

BreederReview.displayName = 'BreederReview';

export default BreederReview;
