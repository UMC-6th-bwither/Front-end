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
