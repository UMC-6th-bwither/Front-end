import { useState } from 'react';
import * as S from './TermsOfService.style';
import TOSMenuSelect from '../../components/TOSMenuSelect/TOSMenuSelect';

function TermsOfService() {
  const [activeMenu, setActiveMenu] = useState('브위더 이용약관 동의');
  const [breederTermsAgreed, setBreederTermsAgreed] = useState(false);
  const [privacyPolicyAgreed, setPrivacyPolicyAgreed] = useState(false);
  const [locationServiceAgreed, setLocationServiceAgreed] = useState(false);

  const menuItems = [
    '브위더 이용약관 동의',
    '개인정보 수집 및 이용 동의',
    '위치기반 서비스 이용 동의',
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case '브위더 이용약관 동의':
        return (
          <BreederTerms
            isAgreed={breederTermsAgreed}
            handleAgreement={() => setBreederTermsAgreed(!breederTermsAgreed)}
          />
        );
      case '개인정보 수집 및 이용 동의':
        return (
          <PrivacyPolicy
            isAgreed={privacyPolicyAgreed}
            handleAgreement={() => setPrivacyPolicyAgreed(!privacyPolicyAgreed)}
          />
        );
      case '위치기반 서비스 이용 동의':
        return (
          <LocationServiceAgreement
            isAgreed={locationServiceAgreed}
            handleAgreement={() =>
              setLocationServiceAgreed(!locationServiceAgreed)
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <S.Layout>
      <S.MainContainer>
        <S.Title>서비스 이용약관</S.Title>
        <TOSMenuSelect
          menus={menuItems}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
        {renderContent()}
      </S.MainContainer>
    </S.Layout>
  );
}

function BreederTerms({ isAgreed, handleAgreement }) {
  return (
    <S.ContentContainer>
      <div>
        <S.Subtitle>제 1 조 (목적)</S.Subtitle>
        <S.Content>
          이 약관은 [브위더] 를 제공하는 [브위더]와 서비스 이용자(이하 '회원')
          간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로
          합니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 2 조 (정의)</S.Subtitle>
        <S.Content>
          1. '서비스'란 [브위더]가 제공하는 모든 온라인 서비스를 의미합니다.
        </S.Content>
        <S.Content>
          2. 회원'이란 [브위더]의 서비스에 접속하여 이 약관에 따라 [브위더]와
          이용 계약을 체결하고 [브위더]가 제공하는 서비스를 이용하는 고객을
          말합니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 3 조 (약관의 효력 및 변경)</S.Subtitle>
        <S.Content>
          1. 이 약관은 회원 가입 시 약관 동의 화면에 게시하거나 서비스 화면에
          게시하는 방법으로 회원에게 공지함으로써 효력이 발생합니다.
        </S.Content>
        <S.Content>
          2. 브위더는 약관의 변경이 필요하다고 인정되는 경우, 사전 공지 후
          변경할 수 있으며, 변경된 약관은 공지 후 효력이 발생합니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 4 조 (서비스의 제공 및 변경)</S.Subtitle>
        <S.Content>1. 브위더는 다음과 같은 서비스를 제공합니다:</S.Content>
        <S.SubContent>•ㅤ신뢰할 수 있는 브리더 정보 제공</S.SubContent>
        <S.SubContent>
          •ㅤ브리더와 사용자를 연결하여 동물 분양 지원
        </S.SubContent>
        <S.SubContent>•ㅤ브리더 평가 및 리뷰 시스템</S.SubContent>
        <S.SubContent>•ㅤ동물 관리 및 분양 관련 정보 제공</S.SubContent>
        <S.SubContent>
          •ㅤ사용자와 브리더 간의 소통을 지원하는 메시징 서비스
        </S.SubContent>
        <S.Content>
          2. 브위더는 서비스의 내용을 변경할 수 있으며, 변경 시에는 사전에
          회원에게 공지합니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 5 조 (회원의 의무)</S.Subtitle>
        <S.Content>회원은 다음 행위를 하여서는 안 됩니다:</S.Content>
        <S.SubContent>•ㅤ타인의 정보 도용</S.SubContent>
        <S.SubContent>•ㅤ브위더가 게시한 정보의 변경</S.SubContent>
        <S.SubContent>
          •ㅤ브위더 기타 제3자의 저작권 등 지적재산권에 대한 침해
        </S.SubContent>
        <S.SubContent>
          •ㅤ브위더 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
        </S.SubContent>
      </div>

      <div>
        <S.Subtitle>제 6 조 (브위더의 의무)</S.Subtitle>
        <S.Content>
          1. 브위더는 회원의 개인정보를 보호하며, 개인정보 보호정책을 통해 이를
          공지합니다.
        </S.Content>
        <S.Content>
          2. 브위더는 서비스 제공과 관련하여 알고 있는 회원의 정보를 본인의 동의
          없이 제3자에게 제공하지 않습니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 7 조 (개인정보 보호)</S.Subtitle>
        <S.Content>
          브위더는 관련 법령이 정하는 바에 따라서 회원 등록정보를 포함한 회원의
          개인정보를 보호하기 위해 노력합니다. 브위더의 개인정보 보호에 관해서는
          관련 법령 및 회사의 개인정보 처리방침에 따릅니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 8 조 (책임의 제한)</S.Subtitle>
        <S.Content>
          1. 브위더는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
          제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.
        </S.Content>
        <S.Content>
          2. 브위더는 회원의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을
          지지 않습니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 9 조 (분쟁 해결)</S.Subtitle>
        <S.Content>
          1. 브위더와 회원 간에 발생한 전자상거래 분쟁과 관련하여, 브위더는
          공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수
          있습니다.
        </S.Content>
        <S.Content>
          2. 브위더와 회원 간에 제기된 소송은 대한민국 법을 준거법으로 합니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>부칙</S.Subtitle>
        <S.Content>이 약관은 2024년 8월 19일부터 시행됩니다.</S.Content>
      </div>

      <S.AgreementBtnContainer>
        <S.AgreementBtn onClick={handleAgreement}>
          {isAgreed ? (
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_5231)">
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="3"
                  fill="#FE834D"
                  stroke="#FF7A00"
                  stroke-width="2"
                />
                <path
                  d="M5.46098 12.2632L10.501 17L19.461 7"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_5231">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_5234)">
                <rect width="24" height="24" rx="4" fill="white" />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="3"
                  stroke="#C5C5C5"
                  stroke-opacity="0.5"
                  stroke-width="2"
                />
                <path
                  d="M5.00004 12.2632L10.04 17L19 7"
                  stroke="#C5C5C5"
                  stroke-opacity="0.5"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_5234">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
          <span>동의하기</span>
        </S.AgreementBtn>
      </S.AgreementBtnContainer>
    </S.ContentContainer>
  );
}

function PrivacyPolicy({ isAgreed, handleAgreement }) {
  return (
    <S.ContentContainer>
      <div>
        <S.Subtitle>개인정보 수집 및 이용 동의</S.Subtitle>
        <S.Content>
          [브위더]는 개인정보 보호법에 따라 회원의 개인정보를 보호하고, 회원의
          동의를 기반으로 개인정보를 수집 및 이용합니다. 본 동의서는 회원이
          제공한 개인정보를 어떻게 수집, 이용, 보관 및 처리하는지에 대해
          설명합니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>1. 개인정보 수집 항목</S.Subtitle>
        <S.Content>브위더는 다음과 같은 개인정보를 수집합니다:</S.Content>
        <S.SubContent>
          •ㅤ필수 항목: 이름, 이메일 주소, 연락처(휴대전화 번호)
        </S.SubContent>
        <S.SubContent>•ㅤ선택 항목: 주소, 기타 추가 정보</S.SubContent>
      </div>

      <div>
        <S.Subtitle>2. 개인정보 수집 및 이용 목적</S.Subtitle>
        <S.Content>
          브위더는 수집한 개인정보를 다음의 목적을 위해 이용합니다:
        </S.Content>
        <S.SubContent>
          •ㅤ회원 관리: 회원제 서비스 이용에 따른 본인 확인, 개인 식별, 불량
          회원의 부정 이용 방지와 비인가 사용 방지
        </S.SubContent>
        <S.SubContent>
          •ㅤ서비스 제공: 서비스 제공 및 계약 이행, 맞춤형 서비스 제공
        </S.SubContent>
      </div>

      <div>
        <S.Subtitle>3. 개인정보 보유 및 이용 기간</S.Subtitle>
        <S.Content>
          브위더는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체
          없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간
          동안 보존합니다:
        </S.Content>
        <S.SubContent>
          •ㅤ법령에 따른 보존 정보: 계약 또는 청약철회 등에 관한 기록 (5년),
          소비자의 불만 또는 분쟁처리에 관한 기록
        </S.SubContent>
      </div>

      <div>
        <S.Subtitle>4. 개인정보 제3자 제공</S.Subtitle>
        <S.Content>
          브위더는 회원의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만,
          다음의 경우에는 예외로 합니다:
        </S.Content>
        <S.SubContent>•ㅤ회원이 사전에 동의한 경우</S.SubContent>
        <S.SubContent>
          •ㅤ법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에
          따라 수사기관의 요구가 있는 경우
        </S.SubContent>
      </div>

      <div>
        <S.Subtitle>5. 회원의 권리와 행사 방법</S.Subtitle>
        <S.Content>
          회원은 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수
          있으며, 개인정보의 수집 및 이용에 대한 동의를 철회할 수 있습니다.
          서비스 이용 동의 철회 시 서비스 이용 중단의 의미로 이해되며 회원
          탈퇴로 이어질 수 있습니다.
        </S.Content>
        <S.SubContent>
          •ㅤ개인정보 조회/수정: https://www.bwiter.com/MypageGeneral
        </S.SubContent>
        <S.SubContent>•ㅤ동의 철회: 회원 탈퇴</S.SubContent>
      </div>

      <div>
        <S.Subtitle>6. 개인정보 보호를 위한 조치</S.Subtitle>
        <S.Content>
          브위더는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
          있습니다:
        </S.Content>
        <S.SubContent>
          •ㅤ관리적 조치: 내부관리계획 수립 및 시행, 정기적 관리자 교육 등
        </S.SubContent>
        <S.SubContent>
          •ㅤ기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템
          설치, 고유식별정보 등의 암호화
        </S.SubContent>
        <S.SubContent>•ㅤ물리적 조치: 자료보관실 등의 접근 통제</S.SubContent>
      </div>

      <div>
        <S.Subtitle>7. 개인정보 보호책임자 및 연락처</S.Subtitle>
        <S.Content>
          회원은 브위더의 서비스를 이용하면서 발생하는 모든 개인정보 보호 관련
          민원을 개인정보 보호책임자에게 신고할 수 있습니다.
        </S.Content>
        <S.SubContent>•ㅤ개인정보 보호책임자: 전윤하</S.SubContent>
        <S.SubContent>•ㅤ연락처: jyh010624@gmail.com</S.SubContent>
      </div>

      <div>
        <S.Subtitle>부칙</S.Subtitle>
        <S.Content>이 약관은 2024년 8월 19일부터 시행됩니다.</S.Content>
      </div>

      <S.AgreementBtnContainer>
        <S.AgreementBtn onClick={handleAgreement}>
          {isAgreed ? (
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_5231)">
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="3"
                  fill="#FE834D"
                  stroke="#FF7A00"
                  stroke-width="2"
                />
                <path
                  d="M5.46098 12.2632L10.501 17L19.461 7"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_5231">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_5234)">
                <rect width="24" height="24" rx="4" fill="white" />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="3"
                  stroke="#C5C5C5"
                  stroke-opacity="0.5"
                  stroke-width="2"
                />
                <path
                  d="M5.00004 12.2632L10.04 17L19 7"
                  stroke="#C5C5C5"
                  stroke-opacity="0.5"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_5234">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
          <span>동의하기</span>
        </S.AgreementBtn>
      </S.AgreementBtnContainer>
    </S.ContentContainer>
  );
}

function LocationServiceAgreement({ isAgreed, handleAgreement }) {
  return (
    <S.ContentContainer>
      <div>
        <S.Subtitle>제 1 조 (목적)</S.Subtitle>
        <S.Content>
          이 약관은 [브위더]가 제공하는 위치기반 서비스(이하 "서비스")의 이용과
          관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을
          규정함을 목적으로 합니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 2 조 (정의)</S.Subtitle>
        <S.Content></S.Content>
        <S.SubContent>
          •ㅤ서비스: 회사가 제공하는 위치기반 서비스 및 관련 제반 서비스를
          의미합니다.
        </S.SubContent>
        <S.SubContent>
          •ㅤ회원: 이 약관에 동의하고 서비스를 이용하는 이용자를 말합니다.
        </S.SubContent>
        <S.SubContent>
          •ㅤ위치정보: 이동성이 있는 물건 또는 개인이 특정한 시점에 존재하거나
          존재하였던 장소에 관한 정보입니다.
        </S.SubContent>
        <S.SubContent>
          •ㅤ개인위치정보주체: 위치정보를 이용하여 식별할 수 있는 자로서 그
          위치정보의 보호대상이 되는 자를 말합니다.
        </S.SubContent>
      </div>

      <div>
        <S.Subtitle>제 3 조 (약관의 효력 및 변경)</S.Subtitle>
        <S.Content>
          1. 이 약관은 회원이 회원 가입 시 약관 동의 화면에 게시하거나 서비스
          화면에 게시하여 회원에게 공지함으로써 효력이 발생합니다.
        </S.Content>
        <S.Content>
          2. 브리더는 필요하다고 인정되는 경우, 관련 법령에 위배되지 않는 범위
          내에서 이 약관을 변경할 수 있으며, 변경된 약관은 적용일자 및
          변경사유를 명시하여 서비스 화면에 사전 공지합니다. 회원은 변경된
          약관에 동의하지 않을 권리가 있으며, 변경된 약관에 동의하지 않는 경우
          서비스 이용을 중단하고 탈퇴할 수 있습니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 4 조 (서비스의 제공 및 변경)</S.Subtitle>
        <S.Content>
          1. 브리더는 회원의 현재 위치를 기반으로 다양한 정보를 제공합니다.
        </S.Content>
        <S.Content>
          2. 서비스의 세부 내용은 회사의 정책에 따라 변경될 수 있으며, 변경
          시에는 사전에 공지합니다.
        </S.Content>
        <S.Content>
          3. 서비스는 기본적으로 무료로 제공되지만, 일부 유료 서비스의 경우
          별도의 요금이 부과될 수 있으며, 이에 대한 상세한 내용은 해당 서비스
          이용 시 안내합니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 5 조 (위치정보의 수집 및 이용)</S.Subtitle>
        <S.Content>
          1. 브리더는 회원의 위치정보를 수집하여 서비스를 제공합니다.
        </S.Content>
        <S.Content>
          2. 브리더는 회원의 동의를 받아 위치정보를 수집하며, 수집된 위치정보는
          서비스 제공 목적 외의 용도로 사용되지 않습니다.
        </S.Content>
        <S.Content>
          3. 회원은 언제든지 위치정보의 수집을 중지시킬 수 있으며, 이를 원할
          경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 6 조 (개인위치정보의 보호)</S.Subtitle>
        <S.Content>
          1. 브리더는 수집한 개인위치정보를 본인의 동의 없이 제3자에게 제공하지
          않으며, 관련 법령에 따라 보호합니다.
        </S.Content>
        <S.Content>
          2. 개인위치정보주체는 위치정보의 수집·이용·제공 사실 확인자료에 대해
          열람 또는 고지를 요구할 수 있으며, 이에 대해 회사는 지체 없이 필요한
          조치를 취해야 합니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 7 조 (회원의 권리)</S.Subtitle>
        <S.Content>
          1. 회원은 언제든지 자신의 위치정보에 대한 열람, 수정, 삭제를 요구할 수
          있습니다.
        </S.Content>
        <S.Content>
          2. 회원은 위치정보의 수집, 이용, 제공에 대한 동의의 전부 또는 일부를
          철회할 수 있습니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 8 조 (책임의 제한)</S.Subtitle>
        <S.Content>
          1. 브리더는 천재지변 또는 이에 준하는 불가항력으로 인해 서비스를
          제공할 수 없는 경우 책임이 면제됩니다.
        </S.Content>
        <S.Content>
          2. 브리더는 회원의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지
          않습니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>제 9 조 (분쟁의 해결)</S.Subtitle>
        <S.Content>
          1. 브리더와 회원 간에 발생한 위치정보와 관련된 분쟁에 대해서는 상호
          협의하여 해결하는 것을 원칙으로 합니다.
        </S.Content>
        <S.Content>
          2. 협의가 이루어지지 않을 경우, 브리더의 주소지 관할 법원을 전속 관할
          법원으로 합니다.
        </S.Content>
      </div>

      <div>
        <S.Subtitle>부칙</S.Subtitle>
        <S.Content>이 약관은 2024년 8월 19일부터 시행됩니다</S.Content>
      </div>

      <S.AgreementBtnContainer>
        <S.AgreementBtn onClick={handleAgreement}>
          {isAgreed ? (
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_5231)">
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="3"
                  fill="#FE834D"
                  stroke="#FF7A00"
                  stroke-width="2"
                />
                <path
                  d="M5.46098 12.2632L10.501 17L19.461 7"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_5231">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_5234)">
                <rect width="24" height="24" rx="4" fill="white" />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="3"
                  stroke="#C5C5C5"
                  stroke-opacity="0.5"
                  stroke-width="2"
                />
                <path
                  d="M5.00004 12.2632L10.04 17L19 7"
                  stroke="#C5C5C5"
                  stroke-opacity="0.5"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_5234">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
          <span>동의하기</span>
        </S.AgreementBtn>
      </S.AgreementBtnContainer>
    </S.ContentContainer>
  );
}

export default TermsOfService;
