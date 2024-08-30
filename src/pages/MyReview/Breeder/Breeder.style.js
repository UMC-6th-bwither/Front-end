/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;

  .scrap,
  .community {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    align-self: stretch;
  }
`;

export const MenuTitle = styled.div`
  position: relative;
  padding-bottom: 22px;

  color: #2d2d2d;
  font-family: 'Noto Sans KR';
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 72.727% */
  letter-spacing: -0.28px;

  &::after {
    display: block;
    position: relative;
    content: '';
    bottom: -22px;
    width: 32px;
    height: 2px;
    background: var(--main, #fe834d);
  }
`;

export const MenuSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MenuSubtitleActive = styled(Link)`
  color: var(--main, #fe834d);
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
`;

export const MenuSubtitleInActive = styled(Link)`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  text-decoration: none;
`;

export const Border = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8vw;
  padding: 80px 0;
`;

export const MainContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 52px;
`;

export const TopContainer = styled.div`
  display: flex;
  width: 970px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  .bookmark {
    position: absolute;
    padding: 11.5px 18px;
    z-index: 1;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  line-height: 36px; /* 150% */
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 970px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 970px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  min-height: 100vh;

  &.empty {
    min-height: 100vh; /* 'empty' 클래스가 있을 때만 적용 */
  }
  .dogCard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
  }
`;

export const NothingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .nothing_text {
    align-self: stretch;
    color: var(--Grey_icon, #c5c5c5);
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
