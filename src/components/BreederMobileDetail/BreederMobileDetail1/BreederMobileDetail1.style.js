import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--Grey_block, #f4f4f4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 42px;
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ImgContainer = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
`;

export const BreederTitle = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: center;
  max-width: 80%;
`;

export const BreederSubtitleContainer = styled.div`
  display: flex;
  gap: 18px;
`;

export const BreederSubtitleContainerSub = styled.div`
  color: #f87b45;

  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const BreederSubtitleContainerLocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BreederSubtitleContainerLocationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

export const BreederSubtitleContainerLocationContent = styled.div`
  color: #737373;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
  letter-spacing: -0.3px;
`;

export const BreederTagsContainer = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BreederDetail = styled.div`
  color: #737373;

  width: 80%;

  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 24px; /* 150% */
`;

export const BreederGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 80%;
  border-radius: 12px;
  background: #fafafa;
`;

export const BreederGridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  flex-direction: column;
`;

export const BreederGridItemTitle = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
`;

export const BreederGridItemContent = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */

  display: flex;
  gap: 3px;
  align-items: center;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReviewCount = styled.div`
  color: #737373;

  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px; /* 150% */
`;
