/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import * as D from './DeleteReasonModal.style';
import { closeDeleteReasonModal, selectModal } from '../../redux/modalSlice';
import uncheckedCheck from '../../../public/img/uncheckedCheck.svg';
import checkedCheck from '../../../public/img/checkedCheck.svg';

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

const userLabels = [
  '동물 분양 여건이 안 되어서',
  '원하는 브리더가 없어서',
  '원하는 정보를 받지 못해서',
  '서비스가 복잡해서',
];

const breederLabels = [
  '브리더를 그만두게 되어서',
  '분양자가 없어서',
  '비슷한 다른 서비스를 찾아서',
  '서비스가 복잡해서',
];

function DeleteReasonModal({ userType }) {
  const { isDeleteReasonModalOpen } = useSelector(selectModal);
  const dispatch = useDispatch();
  const [inputCount, setInputCount] = useState(0);
  const [isChecked, setIsChecked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const labels = userType === 'general' ? userLabels : breederLabels;

  const handleClickSubmit = () => {
    dispatch(closeDeleteReasonModal());
  };

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  const handleToggleCheck = (index) => {
    const updatedCheckedStates = [...isChecked];
    updatedCheckedStates[index] = !updatedCheckedStates[index];
    setIsChecked(updatedCheckedStates);
  };

  return (
    <Modal isOpen={isDeleteReasonModalOpen} style={CustomModal}>
      <D.ModalContent>
        <D.Title>브위더를 떠나시는 이유를 알려주세요</D.Title>
        <D.CheckboxContainer>
          {labels?.map((reason, index) => (
            <D.Label
              key={reason}
              checked={isChecked[index]}
              onClick={() => handleToggleCheck(index)}
            >
              <img
                src={isChecked[index] ? checkedCheck : uncheckedCheck}
                alt={isChecked[index] ? 'checked' : 'unchecked'}
              />
              {reason}
            </D.Label>
          ))}
          <D.Etc>
            <D.Label
              checked={isChecked[4]}
              onClick={() => handleToggleCheck(4)}
            >
              <img
                src={isChecked[4] ? checkedCheck : uncheckedCheck}
                alt={isChecked[4] ? 'checked' : 'unchecked'}
              />
              기타
            </D.Label>
            <textarea
              className="textarea"
              onChange={onInputHandler}
              maxLength="200"
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
