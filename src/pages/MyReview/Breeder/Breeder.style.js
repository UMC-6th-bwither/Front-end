/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Border = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 52px;
  margin: 136px 475px 522px;
`;

export const TopContainer = styled.div`
  display: flex;
  width: 970px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  .bookmark {
    position: absolute;
    padding: 11.5px 18px;
    z-index: 1;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  line-height: 36px; /* 150% */
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 970px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 970px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  .select-box {
    display: flex;
    width: 96px;
    height: 36px;
    padding: 8px 14px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    border: none;
    border-radius: 10px;
    background: var(--Grey_block, #f4f4f4);

    color: var(--black, #272727);
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: 350;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;
