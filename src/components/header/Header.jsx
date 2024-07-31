import logo from '../../../public/img/logo.svg';
import * as H from './Header.style';

export default function Header() {
  return (
    <H.Container>
      <H.SubContainer>
        <H.Left>
          <H.Logo src={logo} alt="logo" />
          <H.TextWrapper>
            <H.NavText>분양 대기 동물</H.NavText>
            <H.NavText>브리더 찾기</H.NavText>
            <H.NavText>분양 시스템</H.NavText>
            <H.NavText>커뮤니티</H.NavText>
          </H.TextWrapper>
        </H.Left>
        <H.Right>
          <H.TextWrapper>
            <H.AuthText>로그인</H.AuthText>
            <H.AuthText>회원가입</H.AuthText>
          </H.TextWrapper>
          <H.Button>브리더로 가입</H.Button>
        </H.Right>
      </H.SubContainer>
    </H.Container>
  );
}
