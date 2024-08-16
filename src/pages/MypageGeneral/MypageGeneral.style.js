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
  gap: 80px;
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
  .profile_img {
    width: 120px;
    height: 120px;
    border-radius: 120px;
  }
`;

export const Info = styled.div`
  ${commonFlexColumn}
  gap: 6px;
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
  gap: 20px;
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
  .waitingnum {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .emphasis {
    color: #fe834d;
    font-weight: 700;
  }
  .rightArrowButton {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  .rightArrow {
    display: block;
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
  overflow: visible;
  width: 972px;

  .carousel {
    width: 972px;
    height: 200px;
    padding: 10px 15px;
  }
  .react-multi-carousel-item {
    display: flex;
    width: 355px;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }
  align-self: flex-start;
`;

export const Arrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  width: 48px;
  height: 48px;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 10;
  user-select: none;

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-top: 2px solid #888888;
    border-right: 2px solid #888888;
    transform: rotate(45deg);
  }

  &.left {
    left: -24px;
    &::before {
      transform: rotate(-135deg);
    }
  }

  &.right {
    left: 948px;
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
