import { useState } from 'react';
import * as B from '../SignUpBwither/BwitherSignUp.style';
import progressBar75 from '../../../public/icons/signUp/progress-bar-75.svg';
import Button from '../../components/SignUpButton/Button';
import failX from '../../../public/icons/signUp/fail_x.svg';

export default function BwitherSignUp1() {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [businessNum, setBusinessNum] = useState('');
  const [permitNum, setPermitNum] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [ownerNameError, setOwnerNameError] = useState('');
  const [businessNumError, setBusinessNumError] = useState('');
  const [permitNumError, setPermitNumError] = useState('');

  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 당신의 소중한 반려동물을 위한 첫 걸음을 시작해보세요.
      </B.WelcomeMsg>
      <B.Container>
        <B.ProgressBar src={progressBar75} />
        <B.Text>브리더 정보를 입력해주세요</B.Text>
        <B.InputArea>
          <B.InputWrapper>
            <B.InputTitle>상호명</B.InputTitle>
            <B.InputBox
              type="text"
              placeholder="브리더가 재직 중인 상호명을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => {
                if (!name) {
                  setNameError('상호명을 입력해주세요');
                } else {
                  setNameError('');
                }
              }}
              style={{ borderColor: nameError ? '#FA5963' : '' }}
              autoFocus={{ borderColor: '#fe834d' }}
            />

            {nameError && (
              <B.ErrorWrapper>
                <B.FailX src={failX} />
                <span style={{ color: '#FA5963' }}>{nameError}</span>
              </B.ErrorWrapper>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>전화번호</B.InputTitle>
            <B.InputBox
              type="tel"
              placeholder="010-1234-5678 형태로 입력해주세요"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => {
                if (!phone) {
                  setPhoneError('전화번호를 입력해주세요');
                } else if (!validatePhone(phone)) {
                  setPhoneError('전화번호를 형식에 맞게 입력해주세요');
                } else {
                  setPhoneError('');
                }
              }}
              style={{ borderColor: phoneError ? '#FA5963' : '' }}
            />
            {phoneError && (
              <B.ErrorWrapper>
                <B.FailX src={failX} />
                <span style={{ color: '#FA5963' }}>{phoneError}</span>
              </B.ErrorWrapper>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>이메일</B.InputTitle>
            <div>
              <B.InputBox
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  if (!email) {
                    setEmailError('이메일을 입력해주세요');
                  } else if (!validateEmail(email)) {
                    setEmailError('이메일을 형식에 맞게 입력해주세요');
                  } else {
                    setEmailError('');
                  }
                }}
                style={{ borderColor: emailError ? '#FA5963' : '' }}
              />
              {emailError && (
                <B.ErrorWrapper>
                  <B.FailX src={failX} />
                  <span style={{ color: '#FA5963' }}>{emailError}</span>
                </B.ErrorWrapper>
              )}
            </div>
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>대표자명</B.InputTitle>
            <div>
              <B.InputBox
                type="text"
                placeholder="실명을 입력하세요"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                onBlur={() => {
                  if (!ownerName) {
                    setOwnerNameError('대표자명을 입력해주세요');
                  } else {
                    setOwnerNameError('');
                  }
                }}
                style={{ borderColor: ownerNameError ? '#FA5963' : '' }}
              />
              {ownerNameError && (
                <B.ErrorWrapper>
                  <B.FailX src={failX} />
                  <span style={{ color: '#FA5963' }}>{ownerNameError}</span>
                </B.ErrorWrapper>
              )}
            </div>
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>사업자 등록 번호</B.InputTitle>
            <div>
              <B.InputBox
                type="text"
                placeholder="000-00-00000"
                value={businessNum}
                onChange={(e) => setBusinessNum(e.target.value)}
                onBlur={() => {
                  if (!businessNum) {
                    setBusinessNumError('사업자 등록 번호를 입력해주세요');
                  } else {
                    setBusinessNumError('');
                  }
                }}
                style={{ borderColor: businessNumError ? '#FA5963' : '' }}
              />
              {businessNumError && (
                <B.ErrorWrapper>
                  <B.FailX src={failX} />
                  <span style={{ color: '#FA5963' }}>{businessNumError}</span>
                </B.ErrorWrapper>
              )}
            </div>
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>동물생산업 허가 번호</B.InputTitle>
            <div>
              <B.InputBox
                type="text"
                placeholder="동물생산업 인허가 번호를 입력하세요"
                value={permitNum}
                onChange={(e) => setPermitNum(e.target.value)}
                onBlur={() => {
                  if (!permitNum) {
                    setPermitNumError('동물생산업 인허가 번호를 입력해주세요');
                  } else {
                    setPermitNumError('');
                  }
                }}
                style={{ borderColor: permitNumError ? '#FA5963' : '' }}
              />
              {permitNumError && (
                <B.ErrorWrapper>
                  <B.FailX src={failX} />
                  <span style={{ color: '#FA5963' }}>{permitNumError}</span>
                </B.ErrorWrapper>
              )}
            </div>
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>
              홈페이지/SNS 주소 <span className="subtext">(선택)</span>
            </B.InputTitle>
            <div>
              <B.InputBox type="text" placeholder="" />
            </div>
          </B.InputWrapper>
        </B.InputArea>
        <B.BtnWrapper2>
          <Button white text="이전" path="breeder-signup/2" />
          <Button text="다음" path="breeder-signup/4" />
        </B.BtnWrapper2>
      </B.Container>
    </B.Background>
  );
}
