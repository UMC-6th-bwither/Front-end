import styled from 'styled-components';

export const PageBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  position: relative;
`;

export const Sidebar = styled.div`
  position: absolute;
  left: calc(50% - 485px - 194px);
  top: 64px;
  width: 120px;
  height: 126px;
`;

export const Content = styled.div`
  flex: 1;
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
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    height: 351px;
    padding: 16px 15px 24px 15px;
  }
`;

export const ReviewImage = styled.div`
  width: 235px;
  height: 235px;
  background: #eee;

  ${ReviewItem}:hover & {
    opacity: 0;
    height: 0;
  }
`;

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 15px 24px 15px;
  gap: 8px;
  border-top: none;

  ${ReviewItem}:hover & {
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
  transition: all 0.3s ease;

  ${ReviewItem}:hover & {
    -webkit-line-clamp: unset;
    display: block;
    overflow: visible;
    text-overflow: unset;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 119px;
  margin-bottom: 220px;
`;
