import { useRef, useEffect, useState } from 'react';
import * as S from './ChatDetailGeneral.style';
import TimeStampParser from '../../components/TimeStampParser/TimeStampParser';
import ChatContext from '../../components/ChatContext/ChatContext';
import BreederMobileDetail from '../../components/BreederMobileDetail/BreederMobileDetail';

export default function ChatDetailGeneral() {
  const topDetailBarRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (topDetailBarRef.current) {
        setContainerWidth(topDetailBarRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <S.Section>
      <S.TopbarContainer>
        <S.TopbarToolbars>
          <S.TopbarToolbarsLeft>
            <S.IconContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.3346 4.33203H0.667969V0.332031H27.3346V4.33203ZM27.3346 14.9987H0.667969V10.9987H27.3346V14.9987ZM0.667969 25.6654H27.3346V21.6654H0.667969V25.6654Z"
                  fill="#C5C5C5"
                />
              </svg>
            </S.IconContainer>
          </S.TopbarToolbarsLeft>
          <div>
            <S.IconContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M29.5111 32L18.3111 20.8C17.4222 21.5111 16.4 22.0741 15.2444 22.4889C14.0889 22.9037 12.8593 23.1111 11.5556 23.1111C8.32593 23.1111 5.59289 21.9923 3.35645 19.7547C1.12 17.517 0.00118613 14.784 9.40623e-07 11.5556C-0.00118424 8.32711 1.11763 5.59407 3.35645 3.35644C5.59526 1.11882 8.3283 0 11.5556 0C14.7828 0 17.5164 1.11882 19.7564 3.35644C21.9964 5.59407 23.1147 8.32711 23.1111 11.5556C23.1111 12.8593 22.9037 14.0889 22.4889 15.2444C22.0741 16.4 21.5111 17.4222 20.8 18.3111L32 29.5111L29.5111 32ZM11.5556 19.5556C13.7778 19.5556 15.667 18.7781 17.2231 17.2231C18.7793 15.6681 19.5567 13.779 19.5556 11.5556C19.5544 9.33215 18.7769 7.44356 17.2231 5.88978C15.6693 4.336 13.7802 3.55793 11.5556 3.55556C9.33097 3.55319 7.44237 4.33126 5.88978 5.88978C4.33719 7.4483 3.55911 9.33689 3.55556 11.5556C3.552 13.7742 4.33008 15.6634 5.88978 17.2231C7.44948 18.7828 9.33808 19.5603 11.5556 19.5556Z"
                  fill="#C5C5C5"
                />
              </svg>
            </S.IconContainer>
          </div>
        </S.TopbarToolbars>
        <S.TopbarNameBar type="text" />
        <S.TopbarDetailBar ref={topDetailBarRef}>
          <S.TopbarDetailBarContext>
            아직 예약이 잡히지 않았어요!
          </S.TopbarDetailBarContext>
          <S.IconContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8 32"
              fill="none"
              style={{ width: '100%', height: '100%' }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4ZM8 16C8 18.2091 6.20914 20 4 20C1.79086 20 0 18.2091 0 16C0 13.7909 1.79086 12 4 12C6.20914 12 8 13.7909 8 16ZM4 32C6.20914 32 8 30.2091 8 28C8 25.7909 6.20914 24 4 24C1.79086 24 0 25.7909 0 28C0 30.2091 1.79086 32 4 32Z"
                fill="#D9D9D9"
              />
            </svg>
          </S.IconContainer>
        </S.TopbarDetailBar>
      </S.TopbarContainer>
      <S.ChatContainer>
        <div
          style={{
            width: `calc(100% - ${containerWidth}px)`,
            display: 'flex',
          }}
        >
          <S.ChatListContainer>
            <S.BreederChatElementContainer>
              <S.BreederChatElementImgContainer>
                <S.BreederChatElementImg src="" alt="Img" />
              </S.BreederChatElementImgContainer>
              <S.BreederChatElementContentBox>
                <div>
                  <S.BreederChatElementName>
                    새드 브리더
                  </S.BreederChatElementName>
                  <S.BreederChatElementContext>
                    아 넵 그럼 그때 뵙겠습니다.
                  </S.BreederChatElementContext>
                </div>

                <S.BreederChatElementDateTag>
                  <TimeStampParser>2024-08-03T06:30:00+09:00</TimeStampParser>
                </S.BreederChatElementDateTag>
              </S.BreederChatElementContentBox>
              <S.BreederChatElementNewMsgCount>
                3
              </S.BreederChatElementNewMsgCount>
            </S.BreederChatElementContainer>
            <S.BreederChatElementContainer>
              <S.BreederChatElementImgContainer>
                <S.BreederChatElementImg src="" alt="Img" />
              </S.BreederChatElementImgContainer>
              <S.BreederChatElementContentBox>
                <div>
                  <S.BreederChatElementName>
                    새드 브리더
                  </S.BreederChatElementName>
                  <S.BreederChatElementContext>
                    아 넵 그럼 그때 뵙겠습니다.아 넵 그럼 그때 뵙겠습니다.아 넵
                    그럼 assaasasaaaaaaa assaasassa
                  </S.BreederChatElementContext>
                </div>

                <S.BreederChatElementDateTag>
                  <TimeStampParser>2024-08-03T06:30:00+09:00</TimeStampParser>
                </S.BreederChatElementDateTag>
              </S.BreederChatElementContentBox>
              <S.BreederChatElementNewMsgCount>
                3
              </S.BreederChatElementNewMsgCount>
            </S.BreederChatElementContainer>
          </S.ChatListContainer>
          <S.ChatContentContainer>
            <ChatContext
              chatList={[
                {
                  role: 'customer',
                  msg: '안녕하세요!',
                  time: '오전 11:23',
                },
                {
                  role: 'customer',
                  msg: '어떻게 연락 주시게 되었나요? 어떤 게 궁금하세요?',
                  time: '오전 11:23',
                },
                {
                  role: 'me',
                  msg: '아 행복이라는 친구가 궁금해서요',
                  time: '오전 11:25',
                },
                {
                  role: 'me',
                  msg: '한 번 만나보고 싶어요',
                  time: '오전 11:25',
                },
                {
                  role: 'customer',
                  msg: '그렇시구나... 어떡하죠 행복이 가족 만나게 되었어요',
                  time: '오전 11:26',
                },
                {
                  role: 'customer',
                  msg: '그렇시구나... 어떡하죠 행복이 가족 만나게 되었어요',
                  time: '오전 11:26',
                },
                {
                  role: 'me',
                  msg: '앗 그렇군요',
                  time: '오전 11:26',
                },
                {
                  role: 'me',
                  msg: '앗 그렇군요',
                  time: '오전 11:26',
                },
                {
                  role: 'me',
                  msg: '알겠습니다!! 감사합니다',
                  time: '오전 11:26',
                },
              ]}
            />
          </S.ChatContentContainer>
        </div>
        <S.BreederDetailContainer>
          <BreederMobileDetail />
        </S.BreederDetailContainer>
      </S.ChatContainer>
    </S.Section>
  );
}
