/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SmallButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0;
  padding: 6px 12px;
  border-radius: 12px;
  border: 1px solid var(--main, #fe834d);
  background: var(--White, #fff);

  color: var(--main, #fe834d);
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;

  cursor: pointer;

  &:hover {
    border: 1px solid var(--main, #fe834d);
    background: var(--sub_hover, #ffddc5);
  }
`;
