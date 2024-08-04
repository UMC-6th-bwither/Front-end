import styled from 'styled-components';

export const FrameChild = styled.div`
  height: 10px;
  width: 10px;
  position: relative;
  border-radius: 50%;
  background-color: #fff;
`;

export const EllipseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2px;
`;

export const FrameChild1 = styled.div`
  width: 14px;
  height: 14px;
  position: relative;
  border-radius: 50%;
  background-color: #fe834d;
`;

export const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
`;

export const RootInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 0px 0px;
`;

export const A = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.64px;
  line-height: 30px;
  font-weight: 700;
  color: inherit;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px 0px 0px;
`;

export const Q = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 24px;
  font-weight: 500;
`;

export const Container = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const P = styled.p`
  margin: 0;
`;

export const Div = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 24px;
`;

export const Container1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: justify;
  color: #737373;
`;

export const Item = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;

export const Div1 = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 24px;
`;

export const FAQ = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 42px;
  text-align: left;
  font-size: 16px;
  color: #323232;
  font-family: 'Noto Sans KR';
  @media screen and (max-width: 450px) {
    gap: 21px;
  }
`;

export const Heading2Parent = styled.main`
  width: 339px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 22px;
  max-width: calc(100% - 52px);
  text-align: left;
  font-size: 20px;
  color: #323232;
  font-family: 'Noto Sans KR';
`;

export const RootRoot = styled.div`
  width: 475px;
  background-color: #f4f4f4;
  border-left: 1px solid #f1f1f1;
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 36px 16px 124px;
  gap: 38px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 450px) {
    gap: 19px;
  }
`;
