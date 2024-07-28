import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  padding-top: 64px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 21px;
  font-family: 'Noto Sans KR';
  margin-bottom: 45px;
  align-self: flex-start;
  width: 100%;
  max-width: 100%;
`;

export const Card = styled.div`
  display: flex;
  overflow: hidden;
  gap: 42px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 28px;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #c5c5c5;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  gap: 10px;
  line-height: 21px;
  width: 360px;
  height: 360px;
  border-radius: 12px;
  background-color: #f4f4f4;
`;

export const InfoContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`;

export const DogContainer = styled.div`
  display: flex;
  padding: 8px 10px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 10px;
`;

export const Name = styled.h2`
  color: var(--Grey_icon, #c5c5c5);
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const AnimalSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const AnimalSelect = styled.div`
  display: flex;
  height: 32px;
  padding: 5px 13px 6px 13px;
  align-items: center;
  border-radius: 28px;
  border: 1px solid #e1e1e1;
  background: #fff;
`;

export const DogInfo = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
  p {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  strong {
    color: #737373;
    width: 34px;
    height: 26px;
    margin-right: 18px;
    white-space: nowrap;
  }
  margin-bottom: 24px;
`;

export const DogInfoText = styled.div`
  color: #c5c5c5;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 500;
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DogInfoInput = styled.input`
  display: flex;
  width: 184px;
  height: 42px;
  padding-left: 18px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  background: #fff;
  &::placeholder {
    color: #dadada;
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-weight: 500;
  }
`;
export const CustomDatePicker = styled(DatePicker)`
  .react-datepicker__header {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    font-size: 0.8rem;
  }

  .react-datepicker__day {
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }

  .react-datepicker {
    font-size: 0.8rem;
    position: absolute;
    right: 0;
    z-index: 1000;
  }

  .react-datepicker__month-container {
    width: 100px;
  }

  .react-datepicker__day-names,
  .react-datepicker__week,
  .react-datepicker__day {
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }

  .react-datepicker__input-container input {
    width: 8rem;
    height: 2rem;
    font-size: 0.8rem;
  }
`;

export const SvgIcon = styled.svg`
  position: absolute;
  right: 18px;
  top: 50%;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
  pointer-events: none;
  cursor: pointer;
`;

export const StatusContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 28px;
`;

export const Status = styled.div`
  padding: 5px 10px;
  border-radius: 15px;
  background-color: #e0f7fa;
  color: #00796b;
  font-size: 0.8rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: auto;
`;
export const ButtonFileName = styled.div`
  overflow: hidden;
  color: #737373;
  text-overflow: ellipsis;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  line-height: 24px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
`;
export const SliderContainer = styled.div`
  position: relative;
  overflow: visible;
  width: 970px;

  .react-multi-carousel-item {
    display: flex;
    width: 355px;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }
  align-self: flex-start;
  margin-bottom: 88px;
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Arrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 2;
  user-select: none;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-top: 2px solid #888888;
    border-right: 2px solid #888888;
    transform: rotate(45deg);
  }

  &.left {
    left: -15px;
    &::before {
      transform: rotate(-135deg);
    }
  }

  &.right {
    left: 948px;
  }
`;

export const InfoTitle = styled.div`
  font-family: 'Noto Sans KR';
  color: #323232;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

export const InfoInput = styled.textarea`
  display: flex;
  width: 970px;
  height: 112px;
  padding: 8px 10px 8px 18px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  resize: none;
  background: #fff;
  &::placeholder {
    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 350;
    line-height: 24px;
  }
`;
export const InfoFileBox = styled.div`
  display: flex;
  padding: 8px 16px;
  width: 60px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid rgba(226, 226, 226, 0.5);
  background: #fff;
  white-space: nowrap;
  margin-top: 20px;
  margin-bottom: 24px;
`;

export const InfoFileBoxNameContainer = styled.div`
  display: flex;
  width: 460px;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
`;

export const InfoFileBoxName = styled.div`
  overflow: hidden;
  color: #737373;
  text-overflow: ellipsis;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  line-height: 24px;
`;
export const InfoItem = styled.div`
  margin-bottom: 48px;
  margin-bottom: 64px;
`;

export const InfoIcon = styled.svg`
  margin-left: 10px;
`;

export const MenuContentWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 120px;
`;

export const ParentDogCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 18px;
  gap: 48px;
  padding-top: 24px;
`;

export const ParentDogImage = styled.div`
  width: 188px;
  height: 188px;
  border-radius: 12px;
  background-color: #d9d9d9;
`;

export const ParentDogInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  padding: 2px 0;
`;
export const ParentDogNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ParentDogName = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 600;
  color: #323232;
  margin-right: 10px;
`;
export const ParentDogNameGender = styled.div`
  color: #737373;
  letter-spacing: -0.28px;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 16px;
  margin-right: 8.5px;
`;

export const ParentDogDetail = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ParentDogLabel = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 16px;
  color: #737373;
  line-height: 21px;
  margin-right: 8px;
`;

export const ParentDogValue = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 16px;
  line-height: 21px;
`;
