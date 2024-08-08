import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background: var(--Grey_block, #f4f4f4);
  display: flex;
  flex-direction: column;
  padding: 36px 10%;
  margin: 0 auto;
`;

export const Title = styled.div`
  padding-bottom: 22px;

  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
  letter-spacing: -0.5px;
`;

export const CategoryLayout = styled.div`
  display: flex;
  padding-top: 18px;
  gap: 6px;
`;

export const Category = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px 13px 6px 13px;
  border-radius: 28px;
  border: 1px ${(p) => (p.$active ? '#f87b45' : '#e1e1e1')};
  background: ${(p) => (p.$active ? '#f87b45' : '#fff')};
  color: ${(p) => (p.$active ? '#fff' : '#737373')};

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
`;

export const PostLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 16px;
`;

export const PostWrapper = styled.div``;

export const PostContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding-bottom: 8px;
`;

export const PostCategory = styled.div`
  color: #b5b5b5;

  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px; /* 150% */
`;

export const PostTitle = styled.div`
  overflow: hidden;
  width: 100%;
  color: #323232;

  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
`;

export const PostContent = styled.div`
  overflow: hidden;
  width: 100%;
  color: #737373;

  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
`;

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconLayout = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 17px;
  flex-shrink: 0;
`;

export const IconTypo = styled.div`
  color: #b5b5b5;

  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px; /* 150% */
`;

export const DateTypo = styled.div`
  color: #b5b5b5;

  text-align: right;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px; /* 150% */
`;
