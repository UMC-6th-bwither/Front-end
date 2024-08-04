import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: calc(100vh - 72px);
`;

export const TopbarContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`;

export const TopbarToolbars = styled.div`
  border: 1px solid var(--Grey_block, #f4f4f4);
  padding: 0 32px;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const TopbarToolbarsLeft = styled.div`
  flex: 1;
`;

export const IconContainer = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopbarNameBar = styled.input`
  border: 1px solid var(--Grey_block, #f4f4f4);
  padding: 0 32px;
  flex-grow: 1;
  display: flex;
  align-items: center;

  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 72.727% */
  letter-spacing: -0.28px;
`;

export const TopbarDetailBar = styled.div`
  border: 1px solid var(--Grey_block, #f4f4f4);
  padding: 0 32px;
  flex-grow: 0;
  gap: 30px;
  display: flex;
  align-items: center;
  min-width: 375px;
`;

export const TopbarDetailBarContext = styled.div`
  color: var(--Grey_text, #737373);
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 72.727% */
  letter-spacing: -0.28px;
  flex-grow: 1;
`;

export const ChatContainer = styled.div`
  display: flex;
  height: calc(100% - 70px);
`;

export const ChatListContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0;
  min-width: 400px;
  border: 1px solid var(--Grey_block, #f4f4f4);
`;

export const ChatContentContainer = styled.div`
  background: none;
  flex: 2;
  border: 1px solid var(--Grey_block, #f4f4f4);
  overflow-y: scroll;

  /* 스크롤바 전체 */
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  /* 스크롤바의 트랙 (스크롤바 뒤의 배경) */
  &::-webkit-scrollbar-track {
    background: rgba(244, 244, 244, 0.8); /* 트랙의 색상을 약간 투명하게 설정 */
    border-radius: 10px;
  }

  /* 스크롤바의 핸들 (실제로 움직이는 부분) */
  &::-webkit-scrollbar-thumb {
    background-color: rgba(
      248,
      123,
      69,
      0.8
    ); /* 핸들의 색상을 약간 투명하게 설정 */
    border-radius: 10px;
    border: 2px solid rgba(244, 244, 244, 0.8); /* 핸들 주위에 트랙의 색상으로 테두리 적용 */
  }

  /* 스크롤바 핸들에 호버 상태 */
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(248, 123, 69, 1); /* 호버 시 불투명하게 설정 */
  }
`;

export const BreederDetailContainer = styled.div`
  background: var(--Grey_block, #f4f4f4);
  flex: 1;
  border: 1px solid var(--Grey_block, #f4f4f4);
  overflow: auto;
`;

export const BreederChatElementContainer = styled.div`
  position: relative;
  padding: 3px 0;
  margin: 0 12px;
  display: flex;
  gap: 18px;
  align-items: center;
  cursor: pointer;

  &::after {
    position: absolute;
    bottom: -12px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background: var(--Grey_line, #f1f1f1);
  }
`;

export const BreederChatElementImgContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  background: var(--white_hover, #f5f5f5);
  border-radius: 10px;
`;

export const BreederChatElementImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const BreederChatElementName = styled.div`
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
  letter-spacing: -0.5px;
`;

export const BreederChatElementContext = styled.div`
  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BreederChatElementDateTag = styled.div`
  color: var(--Grey_text, #737373);
  font-family: 'Noto Sans KR';
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 150% */
`;

export const BreederChatElementContentBox = styled.div`
  gap: 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BreederChatElementNewMsgCount = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  padding-bottom: 1px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: var(--main, #fe834d);
  color: var(--White, #fff);
  font-size: 11px;
`;
