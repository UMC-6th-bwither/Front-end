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

export const InfoContentTitle2 = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin-bottom: 8px;
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
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
  width: calc(5 * 150px + 4 * 14px);
`;

export const KennelImg = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: tomato;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 0 12px 14px;
`;

export const KennelImgText = styled.div`
  position: absolute;
  left: 14px;
  bottom: 12px;
  color: white;
`;

export const QnaBox = styled.div`
  margin-bottom: 42px;
`;

export const CommuBox = styled.div`
  margin-bottom: 32px;
`;

export const CommuBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-bottom: 21px;
`;

export const CommuBtn = styled.button`
  display: flex;
  height: 32px;
  padding: 5px 13px 6px 13px;
  align-items: center;
  border-radius: 28px;
  border: 1px solid #e1e1e1;
  background: #fff;
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21px;
  cursor: pointer;

  &:hover,
  &.active {
    border: 1px solid #f87b45;
    background: #f87b45;
    color: #fff;
  }
`;

export const CommuCategory = styled.div`
  color: #b5b5b5;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 18px;
  margin-bottom: 8px;
`;

export const CommuText1 = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  margin-bottom: 2px;
`;

export const CommuText2 = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21px;
  margin-bottom: 11px;
`;

export const CommuNumBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const CommuNum = styled.div`
  color: #b5b5b5;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 18px;
`;
export const CommuPostBox = styled.div`
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  display: flex;
  max-width: 231px;
  padding: 1px;
  width: 231px;
  height: 231px;
  background-color: tomato;
  flex-shrink: 0;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`;

export const CommuPostText = styled.div`
  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
  height: 64px;
`;

export const CommuPostFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const CommuPostImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const CommuPostAuthor = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 20px;
`;
