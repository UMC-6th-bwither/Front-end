import * as C from './ConfidenceLevelModal.style';

// eslint-disable-next-line react/prop-types
function ConfidenceLevelModal({ onClose }) {
  return (
    <C.Box>
      <C.BoxTop>
        <C.Title>신뢰 등급 기준 안내</C.Title>
        <C.SvgIcon
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          onClick={onClose}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8964 0.396447C15.0917 0.201184 15.4083 0.201184 15.6036 0.396447C15.7988 0.591709 15.7988 0.908291 15.6036 1.10355L8.70711 8L15.6036 14.8964C15.7988 15.0917 15.7988 15.4083 15.6036 15.6036C15.4083 15.7988 15.0917 15.7988 14.8964 15.6036L8 8.70711L1.10355 15.6036C0.908291 15.7988 0.591709 15.7988 0.396446 15.6036C0.201185 15.4083 0.201185 15.0917 0.396446 14.8964L7.29289 8L0.396447 1.10355C0.201185 0.908291 0.201185 0.591709 0.396447 0.396447C0.591709 0.201184 0.908291 0.201184 1.10355 0.396447L8 7.29289L14.8964 0.396447Z"
            fill="black"
          />
        </C.SvgIcon>
      </C.BoxTop>
      <C.BoxBottom>
        <C.ErrorText>
          *신뢰 등급에 영향을 주는 항목에 대한 설명입니다
        </C.ErrorText>
        <C.ContentBox>
          <C.Content>관리 중인 동물의 수의사 검진 기록 미첨부 시</C.Content>
          <C.Content>관리 중인 동물의 수의사 검진 기록 미첨부 시</C.Content>
        </C.ContentBox>
      </C.BoxBottom>
    </C.Box>
  );
}

export default ConfidenceLevelModal;
