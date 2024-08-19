import styled from 'styled-components';

export const Background = styled.div`
  min-width: 1020px;
  background: #f2f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 145px;
`;

export const WelcomeMsg = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 80px 0;
`;

export const Container = styled.div`
  width: 574px;
  padding: 72px 0px 52px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  border-radius: 40px;
  background: #fff;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
  width: 420px;
  height: 86px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .InputButtonWrapper {
    display: inline-block;
    height: 52px;
  }
`;
export const InputTitle = styled.div`
  color: #2d2d2d;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  .subtext {
    color: #737373;
    font-size: 12px;
    font-weight: 350;
    line-height: 18px;
  }
`;

export const InputBox = styled.input`
  width: 420px;
  height: 52px;
  padding: 8px 18px;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  background: #fff;

  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &::placeholder {
    color: #dadada;
  }
  &:focus {
    border: 2px solid #fe834d;
    outline: none;
  }
`;

export const CheckWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;

  color: #737373;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.72px;
`;

export const Checkbox = styled.input`
  display: none;
`;

export const Text = styled.div`
  color: #737373;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BtnWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Check = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const PwShowIcon = styled.img`
  width: 20px;
  height: 20px;
  fill: #c5c5c5;

  position: relative;
  left: 380px;
  top: -34px;

  cursor: pointer;
  &:hover {
    fill: #f87b45;
  }
`;

export const Label = styled.label`
  width: 420px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #e76467;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
`;

export const FailX = styled.img`
  display: flex;
  width: 18px;
  height: 18px;
  padding: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 1000px;
  background: #e76467;
`;
