import styled from 'styled-components';

export const Post = styled.div`
  margin-bottom: 24px;
  height: 96px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 32px;
  width: 85%;
`;

export const TextWrapper = styled.div`
  height: 45px;
  width: 95%;
`;

export const CommunityName = styled.div`
  height: 18px;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 18px;
  text-align: left;
  color: #737373;

  margin-bottom: 10px;
`;

export const PostTitle = styled.div`
  height: 21px;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: #323232;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostContent = styled.div`
  height: 21px;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 350;
  line-height: 21px;
  text-align: left;
  color: #737373;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ThumbnailImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 12px;
  background-color: #c5c5c5;

  position: absolute;
  right: 0;
  bottom: 0;
`;

export const PostIconLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const PostIconFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PostIconContent = styled.div`
  color: var(--Grey_icon, #c5c5c5);

  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px;
  letter-spacing: -0.2px;
`;

export const PostIconContainer = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;

export const PostIconImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
