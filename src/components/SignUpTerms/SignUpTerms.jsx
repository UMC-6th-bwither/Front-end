import { useState } from 'react';
import * as S from './SignUpTerms.style';

export default function SignUpTerms() {
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState({
    age: false,
    terms: false,
    personalInfo: false,
    location: false,
  });
  console.log(allAgreed);
  console.log(agreements);

  const handleAgreementChange = (e) => {
    const { name, checked } = e.target;
    setAgreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));

    const allChecked = agreements.values.every((value) => value === true);
    setAllAgreed(allChecked);
  };

  return (
    <S.Container>
      <S.AllWrapper>
        <S.TextBox>
          <S.AllText>약관에 전체동의</S.AllText>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Checkbox
          type="checkbox"
          id="allCheck"
          name="allCheck"
          checked={allAgreed}
          onChange={handleAgreementChange}
        />
      </S.AllWrapper>
      <S.Divider />
      <S.Wrapper>
        <S.TextBox>
          <S.Text>만 14세 이상입니다</S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Checkbox
          type="checkbox"
          id="ageCheck"
          name="ageCheck"
          checked={agreements.age}
          onChange={handleAgreementChange}
        />
      </S.Wrapper>
      <S.Wrapper>
        <S.TextBox>
          <S.Text>이용약관 동의</S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Checkbox
          type="checkbox"
          id="termsCheck"
          name="termsCheck"
          checked={agreements.terms}
          onChange={handleAgreementChange}
        />
      </S.Wrapper>
      <S.Wrapper>
        <S.TextBox>
          <S.Text>개인정보 수집 및 이용 동의</S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Checkbox
          type="checkbox"
          id="personalInfoCheck"
          name="personalInfoCheck"
          checked={agreements.personalInfo}
          onChange={handleAgreementChange}
        />
      </S.Wrapper>
      <S.Wrapper>
        <S.TextBox>
          <S.Text>위치기반 서비스 이용 동의</S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Checkbox
          type="checkbox"
          id="locationCheck"
          name="locationCheck"
          checked={agreements.location}
          onChange={handleAgreementChange}
        />
      </S.Wrapper>
    </S.Container>
  );
}
