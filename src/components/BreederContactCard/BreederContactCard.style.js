import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 28px 34px 28px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 20px 0px rgba(148, 156, 163, 0.2);
  font-family: 'Noto Sans KR';
`;

export const SpanningContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 48px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  background: whitesmoke;
  border-radius: 12px;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const IconContainer = styled.div`
  width: 20px;
  height: 20px;
`;

export const LocationTagContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LocationTag = styled.span`
  color: #737373;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
  letter-spacing: -0.3px;
`;

export const BreederTagContainer = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.7px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 4px;
`;
