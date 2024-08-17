import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8vw;
  padding: 80px 0;
`;

export const MenuTitle = styled.div`
  position: relative;
  padding-bottom: 50px;

  color: #2d2d2d;
  font-family: 'Noto Sans KR';
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 72.727% */
  letter-spacing: -0.28px;

  &::after {
    display: block;
    position: relative;
    content: '';
    bottom: -22px;
    width: 32px;
    height: 2px;
    background: var(--main, #fe834d);
  }
`;

export const MenuSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MenuSubtitleActive = styled(Link)`
  color: var(--main, #fe834d);
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
`;

export const MenuSubtitleInActive = styled(Link)`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  text-decoration: none;
`;

export const MainContainer = styled.div`
  width: 970px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 56px;
  height: 56px;
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SmallQuestionIconContainer = styled.div`
  width: 12px;
  height: 16px;
`;

export const BigQuestionIconContainer = styled.div`
  width: 26px;
  height: 40px;
`;

export const TitleLayout = styled.div`
  display: flex;
`;

export const MainTitle = styled.div`
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin: 10px 0 8px 0;
`;

export const MainSubTitle = styled.div`
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TitleButtonContainer = styled.div`
  margin-left: auto;
  margin-top: auto;
`;

export const FiltersContainer = styled.div`
  padding-top: 88px;
  display: flex;
  align-items: flex-end;
  gap: 6px;
`;

export const Filter = styled.button`
  display: flex;
  height: 32px;
  padding: 5px 13px 6px 13px;
  align-items: center;
  border-radius: 28px;
  box-shadow: ${(p) => (p.$active ? 'none' : 'inset 0 0 0 1px #e1e1e1')};
  border: none;
  background: ${(p) => (p.$active ? '#f87b45' : '#fff')};
  cursor: pointer;
  text-decoration: none;

  color: ${(p) => (p.$active ? '#fff' : '#737373')};
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
`;

export const FilterContainer = styled.div`
  display: flex;
`;

export const SortContainer = styled.div`
  padding-top: 88px;
  margin-left: auto;
`;

export const PostContainer = styled.div`
  padding: 32px 0 0 0;
`;

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

export const PaginationContainer = styled.div`
  padding-top: 75px;
`;
