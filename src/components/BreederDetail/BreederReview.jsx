import React from 'react';
import * as A from '../../pages/WaitingAnimalDetail/WaitingAnimalDetail.style';

const BreederReview = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ marginBottom: '96px' }}>
      <A.InfoItem>
        <A.InfoTitle>브리더 정보</A.InfoTitle>
        <A.InfoContent>
          장난꾸러기인 행복이는 장난감을 가지고 놀 때 가장 좋아해요
        </A.InfoContent>
      </A.InfoItem>
    </div>
  );
});

BreederReview.displayName = 'BreederReview';

export default BreederReview;
