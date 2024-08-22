/* eslint-disable no-console */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLoginWithResponse } from '../../utils/handleLogin';
import * as L from './Login.style';
import Button from '../../components/SignUpButton/Button';
import beforeCheck from '/icons/signUp/check_before.svg';
import afterCheck from '/icons/signUp/check_after.svg';
import pwShow from '/icons/signUp/password-show.svg';
import failX from '/icons/signUp/fail_x.svg';
import { postLogin } from '../../apis/postUser';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');
    if (!username && !password) {
      setUsernameError('아이디를 입력해주세요');
      setPasswordError('비밀번호를 입력해주세요');
    } else {
      setUsernameError('');
      setPasswordError('');
    }

    if (!username && !password) {
      return;
    }

    try {
      const data = { username, password };
      const response = await postLogin(data);
      console.log('로그인 성공, Server response:', response);
      navigate('/');

      const { token } = response.result;
      handleLoginWithResponse(dispatch, response.result);

      if (token) {
        localStorage.setItem('accessToken', token);
        console.log('토큰이 로컬 스토리지에 저장되었습니다.');
      } else {
        console.log('토큰을 찾을 수 없습니다.');
      }

      console.log('로그인 성공', response);
      setUsernameError('');
      setPasswordError('');
    } catch (error) {
      console.log('로그인 api 요청 중 에러', error);
    }
  };

  return (
    <L.Background>
      <L.WelcomeMsg>로그인</L.WelcomeMsg>
      <L.Container>
        <L.Form onSubmit={onSubmit}>
          <L.InputArea>
            <L.InputWrapper>
              <L.InputTitle>아이디</L.InputTitle>
              <L.InputBox
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus={{ borderColor: '#fe834d' }}
                style={{ borderColor: usernameError ? '#FA5963' : '' }}
              />
              {usernameError && (
                <L.ErrorWrapper>
                  <L.FailX src={failX} />
                  <span style={{ color: '#FA5963' }}>{usernameError}</span>
                </L.ErrorWrapper>
              )}
            </L.InputWrapper>
            <L.InputWrapper>
              <L.InputTitle>비밀번호</L.InputTitle>
              <div style={{ height: '50px' }}>
                <L.InputBox
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ borderColor: passwordError ? '#FA5963' : '' }}
                />
                <L.PwShowIcon
                  src={pwShow}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {passwordError && (
                <L.ErrorWrapper>
                  <L.FailX src={failX} />
                  <span style={{ color: '#FA5963' }}>{passwordError}</span>
                </L.ErrorWrapper>
              )}
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
            <Button text="로그인" path="" type="submit" />
          </L.BtnWrapper1>
        </L.Form>
      </L.Container>
    </L.Background>
  );
}
