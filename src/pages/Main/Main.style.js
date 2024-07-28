import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  padding: 0 0 250px 0;
`;

export const HeadLineContainer = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  gap: 0px;
  opacity: 0px;
`;

export const HeadLiner = styled.h1`
  width: 600px;
  height: 48px;
  gap: 0px;
  opacity: 0px;
  font-family: 'Noto Sans KR';
  font-size: 28px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.6000000238418579px;

  span {
    font-family: 'Noto Sans KR';
    font-size: 28px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.6000000238418579px;
    text-align: left;
    color: #ff7a00;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0px;
  opacity: 0px;
`;

export const NewsContent = styled.img`
  width: 965px;
  height: 316px;
  top: 248px;
  gap: 8px;
  border-radius: 8px;
  opacity: 0px;
  background-color: #d9d9d9;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  z-index: 2;
  margin: -20px;
  background-color: #ffffff; 
  border: 1px solid #dcdcdc; 
  border-radius: 50%; 
  cursor: pointer; 
  display: flex; 
  align-items: center;
  justify-content: center; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 

  transition:
    box-shadow 0.3s ease,
    background-color 0.3s ease; 
    border-color 0.3s ease; 

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #f0f0f0; 
    border-color: #f0f0f0;
  }
`;

export const PBContainer = styled.div`
  width: 970px;
  height: 238px;
  gap: 20px;
  opacity: 1px;
`;

export const AnimalChoiceContainer = styled.div`
  width: 970px;
  height: 36px;
  gap: 8px;
  opacity: 1px;
  display: flex;
`;

export const BreederList = styled.div`
  width: 970px;
  height: 200px;
  opacity: 1px;
  display: flex;
  gap: 16px;

  align-items: center;
`;

export const MeetingBreederCard = styled.div`
  width: 166px;
  height: 150px;
  margin: 20px 0 0 0;
  padding: 16px;
  border-radius: 12px;
  opacity: 1px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  background-color: #f2f2f2;
  &:hover {
    background-color: #c5c5c5;
  }
`;

export const Img = styled.img`
  width: 56px;
  height: 56px;
  opacity: 1px;
`;

export const MeetingBreederText = styled.div`
  width: 150px;
  height: 50px;
  padding: 40px 0 0 0;
  opacity: 0px;

  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #272727;

  p {
    margin: 0;
  }
  span {
    color: #3056d7;
  }
`;

export const BreederCard = styled.div`
  width: 166px;
  height: 150px;
  margin: 20px 0 0 0;
  padding: 16px;
  border-radius: 12px;
  justify: space-between;

  background-color: #fafafa;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  transition:
    transform 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const BreederProfile = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 1000px;
  background: #d9d9d9;

  margin-bottom: 15px;
`;

export const BreederName = styled.div`
  width: 148px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #272727;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReviewStars = styled.div`
  height: 21px;
  gap: 4px;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #323232;

  align-self: flex-end;
  margin-top: -95px;
`;

export const BreederInfo = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 10px;
  font-weight: 350;
  line-height: 15px;
  text-align: left;
  color: #737373;
  margin-top: auto;
`;

export const PBContainerVer2 = styled.div`
  width: 970px;
  height: 748px;
  gap: 20px;
`;

export const BreederListVer2 = styled.div`
  width: 970px;
  height: 692px;
  gap: 18px;
`;

export const BreederCardVer2 = styled.div`
  width: 970px;
  height: 80px;
  padding: 28px 20px;
  margin: 15px 0;
  border-radius: 15px;
  box-shadow: 0px 6px 15px 0px #949ca31a;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const RankingNum = styled.div`
  width: 26px;
  margin-right: 15px;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

export const BreederProfileVer2 = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 1000px;
  background: #d9d9d9;

  margin-right: 20px;
`;

export const BreederDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BreederNameStars = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const BreederNameVer2 = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 700;
  color: #272727;

  margin-right: 10px;
`;

export const ReviewStarsVer2 = styled.span`
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 400;
  color: #323232;
`;

export const BreederInfoVer2 = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 18px;
  color: #737373;
`;

export const Theme = styled.div`
  padding: 70px 0 25px;
  text-align: left;
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  letter-spacing: -0.6000000238418579px;
  color: #323232;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkText = styled.span`
  width: 75px;
  height: 24px;
  gap: 0px;
  opacity: 0px;

  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;

  color: #fe834d;

  display: flex;
  align-items: center;
`;

export const CPContainer = styled.div`
  width: 970px;
  height: 324px;
  gap: 18px;
  opacity: 0px;

  background-color: #fafafa;
`;

export const IAContainer = styled.div`
  display: flex;
  width: 970px;
  height: 264px;
  gap: 0px;
  opacity: 0px;

  align-items: center;
`;

export const InfoCard = styled.div`
  width: 247px;
  height: 264px;
  padding: 0px 8px 0px 8px;
  gap: 0px;
  opacity: 0px;

  cursor: pointer;
  transition:
    transform 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const InfoCardImg = styled.div`
  width: 231px;
  height: 231px;
  padding: 1px 0px 0px 0px;
  gap: 0px;
  border-radius: 8px;
  border: 1px;
  opacity: 0px;

  background-color: gray;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const InfoTitle = styled.div`
  width: 197px;
  height: 20px;
  gap: 0px;
  opacity: 0px;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
  text-align: left;

  color: #ffffff;

  margin: 0 0 21px 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProFileContainer = styled.div`
  display: flex;
  width: 231px;
  height: 33px;
  margin: 10px 0 0 0;
  gap: 0px;
  border-radius: 8px;
  opacity: 0px;
`;

export const ProfileImg = styled.div`
  width: 20px;
  height: 20px;
  gap: 0px;
  border-radius: 10px;
  border: 1px;
  opacity: 0px;
  background: #e1e1e1;
  border: 1px solid #e1e1e1;

  background-color: red;
`;

export const ProFileName = styled.div`
  width: 98px;
  height: 20px;
  gap: 8px;
  opacity: 0px;
  font-family: 'Noto Sans KR';
  font-weight: 350;
  text-align: left;
  margin: 0 0 0 10px;

  color: #323232;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ARContainer = styled.div`
  display: flex;
  align-items: center;
  width: 986px;
  height: 244px;
  gap: 0px;
  opacity: 0px;

  color: #323232;
`;

export const ReviewCard = styled.div`
  width: 313px;
  height: 239px;
  gap: 8px;
  opacity: 0px;

  margin: 10px;

  cursor: pointer;
  transition:
    transform 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ReviewCardImg = styled.div`
  width: 313px;
  height: 207px;
  gap: 0px;
  border-radius: 8px;
  border: 1px 0px 0px 0px;
  opacity: 0px;

  border: 1px solid #f2f2f2;

  background-color: gray;

  position: relative;
`;

export const ReviewDetail = styled.div`
  width: 313px;
  height: 24px;
  gap: 0px;
  opacity: 0px;

  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  margin: 5px 0 0 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
