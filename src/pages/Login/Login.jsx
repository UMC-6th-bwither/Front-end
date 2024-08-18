import { useState } from 'react';
import * as L from './Login.style';
import Button from '../../components/SignUpButton/Button';
import beforeCheck from '../../../public/icons/signUp/check_before.svg';
import afterCheck from '../../../public/icons/signUp/check_after.svg';
import pwShow from '../../../public/icons/signUp/password-show.svg';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <L.Background>
      <L.WelcomeMsg>로그인</L.WelcomeMsg>
      <L.Container>
        <L.InputArea>
          <L.InputWrapper>
            <L.InputTitle>아이디</L.InputTitle>
            <L.InputBox type="text" autoFocus={{ borderColor: '#fe834d' }} />
          </L.InputWrapper>
          <L.InputWrapper>
            <L.InputTitle>비밀번호</L.InputTitle>
            <L.InputBox type={showPassword ? 'text' : 'password'} />
            <L.PwShowIcon
              src={pwShow}
              onClick={() => setShowPassword(!showPassword)}
            />
          </L.InputWrapper>
          <L.CheckWrapper>
            <L.Label>
              <L.Checkbox
                type="checkbox"
                checked={checked}
                onClick={() => {
                  setChecked(!checked);
                }}
              />
              <L.Check src={checked ? afterCheck : beforeCheck} />
              <L.Text>로그인 상태 유지</L.Text>
            </L.Label>
          </L.CheckWrapper>
        </L.InputArea>
        <L.BtnWrapper1>
          <Button text="로그인" path="" />
        </L.BtnWrapper1>
      </L.Container>
    </L.Background>
  );
}
