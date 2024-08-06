import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;
  align-self: stretch;
`;

export const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  align-self: stretch;
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.5px;
  .checkbox {
    appearance: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    margin: 0;
    border: 3px solid rgba(197, 197, 197, 0.5);
    border-radius: 3px;
    &:checked {
      background-repeat: no-repeat;
      border: 3px solid rgba(197, 197, 197, 0.5);
    }
  }
`;

export const Etc = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  align-self: stretch;
  .textarea {
    display: flex;
    height: 160px;
    padding: 13px 19px;
    margin: 0 0 0 40px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 12px;
    background: #f4f4f4;
    resize: none;
  }
`;

export const TextCountDisplay = styled.div`
  position: absolute;
  right: 16px;
  bottom: 12px;
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  width: 238px;
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
