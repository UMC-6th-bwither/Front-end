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

export const EllipseDiv = styled.div`
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

export const Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RectangleIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 12px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;

export const Gradient = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3) 62%,
    rgba(0, 0, 0, 0.7)
  );
  z-index: 1;
`;

export const RectangleParent = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const Div = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 22px;
  font-weight: 500;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 2;
`;

export const InfoGrid = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 116px 14px 12px;
  box-sizing: border-box;
  position: relative;
  gap: 67px;
`;

export const InfoGridChild = styled.img`
  height: 150px;
  width: 150px;
  position: relative;
  border-radius: 12px;
  object-fit: cover;
  z-index: 0;
`;

export const Gradient1 = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: 0px;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3) 62%,
    rgba(0, 0, 0, 0.7)
  );
  z-index: 1;
`;

export const Div1 = styled.div`
  width: 122px;
  position: absolute;
  margin: 0 !important;
  top: 116px;
  left: 14px;
  letter-spacing: -0.3px;
  line-height: 22px;
  font-weight: 500;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 22px;
  z-index: 2;
`;

export const InfoGrid1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 67px;
`;

export const DogInfo = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 17px 0px 0px;
  gap: 14px 18px;
  font-size: 14px;
  color: #fff;
`;

export const FrameGroup = styled.section`
  height: 684px;
  width: 339px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  max-width: calc(100% - 52px);
  text-align: left;
  font-size: 20px;
  color: #323232;
  font-family: 'Noto Sans KR';
`;

export const RootRoot = styled.div`
  width: 475px;
  height: 1092px;
  background-color: #f4f4f4;
  border-left: 1px solid #f1f1f1;
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 36px 16px 372px;
  gap: 38px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 423px) {
    gap: 19px;
  }
`;
