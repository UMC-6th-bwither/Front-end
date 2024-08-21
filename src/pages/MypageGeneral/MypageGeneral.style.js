import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components with common styles
const commonFlexColumn = `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const commonTextStyles = `
  font-family: 'Noto Sans KR';
  color: #272727;
`;

export const Border = styled.div`
  ${commonFlexColumn}
  align-items: center;
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  gap: 86px;
  padding-top: 136px;
  padding-bottom: 300px;
`;

export const TopContainer = styled.div`
  ${commonFlexColumn}
  gap: 80px;
  align-self: stretch;
`;

export const RecentContainer = styled.div`
  ${commonFlexColumn}
  gap: 48px;
  align-self: stretch;
`;

export const ProfileContainer = styled.div`
  ${commonFlexColumn}
  gap: 32px;
  align-self: stretch;
`;

export const Title = styled.div`
  ${commonTextStyles}
  font-size: 24px;
  font-weight: 700;
  line-height: 36px; /* 150% */
`;

export const Profile = styled.div`
  display: flex;
  padding: 36px 28px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 2px 20px 0px rgba(148, 156, 163, 0.15);
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  .profile_img_wrapper {
    width: 120px;
    height: 120px;
    border-radius: 50%; /* 동그란 이미지 */
    overflow: hidden; /* 이미지가 컨테이너를 넘지 않도록 */
  }

  .profile_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%; /* 이미지를 동그랗게 만듭니다 */
  }
`;

export const Info = styled.div`
  ${commonFlexColumn}
  gap: 6px;

  .name {
    color: var(--black, #272727);
    font-family: 'Noto Sans KR';
    font-size: 20px;
    font-style: normal;
    font-weight: 350;
    line-height: 21px; /* 105% */
    letter-spacing: 0.8px;
  }
  .email {
    color: var(--Grey_text, #737373);
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-style: normal;
    font-weight: 350;
    line-height: 21px; /* 150% */
    letter-spacing: 0.56px;
  }
`;

export const Button = styled.div`
  display: flex;
  padding: 12px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid #fe834d;
  background: #fff;
`;

export const ReservationContainer = styled.div`
  ${commonFlexColumn}
  gap: 12px;
  align-self: stretch;
  .resTitle {
    ${commonTextStyles}
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Reservation = styled.div`
  display: flex;
  width: 970px;
  padding: 24px 18px 34px 28px;
  align-items: center;
  border-radius: 12px;
  background: #f8f8f8;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ResContent = styled.div`
  display: flex;
  align-items: center;

  .content {
    ${commonFlexColumn}
    gap: 12px;
    flex: 1 0 0;
    width: 894px;
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Recent = styled.div`
  ${commonFlexColumn}
  gap: 12px;
  align-self: stretch;
  overflow: visible;
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 500;
`;

export const SliderContainer = styled.div`
  position: relative;
  width: 972px;
  height: 180px;
  position: relative;
  align-items: flex-end;
  margin: 0 auto;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 30%; /* 그라데이션 너비 조정 */
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0)
    );
    pointer-events: none; /* 그라데이션이 클릭을 방해하지 않도록 설정 */
    z-index: 1; /* 그라데이션이 슬라이드 위에 표시되도록 설정 */
  }
`;

export const SliderBtn = styled.button`
z-index: 2;
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
    opacity: 0.5;
  }
`;

export const FootpintLine = styled.img`
  padding: 170px 0;
`;

export const BottomContainer = styled.div`
  ${commonFlexColumn}
  gap: 72px;
`;

export const SectionContainer = styled.div`
  ${commonFlexColumn}
  width: 970px;
  gap: 24px;

  .title {
    ${commonTextStyles}
    font-size: 24px;
    font-weight: 700;
    line-height: 36px; /* 150% */
    padding-bottom: 20px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 32px;
      height: 4px;
      background-color: #fe834d;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

export const SectionLinks = styled.div`
  ${commonFlexColumn}
  padding-left: 8px;
  gap: 16px;
`;

export const NavLink = styled(Link)`
  color: #444;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: -0.5px;
  text-decoration: none;
`;
