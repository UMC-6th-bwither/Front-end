import styled from 'styled-components';

export const Post = styled.div`
  margin-bottom: 48px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #f4f4f4;
    display: block;
  }
`;

export const MyPost = styled.div`
  position: relative;
  padding: 24px 0;

  &::after {
    content: '';
    display: block;
    position: relative;
    top: 24px;
    width: 100%;
    height: 1px;
    background: var(--Grey_line, #f1f1f1);
  }
`;

export const PostUserProfile = styled.div`
  display: flex;
`;

export const UserProfileImageConatiner = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  overflow: hidden;
  border-radius: 32px;
  background-color: gainsboro;
`;

export const UserProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserProfileName = styled.div`
  display: flex;
  align-items: center;

  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px; /* 112.5% */
`;

export const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const ThumbnailWrapper = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 12px;
  overflow: hidden;
  flex: 0 0 auto;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostTitle = styled.div`
  padding-top: 16px;
  color: #323232;

  text-overflow: ellipsis;
  white-space: nowrap;
  /* Caption1 */
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
`;

export const MyPostTitle = styled.div`
  color: #323232;

  text-overflow: ellipsis;
  white-space: nowrap;
  /* Caption1 */
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
`;

export const PostContent = styled.div`
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
`;

export const PostIconLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const PostTimestamp = styled.div`
  color: var(--Grey_icon, #c5c5c5);
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PostIconFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PostIconContainer = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;

export const MyCommentPostIconContainer = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
`;

export const PostIconImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const PostIconContent = styled.div`
  color: var(--Grey_icon, #c5c5c5);

  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px; /* 150% */
  letter-spacing: -0.2px;
`;

export const PostCategoryTag = styled.div`
  color: #b5b5b5;

  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px; /* 150% */
`;
