import styled from 'styled-components';

export const Border = styled.div`
  display: flex;
  padding: 18px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 970px;
  height: 74px;
  border-radius: 10px;
  border: 1px solid #fe834d;
  background: #fffdf2;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Noto Sans KR';
  font-weight: 500;
  .message {
    color: #323232;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 7px 14px;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid #fe834d;
  background: #fe834d;
  color: #fff;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  &:hover {
    border: 1px solid #fe834d;
    background: #ffddc5;

    color: #fe834d;
  }
`;
