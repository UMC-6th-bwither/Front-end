import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as R from '../../pages/BreederReview/BreederReview.style';

function ReportModal() {
  return <div>신고 모달 콘텐츠</div>;
}

function ReviewModal({ review, onClose }) {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (review && review.images.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [review]);
  if (!review) return null;

  const handleReportClick = () => {
    setIsReportModalOpen(true);
  };

  const handleReportModalClose = () => {
    setIsReportModalOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : review.images.length - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < review.images.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <R.ModalOverlay onClick={onClose}>
      <R.ModalContent onClick={(e) => e.stopPropagation()}>
        <R.IconContainer>
          <R.ReportIcon onClick={handleReportClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M8 17C8 14.2386 10.2386 12 13 12H19C21.7614 12 24 14.2386 24 17V25H8V17Z"
                stroke="#C5C5C5"
                strokeWidth="2"
              />
              <path
                d="M16.5 11.5H19C22.0376 11.5 24.5 13.9624 24.5 17V25.5H16.5V11.5Z"
                fill="#C5C5C5"
                stroke="#C5C5C5"
              />
              <path
                d="M4.5 28.5C4.5 27.9477 4.94772 27.5 5.5 27.5H26.5C27.0523 27.5 27.5 27.9477 27.5 28.5C27.5 29.0523 27.0523 29.5 26.5 29.5H5.5C4.94772 29.5 4.5 29.0523 4.5 28.5Z"
                fill="#C5C5C5"
                stroke="#C5C5C5"
              />
              <path
                d="M16 7.5C15.7239 7.5 15.5 7.27614 15.5 7L15.5 3C15.5 2.72386 15.7239 2.5 16 2.5C16.2761 2.5 16.5 2.72386 16.5 3L16.5 7C16.5 7.27614 16.2761 7.5 16 7.5Z"
                fill="#C5C5C5"
                stroke="#C5C5C5"
              />
              <path
                d="M10.984 8.37298C10.7396 8.50162 10.4373 8.40781 10.3086 8.16346L8.44531 4.62397C8.31667 4.37962 8.41048 4.07725 8.65483 3.94862C8.89918 3.81998 9.20155 3.91379 9.33018 4.15814L11.1935 7.69763C11.3221 7.94198 11.2283 8.24435 10.984 8.37298Z"
                fill="#C5C5C5"
                stroke="#C5C5C5"
              />
              <path
                d="M21.018 8.37103C21.2623 8.49966 21.5647 8.40586 21.6933 8.16151L23.5566 4.62202C23.6853 4.37766 23.5915 4.0753 23.3471 3.94666C23.1028 3.81803 22.8004 3.91183 22.6718 4.15618L20.8084 7.69568C20.6798 7.94003 20.7736 8.24239 21.018 8.37103Z"
                fill="#C5C5C5"
                stroke="#C5C5C5"
              />
            </svg>
          </R.ReportIcon>
          <R.ModalCloseButton onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.8964 0.396447C15.0917 0.201184 15.4083 0.201184 15.6036 0.396447C15.7988 0.591709 15.7988 0.908291 15.6036 1.10355L8.70711 8L15.6036 14.8964C15.7988 15.0917 15.7988 15.4083 15.6036 15.6036C15.4083 15.7988 15.0917 15.7988 14.8964 15.6036L8 8.70711L1.10355 15.6036C0.908291 15.7988 0.591709 15.7988 0.396446 15.6036C0.201185 15.4083 0.201185 15.0917 0.396446 14.8964L7.29289 8L0.396447 1.10355C0.201185 0.908291 0.201185 0.591709 0.396447 0.396447C0.591709 0.201184 0.908291 0.201184 1.10355 0.396447L8 7.29289L14.8964 0.396447Z"
                fill="#C5C5C5"
              />
            </svg>
          </R.ModalCloseButton>
        </R.IconContainer>

        {review.images.length > 0 && (
          <R.ReviewImage
            style={{
              backgroundImage: `url(${review.images[currentImageIndex]})`,
            }}
          >
            {review.images.length > 1 && (
              <>
                <R.PrevButton onClick={handlePrevImage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="26"
                    viewBox="0 0 14 26"
                    fill="none"
                  >
                    <path
                      d="M12.5 2L1.5 13L12.5 24"
                      stroke="#737373"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </R.PrevButton>
                <R.NextButton onClick={handleNextImage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="26"
                    viewBox="0 0 14 26"
                    fill="none"
                  >
                    <path
                      d="M1.5 2L12.5 13L1.5 24"
                      stroke="#737373"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </R.NextButton>
              </>
            )}
          </R.ReviewImage>
        )}

        <R.ModalAuthorRatingContainer>
          <R.ModalAuthor>{review.author}</R.ModalAuthor>
          <R.ModalRating>
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
          </R.ModalRating>
        </R.ModalAuthorRatingContainer>
        <R.ModalText>{review.text}</R.ModalText>
      </R.ModalContent>

      {isReportModalOpen && <ReportModal onClose={handleReportModalClose} />}
    </R.ModalOverlay>
  );
}

ReviewModal.propTypes = {
  // eslint-disable-next-line react/require-default-props
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ReviewModal;
