import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 14px;
    height: 26px;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 14px;
    height: 26px;
  }
`;
export const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  gap: 10px;
`;

export const ReportIcon = styled.div`
  cursor: pointer;
  svg {
    width: 32px;
    height: 33px;
  }
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 50px;
  border-radius: 10px;
  max-width: 600px;
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ModalAuthorRatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 15px;
`;
export const ModalAuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 15px;
  gap: 10px;
  margin-right: 25px;
`;

export const ModalAuthor = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const ModalRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  svg {
    margin-right: 4px;
  }
`;

export const ModalText = styled.div`
  font-size: 16px;
  color: #737373;
  line-height: 1.5;
  text-align: center;
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #999;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  padding-bottom: 294px;
`;

export const PencilIcon = styled.svg`
  margin: 64px 0 0 0;
  align-self: flex-start;
`;

export const Title = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 8px;
  align-self: flex-start;
`;

export const SubTitle = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  align-self: flex-start;
`;

export const MiddleBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 88px 0 32px 0;
  align-self: flex-start;
`;

export const CommuBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
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

export const ReviewList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
`;

export const ReviewItem = styled.div`
  cursor: pointer;
  position: relative;
  width: 235px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #f1f1f1;
  background: #fff;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  &.expanded {
    display: inline-flex;
    height: 351px;
    padding: 16px 15px 24px 15px;
    border-radius: 20px;
    border: 2px solid #f1f1f1;
  }
`;

export const NewBadge = styled.div`
  position: absolute;
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px 0px 10px 0px;
  background: #fa5963;
  color: #fffdf2;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

export const ReviewImage = styled.div`
  width: 235px;
  height: 235px;
  background: #eee;

  &.hidden {
    display: none;
  }
`;

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 15px 24px 15px;
  gap: 8px;

  &.expanded {
    padding: 0;
    height: 100%;
    border: none;
  }
`;

export const ReviewKennelName = styled.div`
  color: #2d2d2d;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 500;
  margin-right: 13px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 4.5px;
    margin-left: 12px;
  }
`;

export const ReviewText = styled.div`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 350;
  line-height: 21px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  &.expanded {
    -webkit-line-clamp: unset;
    display: block;
  }
`;

export const NothingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 100px 0;

  align-self: stretch;
  color: var(--Grey_icon, #c5c5c5);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
