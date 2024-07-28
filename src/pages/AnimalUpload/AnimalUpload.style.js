import styled from 'styled-components';

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

export const DogInfoInput = styled.input`
  display: flex;
  width: 184px;
  height: 42px;
  padding: 8px 18px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  background: #fff;
  color: #dadada;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
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
`;

export const InfoContent = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 24px;
  letter-spacing: -0.3px;
`;

export const InfoItem = styled.div`
  margin-bottom: 48px;
`;

export const InfoIcon = styled.svg`
  margin-left: 10px;
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

export const BreederInfoTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0 6px 0;
`;

export const BreederInfoTitle = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.7px;
  margin-right: 19px;
`;

export const BreederInfoLocation = styled.div`
  display: flex;
  align-items: center;
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21px;
  letter-spacing: -0.3px;
`;

export const BreederInfoLocationIcon1 = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 2px;
`;

export const BreederInfoLocationIcon2 = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

export const BreederInfoLabelBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-top: 18px;
  margin-bottom: 34px;
`;

export const BreederInfoBottomBox = styled.div`
  display: flex;
  height: 100px;

  flex-direction: row;
  border-radius: 8px;
  background: #fafafa;
`;

export const BreederInfoBottomTitle = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21px;
`;

export const BreederInfoBottomContent = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;

export const BreederInfoBottom1 = styled.div`
  display: flex;
  padding: 18px 87.34px 18.5px 87.33px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: -0.5px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const BreederInfoBottom2 = styled.div`
  display: flex;
  padding: 18px 69.56px 18.5px 69.55px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;

export const BreederInfoBottom3 = styled.div`
  display: flex;
  padding: 18px 87.06px 18.5px 87.05px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: -0.5px;
  flex: 1 0 0;
  align-self: stretch;
`;
export const BreederInfoBottomReviewBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BreederInfoBottomReviewIcon = styled.svg`
  margin-right: 4px;
`;

export const BreederInfoBottomReviewText1 = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-right: 2px;
`;

export const BreederInfoBottomReviewText2 = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 18px;
`;
