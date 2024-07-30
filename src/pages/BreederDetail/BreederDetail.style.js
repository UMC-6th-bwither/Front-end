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

export const ReviewScoreBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 23.5px;
  margin-bottom: 24px;
`;

export const ReviewScore = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 40px;
  font-weight: 500;
  line-height: 58px;
  letter-spacing: -0.8px;
`;

export const ReviewScoreText = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 20px;
  letter-spacing: -0.2px;
`;

export const ReviewTypeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewType = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 18px;

  &:last-child {
    margin-right: 0;
  }
`;

export const ReviewTypeText = styled.span`
  margin-left: 4px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 72px;
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  width: 100%;
  margin-top: 48px;
  margin-bottom: 28px;
`;

export const ReviewerName = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
`;

export const ReviewImages = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 14px;
`;

export const ReviewImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 12px;
  object-fit: cover;
  &:last-child {
    margin-right: 0;
  }
`;

export const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 6px;
  span {
    color: #323232;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    margin-right: 12px;
  }
  p {
    color: #323232;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    margin-left: 4px;
  }
`;
export const ReviewTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 750px;
  margin-bottom: 16px;
`;

export const ReviewText = styled.div`
  display: flex;
  width: 100%;
  max-height: ${(props) => (props.isExpanded ? 'none' : '44px')};
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #323232;
  text-overflow: ellipsis;
  white-space: ${(props) => (props.isExpanded ? 'normal' : 'nowrap')};
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21.98px;
  margin-bottom: 16px;
`;

export const ReviewFooter = styled.div`
  display: flex;
  width: 650px;
  align-items: center;
`;

export const ReviewDate = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 18px;
`;

export const MoreButton = styled.button`
  color: #737373;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21px;
  text-decoration-line: underline;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
  white-space: nowrap;
`;

export const BreederCommentBox = styled.div`
  display: flex;
  width: 970px;
  padding: 16px 0 16px 16px;
  align-items: flex-start;
  border-radius: 20px;
  background: #f8f8f8;
`;

export const BreederProfileImage = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  margin-right: 12px;
`;

export const BreederCommentContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BreederCommentAuthor = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  margin-bottom: 6px;
`;

export const BreederCommentText = styled.div`
  overflow: hidden;
  color: #323232;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21.98px;
  margin-bottom: 16px;
`;

export const BreederCommentDate = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 18px;
`;

export const ReviewInfoItem = styled.div`
  margin-bottom: 64px;
  position: relative;
  margin-bottom: 64px;
`;

export const LatestOrderButton = styled.div`
  display: flex;
  width: 98px;
  height: 36px;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--Grey_block, #f4f4f4);
  position: absolute;
  right: 0px;
  top: 13px;
`;

export const ReviewLabelBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 16px;
`;

export const ReviewLabel = styled.div`
  display: flex;
  height: 22px;
  padding: 2.5px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #f2f2f2;
  color: #737373;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 500;
`;

export const MoreReviewBox = styled.div`
  display: flex;
  margin-top: 16px;
  padding: 0px 279.84px 0px 279.83px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

export const MoreReviewTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
export const MoreReviewText = styled.div`
  color: #fe834d;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

export const QnaBox = styled.div`
  margin-bottom: 42px;
`;

export const CommuBox = styled.div`
  margin-bottom: 32px;
  padding-right: 12px;
  width: 958px;
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

export const CommuFooterBox = styled.div`
  display: flex;
  height: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const CommuDate = styled.div`
  color: #b5b5b5;
  text-align: right;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 18px;
`;