import PropTypes from 'prop-types';
import * as A from '../../pages/BreederDetail/BreederDetail.style';

function BusinessInfoModal({ onClose }) {
  return (
    <A.ModalBackground>
      <A.ModalContainer>
        <A.ModalTop>
          <A.ModalTitle>사업자 정보</A.ModalTitle>
          <A.CloseIcon
            onClick={onClose}
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
              fill="black"
            />
          </A.CloseIcon>
        </A.ModalTop>
        <A.ModalBottom>
          <A.InfoRow>
            <A.InfoLabel>상호명</A.InfoLabel>
            <A.InfoValue>해피 브리더</A.InfoValue>
          </A.InfoRow>
          <A.InfoRow>
            <A.InfoLabel>대표자명</A.InfoLabel>
            <A.InfoValue>김가나</A.InfoValue>
          </A.InfoRow>
          <A.InfoRow>
            <A.InfoLabel>사업자등록번호</A.InfoLabel>
            <A.InfoValue>331-12-12345</A.InfoValue>
          </A.InfoRow>
          <A.InfoRow>
            <A.InfoLabel>사업자 주소</A.InfoLabel>
            <A.InfoValue>
              서울시 강서구 가나로 123, 1층 (가나동, 가나 파크)
            </A.InfoValue>
          </A.InfoRow>
          <A.InfoRow>
            <A.InfoLabel>이메일 주소</A.InfoLabel>
            <A.InfoValue>happybreeder@gmail.com</A.InfoValue>
          </A.InfoRow>
        </A.ModalBottom>
      </A.ModalContainer>
    </A.ModalBackground>
  );
}

BusinessInfoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default BusinessInfoModal;
