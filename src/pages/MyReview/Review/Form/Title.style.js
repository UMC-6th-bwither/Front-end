import styled from 'styled-components';

export const OptionsSection = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 24px;
`;

export const Instruction = styled.p`
  color: var(--Grey_icon, #c5c5c5);
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const OptionButton = styled.button`
  padding: 12px 20px;

  cursor: pointer;
  border-radius: 28px;

  border: ${(p) => (p.$active ? '1px solid #F87B45' : '1px solid #E1E1E1')};
  background: ${(p) => (p.$active ? '#F87B45' : '#fff')};

  color: ${(p) => (p.$active ? '#fff' : '#737373')};

  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 116.667% */

  &:hover {
    background-color: ${(p) => (p.$active ? '#F87B45' : '#eaeaea')};
  }
`;

export const StarContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
`;
