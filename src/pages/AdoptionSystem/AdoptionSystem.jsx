import { useState } from 'react';
import * as A from './AdoptionSystem.style';
import titleMark from '/icons/title_mark.svg';
import downMark from '/icons/down_mark.svg';
import fence from '/icons/fence.svg';
import AdoptionSystemMenu from '../../components/AdoptionSystemMenu/AdoptionSystemMenu';

export default function AdoptionSystem() {
  const [activeItemName, setActiveItemName] = useState('브리더 소개');

  const items = [
    { name: '브리더 소개', href: '#브리더 소개' },
    { name: '용어 정리', href: '#용어 정리' },
    { name: '분양 시스템', href: '#분양 시스템' },
  ];

  return (
    <A.Layout>
      <AdoptionSystemMenu
        title="분양시스템"
        items={items}
        activeItemName={activeItemName}
        setActiveItemName={setActiveItemName}
      />
      <A.Container>
        <A.Head id="브리더 소개">브리더란?</A.Head>
        <A.HeadLine />
        <A.Text>
          브리더는 반려동물을 번식시키고 기르는 사람 또는 기관을 의미해요.
          <br />
          브리더의 개나 고양이를 전문적으로 사육하고, 그 품종의 특성과 건강을
          유지하거나 개선하는 데 중점을 둬요.
        </A.Text>
        <A.SubHead>브리더의 역할</A.SubHead>
        <A.Section>
          <div>
            <A.TitleWrap>
              <A.TitleIcon src={titleMark} />
              <A.Title>품종 관리</A.Title>
            </A.TitleWrap>
            <A.Text>
              브리더는 특정 품종의 특성과 표준을 유지하기 위해 신중하게 번식을
              계획합니다. <br /> 이는 해당 품종의 외모, 성격, 건강 상태 등을
              고려하여 이루어집니다.
            </A.Text>
          </div>
          <div>
            <A.TitleWrap>
              <A.TitleIcon src={titleMark} />
              <A.Title>건강 관리</A.Title>
            </A.TitleWrap>
            <A.Text>
              브리더는 번식에 참여하는 동물들의 건강을 철저히 관리합니다. <br />
              유전 질환이나 건강 문제를 최소화하기 위해 건강 검진과 유전
              테스트를 실시합니다.
            </A.Text>
          </div>
          <div>
            <A.TitleWrap>
              <A.TitleIcon src={titleMark} />
              <A.Title>사회화</A.Title>
            </A.TitleWrap>
            <A.Text>
              브리더는 새끼 동물들이 잘 사회화되도록 도와줍니다. 이는 새로운
              환경에 잘 적응하고 <br />
              사람들과 다른 동물들과 잘 지낼 수 있도록 하는 중요한 과정입니다.
            </A.Text>
          </div>
          <div>
            <A.TitleWrap>
              <A.TitleIcon src={titleMark} />
              <A.Title>책임감 있는 번식</A.Title>
            </A.TitleWrap>
            <A.Text>
              브리더는 윤리적이고 책임감 있는 번식을 실천합니다. 이는 과도한
              번식이나 무분별한 번식을 피하고, <br />
              반려동물의 복지를 최우선으로 생각하는 것을 의미합니다.
            </A.Text>
          </div>
          <div>
            <A.TitleWrap>
              <A.TitleIcon src={titleMark} />
              <A.Title>교육 및 지원</A.Title>
            </A.TitleWrap>
            <A.Text>
              브리더는 새 주인에게 반려동물을 분양할 때, 반려동물의 양육에
              필요한 정보를 제공하고 지원합니다. <br />
              이는 새로운 주인이 반려동물을 잘 돌볼 수 있도록 도와줍니다.
            </A.Text>
          </div>
        </A.Section>
        <A.Head id="용어 정리">용어정리</A.Head>
        <A.HeadLine1 />
        <A.Section>
          <div>
            <A.TitleWrap>
              <A.TitleIcon src={titleMark} />
              <A.Title>분양 대기 동물</A.Title>
            </A.TitleWrap>
            <A.Text>
              브리더가 관리하여 업로드 한 분양 가능한 동물을 말합니다. 분양을
              희망하는 사람들은 ‘분양 대기 동물’ 탭에서 <br /> 분양 가능한
              동물들을 조회하고 해당 동물을 관리하고 있는 브리더에게 문의 요청을
              남길 수 있습니다.
            </A.Text>
          </div>
          <div>
            <A.TitleWrap>
              <A.TitleIcon src={titleMark} />
              <A.Title>혈통서</A.Title>
            </A.TitleWrap>
            <A.Text>
              혈통서는 특정 동물의 혈통을 증명하는 공식 문서로, 주로 순종
              반려동물의 번식과 관련된 정보가 기록됩니다. 혈통서에는 해당 동물의
              부모, 조부모, 증조부모 등 여러 세대에 걸친 조상들의 정보가
              포함되어 있으며, 이를 통해 동물의 순수 혈통과 유전적 배경을 확인할
              수 있습니다.
            </A.Text>
          </div>
        </A.Section>
        <A.BloodText>
          혈통서는 다음과 같은 중요한 정보를 제공합니다.
        </A.BloodText>
        <A.BloodBox>
          <div>
            <A.TitleWrap>
              <A.TitleDot />
              <A.Title>동물의 등록 이름</A.Title>
            </A.TitleWrap>
            <A.BloodDescription>
              해당 동물의 공식 등록 이름이 기재됩니다.
            </A.BloodDescription>
          </div>
          <div>
            <A.TitleWrap>
              <A.TitleDot />
              <A.Title>등록 번호</A.Title>
            </A.TitleWrap>
            <A.BloodDescription>
              각 동물마다 고유의 등록 번호가 부여됩니다.
            </A.BloodDescription>
          </div>
          <div>
            <A.TitleWrap>
              <A.TitleDot />
              <A.Title>혈통</A.Title>
            </A.TitleWrap>
            <A.BloodDescription>
              부모, 조부모, 증조부모 등 여러 세대의 이름과 등록 번호가
              포함됩니다.
            </A.BloodDescription>
          </div>
          <div>
            <A.TitleWrap>
              <A.TitleDot />
              <A.Title>품종</A.Title>
            </A.TitleWrap>
          </div>
          <div>
            <A.TitleWrap>
              <A.TitleDot />
              <A.Title>생년월일</A.Title>
            </A.TitleWrap>
          </div>
          <div>
            <A.TitleWrap>
              <A.TitleDot />
              <A.Title>성별</A.Title>
            </A.TitleWrap>
          </div>
          <div>
            <A.TitleWrap>
              <A.TitleDot />
              <A.Title>번식자 정보</A.Title>
            </A.TitleWrap>
            <A.BloodDescription>
              해당 동물을 번식시킨 브리더의 정보가 포함됩니다.
            </A.BloodDescription>
          </div>
        </A.BloodBox>
        <A.Head id="분양 시스템">분양 시스템</A.Head>
        <A.HeadLine2 />
        <A.AdoptionSection>
          <A.AdoptionBox>
            분양 대기 동물 목록에서 분양을 희망하는 동물을 클릭하여 해당 동물의
            정보를 꼼꼼히 확인합니다.
          </A.AdoptionBox>
          <A.DownMark src={downMark} />
          <A.AdoptionBox>
            브리더의 연락처를 받기 위해 문의 요청 버튼을 눌러 브리더에게 분양
            희망 의사를 표현합니다.
          </A.AdoptionBox>
          <A.DownMark src={downMark} />
          <A.AdoptionBox>
            브리더가 분양 요청을 보낸 분양자의 정보를 확인하고 요청을 수락하면
            해당 브리더의 연락처가 공개됩니다.
          </A.AdoptionBox>
          <A.DownMark src={downMark} />
          <A.AdoptionBox>
            분양 희망자는 공개된 브리더의 연락처로 분양 희망 의사를 나타내고
            <br />
            개인적으로 약속을 잡아 오프라인으로 분양을 받습니다.
          </A.AdoptionBox>
        </A.AdoptionSection>
        <A.EndWrapper>
          <A.EndTitle>
            브위더와 함께 <strong>가족</strong>을 만들어볼까요?
          </A.EndTitle>
          <A.GoLink to="/animal-list">분양 대기 동물 보러 가기</A.GoLink>
          <A.Fence src={fence} />
        </A.EndWrapper>
      </A.Container>
    </A.Layout>
  );
}
