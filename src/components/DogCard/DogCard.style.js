import { styled } from 'styled-components';

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 970px;
  height: 188px;
  justify: space-between;
  opacity: 0px;
`;
const PhotoContainer = styled.div`
  width: 188px;
  height: 188px;
  border-radius: 12px;
  opacity: 0px;
  background: #d9d9d9;
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

  .breed {
    font-family: 'Pretendard Variable';
    font-size: 16px;
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
  margin: 25px 0 0 0;

  strong {
    margin: 0 0 0 8px;
    font-family: 'Pretendard Variable';
    font-size: 16px;
    font-weight: 700;
    text-align: left;
  }

  span {
    margin: 0 0 0 5px;
  }
`;
const BookmarkBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 5%;
  top: 5%;
`;

export { CardBox, PhotoContainer, InfoContainer, SubInfo, BookmarkBtn };
