import styled from 'styled-components';

export const IconContainer = styled.div`
  width: 16px;
  height: 18px;
  line-height: 0px;
  margin-right: 5px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-items: center;
  padding: 2px 6px 2px 4px;
  border-radius: 4px;

  background: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : '#fff'};
  color: ${(props) => (props.$color ? props.$color : '#fff')};
  font-size: 12px;
  font-family: 'Noto Sans KR';
  font-weight: 500;
  line-height: 18px;
`;
