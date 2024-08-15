import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  width: 970px;
  height: 51px;
  gap: 32px;
  align-items: flex-end;
  align-self: stretch;
  margin-bottom: 32px;

  display: flex;
  justify-content: space-between;
`;

export const MenuItem = styled.div`
  padding: 20px 0;
  cursor: pointer;
  position: relative;
  color: ${(props) => (props.active ? '#272727' : '#737373')};
  font-family: 'Noto Sans KR';
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-align: left;
  &:after {
    content: '';
    display: ${(props) => (props.active ? 'block' : 'none')};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: #737373;
  }
`;
