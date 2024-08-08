import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const MessageWrapper = styled.div`
  margin-top: ${({ $isStart }) => ($isStart ? '30px' : '2px')};
  position: relative;
  display: flex;
  justify-content: ${({ role }) => (role === 'me' ? 'flex-end' : 'flex-start')};
`;

export const ChatBubble = styled.div`
  padding: 16px 20px;
  margin: 5px;
  border-radius: ${({ role, $isStart, $isEnd }) => {
    if (role === 'me') {
      return `
        30px
        ${$isStart ? '30px' : '8px'} 
        ${$isEnd ? '30px' : '8px'}
        30px
      `;
    }

    return `
        ${$isStart ? '30px' : '8px'} 
        30px
        30px
        ${$isEnd ? '30px' : '8px'} 
      `;
  }};
  max-width: 60%;
  background-color: ${({ role }) => (role === 'me' ? '#F4F4F4' : '#FFE7D6')};
  align-self: ${({ role }) => (role === 'me' ? 'flex-end' : 'flex-start')};

  color: var(--black, #272727);
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ChatTime = styled.div`
  font-size: 0.75em;
  color: gray;
  text-align: right;
  margin-top: 2px;
  display: flex;
  align-items: flex-end;
  padding: 5px 10px;
  font-family: 'Noto Sans KR';
`;
