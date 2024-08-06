import styled from 'styled-components';

export const Border = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  gap: 100px;
  padding-top: 136px;
  padding-bottom: 666px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
  align-self: stretch;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

export const Title = styled.div`
  color: #272727;
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  line-height: 36px; /* 150% */
`;

export const Profile = styled.div`
  display: flex;
  padding: 36px 28px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 2px 20px 0px rgba(148, 156, 163, 0.15);
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Left = styled(FlexRow)`
  .profile_img {
    width: 120px;
    height: 120px;
    border-radius: 120px;
  }
`;

export const Right = styled(FlexRow)`
  gap: 12px;

  .edit_profile_btn,
  .edit_info_btn {
    padding: 12px;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 350;
    line-height: 21px;
    cursor: pointer;
  }

  .edit_profile_btn {
    border: 1px solid #fe834d;
    background: #fff;
    color: #fe834d;
  }

  .edit_info_btn {
    border: 1px solid #fe834d;
    background: #fe834d;
    color: #fff;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  .top_info {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .badge {
    display: flex;
    width: 42px;
    height: 22px;
    padding: 2px 4px;
    align-items: center;
    gap: 2px;
    border-radius: 4px;
    background: #f0f4fe;
    color: #3056d7;
    font-family: 'Noto Sans KR';
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  align-self: stretch;
`;

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

export const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const RankTop = styled(FlexRow)`
  align-self: stretch;
  gap: 10px;
`;

export const RankTitle = styled(Title)`
  font-size: 24px;
`;

export const RankBottom = styled(FlexRow)`
  color: #272727;
  gap: 4px;
  font-family: 'Noto Sans KR';

  .number {
    text-align: center;
    font-size: 48px;
    font-weight: 500;
    line-height: 24px; /* 50% */
  }

  .text {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px; /* 150% */
    letter-spacing: -0.5px;
  }
`;

export const BottomContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 72px;
`;

export const SectionContainer = styled.div`
  display: flex;
  width: 970px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  .title {
    color: #2d2d2d;
    font-family: 'Noto Sans KR';
    font-size: 24px;
    font-weight: 700;
    line-height: 36px; /* 150% */
    padding-bottom: 20px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 32px;
      height: 4px;
      background-color: #fe834d;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

export const SectionLinks = styled.div`
  display: flex;
  padding-left: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
