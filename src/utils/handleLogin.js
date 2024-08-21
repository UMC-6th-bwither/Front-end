/* eslint-disable no-console */
import { login } from '../redux/authSlice';

// 이미 응답 데이터를 가지고 있는 경우
export const handleLoginWithResponse = (dispatch, result) => {
  dispatch(login(result));

  // 로컬 스토리지
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userId', result.userId);
  localStorage.setItem('username', result.username);
  localStorage.setItem('token', result.token);
  localStorage.setItem('role', result.role);
};

// API 요청을 통해 로그인
export const handleLogin = async (dispatch, credentials) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const loginEndpoint = `${apiUrl}/login`;

  try {
    const response = await fetch(loginEndpoint, {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (data.isSuccess) {
      handleLoginWithResponse(dispatch, data.result);
    } else {
      console.error('로그인 실패:', data.message);
    }
  } catch (error) {
    console.error('로그인 중 오류 발생:', error);
  }
};
