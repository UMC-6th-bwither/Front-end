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
  padding-bottom: 105px;
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
  gap: 52px;
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
  line-height: 21px;
  width: 360px;
  height: 360px;
  border-radius: 12px;
  background-color: #f4f4f4;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  svg {
    display: ${({ hasImage }) => (hasImage ? 'none' : 'block')};
  }
`;

export const InfoContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const Name = styled.input`
  padding: 8px 10px 8px 0;
  gap: 8px;
  border-radius: 10px;
  margin-bottom: 12px;
  display: flex;
  width: 203px;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  border: none;
  align-self: flex-start;
  &::placeholder {
    color: #c5c5c5;
    font-family: 'Noto Sans KR';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
  }
`;

export const BreedSelect = styled.select`
  display: flex;
  width: 260px;
  height: 46px;
  padding: 8px 10px;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  background: #fff;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 500;
  color: #c5c5c5;
  margin-right: 10px;

  &:focus {
    outline: none;
    border-color: #fe834d;
  }

  option[value=''] {
    color: #c5c5c5;
  }
`;

export const BreedOption = styled.option`
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 400;
  color: #323232;
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
  background: ${({ selected }) => (selected ? '#F87B45' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: #f87b45;
    color: #fff;
  }
`;

export const DogInfo = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  strong {
    color: #737373;
    width: 34px;
    height: 26px;
    margin-right: 18px;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
  margin-bottom: 24px;
`;

export const DogInfoText = styled.input`
  display: flex;
  align-items: center;
  width: 227px;
  align-self: stretch;
  border-radius: 10px;
  padding: 8px 10px;

  border: none;
  &::placeholder {
    color: #c5c5c5;
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-weight: 500;
  }
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
export const ThumbnailContainer = styled.div`
  position: relative;
  overflow: visible;
  width: 970px;
  align-self: flex-start;
  margin-bottom: 88px;
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 12px;
  border-radius: 4px;
`;

export const DogInfoTitle = styled.div`
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
  width: 90px;
  height: 40px;
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
export const ParentInfoTitleBox = styled.div`
  display: flex;
  width: 203px;
  padding: 8px 10px;
  align-items: center;
  border-radius: 10px;
`;

export const ParentInfoTitle = styled.div`
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
  margin-bottom: 32px;
`;

export const ParentDogCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 18px;
  gap: 48px;
  padding-top: 24px;
`;

export const ParentDogImage = styled.div`
  width: 296px;
  height: 296px;
  border-radius: 12px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #c5c5c5;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  gap: 10px;
  line-height: 21px;
`;

export const ParentDogInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 610px;
  gap: 10px;
  padding: 2px 0;
`;

export const ParentDogNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 8px;
`;

export const ParentDogName = styled.input`
  display: flex;
  width: 203px;
  padding: 8px 10px;
  align-items: center;
  border-radius: 10px;
  border: none;
  &::placeholder {
    color: #c5c5c5;
    font-family: 'Noto Sans KR';
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.5px;
  }
`;

export const ParentDogGenderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8.5px;
  align-items: center;
`;

export const ParentDogGender = styled.div`
  color: #737373;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 22px;
  line-height: 16px;
  letter-spacing: -0.28px;
`;

export const ParentDogDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ParentDogLabel = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 16px;
  color: #737373;
  line-height: 21px;
  margin-right: 8px;
  white-space: nowrap;
`;

export const ParentDogValue = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const ParentDogValueInput = styled.input`
  display: flex;
  padding: 8px 10px;
  width: 400px;
  align-items: center;
  border-radius: 10px;
  border: none;
  &::placeholder {
    color: #c5c5c5;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;
export const InfoFileBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`;

export const InfoFileBoxNameContainerWrapper = styled.div`
  display: flex;
  padding: 8px 0px 0px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

export const ParentInfoFileBox = styled.div`
  display: flex;
  padding: 8px 16px;
  width: 90px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid rgba(226, 226, 226, 0.5);
  background: #fff;
  white-space: nowrap;
`;

export const ConfirmBtn = styled.button`
  display: flex;
  width: 140px;
  height: 52px;
  padding: 6px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 1000px;
  border: none;
  background: #fe834d;
  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.5px;
  margin-top: 209px;
  cursor: pointer;

  &:hover {
    background: #f57137;
    border-color: #f57137;
  }
`;
