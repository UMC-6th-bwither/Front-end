import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BreederChatCard from '../../components/BreederChatCard/BreederChatCard';
import BadgeVariant from '../../components/badge/BadgeVariant';
import * as S from './ChatListGeneral.style';

export default function ChatListGeneral() {
  const onContainerClick = useCallback(() => {
    // sync "브리더문의/채팅상세"
  }, []);

  return (
    <S.DivRoot>
      <S.FrameParent>
        <S.HeaderverParent>
          <S.ChatHeaderParent>
            <S.ChatHeader>
              <S.A5>채팅</S.A5>
              <S.Button>
                <S.A6>편집</S.A6>
              </S.Button>
            </S.ChatHeader>
            <S.Component>
              <S.Input
                placeholder="찾으려는 브리더 이름을 입력해주세요"
                type="text"
              />
              <S.SearchIcon alt="" src="/icons/search_icon.svg" />
            </S.Component>
          </S.ChatHeaderParent>
        </S.HeaderverParent>
        <S.FrameWrapper>
          <S.FrameContainer>
            <S.FrameDiv>
              <S.H>예약 중인 브리더</S.H>
            </S.FrameDiv>
            <S.Parent2>
              <BreederChatCard
                onClick={onContainerClick}
                imgSrc="/img/chat_thumbnail_example_1.jpeg"
                badgeComponents={[
                  <BadgeVariant key={uuidv4()} content="13년 경력" />,
                  <BadgeVariant key={uuidv4()} content="자격증 5개" />,
                ]}
                breederLocation="서울 강서구"
                breederName="해피 브리더 캔넬"
                msgContext="그러면 언제쯤 방문 괜찮으실까요?"
                newMsgCount={3}
                timeStampKR="2024-08-01T22:03:00+09:00"
              />
              <S.ChatListSeparator />
              <S.ChatListItems>
                {Array.from({ length: 5 }, () => (
                  <BreederChatCard
                    key={uuidv4()} // 고유한 key를 부여
                    onClick={onContainerClick}
                    imgSrc="/img/chat_thumbnail_example_1.jpeg"
                    badgeComponents={[
                      <BadgeVariant key={uuidv4()} content="13년 경력" />,
                      <BadgeVariant key={uuidv4()} content="자격증 5개" />,
                    ]}
                    breederLocation="서울 강서구"
                    breederName="해피 브리더 캔넬"
                    msgContext="그러면 언제쯤 방문 괜찮으실까요?"
                    newMsgCount={3}
                    timeStampKR="2024-08-01T22:03:00+09:00"
                  />
                ))}
              </S.ChatListItems>
            </S.Parent2>
          </S.FrameContainer>
        </S.FrameWrapper>
      </S.FrameParent>
    </S.DivRoot>
  );
}
