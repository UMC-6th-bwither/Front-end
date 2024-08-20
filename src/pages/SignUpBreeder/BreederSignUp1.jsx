import { useState } from 'react';
import * as B from '../SignUpBwither/BwitherSignUp.style';
import progressBar25 from '/icons/signUp/progress-bar-25.svg';
import pwShow from '/icons/signUp/password-show.svg';
import Terms from '../../components/SignUpTerms/SignUpTerms';
import Button from '../../components/SignUpButton/Button';
import TextButton from '../../components/SignUpButton/TextButton';
import failX from '/icons/signUp/fail_x.svg';

export default function BwitherSignUp1() {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePasswordConfirmation = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [codeError, setCodeError] = useState('');
  const [IdError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 당신의 소중한 반려동물을 위한 첫 걸음을 시작해보세요.
      </B.WelcomeMsg>
      <B.Container>
        <B.ProgressBar src={progressBar25} />
        <B.Text>브리더 계정을 만들어 보아요</B.Text>
        <B.InputArea>
          <B.InputWrapper>
            <B.InputTitle>이름</B.InputTitle>
            <B.InputBox
              type="text"
              placeholder="실명을 입력해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => {
                if (!name) {
                  setNameError('이름을 입력해주세요');
                } else if (name.length < 2) {
                  setNameError('2자 이상 입력해주세요');
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
                <span style={{ color: '#E76467' }}>{nameError}</span>
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
                <span style={{ color: '#E76467' }}>{phoneError}</span>
              </B.ErrorWrapper>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>이메일</B.InputTitle>
            <div style={{ height: '50px' }}>
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
              <B.Button>인증번호</B.Button>
            </div>
            {emailError && (
              <B.ErrorWrapper>
                <B.FailX src={failX} />
                <span style={{ color: '#E76467' }}>{emailError}</span>
              </B.ErrorWrapper>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>인증번호 입력</B.InputTitle>
            <div style={{ height: '50px' }}>
              <B.InputBox
                type="number"
                placeholder="이메일로 전송된 인증번호 6자리"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onBlur={() => {
                  if (!code) {
                    setCodeError('인증번호를 입력해주세요');
                  } else {
                    setCodeError('');
                  }
                }}
                style={{ borderColor: codeError ? '#FA5963' : '' }}
              />
              <B.Button>인증하기</B.Button>
            </div>
            {codeError && (
              <B.ErrorWrapper>
                <B.FailX src={failX} />
                <span style={{ color: '#E76467' }}>{codeError}</span>
              </B.ErrorWrapper>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>아이디</B.InputTitle>
            <div style={{ height: '50px' }}>
              <B.InputBox
                type="text"
                placeholder="아이디를 입력해주세요"
                value={id}
                onChange={(e) => setId(e.target.value)}
                onBlur={() => {
                  if (!id) {
                    setIdError('아이디를 입력해주세요');
                  } else {
                    setIdError('');
                  }
                }}
                style={{ borderColor: IdError ? '#FA5963' : '' }}
              />
              <B.Button>중복확인</B.Button>
            </div>
            {IdError && (
              <B.ErrorWrapper>
                <B.FailX src={failX} />
                <span style={{ color: '#E76467' }}>{IdError}</span>
              </B.ErrorWrapper>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>비밀번호</B.InputTitle>
            <div style={{ height: '50px' }}>
              <B.InputBox
                type={showPassword ? 'text' : 'password'}
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 적어주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                  if (!password) {
                    setPasswordError('비밀번호를 입력해주세요');
                  } else if (!validatePassword(password)) {
                    setPasswordError('비밀번호를 형식에 맞게 입력해주세요');
                  } else {
                    setPasswordError('');
                  }
                }}
                style={{ borderColor: passwordError ? '#FA5963' : '' }}
              />
              <B.PwShowIcon
                src={pwShow}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {passwordError && (
              <B.ErrorWrapper>
                <B.FailX src={failX} />
                <span style={{ color: '#E76467' }}>{passwordError}</span>
              </B.ErrorWrapper>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>비밀번호 확인</B.InputTitle>
            <div style={{ height: '50px' }}>
              <B.InputBox
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => {
                  if (!confirmPassword) {
                    setConfirmPasswordError('비밀번호를 다시 입력해주세요');
                  } else if (
                    !validatePasswordConfirmation(password, confirmPassword)
                  ) {
                    setConfirmPasswordError(
                      '위에서 설정한 비밀번호와 맞지 않아요',
                    );
                  } else {
                    setConfirmPasswordError('');
                  }
                }}
                style={{ borderColor: confirmPasswordError ? '#FA5963' : '' }}
              />
              <B.PwShowIcon
                src={pwShow}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
            {confirmPasswordError && (
              <B.ErrorWrapper>
                <B.FailX src={failX} />
                <span style={{ color: '#E76467' }}>{confirmPasswordError}</span>
              </B.ErrorWrapper>
            )}
          </B.InputWrapper>
        </B.InputArea>
        <Terms />
        <B.BtnWrapper1>
          <Button text="브리더로 가입" path="breeder-signup/2" />
          <TextButton text="일반 회원으로 가입하시나요?" path="signup/1" />
        </B.BtnWrapper1>
      </B.Container>
    </B.Background>
  );
}
