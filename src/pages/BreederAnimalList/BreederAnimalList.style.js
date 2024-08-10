import styled from 'styled-components';

export const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 52px;
  padding-top: 136px;
  padding-bottom: 161px;
  width: 970px; /* 추가 */
`;

export const Title = styled.div`
  align-self: stretch;
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  .dropBoxes {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 6px 14px;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 8px;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  background: var(--Grey_block, #f4f4f4);
  color: #2d2d2d;
  cursor: pointer;

  &:hover {
    background: var(--sub, #fffdf2);
    color: var(--main, #fe834d);
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;
