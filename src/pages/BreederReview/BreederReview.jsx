// import { useState, useEffect, useCallback } from 'react';
// import * as R from './BreederReview.style';
// import ReviewModal from '../../components/BreederReview/ReviewModal';
// import { getBreederReview } from '../../apis/getBreederReview';

// // const allReviews = [
// //   {
// //     id: 1,
// //     images: [
// //       'https://via.placeholder.com/235/0000FF/808080',
// //       'https://via.placeholder.com/235/FF0000/FFFFFF',
// //     ],
// //     author: '작성자',
// //     rating: 5,
// //     isNew: true,
// //     text: '강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것만 같습니다',
// //     category: '강아지',
// //   },
// //   {
// //     id: 2,
// //     images: ['https://via.placeholder.com/235'],
// //     author: '작성자',
// //     rating: 5,
// //     isNew: true,
// //     text: '강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것만 같습니다',
// //     category: '강아지',
// //   },
// //   {
// //     id: 3,
// //     images: [
// //       'https://via.placeholder.com/235/0000FF/808080',
// //       'https://via.placeholder.com/235/FF0000/FFFFFF',
// //     ],
// //     author: '작성자',
// //     rating: 5,
// //     text: '강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것만 같습니다',
// //     category: '고양이',
// //   },
// //   {
// //     id: 4,
// //     images: [],
// //     author: '작성자',
// //     rating: 4,
// //     text: '고양이 품종이 정말 이쁩니다!',
// //     category: '고양이',
// //   },
// //   // ...
// //   {
// //     id: 14,
// //     images: ['https://via.placeholder.com/235'],
// //     author: '작성자',
// //     rating: 5,
// //     text: '강아지를 데려왔는데 아주 귀엽고 사랑스러워서 미쳐버릴 것만 같습니다',
// //     category: '고양이',
// //   },
// // ];

// function BreederReview() {
//   const [activeButtons, setActiveButtons] = useState(['전체']);
//   const [selectedReviewType, setSelectedReviewType] = useState(null);
//   // const [expandedReviewId, setExpandedReviewId] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const [readReviews, setReadReviews] = useState([]);
//   const [modalReview, setModalReview] = useState(null);

//   const [allReviews, setAllReviews] = useState([]);

//   // const breederId = localStorage.getItem('breederId');
//   const breederId = 1;
//   console.log(breederId);

//   const PAGE_SIZE = 100;

//   useEffect(() => {
//     setLoading(true);
//     getBreederReview(breederId)
//       .then((data) => {
//         console.log('Breeder reviews:', data);
//         setAllReviews(data); // 서버에서 받은 리뷰 데이터를 allReviews에 설정
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setLoading(false);
//       });
//   }, [breederId]);

//   console.log(allReviews);

//   const fetchReviews = useCallback(() => {
//     if (!allReviews.length) return;
//     setLoading(true);
//     const start = (page - 1) * PAGE_SIZE;
//     const end = start + PAGE_SIZE;

//     let filteredReviews = allReviews;

//     if (!activeButtons.includes('전체')) {
//       filteredReviews = allReviews.filter((review) =>
//         activeButtons.includes(review.category),
//       );
//     }

//     if (selectedReviewType === '사진 리뷰') {
//       filteredReviews = filteredReviews.filter(
//         (review) => review.images.length,
//       );
//     }

//     const newReviews = filteredReviews.slice(start, end);

//     if (newReviews.length < PAGE_SIZE) {
//       setHasMore(false);
//     }

//     setReviews((prevReviews) => [...prevReviews, ...newReviews]);
//     setLoading(false);
//   }, [page, activeButtons, selectedReviewType]);

//   useEffect(() => {
//     // setReviews([]);
//     // setPage(1);
//   }, [activeButtons, selectedReviewType]);

//   useEffect(() => {
//     fetchReviews();
//   }, [page, fetchReviews]);

//   const handleScroll = () => {
//     const scrollableHeight = document.documentElement.scrollHeight;
//     const scrolledHeight = window.innerHeight + window.scrollY;

//     if (scrolledHeight >= scrollableHeight && !loading && hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [loading, hasMore]);

//   const handleButtonClick = (buttonName) => {
//     setActiveButtons((prevButtons) =>
//       prevButtons.includes(buttonName)
//         ? prevButtons.filter((name) => name !== buttonName)
//         : [...prevButtons, buttonName],
//     );
//   };

//   const handleReviewTypeClick = (type) => {
//     setSelectedReviewType((prevType) => (prevType === type ? null : type));
//   };

//   const handleReviewClick = (review) => {
//     // setExpandedReviewId(review.id === expandedReviewId ? null : review.id);
//     setModalReview(review);
//   };

//   const handleCloseModal = () => {
//     if (modalReview) {
//       setReadReviews((prevReadReviews) => [...prevReadReviews, modalReview.id]);
//       setModalReview(null);
//     }
//   };

//   return (
//     <R.Container>
//       <R.PencilIcon
//         xmlns="http://www.w3.org/2000/svg"
//         width="64"
//         height="64"
//         viewBox="0 0 64 64"
//         fill="none"
//       >
//         <path
//           d="M9.36883 50.3785L11.699 37.061L38.0263 10.7338C38.8074 9.95271 40.0737 9.95271 40.8547 10.7338L49.0124 18.8914C49.7935 19.6725 49.7935 20.9388 49.0124 21.7199L22.6851 48.0472L9.36883 50.3785Z"
//           fill="white"
//           stroke="#FE834D"
//           strokeWidth="4"
//         />
//         <path
//           d="M9 56H57"
//           stroke="#FE834D"
//           strokeWidth="4"
//           strokeLinecap="round"
//         />
//         <path d="M34 17L42.5 25.5" stroke="#FE834D" strokeWidth="3" />
//       </R.PencilIcon>
//       <R.Title>받은 후기</R.Title>
//       <R.SubTitle>브위더 분양자들의 솔직 담백 후기!</R.SubTitle>
//       <R.MiddleBox>
//         <R.CommuBtnBox>
//           <R.CommuBtn
//             className={activeButtons.includes('전체') ? 'active' : ''}
//             onClick={() => handleButtonClick('전체')}
//           >
//             전체
//           </R.CommuBtn>
//           <R.CommuBtn
//             className={activeButtons.includes('강아지') ? 'active' : ''}
//             onClick={() => handleButtonClick('강아지')}
//           >
//             강아지
//           </R.CommuBtn>
//           <R.CommuBtn
//             className={activeButtons.includes('고양이') ? 'active' : ''}
//             onClick={() => handleButtonClick('고양이')}
//           >
//             고양이
//           </R.CommuBtn>
//         </R.CommuBtnBox>
//         <R.ReviewType onClick={() => handleReviewTypeClick('사진 리뷰')}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="18"
//             height="19"
//             viewBox="0 0 18 19"
//             fill="none"
//           >
//             <path
//               d="M18 9.5C18 4.52944 13.9706 0.5 9 0.5C4.02944 0.5 0 4.52944 0 9.5C0 14.4706 4.02944 18.5 9 18.5C13.9706 18.5 18 14.4706 18 9.5Z"
//               fill={selectedReviewType === '사진 리뷰' ? '#F87B45' : '#E1E1E1'}
//             />
//             <path
//               d="M5 9.188L7.88 12L13 7"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <R.ReviewTypeText>사진 리뷰</R.ReviewTypeText>
//         </R.ReviewType>
//       </R.MiddleBox>
//       <R.ReviewList>
//         {reviews.map((review) => (
//           <R.ReviewItem
//             key={review.id}
//             onClick={() => handleReviewClick(review)}
//             // className={expandedReviewId === review.id ? 'expanded' : ''}
//           >
//             {!readReviews.includes(review.id) && review.isNew && (
//               <R.NewBadge>NEW</R.NewBadge>
//             )}
//             <R.ReviewImage
//               style={{ backgroundImage: `url(${review.coverImage})` }}
//               // className={expandedReviewId === review.id ? 'hidden' : ''}
//             />
//             <R.ReviewContent
//             // className={expandedReviewId === review.id ? 'expanded' : ''}
//             >
//               <R.ReviewKennelName>
//                 {review.author}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="14"
//                   viewBox="0 0 16 14"
//                   fill="none"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M9.13928 0.824864L10.7473 3.95858L14.3416 4.46144C15.3816 4.60658 15.7987 5.83744 15.0444 6.54372L12.4433 8.98258L13.0581 12.4283C13.2353 13.4249 12.1473 14.186 11.2158 13.7152L8.00099 12.0889L4.78613 13.7152C3.8547 14.186 2.7667 13.4249 2.94385 12.4283L3.5587 8.98258L0.957561 6.54372C0.203276 5.83744 0.619276 4.60658 1.66042 4.46144L5.2547 3.95858L6.8627 0.824864C7.32899 -0.0848505 8.67299 -0.0848505 9.13928 0.824864Z"
//                     fill="#FFCE21"
//                   />
//                 </svg>
//                 <span>{review.rating}</span>
//               </R.ReviewKennelName>
//               <R.ReviewText
//               // className={expandedReviewId === review.id ? 'expanded' : ''}
//               >
//                 {review.blocks.length > 0 && review.blocks[0].data.text
//                   ? review.blocks[0].data.text
//                   : ''}
//               </R.ReviewText>
//             </R.ReviewContent>
//           </R.ReviewItem>
//         ))}
//         {loading && <R.LoadingSpinner>Loading...</R.LoadingSpinner>}
//       </R.ReviewList>

//       <ReviewModal review={modalReview} onClose={handleCloseModal} />
//     </R.Container>
//   );
// }

// export default BreederReview;

import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as R from './BreederReview.style';
import { getBreederReview } from '../../apis/getBreederReview';
import extractTextFromBlocks from '../../utils/extractContextFromBlocks';
import useAuth from '../../hooks/useAuth';

export default function BreederReview() {
  const navigate = useNavigate();
  const { breederId } = useAuth();

  const [activeButton, setActiveButton] = useState('전체');
  const [onlyPhotoReview, setOnlyPhotoReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);

  useEffect(() => {
    if (breederId) {
      getBreederReview(breederId)
        .then((data) => {
          console.log('Breeder reviews:', data);
          setReviews(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [breederId]);

  const filterReviews = useCallback(() => {
    let updatedReviews = reviews;

    if (activeButton === '강아지') {
      updatedReviews = updatedReviews.filter(
        (review) => review.petType === 'DOG',
      );
    } else if (activeButton === '고양이') {
      updatedReviews = updatedReviews.filter(
        (review) => review.petType === 'CAT',
      );
    }

    if (onlyPhotoReview) {
      updatedReviews = updatedReviews.filter(
        (review) => review.coverImage !== null,
      );
    }

    setFilteredReviews(updatedReviews);
  }, [reviews, activeButton, onlyPhotoReview]);

  useEffect(() => {
    filterReviews();
  }, [filterReviews]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleReviewTypeClick = () => {
    setOnlyPhotoReview(!onlyPhotoReview);
  };

  const handleReviewClick = (reviewId) => {
    navigate(`/WritingDetail/${reviewId}`);
  };

  return (
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
      <R.Title>받은 후기</R.Title>
      <R.SubTitle>브위더 분양자들의 솔직 담백 후기!</R.SubTitle>
      <R.MiddleBox>
        <R.CommuBtnBox>
          <R.CommuBtn
            className={activeButton === '전체' ? 'active' : ''}
            onClick={() => handleButtonClick('전체')}
          >
            전체
          </R.CommuBtn>
          <R.CommuBtn
            className={activeButton === '강아지' ? 'active' : ''}
            onClick={() => handleButtonClick('강아지')}
          >
            강아지
          </R.CommuBtn>
          <R.CommuBtn
            className={activeButton === '고양이' ? 'active' : ''}
            onClick={() => handleButtonClick('고양이')}
          >
            고양이
          </R.CommuBtn>
        </R.CommuBtnBox>
        <R.ReviewType onClick={() => handleReviewTypeClick()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M18 9.5C18 4.52944 13.9706 0.5 9 0.5C4.02944 0.5 0 4.52944 0 9.5C0 14.4706 4.02944 18.5 9 18.5C13.9706 18.5 18 14.4706 18 9.5Z"
              fill={onlyPhotoReview ? '#F87B45' : '#E1E1E1'}
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
      {filteredReviews && (
        <R.ReviewList>
          {filteredReviews.map((review) => (
            <R.ReviewItem
              key={`review_post_key_${review.id}`}
              onClick={() => handleReviewClick(review.id)}
            >
              <R.ReviewImage
                style={{
                  backgroundImage: review.coverImage
                    ? `url(${review.coverImage})`
                    : 'url(/img/mainTipDefault.png)',
                }}
              />
              <R.ReviewContent>
                <R.ReviewKennelName>
                  {review.author}
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
                <R.ReviewText>
                  {review.blocks.length > 0 &&
                    extractTextFromBlocks(review.blocks)}
                </R.ReviewText>
              </R.ReviewContent>
            </R.ReviewItem>
          ))}
        </R.ReviewList>
      )}
      {filteredReviews.length === 0 && (
        <R.NothingContainer>
          <img src="/img/nothing_bowl.svg" alt="빈 밥그릇 이미지" />
          조건과 일치하는 후기가 없습니다...
        </R.NothingContainer>
      )}
    </R.Container>
  );
}
