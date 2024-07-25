import { useState, useEffect } from 'react';
import * as S from './Main.style';
import Header from '../../components/header/Header';
import { LeftArrow, RightArrow } from '../../../public/img/ArrowIcon';
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

        {/* <NewsBanner user={user.role} /> */}
        <NewsBanner />
        {user && user.role === 'breeder' ? <BreederPage /> : <CommonPage />}
      </S.Layout>
    </>
  );
}

function NewsBanner() {
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

function CommonPage() {
  return (
    <div>
      <h1>지금 인기 있는 브리더 </h1>
      <S.BreederInfoContainer>
        <PopularBreeder />
      </S.BreederInfoContainer>
      <p>브위더 회원 및 비로그인 사용자에게 보여지는 메인페이지</p>
    </div>
  );
}

function BreederPage() {
  return (
    <div>
      <S.BreederInfoContainer>
        <PopularBreeder />
      </S.BreederInfoContainer>
      <p>브리더 회원에게 보여지는 메인페이지</p>
    </div>
  );
}

export default Main;
