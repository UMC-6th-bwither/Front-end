/* eslint-disable react/prop-types */

import * as S from './BreederChatCard.style';
import TimeStampParser from '../TimeStampParser/TimeStampParser';

export default function BreederChatCard({
  className = '',
  onClick,
  imgSrc,
  breederLocation,
  breederName,
  timeStampKR,
  msgContext,
  newMsgCount,
  badgeComponents,
}) {
  return (
    <S.DivRoot onClick={onClick} className={className}>
      <S.Child loading="lazy" alt="" src={imgSrc} />
      <S.FrameParent>
        <S.FrameGroup>
          <S.FrameContainer>
            <S.Parent1>
              <S.Div>{breederLocation}</S.Div>
              <S.H>{breederName}</S.H>
            </S.Parent1>
            <S.Group>{badgeComponents}</S.Group>
          </S.FrameContainer>
          <S.Div4>
            <TimeStampParser>{timeStampKR}</TimeStampParser>
          </S.Div4>
        </S.FrameGroup>
        <S.Container>
          <S.H1>{msgContext}</S.H1>
          <S.Wrapper>
            <S.B>{newMsgCount}</S.B>
          </S.Wrapper>
        </S.Container>
      </S.FrameParent>
    </S.DivRoot>
  );
}
