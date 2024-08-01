import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuTitle = styled.div`
  position: relative;
  padding-bottom: 50px;

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
