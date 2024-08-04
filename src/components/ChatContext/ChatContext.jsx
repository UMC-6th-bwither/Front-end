/* eslint-disable react/prop-types */
import * as S from './ChatContext.style';

export default function ChatContext({ chatList }) {
  return (
    <S.Container>
      {chatList.map((chat, index) => {
        const prevRole = index > 0 ? chatList[index - 1].role : null;
        const nextRole =
          index < chatList.length - 1 ? chatList[index + 1].role : null;

        const isStart = prevRole !== chat.role;
        const isEnd = nextRole !== chat.role;

        return (
          <S.MessageWrapper key={index} role={chat.role} isStart={isStart}>
            {isEnd && chat.role === 'me' && (
              <S.ChatTime>{chat.time}</S.ChatTime>
            )}
            <S.ChatBubble role={chat.role} isStart={isStart} isEnd={isEnd}>
              {chat.msg}
            </S.ChatBubble>
            {isEnd && chat.role !== 'me' && (
              <S.ChatTime>{chat.time}</S.ChatTime>
            )}
          </S.MessageWrapper>
        );
      })}
    </S.Container>
  );
}
