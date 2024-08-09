import styled from 'styled-components';

// eslint-disable-next-line
export const Container = styled.button`
  display: flex;
  width: 238px;
  height: 48px;
  padding: 12px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #fe834d;
  background: #fe834d;

  color: #fff;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  cursor: pointer;
  &:hover {
    background: #f57137;
  }
`;

export const WhiteContainer = styled(Container)`
  background: #fff;
  color: #f57137;

  &:hover {
    background: #ffddc5;
  }
`;
