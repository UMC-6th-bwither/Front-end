import styled from 'styled-components';

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
  margin-bottom: 32px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const AllText = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
  appearance: none;
  width: 24px;
  height: 24px;
  background: #ffffff;
  border: 2px solid #c5c5c580;
  border-radius: 5px;

  &:checked {
    background-color: #fe834d;
  }
`;

export const Divider = styled.div`
  width: 420px;
  height: 2px;
  background: #f1f1f1;
  margin-bottom: 32px;
`;
