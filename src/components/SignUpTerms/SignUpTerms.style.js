import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const AllWrapper = styled(Wrapper)`
  margin-bottom: 8px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const AllText = styled(Link)`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  &:hover {
    color: #fe834d;
  }
`;

export const Text = styled(AllText)`
  font-weight: 350;
`;

export const SubText = styled(Text)`
  font-size: 12px;
  font-weight: 350;
  line-height: 18px;
`;

export const Checkbox = styled.input`
  display: none;
`;

export const Divider = styled.div`
  width: 420px;
  height: 2px;
  background: #f1f1f1;
  margin-bottom: 32px;
  margin-top: 20px;
`;

export const Check = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
`;
