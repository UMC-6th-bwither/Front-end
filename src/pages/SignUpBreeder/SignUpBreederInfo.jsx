/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as B from './SignUpBreeder.style';
import progressBar75 from '../../../public/icons/signUp/progress-bar-75.svg';
import Button from '../../components/SignUpButton/Button';
import failX from '../../../public/icons/signUp/fail_x.svg';

export default function SignUpBreederInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  // const confirmSignUPInfo = async (data) => {
  //   try {
  //     await axios.post('', {
  //       tradeName: data.tradeName,
  //       tradePhone: data.tradePhone,
  //       tradeEmail: data.tradeEmail,
  //       representative: data.representative,
  //       registrationNumber: data.registrationNumber,
  //       licenseNumber: data.licenseNumber,
  //     });
  //   } catch (error) {
  //     alert('회원가입 중 오류 발생');
  //   }
  // };

  // const onSubmit = handleSubmit(confirmSignUPInfo);

  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 브위더와 함께 올바른 반려동물 분양문화를 이끌어가요
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
              {...register('tradeName', {
                required: '상호명을 입력해주세요',
              })}
            />
            {errors.tradeName && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.tradeName.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>전화번호</B.InputTitle>
            <B.InputBox
              type="tel"
              placeholder="010-1234-5678 형태로 입력해주세요"
              {...register('tradePhone', {
                required: '전화번호를 입력해주세요',
                pattern: {
                  value: /^\d{3}-\d{4}-\d{4}$/,
                  message: '전화번호를 형식에 맞게 입력해주세요',
                },
              })}
            />
            {errors.tradePhone && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.tradePhone.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>이메일</B.InputTitle>
            <B.InputBox
              type="email"
              placeholder="example@email.com"
              {...register('tradeEmail', {
                required: '이메일을 입력해주세요',
                pattern: {
                  value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: '올바른 이메일 형식이 아닙니다.',
                },
              })}
            />
            {errors.tradeEmail && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.tradeEmail.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>대표자명</B.InputTitle>
            <B.InputBox
              type="password"
              placeholder="실명을 입력하세요"
              {...register('representative', {
                required: '대표자명을 입력해주세요',
              })}
            />
            {errors.representative && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.representative.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>사업자 등록 번호</B.InputTitle>
            <B.InputBox
              type="password"
              placeholder="000-00-00000"
              {...register('registrationNumber', {
                required: '사업자 등록 번호를 입력해주세요',
              })}
            />
            {errors.registrationNumber && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.registrationNumber.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>동물생산업 허가 번호</B.InputTitle>
            <B.InputBox
              type="password"
              placeholder="동물생산업 인허가 번호를 입력하세요"
              {...register('licenseNumber', {
                required: '동물생산업 허가 번호를 입력해주세요',
              })}
            />
            {errors.licenseNumber && (
              <B.Error>
                <B.FailX>
                  <img src={failX} alt="X" />
                </B.FailX>
                <div>{errors.licenseNumber.message}</div>
              </B.Error>
            )}
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>
              홈페이지/SNS 주소 <span className="subtext">(선택)</span>
            </B.InputTitle>
            <B.InputBox type="password" />
          </B.InputWrapper>
        </B.InputArea>
        <B.BtnWrapper2>
          <Button white text="이전" path="SignUpBreederChoice" />
          <Button text="다음" type="submit" path="SignUpBreederInfo2" />
        </B.BtnWrapper2>
      </B.Container>
    </B.Background>
  );
}
