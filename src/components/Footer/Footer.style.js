import styled from 'styled-components';

export const Border = styled.div`
  display: flex;
  height: 366px;
  padding: 22px 0px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
`;

export const Links = styled.div`
  display: flex;
  width: 970px;
  gap: 8px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  .title {
    color: #323232;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const MinTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const FooText = styled.div`
  width: 95px;
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
`;

export const Icons = styled.div`
  display: flex;
  width: 970px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 12px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Information = styled.div`
  display: flex;
  width: 970px;
  align-items: flex-start;
  gap: 32px;
`;

export const InfoText = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
