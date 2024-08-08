import styled from 'styled-components';

export const Child = styled.img`
  height: 131px;
  width: 131px;
  position: relative;
  border-radius: 12px;
  object-fit: cover;
`;
export const Div = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 16px;
  display: inline-block;
  min-width: 77px;
`;
export const H = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: 22px;
  letter-spacing: -0.28px;
  line-height: 16px;
  font-weight: 700;
  font-family: 'Noto Sans KR';
  color: #272727;
  text-align: center;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 13px;
  }
`;
export const Parent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;
export const Div1 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 16px;
  font-weight: 500;
  display: inline-block;
  min-width: 49px;
`;
export const Div2 = styled.div`
  border-radius: 4px;
  background-color: #fffdf2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  white-space: nowrap;
`;
export const Div3 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 16px;
  font-weight: 500;
  display: inline-block;
  min-width: 53px;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
  font-size: 12px;
  color: #f87b45;
`;
export const FrameContainer = styled.div`
  width: 142px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
`;
export const Div4 = styled.div`
  position: relative;
  line-height: 24px;
  display: inline-block;
  min-width: 39px;
`;
export const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
export const H1 = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const B = styled.b`
  align-self: stretch;
  position: relative;
  line-height: 18px;
`;
export const Wrapper = styled.div`
  height: 22px;
  width: 22px;
  border-radius: 1000px;
  background-color: #fe834d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5px 0px 2.5px;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  color: #fffdf2;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 9px;
  font-size: 18px;
  color: #444;
`;
export const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  min-width: 493px;
  max-width: 100%;
  @media screen and (max-width: 700px) {
    min-width: 100%;
  }
`;
export const DivRoot = styled.div`
  align-self: stretch;
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 22px 31px 22px 23px;
  gap: 24px;
  max-width: 100%;
  text-align: left;
  font-size: 16px;
  color: #737373;
  font-family: 'Noto Sans KR';
`;
