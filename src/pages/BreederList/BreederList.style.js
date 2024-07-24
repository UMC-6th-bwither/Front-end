import styled from 'styled-components';

export const Border = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #fff 0%, #fff 100%), #fff;
`;

export const RegionContainer = styled.div`
  display: flex;
  width: 970px;
  max-width: 1000px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 88px;
`;

export const Left = styled.div`
  display: flex;
  width: 188px;
  height: 100px;
  padding-right: 110px;
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
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
  }
  .detail {
    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-style: normal;
    font-weight: 350;
    line-height: 24px; /* 150% */
    letter-spacing: -0.2px;
  }
`;

export const Right = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 8px;
  width: 650px;

  .item {
    display: flex;
    width: 58px;
    height: 36px;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 20px;
    background: var(--sub, #fffdf2);
    color: var(--main, #fe834d);
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-style: normal;
    font-weight: 350;
    line-height: 36px; /* 257.143% */
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  .select-container {
    position: relative;
    width: 96px;
  }
  .select-box {
    display: flex;
    width: 96px;
    height: 36px;
    gap: 8px;
    padding: 8px 14px;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 10px;
    background: var(--Grey_block, #f4f4f4);

    color: var(--black, #272727);
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-style: normal;
    font-weight: 350;
    line-height: normal;

    appearance: none; /* 기본 화살표 숨기기 */
    -webkit-appearance: none; /* 사파리에서 기본 화살표 숨기기 */
    -moz-appearance: none; /* 파이어폭스에서 기본 화살표 숨기기 */
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 12 8" fill="none"><path d="M1.5 1.5L6 6.5L10.5 1.5" stroke="%23272727" strokeLinecap="square"/></svg>');
    background-repeat: no-repeat;
    background-position: right 14px center;
  }
  .sort {
    justify-content: center;
    flex-shrink: 0;
    align-self: stretch;
    option {
      width: 39px;
    }
  }
`;

export const AnimalSelector = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  .animals {
    justify-content: space-between;

    option {
      width: 52px;
      flex-shrink: 0;
    }
  }
  .breeds {
    justify-content: center;
    flex-shrink: 0;
    align-self: stretch;

    option {
      width: 42px;
    }
  }
`;
