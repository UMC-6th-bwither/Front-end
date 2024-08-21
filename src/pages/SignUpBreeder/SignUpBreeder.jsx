/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as B from './SignUpBreeder.style';
import progressBar25 from '/icons/signUp/progress-bar-25.svg';
import pwShow from '/icons/signUp/password-show.svg';
import Terms from '../../components/SignUpTerms/SignUpTerms';
import Button from '../../components/SignUpButton/Button';
import TextButton from '../../components/SignUpButton/TextButton';
import failX from '/icons/signUp/fail_x.svg';

export default function SignUpBreeder() {
  const [pwdVisible, setPwdVisible] = useState({
    password: false,
    passwordCheck: false,
  });

  // 비밀번호 숨기기 & 보여주기
  const toggleVisibility = (field) => {
    setPwdVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    console.log('Form submitted.', data);
  };

  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 당신의 소중한 반려동물을 위한 첫 걸음을 시작해보세요.
      </B.WelcomeMsg>
      <B.Container onSubmit={handleSubmit(onSubmit)}>
        <B.ProgressBar src={progressBar25} />
        <B.Text>브위더 계정을 만들어 보아요</B.Text>
        <B.InputArea>
          <B.InputWrapper>
            <B.InputTitle>이름</B.InputTitle>
            <B.InputBox
              type="text"
              placeholder="실명을 입력해주세요"
              {...register('name', {
                required: '이름을 입력해주세요',
                minLength: { value: 2, message: '2자 이상 입력해주세요' },
              })}
            />
            {errors.name && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.name.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>전화번호</B.InputTitle>
            <B.InputBox
              type="tel"
              placeholder="010-1234-5678 형태로 입력해주세요"
              {...register('phone', {
                required: '전화번호를 입력해주세요',
                pattern: {
                  value: /^\d{3}-\d{4}-\d{4}$/,
                  message: '전화번호를 형식에 맞게 입력해주세요',
                },
              })}
            />
            {errors.phone && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.phone.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>이메일</B.InputTitle>
            <div className="InputButtonWrapper">
              <B.InputBox
                type="email"
                placeholder="example@email.com"
                required
                {...register('email', {
                  required: '이메일을 입력해주세요',
                  pattern: {
                    value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: '올바른 이메일 형식이 아닙니다.',
                  },
                })}
              />
              <B.CodeRequestButton>인증번호</B.CodeRequestButton>
            </div>
            {errors.email && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.email.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>인증번호 입력</B.InputTitle>
            <div className="InputButtonWrapper">
              <B.InputBox
                type="tel"
                placeholder="문자로 전송된 인증번호 6자리"
              />
              <B.CodeRequestButton>인증하기</B.CodeRequestButton>
            </div>
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>아이디</B.InputTitle>
            <div className="InputButtonWrapper">
              <B.InputBox
                type="tel"
                placeholder="아이디를 입력해주세요"
                {...register('username', {
                  required: '아이디를 입력해주세요',
                })}
              />
              <B.CodeRequestButton>중복확인</B.CodeRequestButton>
            </div>
            {errors.username && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.username.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>비밀번호</B.InputTitle>
            <div className="InputButtonWrapper">
              <B.InputBox
                type={pwdVisible.password ? 'text' : 'password'}
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 적어주세요"
                {...register('password', {
                  required: '비밀번호를 입력해주세요',
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: '비밀번호를 형식에 맞게 입력해주세요',
                  },
                })}
              />
              <B.PwShowIcon
                src={pwShow}
                onClick={() => toggleVisibility('password')}
              />
            </div>
            {errors.password && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.password.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>비밀번호 확인</B.InputTitle>
            <div className="InputButtonWrapper">
              <B.InputBox
                type={pwdVisible.passwordCheck ? 'text' : 'password'}
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 적어주세요"
                {...register('passwordCheck', {
                  required: '비밀번호를 입력해주세요',
                  validate: (value) =>
                    value === watch('password') ||
                    '비밀번호를 형식에 맞게 입력해주세요.',
                })}
              />
              <B.PwShowIcon
                src={pwShow}
                onClick={() => toggleVisibility('passwordCheck')}
              />
            </div>
            {errors.passwordCheck && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.passwordCheck.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
        </B.InputArea>
        <Terms />
        <B.BtnWrapper1>
          <Button type="submit" text="회원가입" path="SignUpBreederChoice" />
          <TextButton
            path="BwitherSignUp1"
            text="일반 회원으로 가입하시나요?"
          />
        </B.BtnWrapper1>
      </B.Container>
    </B.Background>
  );
}
