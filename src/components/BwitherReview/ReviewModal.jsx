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
          <R.ModalAuthorContainer>
            <R.ModalAuthor>{review.author}</R.ModalAuthor>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5V10.5C10.6667 10.6768 10.5964 10.8464 10.4714 10.9714C10.3464 11.0964 10.1768 11.1667 10 11.1667H2C1.82319 11.1667 1.65362 11.0964 1.5286 10.9714C1.40357 10.8464 1.33333 10.6768 1.33333 10.5V2.5C1.33333 2.32319 1.40357 2.15362 1.5286 2.0286C1.65362 1.90357 1.82319 1.83333 2 1.83333H6C6.17681 1.83333 6.34638 1.7631 6.4714 1.63807C6.59643 1.51305 6.66667 1.34348 6.66667 1.16667C6.66667 0.989856 6.59643 0.820286 6.4714 0.695262C6.34638 0.570238 6.17681 0.5 6 0.5H2C1.46957 0.5 0.960859 0.710714 0.585787 1.08579C0.210714 1.46086 0 1.96957 0 2.5V10.5C0 11.0304 0.210714 11.5391 0.585787 11.9142C0.960859 12.2893 1.46957 12.5 2 12.5H10C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5V6.5C12 6.32319 11.9298 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333Z"
                fill="#2D2D2D"
              />
              <path
                d="M8.66728 1.83333H9.72061L5.52728 6.02C5.46479 6.08197 5.4152 6.15571 5.38135 6.23695C5.3475 6.31819 5.33008 6.40532 5.33008 6.49333C5.33008 6.58134 5.3475 6.66848 5.38135 6.74972C5.4152 6.83096 5.46479 6.90469 5.52728 6.96667C5.58925 7.02915 5.66299 7.07875 5.74423 7.11259C5.82547 7.14644 5.9126 7.16387 6.00061 7.16387C6.08862 7.16387 6.17576 7.14644 6.25699 7.11259C6.33823 7.07875 6.41197 7.02915 6.47394 6.96667L10.6673 2.78V3.83333C10.6673 4.01014 10.7375 4.17971 10.8625 4.30474C10.9876 4.42976 11.1571 4.5 11.3339 4.5C11.5108 4.5 11.6803 4.42976 11.8053 4.30474C11.9304 4.17971 12.0006 4.01014 12.0006 3.83333V1.16667C12.0006 0.989856 11.9304 0.820286 11.8053 0.695262C11.6803 0.570238 11.5108 0.5 11.3339 0.5H8.66728C8.49047 0.5 8.3209 0.570238 8.19587 0.695262C8.07085 0.820286 8.00061 0.989856 8.00061 1.16667C8.00061 1.34348 8.07085 1.51305 8.19587 1.63807C8.3209 1.7631 8.49047 1.83333 8.66728 1.83333Z"
                fill="#2D2D2D"
              />
            </svg>
          </R.ModalAuthorContainer>
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
