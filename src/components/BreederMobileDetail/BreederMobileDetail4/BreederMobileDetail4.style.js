import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background: var(--Grey_block, #f4f4f4);
  display: flex;
  flex-direction: column;
  padding: 36px 10%;
  gap: 52px;
  margin: 0 auto;
`;

export const Title = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
  letter-spacing: -0.5px;
`;

export const PetPictureLayout = styled.div`
  margin-top: 12px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 14px;
`;

export const PetPictureContainer = styled.div`
  width: 130px;
  height: 130px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;

export const PetPictureImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
`;

export const PictureGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 62%,
    rgba(0, 0, 0, 0.7) 100%
  );
  pointer-events: none; /* 이미지 클릭이나 다른 이벤트에 영향을 주지 않도록 설정 */
`;

export const PictureDescription = styled.div`
  position: absolute;
  left: 14px;
  bottom: 12px;

  max-width: 130px;
  overflow: hidden;
  color: var(--White, #fff);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.3px;
`;
