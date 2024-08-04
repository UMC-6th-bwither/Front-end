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
  letter-spacing: -0.5px;
  line-height: 30px;
  font-weight: 700;
  color: inherit;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Heading = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px 0px 0px;
`;

export const A1 = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 21px;
  color: inherit;
  display: inline-block;
  min-width: 26px;
`;

export const Radio = styled.div`
  width: 52px;
  border-radius: 28px;
  background-color: #f87b45;
  border: 1px solid #f87b45;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 3px 12px 4px;
  color: #fff;
`;

export const Div = styled.div`
  position: relative;
  line-height: 21px;
  display: inline-block;
  min-width: 39px;
`;

export const Radio1 = styled.div`
  width: 65px;
  border-radius: 28px;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 3px 12px 4px;
`;

export const Div1 = styled.div`
  height: 21px;
  position: relative;
  line-height: 21px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const Radio2 = styled.div`
  border-radius: 28px;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 3px 12px 4px;
  white-space: nowrap;
`;

export const List = styled.div`
  width: 143px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 22px 0px 0px;
  box-sizing: border-box;
  gap: 0px 4px;
`;

export const List1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Div2 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 12px;
  line-height: 18px;
`;

export const Div3 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 21px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Container = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #323232;
`;

export const Div4 = styled.div`
  position: relative;
  line-height: 21px;
`;

export const Container1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px 0px 0px;
  color: #737373;
`;

export const Container2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
`;

export const ImageIcon = styled.img`
  height: 17px;
  width: 20px;
  position: relative;
`;

export const ImagePlaceholder = styled.div`
  position: relative;
  line-height: 18px;
  display: inline-block;
  min-width: 7px;
`;

export const Container3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 12px 1.5px 0px;
`;

export const EmptyPlaceholder = styled.div`
  position: relative;
  line-height: 18px;
  display: inline-block;
  min-width: 60px;
`;

export const Container4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: right;
`;

export const Container5 = styled.div`
  align-self: stretch;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  gap: 20px;
  font-size: 12px;
`;

export const Link = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;

export const Div5 = styled.div`
  align-self: stretch;
  height: 21px;
  position: relative;
  line-height: 21px;
  font-weight: 500;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
`;

export const List2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  color: #b5b5b5;
  @media screen and (max-width: 450px) {
    gap: 16px;
  }
`;

export const ListParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  font-size: 14px;
  color: #737373;
`;

export const Component = styled.section`
  width: 339px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 18px;
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
  padding: 36px 16px 732px;
  gap: 38px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 450px) {
    gap: 19px;
  }
`;
