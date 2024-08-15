import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 291px 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const TopImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 208px;
  background: url('/public/img/breederinfoedit.png') no-repeat center;
  background-color: lightgray;
  background-size: cover;
`;

export const TopImageIcon = styled.div`
  position: absolute;
  top: 232px;
  right: 371px;
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 111px;
  margin-top: 91px;
  position: relative;
  margin-bottom: 158px;
`;
export const OverlappingImageContainer = styled.div`
  position: absolute;
  top: -152px;
  left: 16px;
`;
export const OverlappingImage = styled.div`
  background: url('/public/img/defaultprofile.png');

  width: 120px;
  height: 120px;
  background-color: #000;
  background-size: cover;
  background-position: center;
  border-radius: 18px;
  border: 1px solid #f2f2f2;
`;

export const ProfileIcon = styled.div`
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;
export const AbsolutePositionedModal = styled.div`
  position: absolute;
  z-index: 1000;
`;
export const ConfidenceModalWrapper = styled.div`
  position: relative;
`;

export const ConfidenceModal = styled.div`
  display: flex;
  width: 280px;
  padding: 26px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 12px;
  border: 2px solid var(--Grey_line, #f1f1f1);
`;

export const ConfidenceModalTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;
export const ConfidenceModalTopText = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.5px;
`;

export const ConfidenceModalBottom = styled.div`
  color: #000;
  align-self: stretch;
  text-align: justify;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 350;
  line-height: normal;
`;

export const TopLeftBox = styled.div`
  color: #000;
  text-align: justify;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 350;
`;

export const BreederInfoTitleBox = styled.div`
  display: flex;
  padding: 0px 8px 0px 12px;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  border-bottom: 1px solid #c5c5c5;
  padding-bottom: 18px;
  margin-bottom: 24px;
`;

export const BreederInfoTitleBoxRight = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  flex-direction: row;
  gap: 12px;
`;

export const BreederInfoTitle = styled.input`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  font-style: normal;
  border: none;
  font-weight: 500;
  line-height: normal;

  &::placeholder {
    color: var(--Grey_icon, #c5c5c5);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const BreederInfoSubTitle = styled.textarea`
  display: flex;
  width: 100%;
  padding: 8px 10px 8px 18px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  height: 112px;
  margin-bottom: 18px;
  background: var(--White, #fff);
  &::placeholder {
    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 350;
    line-height: 24px;
  }
`;
export const BreederInfoSubBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 48px;
`;
export const BreederInfoSubBtnText = styled.div`
  overflow: hidden;
  color: var(--Grey_text, #737373);
  text-overflow: ellipsis;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 75px;
  margin-right: 282px;
  white-space: nowrap;
`;

export const ReviewEventTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;
export const ReviewEventTitle = styled.div`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;
export const ReviewEventContent = styled.textarea`
  display: flex;
  padding: 8px 10px 8px 18px;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  align-self: stretch;
  height: 88px;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  background: #fff;
  margin-top: 12px;
  &::placeholder {
    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 350;
    line-height: 24px;
  }
`;

export const BreederInfoBottomBox = styled.div`
  display: flex;
  height: 100px;
  flex-direction: row;
  border-radius: 8px;
  background: #fafafa;
`;

export const BreederInfoBottomTitle = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21px;
  white-space: nowrap;
`;

export const BreederInfoBottomContent = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  white-space: nowrap;
`;

export const BreederInfoBottom1 = styled.div`
  display: flex;
  padding: 18px 87.34px 18.5px 87.33px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: -0.5px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const BreederInfoBottom2 = styled.div`
  display: flex;
  padding: 18px 69.56px 18.5px 69.55px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;

export const BreederInfoBottom3 = styled.div`
  display: flex;
  padding: 18px 87.06px 18.5px 87.05px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: -0.5px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const BreederInfoBottom4 = styled.div`
  display: flex;
  padding: 18px 87.06px 18.5px 87.05px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: -0.5px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const BreederInfoBottomReviewBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BreederInfoBottomReviewIcon = styled.svg`
  margin-right: 4px;
`;

export const BreederInfoBottomReviewText1 = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-right: 2px;
`;

export const BreederInfoBottomReviewText2 = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 18px;
`;

// 메뉴탭부분

export const InfoWrapper = styled.div`
  width: 970px;
  align-items: center;
`;

export const InfoItem = styled.div`
  margin-bottom: 64px;
`;
export const InfoItemSecond = styled.div`
  margin-bottom: 48px;
`;

export const DateInputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const CalendarIcon = styled.svg`
  position: absolute;
  right: 10px;
  width: 14px;
  height: 14px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const CustomDatePicker = styled(DatePicker)`
  position: absolute;
  z-index: 10;
  top: 40px;
  left: 0;
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
export const InfoInputBox = styled.input`
  padding: 8px 10px;
  border: none;
  border-radius: 10px;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  width: 315px;
  color: #323232;
  display: flex;
  white-space: nowrap;
  &::placeholder {
    color: #c5c5c5;
  }
`;

export const InfoInputContentBox = styled.textarea`
  display: flex;
  width: 970px;
  height: 112px;
  padding: 8px 10px 8px 18px;
  align-items: flex-start;
  border-radius: 10px;
  border: 2px solid var(--Grey_line, #f1f1f1);
  background: var(--White, #fff);
  &::placeholder {
    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 350;
    line-height: 24px;
  }
`;

export const InfoInputBtnBox = styled.div`
  display: flex;
  width: 970px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const InfoInputBtn = styled.button`
  display: flex;
  width: 50px;
  height: 40px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #c5c5c5;
  background: #f4f4f4;
  white-space: nowrap;
  color: #444;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21px;
  cursor: pointer;
`;

export const InfoInputContentLine = styled.input`
  display: flex;
  width: 902px;
  height: 40px;
  padding: 8px 10px 8px 18px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--Grey_line, #f1f1f1);
  background: var(--White, #fff);
  &::placeholder {
    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 350;
    line-height: 24px;
  }
`;

export const InfoInputContentLine2Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InfoInputContentLine22 = styled.div`
  width: 18px;
  height: 3px;
  background: #d9d9d9;
  margin: 0 3px;
`;

export const InfoInputContentLine2 = styled.input`
  display: flex;
  width: 184px;
  height: 40px;
  padding: 8px 18px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--Grey_line, #f1f1f1);
  background: var(--White, #fff);
  &::placeholder {
    color: #dadada;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
  }
`;

export const InfoInputContentLine3Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  align-self: stretch;
`;

export const InfoInputContentLine3 = styled.input`
  display: flex;
  width: 562px;
  height: 40px;
  padding: 8px 10px 8px 18px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 10px;
  border: 2px solid var(--Grey_line, #f1f1f1);
  background: var(--White, #fff);
  &::placeholder {
    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 350;
    line-height: 24px;
  }
`;

export const InfoInputContentLine4 = styled.input`
  display: flex;
  width: 476px;
  height: 40px;
  padding: 8px 10px 8px 18px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
  background: #fff;
  flex-shrink: 0;
  &::placeholder {
    color: #737373;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 350;
    line-height: 24px;
  }
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
  gap: 8px;
  margin-bottom: 12px;
`;

export const AnimalSelect = styled.div`
  display: flex;
  padding: 10px 19px;
  align-items: center;
  gap: 12px;
  border-radius: 21px;
  white-space: nowrap;
  border: 1px solid #e1e1e1;
  border-radius: 21px;
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 350;
  line-height: 24px;
  letter-spacing: -0.3px;
`;

export const MiniTitle = styled.div`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-top: 20px;
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
  margin-bottom: 24px;
`;
export const CertificateImgBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
export const CertificateIconBox = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: absolute;
  right: 8px;
  top: 8px;
  border-radius: 1000px;
  background: #c5c5c5;
`;

export const CertificateIconBox2 = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 1000px;
  background: #c5c5c5;
`;

export const CertificateImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  border: 2px solid rgba(241, 241, 241, 0.5);
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #c5c5c5;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  cursor: pointer;
`;

export const CertificateImg2 = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 12px;
  border: 2px solid rgba(241, 241, 241, 0.5);
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #c5c5c5;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  cursor: pointer;
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
  overflow: hidden;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.3px;
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

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  width: 453px;
  height: 364px;
  position: relative;
  z-index: 1001;
  display: flex;
  flex-direction: column;
`;

export const ModalTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px 0;
  border-bottom: 1px solid #d9d9d9;
`;

export const ModalTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
`;

export const CloseIcon = styled.svg`
  position: absolute;
  right: 36px;
  cursor: pointer;
`;

export const ModalBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 24px;
  flex: 1;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const InfoLabel = styled.span`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  width: 104px;
  flex-shrink: 0;
`;

export const InfoValue = styled.span`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-left: 16px;
`;

export const FinishBtn = styled.div`
  display: flex;
  width: 176px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid #fe834d;
  background: #fe834d;
  color: #fff;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 116px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #f57137;
    border-color: #f57137;
  }
`;
