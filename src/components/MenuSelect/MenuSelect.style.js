import styled from 'styled-components';

export const MenuContainer = styled.div`
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  height: 49px;
  align-items: flex-end;
  gap: 18px;
  align-self: stretch;
  margin-bottom: 32px;
`;

export const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  color: ${(props) => (props.isActive ? '#FE834D' : '#737373')};
  font-weight: ${(props) => (props.isActive ? '700' : '350')};
  font-size: 16px;
  line-height: 24px;
  &:after {
    content: '';
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: #fe834d;
  }
`;
