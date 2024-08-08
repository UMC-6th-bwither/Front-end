import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 100%;
`;

export const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;

  /* 스크롤바 전체 */
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  /* 스크롤바의 트랙 (스크롤바 뒤의 배경) */
  &::-webkit-scrollbar-track {
    background: rgba(244, 244, 244, 0.2); /* 트랙의 색상을 약간 투명하게 설정 */
    border-radius: 10px;
  }

  /* 스크롤바의 핸들 (실제로 움직이는 부분) */
  &::-webkit-scrollbar-thumb {
    background-color: rgba(
      248,
      123,
      69,
      0.3
    ); /* 핸들의 색상을 약간 투명하게 설정 */
    border-radius: 10px;
  }

  /* 스크롤바 핸들에 호버 상태 */
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(248, 123, 69, 0.5); /* 호버 시 불투명하게 설정 */
  }
`;

export const PaginationContainer = styled.div`
  position: sticky;
  top: 50px;
  left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  height: fit-content;
  padding: 20px 0;
`;

export const PaginationButton = styled.div`
  cursor: pointer;
  width: ${(p) => (p.$active ? '14px' : '10px')};
  height: ${(p) => (p.$active ? '14px' : '10px')};
  border-radius: 10px;
  background: ${(p) => (p.$active ? '#fe834d' : '#fff')};
`;
