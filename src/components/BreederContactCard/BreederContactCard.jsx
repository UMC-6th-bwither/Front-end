/* eslint-disable react/prop-types */
import * as S from './BreederContactCard.style';
import Button from '../button/Button';

export default function BreederContactCard({
  className,
  breederLocation,
  breederName,
}) {
  return (
    <S.RootRoot className={className}>
      <S.FrameParent>
        <S.RectangleParent>
          <S.FrameChild
            loading="lazy"
            alt=""
            src="/img/post_thumbnail_example_3.jpeg"
          />
          <S.Parent1>
            <S.A>{breederLocation}</S.A>
            <S.A1>{breederName}</S.A1>
          </S.Parent1>
        </S.RectangleParent>
        <Button whiteBorder width="auto" paddingHorizontal={14}>
          후기 작성
        </Button>
      </S.FrameParent>
      <S.RootInner>
        <S.InstanceChild
          loading="lazy"
          alt=""
          src="/icons/dropdown_right.svg"
        />
      </S.RootInner>
    </S.RootRoot>
  );
}
