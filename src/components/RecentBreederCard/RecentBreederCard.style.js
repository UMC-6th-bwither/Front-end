import styled from 'styled-components';

export const Border = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 254px;
  height: 180px;

  cursor: pointer;
  transition:
    transform 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ImgContainer = styled.div`
  width: 254px;
  height: 105px;
  border-radius: 20px 20px 0px 0px;
  border-top: 2px solid rgba(241, 241, 241, 0.5);
  border-right: 2px solid rgba(241, 241, 241, 0.5);
  border-left: 2px solid rgba(241, 241, 241, 0.5);
  background: #737373;
`;

export const Explain = styled.div`
  display: flex;
  width: 254px;
  height: 75px;
  padding: 8px 15px 16px 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 0px 0px 20px 20px;
  border-right: 2px solid var(--Grey_line, #f1f1f1);
  border-bottom: 2px solid var(--Grey_line, #f1f1f1);
  border-left: 2px solid var(--Grey_line, #f1f1f1);
  background: #fff;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;

  .left {
    display: flex;
    align-items: center;
    gap: 2px;
    color: #272727;
    font-family: 'Noto Sans KR';
    font-size: 18px;
  }

  .right {
    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    line-height: 21px; /* 150% */
  }
`;

export const Sub = styled.div`
  display: flex;
  width: 224px;
  height: 21px;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  overflow: hidden;
  color: #737373;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21px; /* 150% */
`;
