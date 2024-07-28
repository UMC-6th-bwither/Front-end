import { useState, useEffect } from 'react';
import * as S from './Main.style';
import Header from '../../components/header/Header';
import {
  LeftArrow,
  RightArrow,
  OrangeRightArrow,
  SmallRightArrow,
} from '../../../public/img/ArrowIcon';
import teleimg from '../../../public/img/telescope.png';
import bannerimg from '../../../public/img/bannerimg.png';
import ButtonSelector from '../../components/buttonselector/ButtonSelector';

const fetchUserData = () => {
  return {
    name: 'John',
    role: 'bwither',
  };
};

function Main() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = fetchUserData();
    setUser(userData);
  }, []);

  return (
    <>
      <Header />
      <S.Layout>
        <S.HeadLineContainer>
          <S.HeadLiner>
            올바른 반려동물 분양 문화를 선도하는 <span>브위더🐶🐱</span>
          </S.HeadLiner>
        </S.HeadLineContainer>

        <NewsBanner />
        {user && user.role === 'breeder' ? <BreederPage /> : <CommonPage />}
      </S.Layout>
    </>
  );
}

function CommonPage() {
  return (
    <div>
      <S.Theme>지금 인기 있는 브리더</S.Theme>
      <BreederRankingCommonVer />

      <S.Theme>
        브리더가 알려주는 반려동물 꿀정보 <ExploreAll />
      </S.Theme>
      <InfoArticle />

      <S.Theme>
        브위더 커뮤니티에 물어보세요 <ExploreAll />
      </S.Theme>
      <CommunityPreview />

      <S.Theme>
        반려동물 분양 후기 <ExploreAll />
      </S.Theme>
      <AdoptionReview />
    </div>
  );
}

function BreederPage() {
  return (
    <div>
      <S.Theme>👑이번 주 브리더 랭킹 </S.Theme>
      <BreederRankingBreederVer />

      <S.Theme style={{ marginTop: '70px' }}>
        브리더에게 궁금해요! <ExploreAll />
      </S.Theme>
      <CommunityPreview />

      <S.Theme>
        브리더가 알려주는 반려동물 꿀정보 <ExploreAll />
      </S.Theme>
      <InfoArticle />
    </div>
  );
}

function NewsBanner() {
  return (
    <S.BannerContainer>
      <S.Button>
        <LeftArrow />
      </S.Button>

      <S.NewsContent src={bannerimg} alt="배너 뉴스" className="bannernews" />

      <S.Button>
        <RightArrow />
      </S.Button>
    </S.BannerContainer>
  );
}

function ExploreAll() {
  return (
    <S.LinkText>
      전체보기
      <OrangeRightArrow />
    </S.LinkText>
  );
}

function BreederRankingCommonVer() {
  return (
    <S.PBContainer>
      <S.AnimalChoiceContainer>
        <ButtonSelector>강아지</ButtonSelector>
        <ButtonSelector>고양이</ButtonSelector>
      </S.AnimalChoiceContainer>

      <S.BreederList>
        <S.Button style={{ margin: '-30px' }}>
          <LeftArrow />
        </S.Button>

        <S.MeetingBreederCard>
          <S.Img src={teleimg} alt="telescope" />
          <S.MeetingBreederText>
            <p>
              <span>127명</span>의
            </p>
            브리더 만나보기 <SmallRightArrow />
          </S.MeetingBreederText>
        </S.MeetingBreederCard>

        <S.BreederCard>
          <S.BreederProfile />
          <S.BreederName>김기도</S.BreederName>
          <S.ReviewStars>⭐ 5.0</S.ReviewStars>
          <S.BreederInfo>경력 8년 · 평균 2시간 내 응답</S.BreederInfo>
        </S.BreederCard>

        <S.BreederCard>
          <S.BreederProfile />
          <S.BreederName>김성조</S.BreederName>
          <S.ReviewStars>⭐ 5.0</S.ReviewStars>
          <S.BreederInfo>경력 25년 · 평균 2시간 내 응답</S.BreederInfo>
        </S.BreederCard>

        <S.BreederCard>
          <S.BreederProfile />
          <S.BreederName>부산몬스터트랜스어쩌구저쩌구</S.BreederName>
          <S.ReviewStars>⭐ 5.0</S.ReviewStars>
          <S.BreederInfo>경력 8년 · 평균 6시간 내 응답</S.BreederInfo>
        </S.BreederCard>

        <S.BreederCard>
          <S.BreederProfile />
          <S.BreederName>해피켄넬</S.BreederName>
          <S.ReviewStars>⭐ 5.0</S.ReviewStars>
          <S.BreederInfo>경력 3년 · 평균 6시간 내 응답</S.BreederInfo>
        </S.BreederCard>

        <S.Button style={{ margin: '-30px' }}>
          <RightArrow />
        </S.Button>
      </S.BreederList>
    </S.PBContainer>
  );
}

function BreederRankingBreederVer() {
  return (
    <S.PBContainerVer2>
      <S.AnimalChoiceContainer>
        <ButtonSelector>강아지</ButtonSelector>
        <ButtonSelector>고양이</ButtonSelector>
      </S.AnimalChoiceContainer>

      <S.BreederListVer2>
        <S.BreederCardVer2>
          <S.RankingNum>1</S.RankingNum>
          <S.BreederProfileVer2 />
          <S.BreederDetails>
            <S.BreederNameStars>
              <S.BreederNameVer2>김성조</S.BreederNameVer2>
              <S.ReviewStarsVer2>⭐ 5.0</S.ReviewStarsVer2>
            </S.BreederNameStars>
            <S.BreederInfoVer2>경력 8년 · 평균 2시간 내 응답</S.BreederInfoVer2>
          </S.BreederDetails>
        </S.BreederCardVer2>

        <S.BreederCardVer2>
          <S.RankingNum>2</S.RankingNum>
          <S.BreederProfileVer2 />
          <S.BreederDetails>
            <S.BreederNameStars>
              <S.BreederNameVer2>김성도</S.BreederNameVer2>
              <S.ReviewStarsVer2>⭐ 5.0</S.ReviewStarsVer2>
            </S.BreederNameStars>
            <S.BreederInfoVer2>경력 2년 · 평균 2시간 내 응답</S.BreederInfoVer2>
          </S.BreederDetails>
        </S.BreederCardVer2>

        <S.BreederCardVer2>
          <S.RankingNum>3</S.RankingNum>
          <S.BreederProfileVer2 />
          <S.BreederDetails>
            <S.BreederNameStars>
              <S.BreederNameVer2>부산몬스터트랜스</S.BreederNameVer2>
              <S.ReviewStarsVer2>⭐ 5.0</S.ReviewStarsVer2>
            </S.BreederNameStars>
            <S.BreederInfoVer2>경력 8년 · 평균 6시간 내 응답</S.BreederInfoVer2>
          </S.BreederDetails>
        </S.BreederCardVer2>

        <S.BreederCardVer2>
          <S.RankingNum>4</S.RankingNum>
          <S.BreederProfileVer2 />
          <S.BreederDetails>
            <S.BreederNameStars>
              <S.BreederNameVer2>해피켄넬</S.BreederNameVer2>
              <S.ReviewStarsVer2>⭐ 5.0</S.ReviewStarsVer2>
            </S.BreederNameStars>
            <S.BreederInfoVer2>경력 3년 · 평균 6시간 내 응답</S.BreederInfoVer2>
          </S.BreederDetails>
        </S.BreederCardVer2>

        <S.BreederCardVer2>
          <S.RankingNum>5</S.RankingNum>
          <S.BreederProfileVer2 />
          <S.BreederDetails>
            <S.BreederNameStars>
              <S.BreederNameVer2>김기덕</S.BreederNameVer2>
              <S.ReviewStarsVer2>⭐ 5.0</S.ReviewStarsVer2>
            </S.BreederNameStars>
            <S.BreederInfoVer2>경력 5년 · 평균 2시간 내 응답</S.BreederInfoVer2>
          </S.BreederDetails>
        </S.BreederCardVer2>
      </S.BreederListVer2>
    </S.PBContainerVer2>
  );
}

function CommunityPreview() {
  return <S.CPContainer>커뮤니티 글들</S.CPContainer>;
}

function InfoArticle() {
  return (
    <S.IAContainer>
      <S.Button style={{ margin: '-30px' }}>
        <LeftArrow />
      </S.Button>

      <S.InfoCard>
        <S.InfoCardImg>
          <S.InfoTitle>강아지를 훈육하려면?</S.InfoTitle>
        </S.InfoCardImg>
        <S.ProFileContainer>
          <S.ProfileImg />
          <S.ProFileName>남서연</S.ProFileName>
        </S.ProFileContainer>
      </S.InfoCard>

      <S.InfoCard>
        <S.InfoCardImg>
          <S.InfoTitle>
            견주만 휴가를 가나요, 반려견도 어쩌구 저쩌구
          </S.InfoTitle>
        </S.InfoCardImg>
        <S.ProFileContainer>
          <S.ProfileImg />
          <S.ProFileName>써니</S.ProFileName>
        </S.ProFileContainer>
      </S.InfoCard>

      <S.InfoCard>
        <S.InfoCardImg>
          <S.InfoTitle>
            고양이는 혼자 있는 것을 좋아할까요 어쩌구 저쩌구
          </S.InfoTitle>
        </S.InfoCardImg>
        <S.ProFileContainer>
          <S.ProfileImg />
          <S.ProFileName>이원비(Racdfkfekk)</S.ProFileName>
        </S.ProFileContainer>
      </S.InfoCard>

      <S.InfoCard>
        <S.InfoCardImg>
          <S.InfoTitle>견주가 처음인 당신에게</S.InfoTitle>
        </S.InfoCardImg>
        <S.ProFileContainer>
          <S.ProfileImg />
          <S.ProFileName>해피켄넬</S.ProFileName>
        </S.ProFileContainer>
      </S.InfoCard>

      <S.Button style={{ margin: '-30px' }}>
        <RightArrow />
      </S.Button>
    </S.IAContainer>
  );
}

function AdoptionReview() {
  return (
    <S.ARContainer>
      <S.Button style={{ margin: '-30px' }}>
        <LeftArrow />
      </S.Button>

      <S.ReviewCard>
        <S.ReviewCardImg />
        <S.ReviewDetail>
          아주 귀엽쥬? 금방 적응해서 이젠 잘 웃네요
        </S.ReviewDetail>
      </S.ReviewCard>

      <S.ReviewCard>
        <S.ReviewCardImg />
        <S.ReviewDetail>최궁민 브리더님께 분양 받았습니다!</S.ReviewDetail>
      </S.ReviewCard>

      <S.ReviewCard>
        <S.ReviewCardImg />
        <S.ReviewDetail>이제 3주 된 애기예요~~~ 너무 예쁘죠</S.ReviewDetail>
      </S.ReviewCard>

      <S.Button style={{ margin: '-30px' }}>
        <RightArrow />
      </S.Button>
    </S.ARContainer>
  );
}

export default Main;
