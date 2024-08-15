import styled from 'styled-components';

export const ButtonSelectorBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0;
  padding: 8px ${(p) => (p.$paddingVertical ? p.$paddingVertical : '10px')};
  border-radius: 8px;
  border: none;
  background: none;

  color: var(--main, #fe834d);
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;

  cursor: pointer;
`;

export const ButtonSelectorInactive = styled(ButtonSelectorBase)`
  background: var(--Grey_block, #f4f4f4);
  color: #2d2d2d;
`;

export const ButtonSelectorActive = styled(ButtonSelectorBase)`
  background: var(--sub, #fffdf2);
  color: #f87b45;
`;

export const ButtonSelectorBorderInactive = styled(ButtonSelectorBase)`
  /* border: 1px solid #737373; */
  box-shadow: inset 0 0 0 1px #737373;
  background: #fff;
  color: #2d2d2d;
`;

export const ButtonSelectorBorderActive = styled(ButtonSelectorBase)`
  /* border: 1px solid #f87b45; */
  box-shadow: inset 0 0 0 1px #f87b45;
  background: #fff;
  color: #f87b45;
`;
