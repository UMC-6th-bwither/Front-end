import * as B from './BwitherSignUp.style';
import progressBar25 from '../../../public/icons/signUp/progress-bar-25.svg';
import pwShow from '../../../public/icons/signUp/password-show.svg';
import Terms from '../../components/SignUpTerms/SignUpTerms';
import Button from '../../components/SignUpButton/Button';
import TextButton from '../../components/SignUpButton/TextButton';

export default function BwitherSignUp1() {
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
            <B.InputBox type="text" placeholder="실명을 입력해주세요" />
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>전화번호</B.InputTitle>
            <B.InputBox
              type="tel"
              placeholder="010-1234-5678 형태로 입력해주세요"
            />
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>이메일</B.InputTitle>
            <div>
              <B.InputBox type="email" placeholder="example@email.com" />
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
                type="password"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 적어주세요"
              />
              <B.PwShowIcon src={pwShow} />
            </div>
          </B.InputWrapper>
          <B.InputWrapper>
            <B.InputTitle>비밀번호 확인</B.InputTitle>
            <div>
              <B.InputBox
                type="password"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 적어주세요"
              />
              <B.PwShowIcon src={pwShow} />
            </div>
          </B.InputWrapper>
        </B.InputArea>
        <Terms />
        <B.BtnWrapper1>
          <Button text="회원가입" path="bwither-signup-2" />
          <TextButton path="" text="브리더로 가입하시나요?" />
        </B.BtnWrapper1>
      </B.Container>
    </B.Background>
  );
}
