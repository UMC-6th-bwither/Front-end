import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid var(--Grey_line, #f1f1f1);
  border-radius: 20px;
  cursor: pointer;
`;

export const Square = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-color: #f1f1f1;
  position: relative;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
`;

export const SquareImage = styled.img`
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  align-items: center;
  padding: 16px 15px 24px 15px;
`;

export const Name = styled.div`
  color: #2d2d2d;

  /* Body1 */
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Star = styled.span`
  color: #2d2d2d;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 150% */
`;

export const Context = styled.div`
  padding-top: 8px;
  overflow: hidden;
  color: #737373;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
  white-space: normal;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 131.25% */
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StarFlex = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 3px;
`;

export const IconSectionWrapper = styled.div`
  position: relative;
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 999;
  bottom: -60px; /* IconContainer 아래에 위치하도록 조정 */
  left: 50%; /* 수평 정중앙에 배치 */
  transform: translateX(-50%); /* 정가운데 맞추기 위해 사용 */

  width: 100px;

  text-align: center;
  padding: 10px 20px;
  background-color: white; /* 모달이 구별되도록 배경색 추가 */
  border-radius: 8px; /* 모서리 둥글게 */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* 약간의 그림자 효과 */
  font-family: 'Noto Sans KR';
`;

export const IconContainer = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexGrow = styled.div`
  flex-direction: row;
  flex: 1;
  display: flex;
  gap: 12px;
`;
