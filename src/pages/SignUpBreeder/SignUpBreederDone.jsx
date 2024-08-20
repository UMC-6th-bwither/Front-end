import * as B from './SignUpBreeder.style';
import progressBar100 from '/icons/signUp/progress-bar-100.svg';
import Button from '../../components/SignUpButton/Button';

export default function SignUpBreederDone() {
  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 당신의 소중한 반려동물을 위한 첫 걸음을 시작해보세요.
      </B.WelcomeMsg>
      <B.Container>
        <B.ProgressBar src={progressBar100} />
        <B.TextWrapper>
          <B.Text>브리더 준비를 마쳤습니다!</B.Text>
          <B.SubText>브위더에서 가족을 만들어주세요</B.SubText>
        </B.TextWrapper>
        <B.Gap />
        <Button text="로그인 하기" path="" />
      </B.Container>
    </B.Background>
  );
}
