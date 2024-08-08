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
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
  letter-spacing: -0.5px;
`;

export const ReviewSummaryContainer = styled.div`
  padding-top: 12px;
  display: flex;
  gap: 18px;
  align-items: flex-end;
`;

export const ReviewSummaryStar = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 58px; /* 145% */
  letter-spacing: -0.8px;
`;

export const ReviewSummaryStarIconLayout = styled.div`
  display: flex;
  gap: 4px;
`;

export const StarIconWrapper = styled.div`
  width: 19.5px;
  height: 18px;
  position: relative;
`;

export const StarIconContainer = styled.div`
  width: ${(p) => `${p.$starRatio * 100}%`};
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  overflow: hidden;
`;

export const ReviewSummaryReviewCount = styled.div`
  padding-top: 4px;
  color: #737373;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.2px;
`;

export const CategoryLayout = styled.div`
  display: flex;
  padding-top: 24px;
  gap: 6px;
`;

export const Category = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px 13px 6px 13px;
  border-radius: 28px;
  border: 1px ${(p) => (p.$active ? '#f87b45' : '#e1e1e1')};
  background: ${(p) => (p.$active ? '#f87b45' : '#fff')};
  color: ${(p) => (p.$active ? '#fff' : '#737373')};

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
`;

export const CheckIconContainer = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckLayout = styled.div`
  display: flex;
  gap: 18px;
  padding-top: 12px;
`;

export const CheckContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const CheckContent = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
`;

export const ReviewLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 72px;
  padding-top: 16px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const ReviewerName = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 150% */
`;

export const ReviewImgLayout = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 14px;
`;

export const ReviewImgContainer = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 12px;
  overflow: hidden;
`;

export const ReviewImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ReviewImgFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  color: var(--White, #fff);
  font-family: 'Noto Sans KR';
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 42px; /* 150% */
`;

export const ReviewContentWrapper = styled.div``;

export const ReviewContentTitle = styled.div`
  display: flex;
  gap: 12px;
`;

export const ReviewContentTitlePetName = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
`;

export const ReviewContentTitleStarLayout = styled.div`
  display: flex;
  gap: 4px;
`;

export const ReviewContentTitleStarContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReviewContentTitleStarScore = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 150% */
`;

export const ReviewContentContext = styled.div`
  padding-top: 10px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;

  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21.98px; /* 157% */
`;

export const ReviewTagLayout = styled.div`
  display: flex;
  padding-top: 8px;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ReviewTag = styled.div`
  padding: 2.5px 8px;
  border-radius: 4px;
  background: #f2f2f2;

  color: #737373;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ReviewContentFooterLayout = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 8px;
`;

export const ReviewContentFooterDate = styled.div`
  flex: 1;

  color: #737373;

  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px; /* 150% */
`;

export const ReviewContentFooterMoreButton = styled.div`
  cursor: pointer;

  color: #737373;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
  text-decoration-line: underline;
`;

export const ReplyContainer = styled.div`
  width: 100%;
  padding: 12px 9px;
  display: flex;
  align-items: flex-start;
  gap: 18px;
  border-radius: 12px;
  background: var(--White, #fff);
`;

export const ReplyBreederProfileImgContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ReplyBreederProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ReplyContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 12px;
`;

export const ReplyContentTitle = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 150% */
`;

export const ReplyContentText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21.98px; /* 157% */
`;

export const ReplyContentDate = styled.div`
  color: #737373;

  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px; /* 150% */
`;

export const MoreReviewLayout = styled.div`
  margin: 0 auto;
  padding-top: 16px;
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
`;

export const MoreReviewContent = styled.div`
  color: var(--main, #fe834d);

  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
`;

export const MoreReviewIconContainer = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
