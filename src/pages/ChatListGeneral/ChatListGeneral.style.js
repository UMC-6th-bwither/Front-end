import styled from 'styled-components';

export const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #f2f4f6;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 236px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 975px) {
    gap: 118px;
  }
  @media screen and (max-width: 700px) {
    gap: 59px;
  }
`;

export const A5 = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 36px;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 45px;
  @media screen and (max-width: 450px) {
    font-size: 19px;
    line-height: 29px;
  }
`;

export const A6 = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 24px;
  color: inherit;
  display: inline-block;
  min-width: 30px;
`;

export const Button = styled.div`
  border-radius: 8px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 14px;
  text-align: center;
  font-size: 16px;
  color: #2d2d2d;
`;

export const ChatHeader = styled.div`
  width: 802px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  width: calc(100% - 60px);
  border: none;
  outline: none;
  font-weight: 500;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  background-color: transparent;
  height: 26px;
  flex: 1;
  position: relative;
  color: #737373;
  text-align: left;
  display: flex;
  align-items: center;
  min-width: 150px;
  max-width: calc(100% - 32px);
  padding: 0;
`;

export const SearchIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;

export const Component = styled.div`
  width: 802px;
  border-radius: 10px;
  background-color: #f1f1f1;
  border: 2px solid #f1f1f1;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 18px;
  gap: 8px;
  max-width: 100%;
`;

export const FrameParent = styled.main`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 36px;
  max-width: 100%;
  @media screen and (max-width: 700px) {
    gap: 18px;
  }
`;

export const HeaderverParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  font-size: 24px;
  color: #272727;
  font-family: 'Noto Sans KR';
`;

export const ChatHeaderParent = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 64px 20px;
  box-sizing: border-box;
  gap: 24px;
  max-width: 100%;
  margin-top: -37px;
`;

export const FrameWrapper = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 24px;
  color: #000;
  font-family: 'Noto Sans KR';
  padding-bottom: 200px;
`;

export const FrameContainer = styled.div`
  width: 970px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  max-width: 100%;
  @media screen and (max-width: 700px) {
    gap: 16px;
  }
`;

export const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 1px;
`;

export const H = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 36px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: 19px;
    line-height: 29px;
  }
`;

export const Parent2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 37px;
  max-width: 100%;
  @media screen and (max-width: 700px) {
    gap: 18px;
  }
`;

export const ChatListSeparator = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  background-color: #f1f1f1;
`;

export const ChatListItems = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  max-width: 100%;
`;
