import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 8vw;
  background-color: #f4f4f4;
`;

export const MainContainer = styled.div`
  width: 1210px;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #ffffff;
  top: 72px;
  left: 355px;
  padding: 130px 120px;
  gap: 60px;
`;

export const Title = styled.div`
  width: 970px;
  height: 68px;
  padding-bottom: 70px;
  border-bottom: 2px solid var(--Grey_line, #f1f1f1);
  font-family: 'Noto Sans KR';
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: var(--black, #272727);
`;

export const ContentContainer = styled.div`
  color: #444444;

  div {
    margin-bottom: 80px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 700;
  line-height: 28.96px;
  text-align: left;
`;

export const Content = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 500;
  line-height: 26.06px;
  text-align: left;
  margin: 30px 0;
`;

export const SubContent = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 500;
  line-height: 26.06px;
  text-align: left;
`;

export const AgreementBtnContainer = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 30px;
  border-top: 2px solid var(--Grey_line, #f1f1f1);
`;

export const AgreementBtn = styled.button`
  width: 164px;
  height: 36px;
  font-family: 'Noto Sans KR';
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  text-align: right;
  border: none;
  background: #ffffff;
  color: #000000;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    padding-left: 15px;
  }
`;
