import React from 'react';
import * as A from '../../pages/BreederDetail/BreederDetail.style';

const BreederQna = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ marginBottom: '64px' }}>
      <A.InfoItem>
        <A.InfoTitle>자주 물어보는 질문</A.InfoTitle>
        <A.QnaBox>
          <A.InfoContentTitle2>
            Q. 분양한 동물의 건강 보증 기간은 얼마나 되나요?
          </A.InfoContentTitle2>
          <A.InfoContent>
            견적서 받아보신 후 상담 문의 주시면 고객님과의 일정조율 후 시간에
            맞춰 방문드립니다. 방문 후 상태 점검 및 분양 진행합니다.
          </A.InfoContent>
        </A.QnaBox>
        <A.QnaBox>
          <A.InfoContentTitle2>
            Q. 부모 동물의 혈통서를 볼 수 있을까요?{' '}
          </A.InfoContentTitle2>
          <A.InfoContent>
            당연히 제공해드립니다. 위조/조작/가짜 혈통서가 아닌
            국제공인혈통서이고, 추가 금액 없이 상담시에 확인시켜드립니다.
          </A.InfoContent>
        </A.QnaBox>

        <A.QnaBox>
          <A.InfoContentTitle2>
            Q. 새끼 동물을 반려하지 못하게 될 경우 반환 정책이 있나요?
          </A.InfoContentTitle2>
          <A.InfoContent>
            강아지를 반환하고자 할 경우, 먼저 저희 상담 번호로 연락해 주시면
            됩니다. 반환 사유와 강아지의 현재 상태를 설명해 주시면, 반환 절차를
            안내해 드립니다.
          </A.InfoContent>
        </A.QnaBox>
        <A.QnaBox>
          <A.InfoContentTitle2>
            Q. 번식 계획이 있는 부모 강아지의 새끼 강아지를 분양 받으려면 보통
            어느 정도 기간이 소요되나요?{' '}
          </A.InfoContentTitle2>
          <A.InfoContent>
            보통 강아지의 임신 기간은 약 9주 정도이고, 새끼 강아지는 태어난 후
            최소 8주 동안 어미와 함께 지내야 합니다. 따라서 전체적인 기간을
            계산해 보면, 번식 계획 확정부터 새끼 강아지를 분양받기까지 최소 약
            3~4개월이 소요됩니다.
          </A.InfoContent>
        </A.QnaBox>
        <A.QnaBox>
          <A.InfoContentTitle2>
            Q. 동물을 데려온 후 어떤 지원을 받을 수 있나요?
          </A.InfoContentTitle2>
          <A.InfoContent>
            강아지를 데려오신 후 첫 번째 방문 시, 건강 검진과 필수 예방 접종을
            받을 수 있도록 지원해드립니다. 또한 강아지의 영양상태에 따른 적절한
            사료와 간식을 추천드려 새로운 환경에 빠르게 적응할 수 있도록 도움을
            드리고 있습니다. 또한 강아지를 키우면서 궁금한 점이나 어려움이 생길
            경우, 전문가와 상담할 수 있는 서비스를 제공합니다.
          </A.InfoContent>
        </A.QnaBox>
      </A.InfoItem>
      <A.Line />
    </div>
  );
});

BreederQna.displayName = 'BreederQna';

export default BreederQna;
