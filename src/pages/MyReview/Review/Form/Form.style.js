import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8vw;
  padding: 80px 0;
`;

export const VerticalMenuLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

export const MainContainer = styled.div`
  width: 970px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 56px;
  height: 56px;
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TitleLayout = styled.div`
  display: flex;
  padding-bottom: 40px;
`;

export const MainTitle = styled.div`
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin: 10px 0 8px 0;
`;

export const TitleButtonContainer = styled.div`
  margin-left: auto;
  margin-top: auto;
`;

export const MainSubTitle = styled.div`
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Category = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 6px 18px;
  border-radius: 100px;
  border: 1px ${(p) => (p.$active ? '#f87b45' : '#e1e1e1')};
  background: ${(p) => (p.$active ? '#f87b45' : '#fff')};
  color: ${(p) => (p.$active ? '#fff' : '#737373')};

  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: -0.5px;
`;

export const TitleFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
`;
