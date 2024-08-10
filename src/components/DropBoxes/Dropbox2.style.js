import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Base = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  margin: 0;
  padding: 8px 0;
  border: none;
  border-radius: 10px;
  background: var(--Grey_block, #f4f4f4);
  width: ${(props) => (props.$width ? `${props.$width}px` : '100px')};

  color: var(--black, #272727);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;

  cursor: pointer;
`;

export const IconContainer = styled.div`
  width: 11px;
  height: 11px;
  line-height: 0px;
  transform: ${(props) => (props.$isOpend ? `scaleY(-1)` : `none`)};
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const MenuWrapper = styled.div`
  display: ${(props) => (props.$isOpend ? `block` : `none`)};
  position: relative;
  z-index: 100;
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 10px;
  border-radius: 10px;
  width: ${(props) => (props.$width ? `${props.$width}px` : '100px')};
  background: var(--White, #fff);
  /* basic */
  box-shadow: 0px 6px 20px 0px rgba(148, 156, 163, 0.2);
`;

export const Menu = styled.div`
  padding: 8px 0px;
  color: var(--black, #272727);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;

  cursor: pointer;
`;
