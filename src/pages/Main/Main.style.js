import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  padding: 0 0 250px 0;
`;

export const Layout = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  padding: 0 0 250px 0;
`;

export const HeadLineContainer = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 120px;

  position: relative;
  overflow: visible;
`;

export const HeadLiner = styled.h1`
  height: 48px;
  margin: 15px 0;
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
    color: #ff7a00;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0px;
`;

export const NewsContent = styled.img`
  width: 965px;
  height: 316px;
  top: 248px;
  border-radius: 8px;
  background-color: #d9d9d9;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  width: 40px;
  height: 40px; 
  z-index: 3;
  background-color: #ffffff; 
  border: 1px solid #dcdcdc; 
  border-radius: 50%; 
  cursor: pointer; 
  align-items: center;
  justify-content: center; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  opacity: 1;

  transition:
    box-shadow 0.3s ease,
    background-color 0.3s ease; 
    border-color 0.3s ease; 

  &:not(:disabled):hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #f0f0f0; 
    border-color: #f0f0f0;
  }

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
`;

export const PBContainer = styled.div`
  width: 980px;
  height: 238px;
  margin: 0 auto;
`;

export const AnimalChoiceContainer = styled.div`
  width: 980px;
  height: 36px;
  gap: 8px;
  display: flex;
`;

export const BreederList = styled.div`
  width: 980px;
  height: 200px;
  gap: 16px;
  align-items: center;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;

export const MeetingBreederCard = styled.div`
  width: 150px !important;
  height: 150px;
  margin: 20px 0 0 0;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  background-color: #f2f2f2;
  &:hover {
    background-color: #e3e3e3;
  }
`;

export const Img = styled.img`
  width: 56px;
  height: 56px;
`;

export const MeetingBreederText = styled.div`
  width: 150px;
  height: 50px;
  padding: 40px 0 0 0;

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
  width: 150px !important;
  height: 150px;
  margin: 20px 5px;
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
    background-color: #e3e3e3;
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
  height: 135px;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: right;
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

  &:hover {
    background-color: #f5f5f5;
  }
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

  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;

  color: #fe834d;

  display: flex;
  align-items: center;
`;

export const CPContainer = styled.div`
  width: 980px;
  height: 324px;
  gap: 18px;
  margin: 0 auto;

  background-color: #fafafa;
`;

export const IAContainer = styled.div`
  width: 980px;
  height: 264px;
  position: relative;
  align-items: center;
  margin: 0 auto;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;

export const InfoCard = styled.div`
  width: 247px;
  height: 264px;
  cursor: pointer;
  margin: 10px 7px;
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
  gap: 0px;
  border-radius: 8px;
  border: 1px;

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
`;

export const ProfileImg = styled.div`
  width: 20px;
  height: 20px;
  gap: 0px;
  border-radius: 10px;
  border: 1px;
  background: #e1e1e1;
  border: 1px solid #e1e1e1;

  background-color: red;
`;

export const ProFileName = styled.div`
  width: 98px;
  height: 20px;
  gap: 8px;
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
  position: relative;
  align-items: center;
  width: 980px;
  height: 244px;
  margin: 0 auto;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  color: #323232;
`;

export const ReviewCard = styled.div`
  width: 313px;
  height: 239px;
  gap: 8px;

  margin: 10px 5px;

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

  border: 1px solid #f2f2f2;

  background-color: gray;

  position: relative;
`;

export const ReviewDetail = styled.div`
  width: 313px;
  height: 24px;
  gap: 0px;

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
