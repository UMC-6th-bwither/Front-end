import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as H from './Header.style';
import useAuth from '../../hooks/useAuth';
import { logout } from '../../redux/authSlice';
import api from '../../api/api';

export default function HeaderModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, role } = useAuth();
  const [userData, setUserData] = useState('');

  const handleLogout = useCallback(async () => {
    await dispatch(logout());
    navigate('/');
  }, [dispatch, navigate]);

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        const userResponse = await api.get('/user', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const response = userResponse.data.result.userDTO;

        setUserData(response);
      } catch (error) {
        console.error('Error fetching recentData', error);
      }
    };

    fetchRecentData();
  }, []);

  console.log(userData);

  let modal;

  if (isLoggedIn) {
    if (role === 'MEMBER') {
      modal = (
        <H.ModalContainer>
          <H.ModalName>{userData.name}</H.ModalName>
          <H.ModalEmail>{userData.email}</H.ModalEmail>
          <H.MypageBtn to="/MypageGeneral">마이페이지</H.MypageBtn>
          <H.ModalDivider />
          <H.LogoutText onClick={handleLogout}>로그아웃</H.LogoutText>
        </H.ModalContainer>
      );
    } else {
      modal = (
        <H.ModalContainer>
          <H.ModalName>{userData.name}</H.ModalName>
          <H.ModalEmail>{userData.email}</H.ModalEmail>
          <H.MypageBtn to="/MypageBreeder">마이페이지</H.MypageBtn>
          <H.ModalDivider />
          <H.LogoutText onClick={handleLogout}>로그아웃</H.LogoutText>
        </H.ModalContainer>
      );
    }
    return <>{modal}</>;
  }
}
