import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid var(--Grey_line, #f1f1f1);
  border-radius: 20px;
  overflow: hidden;
`;

export const Square = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-color: blue;
  position: relative;
`;

export const SquareImage = styled.img`
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
