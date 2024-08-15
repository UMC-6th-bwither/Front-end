import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as R from '../../pages/BreederReview/BreederReview.style';

function ReviewModal({ review, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (review && review.images.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [review]);
  if (!review) return null;

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
