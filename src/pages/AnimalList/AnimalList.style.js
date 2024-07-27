import styled from 'styled-components';

export const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(0deg, #fff 0%, #fff 100%), #fff;
`;

export const RegionContainer = styled.div`
  display: flex;
  width: 970px;
  max-width: 1000px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 136px 475px 88px;
`;
export const Left = styled.div`
  display: flex;
  width: 254px;
  height: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;

  .title {
    color: #323232;
    /* Head */
    font-family: 'Noto Sans KR';
    font-size: 24px;
    font-weight: 700;
    line-height: 36px; /* 150% */
  }
  .detail {
    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 350;
    line-height: 24px; /* 150% */
    letter-spacing: -0.2px;
  }
`;

export const Right = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 16px;
  width: 650px;

  .item {
    display: flex;
    width: 42px;
    height: 20px;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: var(--sub, #fffdf2);
    cursor: pointer;
    color: var(--main, #fe834d);
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: 350;
    line-height: 36px; /* 257.143% */
  }
  .item:hover {
    background-color: #ffddc5;
    color: #fe834d;
  }
  .item.active {
    background: #fe834d;
    color: #ffffff;
  }
`;

export const AnimalContainer = styled.div`
  display: flex;
  width: 970px;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  padding: 0 475px 780px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export const AnimalSelector = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const ReservationBtn = styled.button`
  height: 36px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #737373;
  background: #fff;
  cursor: pointer;
  color: #2d2d2d;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  align-self: stretch;
  .dogCard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
  }
`;
