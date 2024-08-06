import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import * as M from './DeleteAccountModal.style';
import {
  openDeleteReasonModal,
  closeDeleteAccountModal,
  selectModal,
} from '../../redux/modalSlice';
import DeleteReasonModal from '../DeleteReasonModal/DeleteReasonModal';

const CustomModal = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '618px',
    height: '288px',
    padding: '24px 0 32px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '48px',
    overflow: 'hidden',
    borderRadius: '20px',
    boxShadow: '0px 6px 20px 0px rgba(148, 156, 163, 0.20)',
  },
};

function DeleteAccountModal() {
  const { isDeleteAccountModalOpen, isDeleteReasonModalOpen } =
    useSelector(selectModal); // isOpenMidal의 상태 추출
  const dispatch = useDispatch();

  const handleClickSubmit = () => {
    dispatch(closeDeleteAccountModal());
    dispatch(openDeleteReasonModal());
    // 100ms 딜레이
  };

  const handleClickCancle = () => {
    dispatch(closeDeleteAccountModal());
  };

  return (
    <>
      <Modal isOpen={isDeleteAccountModalOpen} style={CustomModal}>
        <M.ModalContent>
          <div className="sad">떠나신다니 아쉬워요 😥</div>
          <M.BottomContent>
            <div className="question">브위더 회원 탈퇴를 원하시나요?</div>
            <div className="info">
              탈퇴 후 해당 계정의 정보는 7일간 남아있다가 파기됩니다.
            </div>
          </M.BottomContent>
        </M.ModalContent>
        <M.BtnContainer>
          <M.NoBtn type="button" onClick={handleClickCancle}>
            취소
          </M.NoBtn>
          <M.YesBtn type="button" onClick={handleClickSubmit}>
            회원 탈퇴
          </M.YesBtn>
        </M.BtnContainer>
      </Modal>
      <DeleteReasonModal
        isOpen={isDeleteReasonModalOpen}
        onSubmit={() => dispatch(openDeleteReasonModal())}
        onCancel={() => dispatch(closeDeleteAccountModal())}
      />
    </>
  );
}

export default DeleteAccountModal;
