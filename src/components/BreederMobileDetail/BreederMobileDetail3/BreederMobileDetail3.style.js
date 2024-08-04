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

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 0px 0px;
`;

export const H = styled.h3`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.5px;
  line-height: 30px;
  font-weight: 700;
  font-family: inherit;
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
`;

export const IconPinOutline = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LocationDetails = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1px 0px 0px;
  box-sizing: border-box;
`;

export const A = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 62px;
`;

export const Div1 = styled.div`
  width: 241px;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 24px;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
`;

export const LocationDetailsParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export const ImageFillIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

export const Div2 = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 24px;
  font-weight: 500;
  display: inline-block;
  min-width: 62px;
`;

export const Div3 = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 24px;
  white-space: nowrap;
`;

export const ImageParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 18px 0px 0px;
  gap: 8px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
`;

export const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 2px;
`;

export const A1 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 44px;
`;

export const Div5 = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 24px;
`;

export const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 20px 0px 0px;
  gap: 7px;
`;

export const InfoPanel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  font-size: 16px;
  color: #737373;
`;

export const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;

export const ImagePlaceholderOne = styled.img`
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

export const ImageWrapperOne = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const Div6 = styled.div`
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

export const ImageWrapperOneParent = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 116px 14px 12px;
  position: relative;
  gap: 67px;
`;

export const GalleryRowOne = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
`;

export const RectangleIcon = styled.img`
  height: 150px;
  width: 150px;
  position: relative;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const Gradient1 = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
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

export const Div7 = styled.div`
  height: 22px;
  width: 122px;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 22px;
  font-weight: 500;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
  z-index: 2;
`;

export const RectangleParent = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 67px;
  @media screen and (max-width: 450px) {
    gap: 33px;
  }
`;

export const GalleryRowOne1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
`;

export const GalleryRowOneParent = styled.div`
  align-self: stretch;
  height: 478px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 25px 0px 0px;
  box-sizing: border-box;
  gap: 14px;
  font-size: 14px;
  color: #fff;
`;

export const ContentParent = styled.section`
  width: 339px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 28px;
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
  padding: 36px 16px 416px;
  gap: 38px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 450px) {
    gap: 19px;
  }
`;
