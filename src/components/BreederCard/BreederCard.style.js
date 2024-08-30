import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 970px;
  height: 188px;
  justify: space-between;
  opacity: 0px;
  align-items: center;
  opacity: 1;
`;
const Click = styled.div`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex: 1;
`;
const PhotoContainer = styled.div`
  width: 188px;
  height: 188px;
  border-radius: 12px;
  opacity: 0px;
  background: #d9d9d9;

  .photo {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const InfoContainer = styled.div`
  margin: 0px 50px;
  letter-spacing: -0.2800000011920929px;
  color: #272727;
  line-height: 16px;

  .location {
    margin: 10px 0;
    font-family: 'Noto Sans KR';
    font-size: 15px;
    font-weight: 350;
    text-align: left;
    color: #737373;
  }

  .name {
    font-family: 'Pretendard Variable';
    font-size: 22px;
    font-weight: 700;
    text-align: center;
  }

  .info {
    margin: 8px 0;
    font-family: 'Noto Sans KR';
    font-size: 15px;
    font-weight: 400;
    text-align: left;
  }
`;

const SubInfo = styled.div`
  margin: 30px 0 0 0;

  strong {
    margin: 0 0 0 5px;
    font-family: 'Pretendard Variable';
    font-size: 16px;
    font-weight: 700;
    text-align: left;
  }

  span {
    margin: 0 0 0 5px;
  }
`;

const CareerBadge = styled.div`
  width: 140px;
  height: 24px;
  padding-top: 10px;
  gap: 6px;
  opacity: 0px;

  display: flex;
  flex-direction: row;
  position: relative;

  .badge {
    padding: 4px 8px 4px 8px;
    gap: 10px;
    border-radius: 4px 0px 0px 0px;
    opacity: 0px;
    background: #fffdf2;

    height: 16px;
    gap: 0px;
    opacity: 0px;
    font-family: 'Noto Sans KR';
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.2800000011920929px;
    text-align: center;
    color: #f87b45;
  }
`;

const BookmarkBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  cursor: pointer;
  right: 5%;
  top: 5%;
`;

export {
  CardBox,
  Click,
  PhotoContainer,
  InfoContainer,
  SubInfo,
  CareerBadge,
  BookmarkBtn,
};
