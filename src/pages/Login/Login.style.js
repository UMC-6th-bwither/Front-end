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

export const Container = styled.form`
  width: 1000px;
  padding: 52px 200px 100px 200px;
  display: flex;
  flex-direction: column;
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

export const BtnWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
