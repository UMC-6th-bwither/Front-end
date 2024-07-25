import styled from 'styled-components';

export const Post = styled.div`
  margin-bottom: 24px;
`;

export const PostUserProfile = styled.div`
  display: flex;
  padding-bottom: 16px;
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

export const PostTitle = styled.div`
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
  width: 20px;
  height: 20px;
`;

export const PostIconImage = styled.img`
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
