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

export const SubText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
  width: 420px;
  height: 90px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputWrapper2 = styled.div`
  width: 678px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
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

export const InputTitle2 = styled(InputTitle)`
  margin-bottom: 8px;
`;

export const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 678px;
`;

export const InputBoxWrapper2 = styled.div`
  width: 495px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const InputBox2 = styled(InputBox)`
  width: 100%;
  margin-top: 8px;
  &:focus {
    border: 2px solid #fe834d;
    outline: none;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InputBox3 = styled(InputBox)`
  width: 100%;
  &:focus {
    border: 2px solid #fe834d;
    outline: none;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InputUnderText = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px;
`;

export const Button = styled.button`
  width: 90px;
  height: 36px;
  padding: 7px 12px;
  border: none;
  border-radius: 6px;
  background: ${(props) => (props.clicked ? '#c5c5c5' : '#FE834D')};
  cursor: pointer;
  &:hover {
    background: #f57137;
  }

  position: relative;
  left: 320px;
  top: -44px;
  z-index: 99;

  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const PostCodeBtn = styled.button`
  display: flex;
  width: 136px;
  height: 52px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #fe834d;
  background: #fffdf2;
  margin-top: 8px;

  color: #fe834d;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;
  &:hover {
    background: #ffddc5;
  }
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

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const RadioBtn = styled.input`
  width: 10px;
  height: 10px;
  padding: 5px;
  appearance: none;
  fill: #fff;
  border: 5px solid rgba(197, 197, 197, 0.5);
  border-radius: 50%;
  &:checked {
    width: 4px;
    height: 4px;
    padding: 5px;
    background-color: #fe834d; // 체크 시 내부 원 색상
    border: 3px solid #fff; // 라인이 아닌, 라인과 원 사이 색상
    box-shadow: 0 0 0 3px #fe834d; // 라인
  }
`;

export const Label = styled.label`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  cursor: pointer;
  &:hover {
    color: #fe834d;
  }
`;

export const Dropdown = styled.input`
  display: flex;
  width: 136px;
  height: 52px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  background: #fff;
  color: #dadada;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

export const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  align-items: center;
`;

export const TimeWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const TimeText = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
`;

export const BtnWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const BtnWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

export const CheckWrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  left: 250px;
  gap: 10px;
`;

export const CheckBox = styled.input`
  display: none;
`;

export const Check = styled.img`
  width: 21px;
  height: 21px;
  cursor: pointer;
`;

export const CheckText = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Gap = styled.div`
  height: 10px;
  border: none;
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

export const Complete = styled(Error)`
  color: #3056d7;
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

export const CompleteCheck = styled(FailX)`
  background: #3056d7;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;
