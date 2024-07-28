import { useState, useEffect } from 'react';
import * as S from './Main.style';
import Header from '../../components/header/Header';
import {
  LeftArrow,
  RightArrow,
  OrangeRightArrow,
} from '../../../public/img/ArrowIcon';
import ButtonSelector from '../../components/buttonselector/ButtonSelector';

// 사용자 데이터를 가져오는 모의 함수
const fetchUserData = () => {
  // 실제로는 API 호출로 사용자 데이터를 가져옵니다.
  // 여기는 예시를 위해 null을 반환하여 로그아웃 상태를 모방합니다.
  return {
    name: 'John',
    role: 'breeder', // null인 경우 로그아웃 상태
  };
};

function Main() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 사용자 데이터를 가져옴
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

        {/* <NewsBanner user={user.role} /> */}
        <NewsBanner />
        {user && user.role === 'breeder' ? <BreederPage /> : <CommonPage />}
      </S.Layout>
    </>
  );
}

function NewsBanner() {
  //   if (news.length === 0) return null;
  //   const currentNews = news[currentNewsIndex];

  //   const handleNewsClick = () => {
  //     window.location.href = currentNews.link;
  //   };
  return (
    <S.BannerContainer>
      <S.Button>
        <LeftArrow />
      </S.Button>

      <S.NewsContent src="" alt="배너 뉴스" className="photo" />

      <S.Button>
        <RightArrow />
      </S.Button>
    </S.BannerContainer>
  );
}

function PopularBreeder() {
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
        <S.MeetingBreederCard>브리더 만나보기</S.MeetingBreederCard>
        <S.BreederCard>카드 내용</S.BreederCard>
        <S.BreederCard>카드 내용</S.BreederCard>
        <S.BreederCard>카드 내용</S.BreederCard>
        <S.BreederCard>카드 내용</S.BreederCard>
        <S.Button style={{ margin: '-30px' }}>
          <RightArrow />
        </S.Button>
      </S.BreederList>
    </S.PBContainer>
  );
}

function CommunityPreview() {
  return (
    // <div>
    //   <h2>Community</h2>
    //   <div>
    //     {posts.map((post) => (
    //       <div
    //         key={post.id}
    //         onClick={() => (window.location.href = `/community/${post.id}`)}
    //       >
    //         <h3>{post.title}</h3>
    //         <p>{post.snippet}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <S.CPContainer>커뮤니티 글들</S.CPContainer>
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
            견주만 휴가를 가나요, 반려견도 휴가를 즐겨야죠!
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
            고양이는 혼자 있는 것을 좋아할까요 과연? 주인을 정말 좋아합니다!
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

// 브위더 및 비로그인 사용자 공용 페이지 컴포넌트
function CommonPage() {
  return (
    <div>
      <S.Theme>지금 인기 있는 브리더</S.Theme>
      <PopularBreeder />

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

// 브리더 전용 페이지 컴포넌트
function BreederPage() {
  return (
    <div>
      <S.Theme>이번 주 브리더 랭킹 </S.Theme>
      <PopularBreeder />

      <S.Theme>
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

export default Main;
