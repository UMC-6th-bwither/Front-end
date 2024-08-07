/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 96px;
  height: 36px;
  position: relative;
  border-radius: 10px;
  background: #f4f4f4;
  color: #272727;
  cursor: pointer;
  bottom: 8px;
  .dropdown-checkbox {
    left: 0;
    visibility: hidden;
    position: absolute;
  }
  .dropdownLabel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 8px 12px;
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: 350;
  }
  .dropdownLabel:hover {
    cursor: pointer;
  }
  .content {
    display: none;
    position: absolute;
    width: 100%;
    left: 0;
    top: 44px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 6px 20px 0px rgba(148, 156, 163, 0.2);
    z-index: 1000; /*Card 앞으로*/
  }
  .dropdown-checkbox:checked + label + div.content {
    display: block;
    border-top: 1px solid #00000026;
  }
  .arrowIcon {
    transition: transform 250ms ease-out;
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
