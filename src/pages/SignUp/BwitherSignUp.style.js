import styled from 'styled-components';

export const Background = styled.div`
  min-width: 1020px;
  background: #f2f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 1000px;
  padding: 52px 200px 100px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  border-radius: 40px;
  background: #fff;
`;

export const ProgressBar = styled.img`
  align-self: center;
`;

export const Text = styled.div`
  color: #2d2d2d;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.28px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputTitle = styled.div`
  color: #2d2d2d;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
`;

export const Button = styled.button`
  width: 90px;
  height: 36px;
  padding: 7px 12px;
  border: none;
  border-radius: 6px;
  background: #c5c5c5;
  cursor: pointer;

  position: relative;
  left: -100px;
  top: -2px;

  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const PwShowIcon = styled.img`
  width: 20px;
  height: 20px;
  fill: #c5c5c5;

  position: relative;
  left: -40px;
  top: 3px;

  cursor: pointer;
`;
