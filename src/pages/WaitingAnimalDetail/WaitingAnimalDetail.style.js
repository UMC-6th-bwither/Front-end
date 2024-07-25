import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 0 291px 0;
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
  gap: 48px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 18px;
`;

export const Image = styled.img`
  width: 360px;
  height: 360px;
  border-radius: 12px;
`;

export const InfoContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`;

export const Reservation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: #393939;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 32px;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ReservationPoint = styled.div`
  color: #f87b45;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  line-height: 21px;
  font-weight: 500;
`;

export const DogContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 21px;
`;

export const DogName = styled.h2`
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  line-height: 21px;
  margin-right: 11px;
`;

export const DogInfo = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  color: var(--black, #272727);
  font-style: normal;
  line-height: 21px;
  strong {
    color: #737373;
  }
  margin-bottom: 20px;
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
  gap: 10px;
  margin-top: auto;
`;

export const InfoWrapper = styled.div`
  width: 100%;
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
