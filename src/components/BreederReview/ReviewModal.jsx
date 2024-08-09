import { useState } from 'react';
import PropTypes from 'prop-types';
import * as R from '../../pages/BreederReview/BreederReview.style';

function ReportModal() {
  <div>신고 모달 콘텐츠</div>;
}

function ReviewModal({ review, onClose }) {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  if (!review) return null;

  const handleReportClick = () => {
    setIsReportModalOpen(true);
  };

  const handleReportModalClose = () => {
    setIsReportModalOpen(false);
  };

  return (
    <R.ModalOverlay onClick={onClose}>
      <R.ModalContent onClick={(e) => e.stopPropagation()}>
        <R.IconContainer>
          <R.ReportIcon onClick={handleReportClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M8 17.5C8 14.7386 10.2386 12.5 13 12.5H19C21.7614 12.5 24 14.7386 24 17.5V25.5H8V17.5Z"
                stroke="#C5C5C5"
                strokeWidth="2"
              />
              <path
                d="M16.5 12H19C22.0376 12 24.5 14.4624 24.5 17.5V26H16.5V12Z"
                fill="#C5C5C5"
                stroke="#C5C5C5"
              />
              <path
                d="M4.5 29C4.5 28.4477 4.94772 28 5.5 28H26.5C27.0523 28 27.5 28.4477 27.5 29C27.5 29.5523 27.0523 30 26.5 30H5.5C4.94772 30 4.5 29.5523 4.5 29Z"
                fill="#C5C5C5"
                stroke="#C5C5C5"
              />
              <path
                d="M16 8C15.7239 8 15.5 7.77614 15.5 7.5L15.5 3.5C15.5 3.22386 15.7239 3 16 3C16.2761 3 16.5 3.22386 16.5 3.5L16.5 7.5C16.5 7.77614 16.2761 8 16 8Z"
                fill="#C5C5C5"
                stroke="#C5C5C5"
              />
              <path
                d="M10.984 8.87298C10.7396 9.00162 10.4373 8.90781 10.3086 8.66346L8.44531 5.12397C8.31667 4.87962 8.41048 4.57725 8.65483 4.44862C8.89918 4.31998 9.20155 4.41379 9.33018 4.65814L11.1935 8.19763C11.3221 8.44198 11.2283 8.74435 10.984 8.87298Z"
                fill="#C5C5C5"
                stroke="#C5C5C5"
              />
              <path
                d="M21.0199 8.87103C21.2643 8.99966 21.5666 8.90586 21.6953 8.66151L23.5586 5.12202C23.6872 4.87766 23.5934 4.5753 23.3491 4.44666C23.1047 4.31803 22.8024 4.41183 22.6737 4.65618L20.8104 8.19568C20.6818 8.44003 20.7756 8.74239 21.0199 8.87103Z"
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
                d="M14.8964 0.396447C15.0917 0.201184 15.4083 0.201184 15.6036 0.396447C15.7988 0.591709 15.7988 0.908291 15.6036 1.10355L8.70711 8L15.6036 14.8964C15.7988 15.0917 15.7988 15.4083 15.6036 15.6036C15.4083 15.7988 15.0917 15.7988 14.8964 15.6036L8 8.70711L1.10355 15.6036C0.908291 15.7988 0.591709 15.7988 0.396446 15.6036C0.201185 15.4083 0.201185 15.0917 0.396447 14.8964L7.29289 8L0.396447 1.10355C0.201185 0.908291 0.201185 0.591709 0.396447 0.396447C0.591709 0.201184 0.908291 0.201184 1.10355 0.396447L8 7.29289L14.8964 0.396447Z"
                fill="#C5C5C5"
              />
            </svg>
          </R.ModalCloseButton>
        </R.IconContainer>
        <R.ReviewImage style={{ backgroundImage: `url(${review.image})` }} />
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
    image: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ReviewModal;
