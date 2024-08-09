import { useState } from 'react';
import PropTypes from 'prop-types';
import * as R from '../../pages/BwitherReview/BwitherReview.style';

function ReportModal() {
  return <div>신고 모달 콘텐츠</div>;
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

  const handleOpenIconClick = () => {
    window.open(review.image, '_blank');
  };

  return (
    <R.ModalOverlay onClick={onClose}>
      <R.ModalContent onClick={(e) => e.stopPropagation()}>
        <R.IconContainer>
          <R.ModalAuthorRatingContainer>
            <R.ModalAuthor>{review.author}</R.ModalAuthor>
            <R.OpenIcon onClick={handleOpenIconClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14.8964 0.396447C15.0917 0.201184 15.4083 0.201184 15.6036 0.396447C15.7988 0.591709 15.7988 0.908291 15.6036 1.10355L8.70711 8L15.6036 14.8964C15.7988 15.0917 15.7988 15.4083 15.6036 15.6036C15.4083 15.7988 15.0917 15.7988 14.8964 15.6036L8 8.70711L1.10355 15.6036C0.908291 15.7988 0.591709 15.7988 0.396446 15.6036C0.201185 15.4083 0.201185 15.0917 0.396447 14.8964L7.29289 8L0.396447 1.10355C0.201185 0.908291 0.201185 0.591709 0.396447 0.396447C0.591709 0.201184 0.908291 0.201184 1.10355 0.396447L8 7.29289L14.8964 0.396447Z"
                  fill="#2D2D2D"
                />
              </svg>
            </R.OpenIcon>
          </R.ModalAuthorRatingContainer>
          <R.ReportIcon onClick={handleReportClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              {/* SVG Path */}
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
      </R.ModalContent>

      {isReportModalOpen && <ReportModal onClose={handleReportModalClose} />}
    </R.ModalOverlay>
  );
}

ReviewModal.propTypes = {
  // eslint-disable-next-line react/require-default-props
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ReviewModal;
