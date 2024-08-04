/* eslint-disable react/prop-types */
import * as S from './BreederMobileDetail5.style';

export default function BreederMobileDetail5({ className = '' }) {
  return (
    <S.RootRoot className={className}>
      <S.RootInner>
        <S.FrameParent>
          <S.EllipseWrapper>
            <S.FrameChild />
          </S.EllipseWrapper>
          <S.EllipseWrapper>
            <S.FrameChild />
          </S.EllipseWrapper>
          <S.EllipseWrapper>
            <S.FrameChild />
          </S.EllipseWrapper>
          <S.EllipseDiv />
          <S.EllipseWrapper>
            <S.FrameChild />
          </S.EllipseWrapper>
          <S.EllipseWrapper>
            <S.FrameChild />
          </S.EllipseWrapper>
          <S.EllipseWrapper>
            <S.FrameChild />
          </S.EllipseWrapper>
        </S.FrameParent>
      </S.RootInner>
      <S.FrameGroup>
        <S.Wrapper>
          <S.A>기타 강아지</S.A>
        </S.Wrapper>
        <S.DogInfo>
          <S.InfoGrid>
            <S.RectangleParent>
              <S.RectangleIcon
                loading="lazy"
                alt=""
                src="/rectangle-711@2x.png"
              />
              <S.Gradient />
            </S.RectangleParent>
            <S.Div>꼬마 (3살, 남아)</S.Div>
          </S.InfoGrid>
          <S.InfoGrid1>
            <S.InfoGridChild
              loading="lazy"
              alt=""
              src="/rectangle-71-11@2x.png"
            />
            <S.Gradient1 />
            <S.Div1>뽀미 (3살, 여아)</S.Div1>
          </S.InfoGrid1>
          <S.InfoGrid1>
            <S.InfoGridChild
              loading="lazy"
              alt=""
              src="/rectangle-71-21@2x.png"
            />
            <S.Gradient1 />
            <S.Div1>보리 (2살, 여아)</S.Div1>
          </S.InfoGrid1>
          <S.InfoGrid1>
            <S.InfoGridChild
              loading="lazy"
              alt=""
              src="/rectangle-71-3@2x.png"
            />
            <S.Gradient1 />
            <S.Div1>까미 (1살, 남아)</S.Div1>
          </S.InfoGrid1>
          <S.InfoGrid1>
            <S.InfoGridChild
              loading="lazy"
              alt=""
              src="/rectangle-71-4@2x.png"
            />
            <S.Gradient1 />
            <S.Div1>푸름이 (4살, 남아)</S.Div1>
          </S.InfoGrid1>
        </S.DogInfo>
      </S.FrameGroup>
    </S.RootRoot>
  );
}
