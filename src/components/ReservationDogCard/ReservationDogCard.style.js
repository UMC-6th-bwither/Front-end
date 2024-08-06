import { styled } from 'styled-components';

const CardBox = styled.div`
  display: flex;
  width: 466px;
  height: 120px;
  gap: 48px;
`;

const ReservationBadge = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 10px 0px;
  background: #008080;
  color: #fffdf2;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  line-height: 21px; /* 150% */
`;

const PhotoContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  background: #d9d9d9;
`;
const InfoContainer = styled.div`
  width: 298px;
  heigth: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  color: #272727;
  line-height: 16px;

  .location {
    padding-bottom: 12px;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 350;
    text-align: left;
    color: #737373;
  }

  .name {
    font-family: 'Pretendard Variable';
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .breed {
    font-family: 'Pretendard Variable';
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    line-height: 24px;
  }
`;

const SubInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  span {
    color: #272727;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 350;
    line-height: 16px; /* 100% */
    letter-spacing: -0.28px;
    padding-left: 4px;
    paddin-right: 12px;
  }

  strong {
    color: #272727;
    font-family: 'Pretendard Variable';
    font-size: 16px;
    font-weight: 700;
    line-height: 16px; /* 100% */
    letter-spacing: -0.28px;
  }
`;
const BookmarkBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 5%;
  top: 5%;
`;

export {
  CardBox,
  ReservationBadge,
  PhotoContainer,
  InfoContainer,
  SubInfo,
  BookmarkBtn,
};
