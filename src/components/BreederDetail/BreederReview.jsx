import { useState, useEffect, forwardRef } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import * as A from '../../pages/BreederDetail/BreederDetail.style';
import api from '../../api/api';

const BreederReview = forwardRef((props, ref) => {
  const [reviews, setReviews] = useState([]);
  const [speciesList, setSpeciesList] = useState(['전체']);
  const [activeButton, setActiveButton] = useState('전체');
  const [selectedReviewType, setSelectedReviewType] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [sortType, setSortType] = useState('최신순');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { breederId } = useParams();

  const handleSortChange = (newSortType) => {
    setSortType(newSortType);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const speciesMapping = {
    ALL: '전체',
    DOG: '강아지',
    CAT: '고양이',
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.get(`/breeder/${breederId}`);
        const reviewsData = response.data.result.reviews;

        setReviews(reviewsData);

        const allSpecies = new Set();
        reviewsData.forEach((review) => {
          if (typeof review.species === 'string') {
            allSpecies.add(review.species);
          }
        });

        const speciesArray = Array.from(allSpecies);
        speciesArray.sort((a, b) => {
          if (a === 'ALL') return -1;
          if (b === 'ALL') return 1;
          return 0;
        });

        setSpeciesList(
          speciesArray.map((species) => speciesMapping[species] || species),
        );
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('리뷰 데이터 에러 발생:', error);
      }
    };

    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const filteredReviews = reviews.filter((review) => {
    const matchesCategory =
      activeButton === '전체' || activeButton === review.species;
    const matchesReviewType =
      !selectedReviewType ||
      (selectedReviewType === '사진 리뷰' &&
        review.content.some((c) => c.type === 'IMAGE')) ||
      (selectedReviewType === '거래인증 리뷰' && review.isVerified);

    return matchesCategory && matchesReviewType;
  });

  // 리뷰 정렬
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortType === '최신순') {
      return 0; // 날짜 데이터 추가되면 수정할 예정
    }

    if (sortType === '별점 높은순') {
      return b.rating - a.rating;
    }

    if (sortType === '별점 낮은순') {
      return a.rating - b.rating;
    }

    return 0;
  });

  const handleMoreClick = () => {
    setDisplayCount(displayCount + 5);
  };

  return (
    <div ref={ref} style={{ marginBottom: '64px' }}>
      <A.ReviewInfoItem>
        <A.LatestOrderButton
          role="button"
          tabIndex={0}
          onClick={toggleDropdown}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleDropdown();
            }
          }}
        >
          {sortType}
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
          <A.DropdownMenu
            className="dropdown"
            style={{ display: isDropdownOpen ? 'block' : 'none' }}
          >
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleSortChange('최신순')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleSortChange('최신순');
                }
              }}
            >
              최신순
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleSortChange('별점 높은순')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleSortChange('별점 높은순');
                }
              }}
            >
              별점 높은순
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleSortChange('별점 낮은순')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleSortChange('별점 낮은순');
                }
              }}
            >
              별점 낮은순
            </div>
          </A.DropdownMenu>
        </A.LatestOrderButton>

        <A.InfoTitle>브리더 후기</A.InfoTitle>

        <A.ReviewScoreBox>
          <A.ReviewScore>
            {reviews.length > 0
              ? (
                  reviews.reduce((sum, review) => sum + review.rating, 0) /
                  reviews.length
                ).toFixed(1)
              : 0}
          </A.ReviewScore>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div>
              {renderStars(
                reviews.length > 0
                  ? reviews.reduce((sum, review) => sum + review.rating, 0) /
                      reviews.length
                  : 0,
              )}
            </div>
            <A.ReviewScoreText>{reviews.length}개 리뷰</A.ReviewScoreText>
          </div>
        </A.ReviewScoreBox>
        <A.CommuBtnBox>
          {speciesList.map((species) => (
            <A.CommuBtn
              key={species}
              isActive={activeButton === species}
              onClick={() => handleButtonClick(species)}
            >
              {species}
            </A.CommuBtn>
          ))}
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

        {sortedReviews.slice(0, displayCount).map((review) => (
          <A.ReviewContainer key={review.postId}>
            <A.ReviewItem>
              <A.ReviewerName>{review.userName}</A.ReviewerName>
              {review.content &&
                review.content
                  .filter(
                    (content) =>
                      content && content.type === 'IMAGE' && content.data,
                  )
                  .map((image) => (
                    <A.ReviewImage
                      key={uuidv4()}
                      src={image.data}
                      alt="리뷰 이미지"
                    />
                  ))}

              <A.ReviewInfo>
                <span>{speciesMapping[review.species] || review.species}</span>
                <div>{renderStars(review.rating)}</div>
                <p>{review.rating.toFixed(1)}</p>
              </A.ReviewInfo>
              <A.ReviewTextContainer>
                <A.ReviewText isExpanded={isExpanded}>
                  {review.content &&
                  review.content[0] &&
                  typeof review.content[0].data === 'string'
                    ? review.content[0].data
                    : '내용이 없습니다.'}
                </A.ReviewText>

                <A.MoreButton onClick={toggleExpand}>
                  {isExpanded ? '접기' : '더보기'}
                </A.MoreButton>
              </A.ReviewTextContainer>
              <A.ReviewFooter>
                <A.ReviewDate>{review.reviewDate}</A.ReviewDate>
              </A.ReviewFooter>
            </A.ReviewItem>
          </A.ReviewContainer>
        ))}

        {displayCount < sortedReviews.length && sortedReviews.length > 4 && (
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

// BreederReview.propTypes = {
//   // ref: PropTypes.any,
// };

export default BreederReview;
