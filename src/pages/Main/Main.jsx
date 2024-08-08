import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';
import * as S from './Main.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PostPreviewCard from '../../components/PostPreviewCard/PostPreviewCard';
import {
  LeftArrow,
  RightArrow,
  OrangeRightArrow,
  SmallRightArrow,
} from '../../../public/img/ArrowIcon';
import teleimg from '../../../public/img/telescope.png';
import bannerimg from '../../../public/img/bannerimg.png';
import ButtonSelector from '../../components/buttonselector/ButtonSelector';

const postPreviewData = {
  question: [
    {
      communityName: '질문/고민',
      postTitle: '이거 왜이러는 건가요?',
      postContent: '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 건가요?',
      postThumbnailSrc: '',
      viewCount: 159,
      commentCount: 13459,
      bookmarkCount: 1259,
    },
    {
      communityName: '질문/고민',
      postTitle: '이거 왜이러는 건가요?',
      postContent: '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 건가요?',
      postThumbnailSrc: '',
      viewCount: 159,
      commentCount: 13459,
      bookmarkCount: 1259,
    },
    {
      communityName: '질문/고민',
      postTitle: '이거 왜이러는 건가요?',
      postContent: '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 건가요?',
      postThumbnailSrc: '',
      viewCount: 159,
      commentCount: 13459,
      bookmarkCount: 1259,
    },
    {
      communityName: '질문/고민',
      postTitle: '이거 왜이러는 건가요?',
      postContent: '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 건가요?',
      postThumbnailSrc: '',
      viewCount: 159,
      commentCount: 13459,
      bookmarkCount: 1259,
    },
    {
      communityName: '질문/고민',
      postTitle: '이거 왜이러는 건가요?',
      postContent: '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 건가요?',
      postThumbnailSrc: '',
      viewCount: 159,
      commentCount: 13459,
      bookmarkCount: 1259,
    },
    {
      communityName: '질문/고민',
      postTitle: '이거 왜이러는 건가요?',
      postContent: '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 건가요?',
      postThumbnailSrc: '',
      viewCount: 159,
      commentCount: 13459,
      bookmarkCount: 1259,
    },
  ],
};

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
      <S.Button style={{ margin: '-20px' }}>
        <LeftArrow />
      </S.Button>

      <S.NewsContent src={bannerimg} alt="배너 뉴스" className="bannernews" />

      <S.Button style={{ margin: '-20px' }}>
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

          <S.BreederCard>
            <S.BreederProfile />
            <S.BreederName>1</S.BreederName>
            <S.ReviewStars>⭐ 5.0</S.ReviewStars>
            <S.BreederInfo>경력 8년 · 평균 2시간 내 응답</S.BreederInfo>
          </S.BreederCard>

          <S.BreederCard>
            <S.BreederProfile />
            <S.BreederName>2</S.BreederName>
            <S.ReviewStars>⭐ 5.0</S.ReviewStars>
            <S.BreederInfo>경력 25년 · 평균 2시간 내 응답</S.BreederInfo>
          </S.BreederCard>

          <S.BreederCard>
            <S.BreederProfile />
            <S.BreederName>3</S.BreederName>
            <S.ReviewStars>⭐ 5.0</S.ReviewStars>
            <S.BreederInfo>경력 8년 · 평균 6시간 내 응답</S.BreederInfo>
          </S.BreederCard>

          <S.BreederCard>
            <S.BreederProfile />
            <S.BreederName>4</S.BreederName>
            <S.ReviewStars>⭐ 5.0</S.ReviewStars>
            <S.BreederInfo>경력 8년 · 평균 6시간 내 응답</S.BreederInfo>
          </S.BreederCard>

          <S.BreederCard>
            <S.BreederProfile />
            <S.BreederName>5</S.BreederName>
            <S.ReviewStars>⭐ 5.0</S.ReviewStars>
            <S.BreederInfo>경력 8년 · 평균 6시간 내 응답</S.BreederInfo>
          </S.BreederCard>

          <S.BreederCard>
            <S.BreederProfile />
            <S.BreederName>6</S.BreederName>
            <S.ReviewStars>⭐ 5.0</S.ReviewStars>
            <S.BreederInfo>경력 3년 · 평균 6시간 내 응답</S.BreederInfo>
          </S.BreederCard>

          <S.BreederCard>
            <S.BreederProfile />
            <S.BreederName>7</S.BreederName>
            <S.ReviewStars>⭐ 5.0</S.ReviewStars>
            <S.BreederInfo>경력 8년 · 평균 2시간 내 응답</S.BreederInfo>
          </S.BreederCard>

          <S.BreederCard>
            <S.BreederProfile />
            <S.BreederName>8</S.BreederName>
            <S.ReviewStars>⭐ 5.0</S.ReviewStars>
            <S.BreederInfo>경력 25년 · 평균 2시간 내 응답</S.BreederInfo>
          </S.BreederCard>

          <S.BreederCard>
            <S.BreederProfile />
            <S.BreederName>9</S.BreederName>
            <S.ReviewStars>⭐ 5.0</S.ReviewStars>
            <S.BreederInfo>경력 8년 · 평균 6시간 내 응답</S.BreederInfo>
          </S.BreederCard>

          <S.BreederCard>
            <S.BreederProfile />
            <S.BreederName>10</S.BreederName>
            <S.ReviewStars>⭐ 5.0</S.ReviewStars>
            <S.BreederInfo>경력 3년 · 평균 6시간 내 응답</S.BreederInfo>
          </S.BreederCard>
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
  const firstPostsList = postPreviewData.question.slice(0, 3);
  const secondPostsList = postPreviewData.question.slice(3, 6);
  return (
    <S.CPContainer>
      <S.PostFirstList>
        {firstPostsList.map((post, index) => (
          <PostPreviewCard key={index} {...post} />
        ))}
      </S.PostFirstList>
      <S.PostSecondList>
        {secondPostsList.map((post, index) => (
          <PostPreviewCard key={index} {...post} />
        ))}
      </S.PostSecondList>
    </S.CPContainer>
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

        <S.InfoCard>
          <S.InfoCardImg>
            <S.InfoTitle>5</S.InfoTitle>
          </S.InfoCardImg>
          <S.ProFileContainer>
            <S.ProfileImg />
            <S.ProFileName>남서연</S.ProFileName>
          </S.ProFileContainer>
        </S.InfoCard>

        <S.InfoCard>
          <S.InfoCardImg>
            <S.InfoTitle>6</S.InfoTitle>
          </S.InfoCardImg>
          <S.ProFileContainer>
            <S.ProfileImg />
            <S.ProFileName>써니</S.ProFileName>
          </S.ProFileContainer>
        </S.InfoCard>

        <S.InfoCard>
          <S.InfoCardImg>
            <S.InfoTitle>7</S.InfoTitle>
          </S.InfoCardImg>
          <S.ProFileContainer>
            <S.ProfileImg />
            <S.ProFileName>이원비(Racdfkfekk)</S.ProFileName>
          </S.ProFileContainer>
        </S.InfoCard>

        <S.InfoCard>
          <S.InfoCardImg>
            <S.InfoTitle>8</S.InfoTitle>
          </S.InfoCardImg>
          <S.ProFileContainer>
            <S.ProfileImg />
            <S.ProFileName>해피켄넬</S.ProFileName>
          </S.ProFileContainer>
        </S.InfoCard>

        <S.InfoCard>
          <S.InfoCardImg>
            <S.InfoTitle>9</S.InfoTitle>
          </S.InfoCardImg>
          <S.ProFileContainer>
            <S.ProfileImg />
            <S.ProFileName>이원비(Racdfkfekk)</S.ProFileName>
          </S.ProFileContainer>
        </S.InfoCard>

        <S.InfoCard>
          <S.InfoCardImg>
            <S.InfoTitle>10</S.InfoTitle>
          </S.InfoCardImg>
          <S.ProFileContainer>
            <S.ProfileImg />
            <S.ProFileName>해피켄넬</S.ProFileName>
          </S.ProFileContainer>
        </S.InfoCard>
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

        <S.ReviewCard>
          <S.ReviewCardImg />
          <S.ReviewDetail>4</S.ReviewDetail>
        </S.ReviewCard>

        <S.ReviewCard>
          <S.ReviewCardImg />
          <S.ReviewDetail>5</S.ReviewDetail>
        </S.ReviewCard>

        <S.ReviewCard>
          <S.ReviewCardImg />
          <S.ReviewDetail>6</S.ReviewDetail>
        </S.ReviewCard>

        <S.ReviewCard>
          <S.ReviewCardImg />
          <S.ReviewDetail>7</S.ReviewDetail>
        </S.ReviewCard>

        <S.ReviewCard>
          <S.ReviewCardImg />
          <S.ReviewDetail>8</S.ReviewDetail>
        </S.ReviewCard>

        <S.ReviewCard>
          <S.ReviewCardImg />
          <S.ReviewDetail>9</S.ReviewDetail>
        </S.ReviewCard>

        <S.ReviewCard>
          <S.ReviewCardImg />
          <S.ReviewDetail>10</S.ReviewDetail>
        </S.ReviewCard>
      </Slider>
    </S.ARContainer>
  );
}
export default Main;
