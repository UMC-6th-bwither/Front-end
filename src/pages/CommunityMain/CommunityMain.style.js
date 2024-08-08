import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8vw;
  padding: 80px 0;
`;

export const Container = styled.div`
  width: 970px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

export const QuesInfoDailyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 970px;
  height: 676px;
  gap: 18px;
  opacity: 0px;
`;

export const InfoDailyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 476px;
  height: 676px;
  gap: 18px;
  opacity: 0px;
`;

export const QuestionBoard = styled.div`
  width: 476px;
  height: 676px;
  padding: 28px 24px 33px 24px;
  gap: 28px;
  border-radius: 20px;
  border: 2px;
  opacity: 0px;
  border: 2px solid #f1f1f1;
`;

export const InformationBoard = styled.div`
  width: 476px;
  height: 329px;
  padding: 28px 24px 28px 24px;
  gap: 28px;
  border-radius: 20px;
  border: 2px;
  opacity: 0px;
  border: 2px solid #f1f1f1;
`;

export const DailyBoard = styled.div`
  width: 476px;
  height: 329px;
  padding: 28px 24px 28px 24px;
  gap: 28px;
  border-radius: 20px;
  border: 2px;
  opacity: 0px;
  border: 2px solid #f1f1f1;
`;

export const BreederTipsBoard = styled.div`
  width: 970px;
  padding: 28px 24px 10px;
  gap: 28px;
  border-radius: 20px;
  border: 2px;
  opacity: 0px;
  border: 2px solid #f1f1f1;
`;

export const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 922px;
  height: 115px;
  justify: space-between;
`;

export const Index = styled.div`
  width: 28px;
  height: 18px;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 350;
  line-height: 18px;
  letter-spacing: -0.20000000298023224px;
  text-align: center;
  color: var(--black, #272727);
  margin-right: 20px;
`;

export const CardWrapper = styled.div`
  width: 865px;
  height: 115px;
  gap: 32px;
  opacity: 0px;
`;

export const DogCatTipContainer = styled.div`
  width: 970px;
  height: 318px;
  display: flex;
  flex-direction: row;
  gap: 18px;
  opacity: 0px;
`;

export const DogTipBoard = styled.div`
  width: 476px;
  height: 318px;
  padding: 28px 24px;
  gap: 28px;
  border-radius: 20px;
  border: 2px;
  opacity: 0px;
  border: 2px solid #f1f1f1;
`;

export const CatTipBoard = styled.div`
  width: 476px;
  height: 318px;
  padding: 28px 24px;
  gap: 28px;
  border-radius: 20px;
  border: 2px;
  opacity: 0px;
  border: 2px solid #f1f1f1;
`;

export const BoardTitle = styled.div`
  height: 20px;
  gap: 0px;
  opacity: 0px;
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  line-height: 34.75px;
  text-align: left;
  color: #2d2d2d;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  width: 18px;
  height: 18.01px;
  margin: 0 7px 0 0;
`;

export const TipTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TipBoardTitle = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #f87b45;
`;

export const LinkText = styled.span`
  width: 75px;
  height: 24px;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;

  color: #fe834d;

  display: flex;
  align-items: center;
`;

export const PostList = styled.ul`
  list-style-type: none;
  margin: 25px 0 0 0;
`;
