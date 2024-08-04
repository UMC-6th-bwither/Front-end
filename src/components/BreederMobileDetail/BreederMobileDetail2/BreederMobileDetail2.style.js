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

export const FrameInner = styled.div`
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
  padding: 36px 16px 416px;
  gap: 38px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 450px) {
    gap: 19px;
  }
`;
