import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
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

export const NewsContent = styled.div`
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
  height: 182px;
  opacity: 0px;
  display: flex;
  gap: 16px;

  align-items: center; /* 수직 중앙 정렬 */
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

export const BreederInfoContainer = styled.div`
  width: 100%;

  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
`;
