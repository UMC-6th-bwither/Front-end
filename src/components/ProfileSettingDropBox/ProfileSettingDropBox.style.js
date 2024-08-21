/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 136px;
  height: 52px;
  position: relative;
  border-radius: 10px;
  border: 2px solid var(--Grey_line, #f1f1f1);

  .dropdown-checkbox {
    left: 0;
    visibility: hidden;
    position: absolute;
  }
  .dropdownLabel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;

    p {
      font-family: 'Noto Sans KR';
      font-size: 16px;
      font-weight: 500;
      line-height: 23.17px;
      color: var(--Grey_text, #737373);
    }
  }
  .dropdownLabel:hover {
    cursor: pointer;
  }
  .content {
    display: none;
    position: absolute;
    width: 100%;
    left: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 6px 20px 0px rgba(148, 156, 163, 0.2);
    z-index: 1000;
    cursor: pointer;
  }
  .dropdown-checkbox:checked + label + div.content {
    display: block;
    border-top: 1px solid #00000026;
  }
  .dropdown-checkbox:checked + label > .arrowIcon {
    transform: rotate(-180deg);
  }
  .content ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    z-index: 999;
  }
  .content li {
    height: 36px;
    padding: 8px 0px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    color: #272727;
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: 350;
  }
`;
