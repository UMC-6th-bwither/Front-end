import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/img/logo.svg';
import profile from '/img/profile.png';
import * as H from './Header.style';
import useAuth from '../../hooks/useAuth';
import Modal from './HeaderModal';
import api from '../../api/api';

export default function Header() {
  const { isLoggedIn, role } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const [userData, setUserData] = useState('');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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

  let profileLink;

  if (isLoggedIn) {
    if (role === 'MEMBER') {
      profileLink = (
        <H.Container>
          <H.SubContainer>
            <H.Left>
              <Link to="/">
                <H.Logo src={logo} alt="logo" />
              </Link>
              <H.TextWrapper>
                <H.NavText to="animal-list">분양 대기 동물</H.NavText>
                <H.NavText to="breeder-list">브리더 찾기</H.NavText>
                <H.NavText to="adoptionsystem">분양 시스템</H.NavText>
                <H.NavText to="community">커뮤니티</H.NavText>
              </H.TextWrapper>
            </H.Left>
            <H.IconContainer
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <H.TextWrapper>
                <Link to="MypageGeneral">
                  {userData.profileImage !== null ? (
                    <H.Profile src={userData.profileImage} alt="profile" />
                  ) : (
                    <H.Profile src={profile} alt="profile" />
                  )}
                </Link>
              </H.TextWrapper>
              {isHovered && (
                <H.FloatingComponent>
                  <Modal />
                </H.FloatingComponent>
              )}
            </H.IconContainer>
          </H.SubContainer>
        </H.Container>
      );
    } else {
      profileLink = (
        <H.Container>
          <H.SubContainer>
            <H.Left>
              <Link to="/">
                <H.Logo src={logo} alt="logo" />
              </Link>
              <H.TextWrapper>
                <H.NavText to="BreederAnimalList">관리 중인 동물</H.NavText>
                <H.NavText to="adoptionsystem">분양 시스템</H.NavText>
                <H.NavText to="community">커뮤니티</H.NavText>
              </H.TextWrapper>
            </H.Left>
            <H.IconContainer
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <H.TextWrapper>
                <Link to="MypageBreeder">
                  {userData.profileImage !== null ? (
                    <H.Profile src={userData.profileImage} alt="profile" />
                  ) : (
                    <H.Profile src={profile} alt="profile" />
                  )}
                </Link>
              </H.TextWrapper>
              {isHovered && (
                <H.FloatingComponent>
                  <Modal />
                </H.FloatingComponent>
              )}
            </H.IconContainer>
          </H.SubContainer>
        </H.Container>
      );
    }
  } else {
    profileLink = (
      <H.Container>
        <H.SubContainer>
          <H.Left>
            <Link to="/">
              <H.Logo src={logo} alt="logo" />
            </Link>
            <H.TextWrapper>
              <H.NavText to="animal-list">분양 대기 동물</H.NavText>
              <H.NavText to="breeder-list">브리더 찾기</H.NavText>
              <H.NavText to="adoptionsystem">분양 시스템</H.NavText>
              <H.NavText to="community">커뮤니티</H.NavText>
            </H.TextWrapper>
          </H.Left>
          <H.Right>
            <H.TextWrapper>
              <H.AuthText to="login">로그인</H.AuthText>
              <H.AuthText to="signup/1">회원가입</H.AuthText>
            </H.TextWrapper>
            <H.Button to="breeder-signup/1">브리더로 가입</H.Button>
          </H.Right>
        </H.SubContainer>
      </H.Container>
    );
  }

  return <>{profileLink}</>;
}
