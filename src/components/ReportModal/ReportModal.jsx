import Modal from 'react-modal';
import { useState } from 'react';
import close from '/img/close.svg';
import * as R from './ReportModal.style';

const CustomModal = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '618px',
    height: '1014px',
    padding: '28px 52px 32px 52px',
    overflow: 'hidden',
    borderRadius: '20px',
    boxShadow: '0px 6px 20px 0px rgba(148, 156, 163, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '48px',
  },
};

function ReportModal() {
  const [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  return (
    <Modal isOpen style={CustomModal}>
      <R.TitleContainer>
        <R.Title>어떤 문제로 신고를 접수하시나요?</R.Title>
        <img src={close} alt="close" className="closeIcon" />
      </R.TitleContainer>
      <R.CheckboxesContainer>
        <R.CheckboxBorder>
          <R.Label htmlFor="checkbox1">
            <input type="checkbox" id="checkbox1" className="checkbox" />
            스팸 또는 광고
          </R.Label>
          <R.Ul>
            <li>광고성 메시지</li>
            <li>스팸성 링크 또는 내용</li>
          </R.Ul>
        </R.CheckboxBorder>
        <R.CheckboxBorder>
          <R.Label htmlFor="checkbox2">
            <input type="checkbox" id="checkbox2" className="checkbox" />
            부적절한 콘텐츠
          </R.Label>
          <R.Ul>
            <li>음란물 또는 외설적인 내용</li>
            <li>폭력적이거나 혐오스러운 내용</li>
            <li>범죄 또는 불법 행위 촉진</li>
          </R.Ul>
        </R.CheckboxBorder>
        <R.CheckboxBorder>
          <R.Label htmlFor="checkbox3">
            <input type="checkbox" id="checkbox3" className="checkbox" />
            허위 정보
          </R.Label>
          <R.Ul>
            <li>잘못된 정보</li>
            <li>사실과 다른 내용</li>
          </R.Ul>
        </R.CheckboxBorder>
        <R.CheckboxBorder>
          <R.Label htmlFor="checkbox4">
            <input type="checkbox" id="checkbox4" className="checkbox" />
            개인정보 침해
          </R.Label>
          <R.Ul>
            <li>개인정보 노출</li>
            <li>사생활 침해</li>
          </R.Ul>
        </R.CheckboxBorder>
        <R.Etc>
          <R.Label htmlFor="checkbox5">
            <input type="checkbox" id="checkbox5" className="checkbox" />
            기타
          </R.Label>
          <textarea
            className="textarea"
            onChange={onInputHandler}
            maxLength="199"
          />
          <R.TextCountDisplay>{inputCount}/200</R.TextCountDisplay>
        </R.Etc>
      </R.CheckboxesContainer>
      <R.Button type="button">확인</R.Button>
    </Modal>
  );
}

export default ReportModal;
