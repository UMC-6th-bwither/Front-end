import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as B from './BwitherSignUp.style';
import progressBar25 from '/icons/signUp/progress-bar-25.svg';
import pwShow from '/icons/signUp/password-show.svg';
import Terms from '../../components/SignUpTerms/SignUpTerms';
import Button from '../../components/SignUpButton/Button';
import TextButton from '../../components/SignUpButton/TextButton';
import failX from '/icons/signUp/fail_x.svg';
import openEye from '/icons/signUp/open_eye.svg';
import completeCheck from '/icons/signUp/complete_check.svg';
import { updateSignupStep1 } from '../../redux/signupSlice';
import { postEmailSend, postEmailVerify } from '../../apis/postUser';
import api from '../../api/api';

export default function BwitherSignUp1() {
  const dispatch = useDispatch();
  const signupData = useSelector((state) => state.signup);
  const navigate = useNavigate();

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

  const [name, setName] = useState(signupData.name || '');
  const [phone, setPhone] = useState(signupData.phone || '');
  const [email, setEmail] = useState(signupData.email || '');
  const [code, setCode] = useState(signupData.code || '');
  const [username, setUsername] = useState(signupData.username || '');
  const [password, setPassword] = useState(signupData.password || '');
  const [confirmPassword, setConfirmPassword] = useState(
    signupData.confirmPassword || '',
  );

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [codeError, setCodeError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [codeComplete, setCodeComplete] = useState('');
  const [verifyComplete, setVerifyComplete] = useState('');
  const [usernameComplete, setUsernameComplete] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [termsChecked, setTermsChecked] = useState(false);
  const [termsError, setTermsError] = useState('');

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const handleTermsChecked = (isChecked) => {
    setTermsChecked(isChecked);
    if (isChecked) {
      setTermsError('');
    }
  };

  const checkUsername = async () => {
    setIsClicked3(true);
    if (!username) {
      setUsernameError('아이디를 입력해주세요.');
      return;
    }

    try {
      const response = await api.get('/check-username', {
        params: { username: username },
      });

      if (response.data.isSuccess) {
        console.log('성공');
        setUsernameComplete('사용 가능한 아이디입니다.');
        setUsernameError('');
      } else {
        setUsernameError('아이디가 이미 사용 중입니다.');
        setUsernameComplete('');
      }
    } catch (err) {
      console.log('Failed to fetch data', err);
      setUsernameError('아이디가 이미 사용 중입니다.');
      setUsernameComplete('');
    }
  };

  // 입력이 발생할 때마다 Redux 상태 업데이트
  const handleInputChange = (setter, fieldName) => (event) => {
    const value = event.target.value;
    setter(value);
    dispatch(updateSignupStep1({ ...signupData, [fieldName]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');

    if (!name) {
      setNameError('이름을 입력해주세요');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    } else if (!termsChecked) {
      setTermsError('약관에 동의해주세요'); // 체크박스가 모두 체크되지 않은 경우 경고
      return;
    }

    // dispatch(updateSignupStep1({ name, phone, email, username, password }));
    const { confirmPassword, ...dataToSend } = signupData;

    console.log('리덕스 상태:', signupData);

    navigate('/signup/2');
  };

  const requestVerificationCode = async () => {
    setIsClicked1(true);
    setCodeComplete('인증번호가 이메일로 전송되었습니다.');
    try {
      const response = await postEmailSend(email);
      console.log('인증번호 보내기 성공, Server response:', response);
    } catch (error) {
      console.log('인증번호 요청 중 에러', error);
    }
  };

  const confirmVerificationCode = async () => {
    setIsClicked2(true);
    try {
      const response = await postEmailVerify({
        email,
        verification_code: code,
      });
      console.log('인증하기 성공, Server response:', response);
      setVerifyComplete('인증되었습니다.');
    } catch (error) {
      console.log('인증하기 요청 중 에러', error);
    }
  };

  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 당신의 소중한 반려동물을 위한 첫 걸음을 시작해보세요.
      </B.WelcomeMsg>
      <B.Container>
        <B.ProgressBar src={progressBar25} />
        <B.Text>브위더 계정을 만들어 보아요</B.Text>
        <B.Form onSubmit={onSubmit}>
          <B.InputArea>
            <B.InputWrapper>
              <B.InputTitle>이름</B.InputTitle>
              <B.InputBox
                type="text"
                placeholder="실명을 입력해주세요"
                value={name}
                onChange={handleInputChange(setName, 'name')}
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
                onChange={handleInputChange(setPhone, 'phone')}
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
                  onChange={handleInputChange(setEmail, 'email')}
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
                <B.Button
                  type="button"
                  onClick={requestVerificationCode}
                  clicked={isClicked1}
                >
                  인증번호
                </B.Button>
              </div>
              {emailError && (
                <B.ErrorWrapper>
                  <B.FailX src={failX} />
                  <span style={{ color: '#E76467' }}>{emailError}</span>
                </B.ErrorWrapper>
              )}
              {codeComplete && (
                <B.ErrorWrapper>
                  <B.CompleteCheck src={completeCheck} />
                  <span style={{ color: '#3056d7' }}>{codeComplete}</span>
                </B.ErrorWrapper>
              )}
            </B.InputWrapper>
            <B.InputWrapper>
              <B.InputTitle>인증번호 입력</B.InputTitle>
              <div style={{ height: '50px' }}>
                <B.InputBox
                  type="text"
                  placeholder="이메일로 전송된 인증번호 6자리"
                  value={code}
                  onChange={handleInputChange(setCode, 'code')}
                  onBlur={() => {
                    if (!code) {
                      setCodeError('인증번호를 입력해주세요');
                    } else {
                      setCodeError('');
                    }
                  }}
                  style={{ borderColor: codeError ? '#FA5963' : '' }}
                />
                <B.Button
                  type="button"
                  onClick={confirmVerificationCode}
                  clicked={isClicked2}
                >
                  인증하기
                </B.Button>
              </div>
              {codeError && (
                <B.ErrorWrapper>
                  <B.FailX src={failX} />
                  <span style={{ color: '#E76467' }}>{codeError}</span>
                </B.ErrorWrapper>
              )}
              {verifyComplete && (
                <B.ErrorWrapper>
                  <B.CompleteCheck src={completeCheck} />
                  <span style={{ color: '#3056d7' }}>{verifyComplete}</span>
                </B.ErrorWrapper>
              )}
            </B.InputWrapper>
            <B.InputWrapper>
              <B.InputTitle>아이디</B.InputTitle>
              <div style={{ height: '50px' }}>
                <B.InputBox
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  value={username}
                  onChange={handleInputChange(setUsername, 'username')}
                  onBlur={() => {
                    if (!username) {
                      setUsernameError('아이디를 입력해주세요');
                    } else {
                      setUsernameError('');
                    }
                  }}
                  style={{ borderColor: usernameError ? '#FA5963' : '' }}
                />
                <B.Button
                  type="button"
                  onClick={checkUsername}
                  clicked={isClicked3}
                >
                  중복확인
                </B.Button>
              </div>
              {usernameError && (
                <B.ErrorWrapper>
                  <B.FailX src={failX} />
                  <span style={{ color: '#E76467' }}>{usernameError}</span>
                </B.ErrorWrapper>
              )}
              {usernameComplete && (
                <B.ErrorWrapper>
                  <B.CompleteCheck src={completeCheck} />
                  <span style={{ color: '#3056d7' }}>{usernameComplete}</span>
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
                  onChange={handleInputChange(setPassword, 'password')}
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
                {showPassword ? (
                  <B.PwShowIcon
                    src={openEye}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <B.PwShowIcon
                    src={pwShow}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
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
                  onChange={handleInputChange(
                    setConfirmPassword,
                    'confirmPassword',
                  )}
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
                {showConfirmPassword ? (
                  <B.PwShowIcon
                    src={openEye}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <B.PwShowIcon
                    src={pwShow}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </div>
              {confirmPasswordError && (
                <B.ErrorWrapper>
                  <B.FailX src={failX} />
                  <span style={{ color: '#E76467' }}>
                    {confirmPasswordError}
                  </span>
                </B.ErrorWrapper>
              )}
            </B.InputWrapper>
          </B.InputArea>
          <Terms onTermsChecked={handleTermsChecked} termsError={termsError} />
          <B.BtnWrapper1>
            <Button text="회원가입" path="signup/2" type="submit" />
            <TextButton text="브리더로 가입하시나요?" path="breeder-signup/1" />
          </B.BtnWrapper1>
        </B.Form>
      </B.Container>
    </B.Background>
  );
}
