import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  padding: 80px 0;
`;

export const Menu = styled.div`
  position: relative;
  left: 50px;
  top: 50px;
  z-index: 1;
`;
export const Container = styled.div`
  width: 910px;
`;

export const Head = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;

export const HeadLine = styled.div`
  width: 112px;
  height: 15px;
  background: #ff8e26;
  position: relative;
  top: -10px;
  left: -5px;
  z-index: -99;
`;

export const HeadLine1 = styled(HeadLine)`
  width: 99px;
  margin-bottom: 50px;
`;

export const HeadLine2 = styled(HeadLine)`
  width: 125px;
  margin-bottom: 24px;
`;

export const SubHead = styled.div`
  color: #272727;
  font-family: 'Pretendard Variable';
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.28px;
  margin-top: 88px;
  margin-bottom: 32px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 52px;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TitleIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Title = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Text = styled.div`
  text-align: justify;
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
`;

export const BloodText = styled.div`
  color: #444;
  text-align: justify;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 26px;
`;

export const BloodBox = styled.div`
  display: flex;
  padding: 40px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 15px;
  background-color: #f4f4f4;
  margin-bottom: 60px;
`;

export const TitleDot = styled.div`
  border-radius: 50%;
  width: 6px;
  height: 6px;
  background-color: #fe834d;
`;

export const BloodDescription = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 24px;
  padding: 8px 14px;
`;

export const AdoptionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`;

export const AdoptionBox = styled.div`
  display: flex;
  width: 910px;
  padding: 40px 56px;
  justify-content: center;
  text-align: center;
  gap: 8px;
  border-radius: 15px;
  background: #f4f4f4;
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const DownMark = styled.img`
  width: 67.516px;
  height: 44px;
  fill: #fe834d;
  align-self: center;
`;

export const EndWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EndTitle = styled(Head)`
  strong {
    color: #fe834d;
  }
  text-align: center;
  margin-top: 170px;
`;

export const GoBtnLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 100px;
`;

export const GoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 12px 25px;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid #fe834d;
  background: #fff;
  color: #fe834d;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 36px;
  cursor: pointer;
  &:hover {
    background: #ffddc5;
  }
`;

export const Fence = styled.img`
  margin-top: 70px;
  margin-bottom: 80px;
`;
