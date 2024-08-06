import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import * as D from './DeleteReasonModal.style';
import { closeDeleteReasonModal, selectModal } from '../../redux/modalSlice';

const CustomModal = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '618px',
    height: '688px',
    padding: '48px 52px 32px 52px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '48px',
    overflow: 'hidden',
    borderRadius: '20px',
    boxShadow: '0px 6px 20px 0px rgba(148, 156, 163, 0.20)',
  },
};

function DeleteReasonModal() {
  const { isDeleteReasonModalOpen } = useSelector(selectModal);
  const dispatch = useDispatch();
  const [inputCount, setInputCount] = useState(0);

  const handleClickSubmit = () => {
    dispatch(closeDeleteReasonModal());
  };

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  return (
    <Modal isOpen={isDeleteReasonModalOpen} style={CustomModal}>
      <D.ModalContent>
        <D.Title>브위더를 떠나시는 이유를 알려주세요</D.Title>
        <D.CheckboxContainer>
          <D.Label htmlFor="checkbox1">
            <input type="checkbox" id="checkbox1" className="checkbox" />
            동물 분양 여건이 안 되어서
          </D.Label>
          <D.Label htmlFor="checkbox2">
            <input type="checkbox" id="checkbox2" className="checkbox" />
            원하는 브리더가 없어서
          </D.Label>
          <D.Label htmlFor="checkbox3">
            <input type="checkbox" id="checkbox3" className="checkbox" />
            원하는 정보를 받지 못해서
          </D.Label>
          <D.Label htmlFor="checkbox4">
            <input type="checkbox" id="checkbox4" className="checkbox" />
            서비스가 복잡해서
          </D.Label>
          <D.Etc>
            <D.Label htmlFor="checkbox5">
              <input type="checkbox" id="checkbox5" className="checkbox" />
              기타
            </D.Label>
            <textarea
              className="textarea"
              onChange={onInputHandler}
              maxLength="199"
            />
            <D.TextCountDisplay>{inputCount}/200</D.TextCountDisplay>
          </D.Etc>
        </D.CheckboxContainer>
      </D.ModalContent>
      <div>
        <D.Button type="button" onClick={handleClickSubmit}>
          확인
        </D.Button>
      </div>
    </Modal>
  );
}

export default DeleteReasonModal;
