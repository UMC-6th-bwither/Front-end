import * as L from './Login.style';
import unchecked from '../../../public/img/uncheckedCheck.svg';
import Button from '../../components/SignUpButton/Button';

export default function Login() {
  return (
    <L.Background>
      <L.WelcomeMsg>로그인</L.WelcomeMsg>
      <L.Container>
        <L.InputArea>
          <L.InputWrapper>
            <L.InputTitle>아이디</L.InputTitle>
            <L.InputBox type="text" />
          </L.InputWrapper>
          <L.InputWrapper>
            <L.InputTitle>비밀번호</L.InputTitle>
            <L.InputBox type="password" />
          </L.InputWrapper>
          <L.CheckWrapper>
            <img src={unchecked} alt="unchecked_check" /> 로그인 상태 유지
          </L.CheckWrapper>
        </L.InputArea>
        <L.BtnWrapper1>
          <Button text="로그인" path="" />
        </L.BtnWrapper1>
      </L.Container>
    </L.Background>
  );
}
