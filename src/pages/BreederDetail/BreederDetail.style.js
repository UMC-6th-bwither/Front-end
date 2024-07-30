import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 0 291px 0;
`;

export const InfoWrapper = styled.div`
  width: 100%;
`;

export const InfoItem = styled.div`
  margin-bottom: 64px;
`;
export const InfoItemSecond = styled.div`
  margin-bottom: 48px;
`;

export const InfoTitle = styled.div`
  font-family: 'Noto Sans KR';
  color: #323232;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const InfoContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;

export const InfoContentTitle = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.3px;
`;

export const InfoContent = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 24px;
  letter-spacing: -0.3px;
`;

export const InfoContentCarrer = styled.div`
  color: #fe834d;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

export const InfoContentDetail = styled.div`
  color: #6e6e6e;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 24px;
  letter-spacing: -0.3px;
  text-decoration-line: underline;
`;
export const AnimalSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const AnimalSelect = styled.div`
  display: flex;
  height: 32px;
  padding: 5px 13px 6px 13px;
  align-items: center;
  border-radius: 28px;
  border: 1px solid #e1e1e1;
  background: #fff;
`;

export const MiniTitle = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-bottom: 2px;
`;

export const MiniContent = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 18px;
  margin-bottom: 6px;
`;
export const MiniContent2 = styled.div`
  color: #b5b5b5;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21px;
`;

export const CertificateImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  border: 2px solid rgba(241, 241, 241, 0.5);
  background-color: tomato;
`;

export const Line = styled.div`
  background: var(--Grey_line, #f1f1f1);
  height: 1px;
  align-self: stretch;
`;

export const KennelImgBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 28px;
  gap: 14px;
`;

export const KennelImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: tomato;
`;
