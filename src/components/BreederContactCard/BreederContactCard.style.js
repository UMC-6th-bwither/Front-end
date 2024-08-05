import styled from 'styled-components';

export const FrameChild = styled.img`
  height: 120px;
  width: 120px;
  position: relative;
  border-radius: 12px;
  object-fit: cover;
`;
export const A = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.28px;
  line-height: 16px;
  color: inherit;
  display: inline-block;
  min-width: 76px;
  white-space: nowrap;
`;
export const A1 = styled.a`
  text-decoration: none;
  position: relative;
  font-size: 22px;
  letter-spacing: -0.28px;
  line-height: 16px;
  font-weight: 600;
  font-family: 'Noto Sans KR';
  color: var(--black);
  display: inline-block;
  min-width: 76px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 13px;
  }
`;
export const Parent1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 0px;
  gap: 18px;
`;
export const RectangleParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
`;
export const UnionIcon = styled.img`
  height: 14.1px;
  width: 14px;
  position: relative;
`;
export const Pencil = styled.div`
  height: 18px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) 2px;
  box-sizing: border-box;
`;
export const A2 = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 64px;
`;
export const Button = styled.div`
  width: 91px;
  border-radius: 4px;
  background-color: var(--main);
  border: 1px solid var(--main);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 12px;
  gap: 12px;
  text-align: center;
  color: var(--white);
`;
export const FrameParent = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px var(--padding-5xs) 0px 0px;
  box-sizing: border-box;
  min-width: 335px;
  max-width: 100%;
  gap: 20px;
  text-align: left;
  font-size: var(--font-size-base);
  color: #737373;
  font-family: 'Noto Sans KR';
  @media screen and (max-width: 409px) {
    flex-wrap: wrap;
  }
`;
export const InstanceChild = styled.img`
  height: 22px;
  width: 11px;
  position: relative;
  object-fit: contain;
`;
export const RootInner = styled.div`
  width: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 9px;
  box-sizing: border-box;
  height: 30px;
`;
export const RootRoot = styled.div`
  width: 100%;
  border-radius: 12px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 24px 18px 34px 28px;
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
  row-gap: 20px;
`;
