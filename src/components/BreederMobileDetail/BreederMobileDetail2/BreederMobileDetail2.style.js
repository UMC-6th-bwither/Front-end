import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background: var(--Grey_block, #f4f4f4);
  display: flex;
  flex-direction: column;
  padding: 36px 10%;
  gap: 52px;
  margin: 0 auto;
`;

export const Title = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
  letter-spacing: -0.5px;
`;

export const SubContentLayout = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SubContentContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubContent = styled.div`
  color: #737373;

  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 24px; /* 150% */
  letter-spacing: -0.3px;
  flex-shrink: 0;
`;

export const SubContentUrl = styled.div`
  overflow: hidden;
  color: #6e6e6e;
  text-overflow: ellipsis; /* 넘치는 텍스트에 말줄임표(...) 추가 */
  white-space: nowrap; /* 텍스트를 한 줄로 표시 */

  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 24px; /* 200% */
  letter-spacing: -0.3px;
  text-decoration-line: underline;
`;

export const BreederDetailContainer = styled.div`
  padding-top: 52px;
`;

export const BreederDetailContentText = styled.div`
  color: #737373;
  white-space: pre-line;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 24px; /* 150% */
  letter-spacing: -0.2px;
  max-height: 400px;
  overflow: hidden;
`;

export const BreederDetailContentContainer = styled.div`
  position: relative;
  padding-top: 12px;
`;

export const BreederDetailContentGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: 50px;
  background: linear-gradient(
    180deg,
    rgba(244, 244, 244, 0) 0%,
    rgba(244, 244, 244, 0.9) 70%,
    #f4f4f4 100%
  );
`;

export const MoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%); /* 부모 컨테이너의 하단 중앙에 위치 */
  background: none;
  border: none;
  color: var(--main, #fe834d);
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
  cursor: pointer;
`;

export const ButtonIconContainer = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BreederTagsContainer = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 12px;
`;

export const BreederTag = styled.div`
  padding: 10px 19px;
  border-radius: 21px;
  border: 1px solid #e1e1e1;

  color: #737373;

  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 24px; /* 150% */
  letter-spacing: -0.3px;
`;

export const BreederCareerContainer = styled.div`
  display: flex;
  padding-top: 12px;
  gap: 8px;
`;

export const BreederCareerIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BreederCareer = styled.div`
  color: var(--main, #fe834d);

  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const BreederCareerDetail = styled.div`
  padding-top: 12px;
`;

export const BreederCareerDetailName = styled.div`
  color: #323232;

  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const BreederCareerDetailContent = styled.div`
  color: #737373;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 18px; /* 128.571% */
`;

export const BreederCareerDetailContentSub = styled.div`
  color: #b5b5b5;
  padding-top: 6px;

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
`;

export const BreederWarrantyConatiner = styled.div`
  padding-top: 12px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
`;

export const BreederWarrantyImgContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 2px solid rgba(241, 241, 241, 0.5);
`;

export const BreederWarrantyImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
`;
