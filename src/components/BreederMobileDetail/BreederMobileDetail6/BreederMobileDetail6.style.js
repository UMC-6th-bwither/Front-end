import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background: var(--Grey_block, #f4f4f4);
  display: flex;
  flex-direction: column;
  padding: 36px 10%;
  margin: 0 auto;
`;

export const Title = styled.div`
  padding-bottom: 22px;

  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
  letter-spacing: -0.5px;
`;

export const QnALayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

export const QnAContainer = styled.div``;

export const QnATitle = styled.div`
  padding-bottom: 8px;

  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.3px;
`;

export const QnAContent = styled.div`
  color: #737373;

  text-align: justify;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 24px; /* 150% */
  letter-spacing: -0.3px;
`;
