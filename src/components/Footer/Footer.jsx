/* eslint-disable react/button-has-type */
import { InstaIcon, BlogIcon } from '../../../public/img/FooterIcon';
import * as F from './Footer.style';

function Footer() {
  return (
    <F.Border>
      <F.Container>
        <F.LinkWrapper>
          <F.Links>
            <F.TextWrapper>
              <div className="title">브위더소개</div>
              <F.MinTextWrapper>
                <F.FooText>회사소개</F.FooText>
                <F.FooText>팀블로그</F.FooText>
              </F.MinTextWrapper>
            </F.TextWrapper>
            <F.TextWrapper>
              <div className="title">고객안내</div>
              <F.MinTextWrapper>
                <F.FooText>이용안내</F.FooText>
                <F.FooText>안전정책</F.FooText>
              </F.MinTextWrapper>
            </F.TextWrapper>
            <F.TextWrapper>
              <div className="title">브위더안내</div>
              <F.MinTextWrapper>
                <F.FooText>이용안내</F.FooText>
                <F.FooText>브위더가이드</F.FooText>
                <F.FooText>브위더가입</F.FooText>
              </F.MinTextWrapper>
            </F.TextWrapper>
            <F.TextWrapper>
              <div className="title">고객센터</div>
              <F.MinTextWrapper>
                <F.FooText>공지사항</F.FooText>
                <F.FooText>자주묻는질문</F.FooText>
              </F.MinTextWrapper>
            </F.TextWrapper>
          </F.Links>
          <F.Icons>
            <button>
              <InstaIcon />
            </button>
            <button>
              <BlogIcon />
            </button>
          </F.Icons>
        </F.LinkWrapper>
        <F.Information>
          <F.InfoText>이용약관</F.InfoText>
          <F.InfoText>개인정보처리방침</F.InfoText>
          <F.InfoText>위치기반 서비스 이용약관</F.InfoText>
          <F.InfoText>사업자 정보확인</F.InfoText>
        </F.Information>
      </F.Container>
    </F.Border>
  );
}

export default Footer;
