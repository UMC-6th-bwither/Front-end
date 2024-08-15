import { useState } from 'react';
import * as B from './BwitherSignUp.style';
import progressBar25 from '../../../public/icons/signUp/progress-bar-25.svg';
import pwShow from '../../../public/icons/signUp/password-show.svg';
import Terms from '../../components/SignUpTerms/SignUpTerms';
import Button from '../../components/SignUpButton/Button';
import TextButton from '../../components/SignUpButton/TextButton';

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
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 당신의 소중한 반려동물을 위한 첫 걸음을 시작해보세요.
      </B.WelcomeMsg>
      <B.Container>
        <B.ProgressBar src={progressBar25} />
        <B.Text>브위더 계정을 만들어 보아요</B.Text>
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
              autofocus={{ borderColor: '#fe834d' }}
            />
            {nameError && <span style={{ color: '#FA5963' }}>{nameError}</span>}
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
              <span style={{ color: '#FA5963' }}>{phoneError}</span>
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
                  }
                }}
                style={{ borderColor: emailError ? '#FA5963' : '' }}
              />
              {emailError && (
                <span style={{ color: '#FA5963' }}>{emailError}</span>
              )}
              <B.Button>인증번호</B.Button>
            </div>
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>인증번호 입력</B.InputTitle>
            <div>
              <B.InputBox
                type="number"
                placeholder="이메일로 전송된 인증번호 6자리"
              />
              <B.Button>인증하기</B.Button>
            </div>
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>아이디</B.InputTitle>
            <div>
              <B.InputBox type="text" placeholder="아이디를 입력해주세요" />
              <B.Button>중복확인</B.Button>
            </div>
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>비밀번호</B.InputTitle>
            <div>
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
                  }
                }}
                style={{ borderColor: passwordError ? '#FA5963' : '' }}
              />
              {passwordError && (
                <span style={{ color: '#FA5963' }}>{passwordError}</span>
              )}
              <B.PwShowIcon
                src={pwShow}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>비밀번호 확인</B.InputTitle>
            <div>
              <B.InputBox
                type={showPassword ? 'text' : 'password'}
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 적어주세요"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => {
                  if (!confirmPassword) {
                    setConfirmPasswordError('비밀번호를 입력해주세요');
                  } else if (!validatePasswordConfirmation(confirmPassword)) {
                    setConfirmPasswordError(
                      '비밀번호를 형식에 맞게 입력해주세요',
                    );
                  }
                }}
                style={{ borderColor: confirmPasswordError ? '#FA5963' : '' }}
              />
              {confirmPasswordError && (
                <span style={{ color: '#FA5963' }}>{confirmPasswordError}</span>
              )}
              <B.PwShowIcon
                src={pwShow}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </B.InputWrapper>
        </B.InputArea>
        <Terms />
        <B.BtnWrapper1>
          <Button text="회원가입" path="bwither-signup-2" />
          <TextButton path="breeder-signup-1" />
        </B.BtnWrapper1>
      </B.Container>
    </B.Background>
  );
}
