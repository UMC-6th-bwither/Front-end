import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  .sad {
    color: #f87b45;
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.5px;
  }
  .question {
    color: #000;
    font-family: 'Noto Sans KR';
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
  .info {
    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

export const BtnContainer = styled.div`
  display: flex;
  padding: 0px 64px;
  justify-content: space-between;
  align-self: stretch;
`;

export const NoBtn = styled.button`
  cursor: pointer;
  display: flex;
  width: 238px;
  padding: 12px 87.31px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 2px solid #f1f1f1;
  background: #fff;
  color: #323232;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const YesBtn = styled.button`
  cursor: pointer;
  display: flex;
  width: 240px;
  padding: 12px 87.31px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #fe834d;
  background: #fe834d;
  color: #fff;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
