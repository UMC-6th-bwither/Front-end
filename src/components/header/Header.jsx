import { Link } from 'react-router-dom';
import logo from '../../../public/img/logo.svg';
import * as H from './Header.style';

export default function Header() {
  return (
    <H.Container>
      <H.SubContainer>
        <H.Left>
          <Link to="">
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
