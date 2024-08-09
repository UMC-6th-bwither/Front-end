import styled from 'styled-components';

export const Container = styled.div`
  width: 670px;
  display: flex;
  padding: 24px 26px;
  flex-direction: column;
  gap: 18px;
  border-radius: 15px;
  border: 2px solid;
  border-color: ${(props) => (props.checked ? '#FE834D' : '#f1f1f1')};
  background: #fff;
`;

export const Content = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
  align-self: self-end;
`;

export const Checkbox = styled.input`
  width: 21px;
  height: 21px;
`;

export const Text = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
