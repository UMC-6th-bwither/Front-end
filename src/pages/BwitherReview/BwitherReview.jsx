import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as R from './BwitherReview.style';
import Pagination from '../../components/Pagination/Pagination';
import VerticalMenuSelector from '../../components/VerticalMenuSelector/VerticalMenuSelector';
import api from '../../api/api';

function BwitherReview() {
  const [activeCategories, setActiveCategories] = useState(['ALL']);
  const [selectedReviewType, setSelectedReviewType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const [reviewDatas, setReviewDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // 리뷰 미리보기 데이터 받아오기
  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await api.get('/post', {
          params: {
            category: 'BREEDER_REVIEWS',
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.data.isSuccess) {
          setReviewDatas(response.data.result);
        } else {
          setError(response.data.message);
        }
        console.log('분양 후기 데이터 목록 요청 성공');
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    getInfo();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // 강아지, 고양이, 전체 선택 필터
  const handleCategoryClick = (petType) => {
    if (petType === 'ALL') {
      setActiveCategories(['ALL']);
      return;
    }
    if (petType === 'DOG') {
      setActiveCategories(['DOG']);
      return;
    }
    if (petType === 'CAT') {
      setActiveCategories(['CAT']);
    }
  };

  // 사진 리뷰 필터
  const handleReviewTypeClick = () => {
    setSelectedReviewType((prev) =>
      prev === '사진 리뷰' ? null : '사진 리뷰',
    );
  };

  const filteredReviews = reviewDatas.filter((review) => {
    const petTypeMatch =
      activeCategories.includes('ALL') ||
      activeCategories.includes(review.petType);

    const photoMatch =
      selectedReviewType === '사진 리뷰' ? review.hasImage : true;

    return petTypeMatch && photoMatch;
  });

  // 페이지네이션 데이터 분할
  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const menuItems = [
    { name: '브리더의 꿀정보', href: '/community/breederinformation' },
    { name: '브위더 후기', href: '/community/review' },
  ];
  const activeItemName = '브위더 후기';

  return (
    <R.Layout>
      <VerticalMenuSelector
        title="커뮤니티"
        items={menuItems}
        activeItemName={activeItemName}
      />
      <R.PageBox>
        <R.Container>
          <R.PencilIcon
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M9.36883 50.3785L11.699 37.061L38.0263 10.7338C38.8074 9.95271 40.0737 9.95271 40.8547 10.7338L49.0124 18.8914C49.7935 19.6725 49.7935 20.9388 49.0124 21.7199L22.6851 48.0472L9.36883 50.3785Z"
              fill="white"
              stroke="#FE834D"
              strokeWidth="4"
            />
            <path
              d="M9 56H57"
              stroke="#FE834D"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path d="M34 17L42.5 25.5" stroke="#FE834D" strokeWidth="3" />
          </R.PencilIcon>
          <R.Title>브위더 후기</R.Title>
          <R.SubTitle>브위더 분양자들의 솔직 담백 후기!</R.SubTitle>
          <R.MiddleBox>
            <R.CommuBtnBox>
              <R.CommuBtn
                className={activeCategories.includes('ALL') ? 'active' : ''}
                onClick={() => handleCategoryClick('ALL')}
              >
                전체
              </R.CommuBtn>
              <R.CommuBtn
                className={activeCategories.includes('DOG') ? 'active' : ''}
                onClick={() => handleCategoryClick('DOG')}
              >
                강아지
              </R.CommuBtn>
              <R.CommuBtn
                className={activeCategories.includes('CAT') ? 'active' : ''}
                onClick={() => handleCategoryClick('CAT')}
              >
                고양이
              </R.CommuBtn>
            </R.CommuBtnBox>
            <R.ReviewType onClick={handleReviewTypeClick}>
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
              <R.ReviewTypeText>사진 리뷰</R.ReviewTypeText>
            </R.ReviewType>
          </R.MiddleBox>
          <R.ReviewList>
            {paginatedReviews.map((review) => (
              <R.ReviewItem
                key={review.id}
                onClick={() => navigate(`/WritingDetail/${review.id}`)}
              >
                <R.ReviewImage
                  src={review.coverImage || '/img/mainTipDefault.png'}
                  alt="Review"
                />

                <R.ReviewContent>
                  <R.ReviewKennelName>
                    {review.kennelName}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.13928 0.824864L10.7473 3.95858L14.3416 4.46144C15.3816 4.60658 15.7987 5.83744 15.0444 6.54372L12.4433 8.98258L13.0581 12.4283C13.2353 13.4249 12.1473 14.186 11.2158 13.7152L8.00099 12.0889L4.78613 13.7152C3.8547 14.186 2.7667 13.4249 2.94385 12.4283L3.5587 8.98258L0.957561 6.54372C0.203276 5.83744 0.619276 4.60658 1.66042 4.46144L5.2547 3.95858L6.8627 0.824864C7.32899 -0.0848505 8.67299 -0.0848505 9.13928 0.824864Z"
                        fill="#FFCE21"
                      />
                    </svg>
                    <span>{review.rating}</span>
                  </R.ReviewKennelName>
                  <R.ReviewText>{review.title}</R.ReviewText>
                </R.ReviewContent>
              </R.ReviewItem>
            ))}
          </R.ReviewList>
          <R.PaginationContainer>
            <Pagination
              totalItems={filteredReviews.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </R.PaginationContainer>
        </R.Container>
      </R.PageBox>
    </R.Layout>
  );
}

export default BwitherReview;
