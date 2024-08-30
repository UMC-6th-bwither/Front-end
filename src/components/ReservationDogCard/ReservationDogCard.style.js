import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const CardBox = styled(Link)`
  display: flex;
  height: 125px;
  gap: 48px;
  text-decoration: none; /* 밑줄 제거 */
`;

const PhotoContainer = styled.div`
  width: 120px;
  height: 125px;
  border-radius: 12px;
  background: #d9d9d9;

  .photo {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const InfoContainer = styled.div`
  heigth: 125px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  .location {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-style: normal;
    font-weight: 350;
    line-height: 21px; /* 150% */
    letter-spacing: -0.3px;
  }

  .breederName {
    color: #323232;
    font-family: 'Noto Sans KR';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.7px;
  }

  .phone {
    color: var(--Grey_text, #737373);
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.7px;
  }

  .badges {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export { CardBox, PhotoContainer, InfoContainer };
