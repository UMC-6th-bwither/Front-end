import * as B from './BwitherSignUp.style';
import progressBar100 from '../../../public/icons/signUp/progress-bar-100.svg';
import Button from '../../components/SignUpButton/Button';

export default function BwitherSignUp4() {
  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 당신의 소중한 반려동물을 위한 첫 걸음을 시작해보세요.
      </B.WelcomeMsg>
      <B.Container>
        <B.ProgressBar src={progressBar100} />
        <B.TextWrapper>
          <B.Text>가족이 될 준비가 되었습니다!</B.Text>
          <B.SubText>브위더에서 신뢰할 수 있는 브리더를 만나보세요</B.SubText>
        </B.TextWrapper>
        <B.Gap />
        <Button text="로그인 하기" path="login" />
      </B.Container>
    </B.Background>
  );
}
