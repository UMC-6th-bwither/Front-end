import { styled } from 'styled-components';

const Pagination = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

const PageButton = styled.button`
  border: none;
  background-color: transparent;
  color: #222222;
  margin: 10px;
  cursor: pointer;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 400;

  ${(props) =>
    props.disabled &&
    `
        cursor: default;
        background-color: #FFFDF2;
        color: #F87B45;
        border-radius: 4px;
        `}
`;

const GroupPageBtn = styled.button`
  font-weight: bold;
  margin: 0 10px;
  background-color: #ffffff;
  border-radius: 4px;
  opacity: 0px;
  border: 1px solid #d2d2d2;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

export { PageButton, GroupPageBtn, Pagination };
