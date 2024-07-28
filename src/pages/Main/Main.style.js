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
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
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
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
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
  opacity: 0px;
`;

export const AnimalChoiceContainer = styled.div`
  width: 970px;
  height: 36px;
  gap: 8px;
  opacity: 0px;
  display: flex;
`;

export const BreederList = styled.div`
  width: 970px;
  height: 200px;
  opacity: 0px;
  display: flex;
  gap: 16px;

  align-items: center;
`;

export const MeetingBreederCard = styled.div`
  width: 166px;
  height: 150px;
  margin: 20px 0 0 0;
  padding: 16px;
  gap: 0px;
  border-radius: 12px;
  justify: space-between;
  opacity: 0px;

  background-color: #f2f2f2;

  &:hover {
    background-color: #c5c5c5;
  }
`;
export const BreederCard = styled.div`
  width: 166px;
  height: 150px;
  margin: 20px 0 0 0;
  padding: 16px;
  gap: 0px;
  border-radius: 12px;
  justify: space-between;
  opacity: 0px;
  background-color: #fafafa;

  &:hover {
    background-color: #c5c5c5;
  }
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

  display: flex; // 플렉스 컨테이너로 설정
  justify-content: space-between; // 좌우로 요소를 정렬
  align-items: center; // 세로 정렬
`;

export const LinkText = styled.span`
  width: 75px;
  height: 24px;
  gap: 0px;
  opacity: 0px;

  font-family: Noto Sans KR;
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

  background-color: #fafafa;

  align-items: center;
`;

export const InfoCard = styled.div`
  width: 247px;
  height: 264px;
  padding: 0px 8px 0px 8px;
  gap: 0px;
  opacity: 0px;
`;

export const InfoCardImg = styled.div`
  width: 231px;
  height: 231px;
  padding: 1px 0px 0px 0px;
  gap: 0px;
  border-radius: 8px;
  border: 1px;
  opacity: 0px;

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

  font-family: Noto Sans KR;
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
`;

export const ReviewCardImg = styled.div`
  width: 313px;
  height: 207px;
  gap: 0px;
  border-radius: 8px;
  border: 1px 0px 0px 0px;
  opacity: 0px;

  border: 1px solid #f2f2f2;

  position: relative;
`;

export const ReviewDetail = styled.div`
  width: 313px;
  height: 24px;
  gap: 0px;
  opacity: 0px;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  margin: 5px 0 0 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
