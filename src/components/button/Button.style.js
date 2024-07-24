import styled from 'styled-components';

export const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  margin: 0;
  padding: 12px
    ${(props) =>
      props.$paddingHorizontal ? `${props.$paddingHorizontal}px` : 0};
  border: none;
  border-radius: 4px;
  background: none;
  width: ${(props) => (props.$width ? `${props.$width}px` : '238px')};

  color: #323232;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  cursor: pointer;
`;

export const IconContainer = styled.div`
  width: 14px;
  height: 14px;
  line-height: 0px;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonWhite = styled(ButtonBase)`
  background: #fff;
  border: none;

  &:hover {
    background: var(--white_hover, #f5f5f5);
  }
`;

export const ButtonWhiteBorder = styled(ButtonBase)`
  border: 1px solid #d9d9d9;
  background: #fff;

  &:hover {
    border: 1px solid #d9d9d9;
    background: var(--white_hover, #f5f5f5);
  }
`;

export const ButtonOrange = styled(ButtonBase)`
  border: 1px solid var(--main, #fe834d);
  background: var(--main, #fe834d);

  color: #fff;

  &:hover {
    border: 1px solid var(--main, #fe834d);
    background: var(--main_hover, #f57137);
  }
`;

export const ButtonOrangeBorder = styled(ButtonBase)`
  border: 1px solid var(--main, #fe834d);
  background: var(--sub_hover, #fff);

  color: var(--main, #fe834d);

  &:hover {
    background: var(--sub_hover, #ffddc5);
  }
`;
