import styled from 'styled-components';

export const Box = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 6px 20px 0px rgba(148, 156, 163, 0.2);
`;

export const BoxTop = styled.div`
  display: flex;
  width: 618px;
  padding: 20px 24px;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const SvgIcon = styled.svg`
  position: absolute;
  right: 24px;
  cursor: pointer;
`;

export const BoxBottom = styled.div`
  display: flex;
  width: 618px;
  padding: 6px 32px 30px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const ErrorText = styled.div`
  color: var(--Grey_icon, #c5c5c5);
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.5px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Content = styled.div`
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.5px;
`;
