import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8vw;
  padding: 80px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 4vw;
    padding: 40px 0;
  }
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

  @media (max-width: 768px) {
    font-size: 18px;
    padding-bottom: 30px;

    &::after {
      bottom: -12px;
    }
  }
`;

export const MenuSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  /* @media (max-width: 768px) {
    gap: 4px;
  } */
`;

export const MenuSubtitleActive = styled(Link)`
  color: var(--main, #fe834d);
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;

  /* @media (max-width: 768px) {
    font-size: 16px;
  } */
`;

export const MenuSubtitleInActive = styled(Link)`
  color: #737373;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  text-decoration: none;

  /* @media (max-width: 768px) {
    font-size: 16px;
  } */
`;

export const MainContainer = styled.div`
  width: 970px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 56px;
  height: 56px;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SmallQuestionIconContainer = styled.div`
  width: 12px;
  height: 16px;

  @media (max-width: 768px) {
    width: 10px;
    height: 14px;
  }
`;

export const BigQuestionIconContainer = styled.div`
  width: 26px;
  height: 40px;

  @media (max-width: 768px) {
    width: 22px;
    height: 34px;
  }
`;

export const TitleLayout = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const MainTitle = styled.div`
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin: 10px 0 8px 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const MainSubTitle = styled.div`
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const TitleButtonContainer = styled.div`
  margin-left: auto;
  margin-top: auto;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 6px;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  padding-top: 52px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 24px;
    gap: 16px;
  }
`;

export const SortContainer = styled.div`
  margin-left: auto;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const PostContainer = styled.div`
  padding: 8px 0 0 0;

  @media (max-width: 768px) {
    padding: 4px 0 0 0;
  }
`;

export const Post = styled.div`
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const PostUserProfile = styled.div`
  display: flex;
  padding-bottom: 16px;

  @media (max-width: 768px) {
    padding-bottom: 12px;
  }
`;

export const UserProfileImageConatiner = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  overflow: hidden;
  border-radius: 32px;
  background-color: gainsboro;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
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

  @media (max-width: 768px) {
    font-size: 14px;
  }
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

  @media (max-width: 768px) {
    font-size: 12px;
  }
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

  @media (max-width: 768px) {
    font-size: 12px;
    -webkit-line-clamp: 3;
  }
`;

export const PostIconLayout = styled.div`
  display: flex;
  gap: 18px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const PostTimestamp = styled.div`
  color: var(--Grey_icon, #c5c5c5);
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const PostIconFrame = styled.div`
  display: flex;
  gap: 6px;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

export const PostIconContainer = styled.div`
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
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

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const PaginationContainer = styled.div`
  padding-top: 75px;

  @media (max-width: 768px) {
    padding-top: 40px;
  }
`;

export const VerticalFlexGap20Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 72px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const BreederCardListTag = styled.div`
  padding-top: 72px;
  color: var(--black, #272727);
  /* Body1 */
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    padding-top: 36px;
    font-size: 16px;
  }
`;

export const BreederCardContainer = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

export const ReviewCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding-top: 16px;
  }
`;

export const NothingContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  color: #d9d9d9;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  font-family: 'Noto Sans KR';

  @media (max-width: 768px) {
    gap: 12px;
    height: 200px;
  }
`;
