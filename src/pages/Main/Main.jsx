import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';
import * as S from './Main.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
    <S.MainContainer>
      <S.Layout>
        {user && user.role === 'breeder' ? <BreederPage /> : <CommonPage />}
      </S.Layout>
    </S.MainContainer>
  );
}

function CommonPage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <S.HeadLineContainer>
        <Carousel
          responsive={responsive}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={500}
        >
          <S.HeadLiner>
            올바른 반려동물 분양 문화를 선도하는 <span>브위더🐶🐱</span>
          </S.HeadLiner>

          <S.HeadLiner>
            현재 <span>000명</span>의 브리더와 함께하고 있어요!
          </S.HeadLiner>
        </Carousel>
      </S.HeadLineContainer>

      <NewsBanner />

      <S.Theme>지금 인기 있는 브리더</S.Theme>
      <BreederRankingCommonVer />

      <S.Theme>
        브리더가 알려주는 반려동물 꿀정보
        <ExploreAll href="/community/breederinformation" />
      </S.Theme>
      <InfoArticle />

      <S.Theme>
        반려동물 분양 후기 <ExploreAll href="/community/review" />
      </S.Theme>
      <AdoptionReview />
    </div>
  );
}

function BreederPage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <S.HeadLineContainer>
        <Carousel
          responsive={responsive}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={500}
        >
          <S.HeadLiner>
            올바른 반려동물 분양 문화를 선도하는 <span>브위더🐶🐱</span>
          </S.HeadLiner>

          <S.HeadLiner>
            지금 <span>000마리</span>의 아이들이 가족을 기다려요!
          </S.HeadLiner>
        </Carousel>
      </S.HeadLineContainer>

      <NewsBanner />

      <S.Theme>👑이번 주 브리더 랭킹 </S.Theme>
      <BreederRankingBreederVer />

      <S.Theme>
        브리더가 알려주는 반려동물 꿀정보
        <ExploreAll href="/community/breederinformation" />
      </S.Theme>
      <InfoArticle />
    </div>
  );
}

function NewsBanner() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const handleBeforeChange = (current, next) => {
    if (current < next) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
    prevArrow: (
      <S.Button disabled={currentPage === 0}>
        <LeftArrow />
      </S.Button>
    ),
    nextArrow: (
      <S.Button disabled={currentPage === 2}>
        <RightArrow />
      </S.Button>
    ),
  };

  return (
    <S.BannerContainer>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        beforeChange={settings.beforeChange}
        prevArrow={settings.prevArrow}
        nextArrow={settings.nextArrow}
      >
        <S.NewsContent
          src={bannerimg}
          alt="배너 뉴스"
          className="bannernews"
          onClick={() => {
            navigate('/adoptionsystem');
          }}
        />

        <S.NewsContent
          src={bannerimg}
          alt="배너 뉴스"
          className="bannernews"
          onClick={() => {
            navigate('/adoptionsystem');
          }}
        />

        <S.NewsContent
          src={bannerimg}
          alt="배너 뉴스"
          className="bannernews"
          onClick={() => {
            navigate('/adoptionsystem');
          }}
        />
      </Slider>
    </S.BannerContainer>
  );
}

/* eslint-disable react/prop-types */
function ExploreAll({ href }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
    window.scrollTo(0, 0);
  };

  return (
    <S.LinkText onClick={handleClick}>
      전체보기
      <OrangeRightArrow />
    </S.LinkText>
  );
}

function BreederRankingCommonVer() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnimal, setSelectedAnimal] = useState('dog');

  const handleSelect = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleBeforeChange = (current, next) => {
    if (current < next) {
      setCurrentPage(currentPage + 3);
    } else {
      setCurrentPage(currentPage - 3);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 3,
    beforeChange: handleBeforeChange,
    prevArrow: (
      <S.Button disabled={currentPage === 0}>
        <LeftArrow />
      </S.Button>
    ),
    nextArrow: (
      <S.Button disabled={currentPage === 6}>
        <RightArrow />
      </S.Button>
    ),
  };
  return (
    <S.PBContainer>
      <S.AnimalChoiceContainer>
        <ButtonSelector
          active={selectedAnimal === 'dog'}
          onClick={() => handleSelect('dog')}
        >
          강아지
        </ButtonSelector>
        <ButtonSelector
          active={selectedAnimal === 'cat'}
          onClick={() => handleSelect('cat')}
        >
          고양이
        </ButtonSelector>
      </S.AnimalChoiceContainer>

      <S.BreederList>
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          beforeChange={settings.beforeChange}
          prevArrow={settings.prevArrow}
          nextArrow={settings.nextArrow}
        >
          <S.MeetingBreederCard>
            <S.Img src={teleimg} alt="telescope" />
            <S.MeetingBreederText>
              <p>
                <span>127명</span>의
              </p>
              브리더 만나보기 <SmallRightArrow />
            </S.MeetingBreederText>
          </S.MeetingBreederCard>

          {breederData.map((breeder) => (
            <S.BreederCard key={breeder.id}>
              <S.BreederProfile src={breeder.profileImg} alt="profileImg" />
              <S.BreederName>{breeder.name}</S.BreederName>
              <S.ReviewStars>⭐ {breeder.rating}</S.ReviewStars>
              <S.BreederInfo>
                경력 {breeder.experience}년 · 평균 {breeder.responseTime}시간 내
                응답
              </S.BreederInfo>
            </S.BreederCard>
          ))}
        </Slider>
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
        {breederData.slice(0, 5).map((breeder, index) => (
          <S.BreederCardVer2 key={breeder.id}>
            <S.RankingNum>{index + 1}</S.RankingNum>
            <S.BreederProfileVer2 src={breeder.profileImg} alt="profileImg" />
            <S.BreederDetails>
              <S.BreederNameStars>
                <S.BreederNameVer2>{breeder.name}</S.BreederNameVer2>
                <S.ReviewStarsVer2>⭐ {breeder.rating}</S.ReviewStarsVer2>
              </S.BreederNameStars>
              <S.BreederInfoVer2>
                경력 {breeder.experience}년 · 평균 {breeder.responseTime}시간 내
                응답
              </S.BreederInfoVer2>
            </S.BreederDetails>
          </S.BreederCardVer2>
        ))}
      </S.BreederListVer2>
    </S.PBContainerVer2>
  );
}

function InfoArticle() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleBeforeChange = (current, next) => {
    if (current < next) {
      setCurrentPage(currentPage + 3);
    } else {
      setCurrentPage(currentPage - 3);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 3,
    beforeChange: handleBeforeChange,
    prevArrow: (
      <S.Button disabled={currentPage === 0}>
        <LeftArrow />
      </S.Button>
    ),
    nextArrow: (
      <S.Button disabled={currentPage === 6}>
        <RightArrow />
      </S.Button>
    ),
  };

  return (
    <S.IAContainer>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        beforeChange={settings.beforeChange}
        prevArrow={settings.prevArrow}
        nextArrow={settings.nextArrow}
      >
        {infoData.map((info) => (
          <S.InfoCard key={info.id}>
            <S.CardContainer>
              <S.InfoCardImg src={info.imgSrc} alt="InfoCard" />
              <S.InfoTitle>{info.title}</S.InfoTitle>
            </S.CardContainer>
            <S.ProFileContainer>
              <S.ProfileImg />
              <S.ProFileName>{info.profileName}</S.ProFileName>
            </S.ProFileContainer>
          </S.InfoCard>
        ))}
      </Slider>
    </S.IAContainer>
  );
}

function AdoptionReview() {
  const [currentPage, setCurrentPage] = useState(0);
  const handleBeforeChange = (current, next) => {
    if (current < next) {
      setCurrentPage(currentPage + 3);
    } else {
      setCurrentPage(currentPage - 3);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: handleBeforeChange,
    prevArrow: (
      <S.Button disabled={currentPage === 0}>
        <LeftArrow />
      </S.Button>
    ),
    nextArrow: (
      <S.Button disabled={currentPage === 9}>
        <RightArrow />
      </S.Button>
    ),
  };

  return (
    <S.ARContainer>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        beforeChange={settings.beforeChange}
        prevArrow={settings.prevArrow}
        nextArrow={settings.nextArrow}
      >
        {reviewData.map((review) => (
          <S.ReviewCard key={review.id}>
            <S.ReviewCardImg src={review.imgSrc} alt="InfoCard" />
            <S.ReviewDetail>{review.detail}</S.ReviewDetail>
          </S.ReviewCard>
        ))}
      </Slider>
    </S.ARContainer>
  );
}

const breederData = [
  {
    id: 1,
    name: '김기도',
    profileImg: '../../../public/img/breederthumbnail1.png',
    experience: 8,
    responseTime: 2,
    rating: 5.0,
  },
  {
    id: 2,
    name: '김성조',
    profileImg: '../../../public/img/breederthumbnail2.png',
    experience: 25,
    responseTime: 2,
    rating: 5.0,
  },
  {
    id: 3,
    name: '부산몬스터트랜스-권사',
    profileImg: '../../../public/img/breederthumbnail3.png',
    experience: 8,
    responseTime: 6,
    rating: 5.0,
  },
  {
    id: 4,
    name: '해피켄넬',
    profileImg: '../../../public/img/breederthumbnail4.png',
    experience: 8,
    responseTime: 6,
    rating: 5.0,
  },
  {
    id: 5,
    name: '5',
    profileImg: '../../../public/img/breederthumbnail1.png',
    experience: 8,
    responseTime: 6,
    rating: 5.0,
  },
  {
    id: 6,
    name: '6',
    profileImg: '../../../public/img/breederthumbnail2.png',
    experience: 3,
    responseTime: 6,
    rating: 5.0,
  },
  {
    id: 7,
    name: '7',
    profileImg: '../../../public/img/breederthumbnail3.png',
    experience: 8,
    responseTime: 2,
    rating: 5.0,
  },
  {
    id: 8,
    name: '8',
    profileImg: '../../../public/img/breederthumbnail4.png',
    experience: 25,
    responseTime: 2,
    rating: 5.0,
  },
  {
    id: 9,
    name: '9',
    profileImg: '../../../public/img/breederthumbnail1.png',
    experience: 8,
    responseTime: 6,
    rating: 5.0,
  },
  {
    id: 10,
    name: '10',
    profileImg: '../../../public/img/breederthumbnail2.png',
    experience: 3,
    responseTime: 6,
    rating: 5.0,
  },
];

const infoData = [
  {
    id: 1,
    imgSrc: '../../../public/img/mainpagethumbnail1.png',
    title: '강아지를 훈육하려면?',
    profileName: '남서연',
  },
  {
    id: 2,
    imgSrc: '../../../public/img/mainpagethumbnail2.png',
    title: '견주만 휴가를 가나요, 반려견도 어쩌구 저쩌구',
    profileName: '써니',
  },
  {
    id: 3,
    imgSrc: '../../../public/img/mainpagethumbnail3.png',
    title: '고양이는 혼자 있는 것을 좋아할까요 어쩌구 저쩌구',
    profileName: '이원비(Racdfkfekk)',
  },
  {
    id: 4,
    imgSrc: '../../../public/img/mainpagethumbnail4.png',
    title: '견주가 처음인 당신에게',
    profileName: '해피켄넬',
  },
  {
    id: 5,
    imgSrc: '../../../public/img/mainpagethumbnail1.png',
    title: '고양이는 혼자 있는 것을 좋아할까요 어쩌구 저쩌구',
    profileName: '남서연',
  },
  {
    id: 6,
    imgSrc: '../../../public/img/mainpagethumbnail2.png',
    title: '6',
    profileName: '써니',
  },
  {
    id: 7,
    imgSrc: '../../../public/img/mainpagethumbnail3.png',
    title: '7',
    profileName: '이원비(Racdfkfekk)',
  },
  {
    id: 8,
    imgSrc: '../../../public/img/mainpagethumbnail4.png',
    title: '8',
    profileName: '해피켄넬',
  },
  {
    id: 9,
    imgSrc: '../../../public/img/mainpagethumbnail1.png',
    title: '9',
    profileName: '이원비(Racdfkfekk)',
  },
  {
    id: 10,
    imgSrc: '../../../public/img/mainpagethumbnail2.png',
    title: '10',
    profileName: '해피켄넬',
  },
];

const reviewData = [
  {
    id: 1,
    imgSrc: '../../../public/img/mainpagethumbnail5.png',
    detail: '아주 귀엽쥬? 금방 적응해서 이젠 잘 웃네요',
  },
  {
    id: 2,
    imgSrc: '../../../public/img/mainpagethumbnail6.png',
    detail: '최궁민 브리더님께 분양 받았습니다!',
  },
  {
    id: 3,
    imgSrc: '../../../public/img/mainpagethumbnail7.png',
    detail: '이제 3주 된 애기예요~~~ 너무 예쁘죠',
  },
  { id: 4, imgSrc: '../../../public/img/mainpagethumbnail5.png', detail: '4' },
  { id: 5, imgSrc: '../../../public/img/mainpagethumbnail5.png', detail: '5' },
  { id: 6, imgSrc: '../../../public/img/mainpagethumbnail5.png', detail: '6' },
  { id: 7, imgSrc: '../../../public/img/mainpagethumbnail5.png', detail: '7' },
  { id: 8, imgSrc: '../../../public/img/mainpagethumbnail5.png', detail: '8' },
  { id: 9, imgSrc: '../../../public/img/mainpagethumbnail5.png', detail: '9' },
  {
    id: 10,
    imgSrc: '../../../public/img/mainpagethumbnail5.png',
    detail: '10',
  },
];

export default Main;
