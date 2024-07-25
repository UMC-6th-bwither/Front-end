import { useState, useEffect } from 'react';
import * as S from './Main.style';
import Header from '../../components/header/Header';
import { LeftArrow, RightArrow } from '../../../public/img/ArrowIcon';
import ButtonSelector from '../../components/buttonselector/ButtonSelector';

// 사용자 데이터를 가져오는 모의 함수
const fetchUserData = () => {
  // 실제로는 API 호출로 사용자 데이터를 가져옵니다.
  // 여기는 예시를 위해 null을 반환하여 로그아웃 상태를 모방합니다.
  return {
    name: 'John',
    role: 'bwither', // null인 경우 로그아웃 상태
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

      <S.NewsContent>
        <h3>뉴스 이미지</h3>
      </S.NewsContent>

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
        <S.Button>
          <LeftArrow />
        </S.Button>
        <S.MeetingBreederCard>브리더 만나보기</S.MeetingBreederCard>
        <S.BreederCard>카드 내용</S.BreederCard>
        <S.BreederCard>카드 내용</S.BreederCard>
        <S.BreederCard>카드 내용</S.BreederCard>
        <S.BreederCard>카드 내용</S.BreederCard>
        <S.Button>
          <RightArrow />
        </S.Button>
      </S.BreederList>
    </S.PBContainer>
  );
}

// function CommunityPreview({ posts }) {
//   return (
//     <div>
//       <h2>Community</h2>
//       <div>
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             onClick={() => (window.location.href = `/community/${post.id}`)}
//           >
//             <h3>{post.title}</h3>
//             <p>{post.snippet}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// 브위더 및 비로그인 사용자 공용 페이지 컴포넌트
function CommonPage() {
  return (
    <div>
      <S.BreederInfoContainer>
        <PopularBreeder />
      </S.BreederInfoContainer>
      <h2>공통 메인 페이지</h2>
      <p>브위더 회원 및 비로그인 사용자에게 보여지는 메인페이지</p>
    </div>
  );
}

// 브리더 전용 페이지 컴포넌트
function BreederPage() {
  return (
    <div>
      <h2>브리더 메인페이지</h2>
      <p>브리더 회원에게 보여지는 메인페이지</p>
    </div>
  );
}

export default Main;
