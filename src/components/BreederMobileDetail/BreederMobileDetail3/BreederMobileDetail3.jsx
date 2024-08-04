/* eslint-disable react/prop-types */
import * as S from './BreederMobileDetail3.style';

export default function BreederMobileDetail3({ className = '' }) {
  return (
    <S.RootRoot className={className}>
      <S.Layout>
        <S.FrameParent>
          <S.EllipseWrapper>
            <S.FrameChild />
          </S.EllipseWrapper>
          <S.EllipseWrapper>
            <S.FrameChild />
          </S.EllipseWrapper>
          <S.FrameInner />
          <S.EllipseWrapper>
            <S.FrameChild />
          </S.EllipseWrapper>
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
      </S.Layout>
      <S.ContentParent>
        <S.Content>
          <S.Heading>
            <S.H>켄넬 정보</S.H>
          </S.Heading>
          <S.InfoPanel>
            <S.LocationDetailsParent>
              <S.LocationDetails>
                <S.Div>
                  <S.IconPinOutline
                    loading="lazy"
                    alt=""
                    src="/-icon-pin-outline.svg"
                  />
                </S.Div>
              </S.LocationDetails>
              <S.A>켄넬 주소</S.A>
              <S.Div1>서울특별시 강서구 어쩌고동 어쩌고로 123-1</S.Div1>
            </S.LocationDetailsParent>
            <S.ImageParent>
              <S.LocationDetails>
                <S.ImageFillIcon loading="lazy" alt="" src="/image-fill.svg" />
              </S.LocationDetails>
              <S.Div2>영업 시간</S.Div2>
              <S.Div3>오전 10시 ~ 오후 9시 (일요일 휴무)</S.Div3>
            </S.ImageParent>
            <S.FrameGroup>
              <S.LocationDetails>
                <S.Div4>
                  <S.Icon loading="lazy" alt="" src="/-icon-pin-outline1.svg" />
                </S.Div4>
              </S.LocationDetails>
              <S.A1>개체수</S.A1>
              <S.Div5>비글 2마리, 골든리트리버 3마리</S.Div5>
            </S.FrameGroup>
          </S.InfoPanel>
        </S.Content>
        <S.GalleryRowOneParent>
          <S.GalleryRowOne>
            <S.ImageWrapperOneParent>
              <S.ImageWrapperOne>
                <S.ImagePlaceholderOne
                  loading="lazy"
                  alt=""
                  src="/rectangle-71@2x.png"
                />
                <S.Gradient />
              </S.ImageWrapperOne>
              <S.Div6>강아지 켄넬 사진1</S.Div6>
            </S.ImageWrapperOneParent>
            <S.ImageWrapperOneParent>
              <S.ImageWrapperOne>
                <S.ImagePlaceholderOne
                  loading="lazy"
                  alt=""
                  src="/rectangle-71-1@2x.png"
                />
                <S.Gradient />
              </S.ImageWrapperOne>
              <S.Div6>강아지 켄넬 사진2</S.Div6>
            </S.ImageWrapperOneParent>
          </S.GalleryRowOne>
          <S.GalleryRowOne1>
            <S.RectangleParent>
              <S.RectangleIcon
                loading="lazy"
                alt=""
                src="/rectangle-71-2@2x.png"
              />
              <S.Gradient1 />
              <S.Div7>강아지 켄넬 사진3</S.Div7>
            </S.RectangleParent>
            <S.RectangleParent>
              <S.RectangleIcon
                loading="lazy"
                alt=""
                src="/rectangle-71-2@2x.png"
              />
              <S.Gradient1 />
              <S.Div7>강아지 켄넬 사진3</S.Div7>
            </S.RectangleParent>
          </S.GalleryRowOne1>
        </S.GalleryRowOneParent>
      </S.ContentParent>
    </S.RootRoot>
  );
}
