import React from 'react';
import * as A from '../../pages/BreederDetail/BreederDetail.style';

const CareDog = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ marginBottom: '64px' }}>
      <A.InfoItem>
        <A.InfoTitle>관리 중인 강아지</A.InfoTitle>
        <A.KennelImgBox>
          <A.KennelImg>
            <A.KennelImgText>행복이(1살, 여아)</A.KennelImgText>
          </A.KennelImg>
          <A.KennelImg>
            <A.KennelImgText>행복이(1살, 여아)</A.KennelImgText>
          </A.KennelImg>
          <A.KennelImg>
            <A.KennelImgText>행복이(1살, 여아)</A.KennelImgText>
          </A.KennelImg>
          <A.KennelImg>
            <A.KennelImgText>행복이(1살, 여아)</A.KennelImgText>
          </A.KennelImg>
          <A.KennelImg>
            <A.KennelImgText>행복이(1살, 여아)</A.KennelImgText>
          </A.KennelImg>
          <A.KennelImg>
            <A.KennelImgText>행복이(1살, 여아)</A.KennelImgText>
          </A.KennelImg>
        </A.KennelImgBox>
      </A.InfoItem>
    </div>
  );
});

CareDog.displayName = 'CareDog';

export default CareDog;
