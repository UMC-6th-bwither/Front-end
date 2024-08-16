import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import Nextarrow from '../../../public/icons/signUp/datepicker_arrow_next.svg';
import Previusarrow from '../../../public/icons/signUp/datepicker_arrow_previous.svg';
import 'react-datepicker/dist/react-datepicker.css';

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

export const Gap = styled.div`
  height: 10px;
  border: none;
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
  height: 86px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .InputButtonWrapper {
    display: inline-block;
    height: 52px;
  }
`;

export const InputWrapper2 = styled.div`
  width: 678px;
  top: 0;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
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

export const Star = styled.span`
  color: #fa5963;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  width: 678px;
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
`;

export const InputBox3 = styled(InputBox)`
  width: 176px;
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

export const Button = styled.button`
  width: 90px;
  height: 36px;
  padding: 7px 12px;
  border: none;
  border-radius: 6px;
  background: #c5c5c5;
  cursor: pointer;
  &:hover {
    background: #f87b45;
  }

  position: relative;
  left: 320px;
  top: -44px;

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

export const PlusBtn = styled.button`
  align-self: center;
  display: flex;
  width: 145px;
  height: 52px;
  padding: 0px 24px;
  align-items: center;
  gap: 6px;
  border: none;
  border-radius: 20px;
  background: #fe834d;
  cursor: pointer;

  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    background: #d97143;
  }
`;

export const CodeRequestButton = styled.button`
  display: flex;
  width: 90px;
  height: 36px;
  padding: 7px 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 6px;
  background: #c5c5c5;
  position: relative;
  left: 320px;
  top: -44px;
  cursor: pointer;

  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    background: #f87b45;
  }
  &:active {
    background: #f57137;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  width: 618px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Choice = styled.div`
  display: flex;
  width: 294px;
  padding: 24px 0px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #f4f4f4;
  position: relative;
  cursor: pointer;

  .text {
    color: #272727;
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    z-index: 3;
  }
  &:hover {
    background: #fffdf2;
  }
  &.active {
    border: 2px solid #fe834d;
    background: #fffdf2;
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 9px;
      background-color: #fe834d;
      position: absolute;
      left: 116px;
      bottom: 24px;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    right: 20px;
    top: 19px;
  }
`;

export const SearchBar = styled.input`
  display: flex;
  width: 618px;
  height: 62px;
  padding: 8px 20px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  background: #fff;

  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 500;
  &::placeholder {
    color: #dadada;
  }
`;

export const DropDown = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  cursor: pointer;
`;

export const DropItem = styled.div`
  display: flex;
  height: 62px;
  padding: 8px 20px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: #fff;

  color: #dadada;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    color: #737373;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* 줄 바꿈을 허용합니다 */
  align-items: flex-start;
  gap: 12px;
`;

export const BreedTag = styled.div`
  display: flex;
  padding: 6px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #fe834d;
  background: #fff;

  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;

  img {
    cursor: pointer;
  }
`;

export const UploadFileWrapper = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

export const FileUpload = styled.div`
  display: flex;
  width: 132px;
  height: 132px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 10px;
  border: 2px dashed #f1f1f1;
  background: #fff;

  .text {
    color: #272727;
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const DateInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .react-datepicker__navigation--previous {
    background: url(${Previusarrow}) no-repeat;
    border: none;
  }
  .react-datepicker__navigation--next {
    background: url(${Nextarrow}) no-repeat;
    border: none;
  }
  .react-datepicker__header {
    border: none;
    background-color: #fff;

    color: #000;
    font-family: 'Pretendard Variable';
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.28px;
  }
  .react-datepicker__month-container {
    display: flex;
    width: 388px;
    height: 270px;
    padding: 32px 0px 20px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 2px solid #f1f1f1;
    background: var(--white);
  }
  .react-datepicker-popper {
    width: 50%;
  }
  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .react-datepicker__month-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 32px;
  }
  .react-datepicker__month-text {
    display: flex;
    width: 46px;
    height: 26px;
    padding: 9px 0px 11px 0px;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;

    color: var(--black, #272727);
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const CustomInput = styled.input`
  display: flex;
  width: 184px;
  height: 52px;
  padding: 8px 18px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  background: #fff;

  &::placeholder {
    color: #dadada;
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const CalendarIcon = styled.img`
  position: absolute;
  right: 18px;
`;

export const CustomDatePicker = styled(DatePicker)``;

export const Hyphen = styled.div`
  width: 18px;
  height: 3px;
  background: #d9d9d9;
`;

export const CheckWrapper = styled.div`
  display: flex;
  width: 88px;
  justify-content: space-between;
  align-items: flex-end;

  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  letter-spacing: 0.72px;
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

export const FailX = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 1000px;
  background: #e76467;
`;
