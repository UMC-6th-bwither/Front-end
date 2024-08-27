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
import teleimg from '/img/telescope.png';
import ButtonSelector from '../../components/buttonselector/ButtonSelector';
import useAuth from '../../hooks/useAuth';
import api from '../../api/api';

function Main() {
  const { isLoggedIn, role } = useAuth();

  return (
    <S.MainContainer>
      <S.Layout>
        {!isLoggedIn || role === 'MEMBER' ? <CommonPage /> : <BreederPage />}
      </S.Layout>
    </S.MainContainer>
  );
}

function CommonPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalBreeders, setTotalBreeders] = useState();

  useEffect(() => {
    const fetchPopularBreeders = async () => {
      try {
        const response = await api.get('/main/popular', {
          params: { animalType: 'DOG' },
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        });
        if (response.data.isSuccess) {
          setTotalBreeders(response.data.result[0].totalBreeders);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchPopularBreeders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
            현재 <span>{totalBreeders}명</span>의 브리더와 함께하고 있어요!
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalAnimals, setTotalAnimals] = useState();

  useEffect(() => {
    const fetchTotalAnimals = async () => {
      try {
        const response = await api.get('/main/title', {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        });
        if (response.data.isSuccess) {
          setTotalAnimals(response.data.result);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchTotalAnimals();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
            지금 <span>{totalAnimals}마리</span>의 아이들이 가족을 기다려요!
          </S.HeadLiner>
        </Carousel>
      </S.HeadLineContainer>

      <NewsBanner />

      <S.Theme>
        👑이번 주 브리더 랭킹 <ExploreAll href="/breeder-list" />
      </S.Theme>
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
    infinite: true,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
    prevArrow: (
      <S.Button disabled={currentPage === 0}>
        <LeftArrow />
      </S.Button>
    ),
    nextArrow: (
      <S.Button disabled={currentPage === 3}>
        <RightArrow />
      </S.Button>
    ),
  };

  return (
    <S.BannerContainer>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        autoplay={settings.autoplay}
        speed={settings.speed}
        autoplayspeed={settings.autoplaySpeed}
        slidesToShow={settings.slidesToShow}
        beforeChange={settings.beforeChange}
        prevArrow={settings.prevArrow}
        nextArrow={settings.nextArrow}
      >
        <S.NewsContent
          src="/img/bannerimg.png"
          alt="배너 뉴스"
          className="bannernews"
          onClick={() => {
            navigate('/adoptionsystem');
          }}
        />
        <S.NewsContent
          src="/img/bannerimg2.png"
          alt="배너 뉴스"
          className="bannernews"
          onClick={() => {
            navigate('/adoptionsystem');
          }}
        />
        <S.NewsContent
          src="/img/bannerimg3.png"
          alt="배너 뉴스"
          className="bannernews"
          onClick={() => {
            navigate('/adoptionsystem');
          }}
        />
        <S.NewsContent
          src="/img/bannerimg4.png"
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
  const [selectedAnimal, setSelectedAnimal] = useState('DOG');
  const [breeders, setBreeders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalBreeders, setTotalBreeders] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularBreeders = async () => {
      try {
        const response = await api.get('/main/popular', {
          params: { animalType: selectedAnimal },
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        });
        if (response.data.isSuccess) {
          setBreeders(response.data.result[0].breederProfiles);
          setTotalBreeders(response.data.result[0].totalBreeders);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchPopularBreeders();
  }, [selectedAnimal]);

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedAnimal]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // 강아지, 고양이 필터
  const handleSelect = (animal) => {
    setSelectedAnimal(animal);
  };

  // 버튼 이동 슬라이드
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
          key={`DOG-${selectedAnimal === 'DOG'}`}
          active={selectedAnimal === 'DOG'}
          onClick={() => handleSelect('DOG')}
        >
          강아지
        </ButtonSelector>
        <ButtonSelector
          key={`CAT-${selectedAnimal === 'CAT'}`}
          active={selectedAnimal === 'CAT'}
          onClick={() => handleSelect('CAT')}
        >
          고양이
        </ButtonSelector>
      </S.AnimalChoiceContainer>

      <S.BreederList>
        <Slider
          key={selectedAnimal}
          dots={settings.dots}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          beforeChange={settings.beforeChange}
          prevArrow={settings.prevArrow}
          nextArrow={settings.nextArrow}
        >
          <S.MeetingBreederCard onClick={() => navigate('/breeder-list')}>
            <S.Img src={teleimg} alt="telescope" />
            <S.MeetingBreederText>
              <p>
                <span>{totalBreeders}명</span>의
              </p>
              브리더 만나보기 <SmallRightArrow />
            </S.MeetingBreederText>
          </S.MeetingBreederCard>

          {breeders.slice(0, 10).map((breeder) => (
            <S.BreederCard
              key={breeder.breederId}
              onClick={() => navigate(`/breeder-detail/${breeder.breederId}`)}
            >
              <S.BreederProfile
                src={breeder.profileUrl || '/img/defaultprofile.png'}
                alt="profileImg"
              />
              <S.BreederName>{breeder.tradeName}</S.BreederName>
              <S.ReviewStars>
                ⭐ {(breeder.breederRating ?? 0).toFixed(1)}
              </S.ReviewStars>
              <S.BreederInfo>경력 {breeder.careerYear}년</S.BreederInfo>
            </S.BreederCard>
          ))}
        </Slider>
      </S.BreederList>
    </S.PBContainer>
  );
}

function BreederRankingBreederVer() {
  const [selectedAnimal, setSelectedAnimal] = useState('DOG');
  const [breeders, setBreeders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularBreeders = async () => {
      try {
        const response = await api.get('/main/popular', {
          params: { animalType: selectedAnimal },
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        });
        if (response.data.isSuccess) {
          setBreeders(response.data.result[0].breederProfiles);

          console.log('브리더 랭킹 데이터 요청 성공');
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchPopularBreeders();
  }, [selectedAnimal]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleSelect = (animal) => {
    setSelectedAnimal(animal);
  };

  return (
    <S.PBContainerVer2>
      <S.AnimalChoiceContainer>
        <ButtonSelector
          key={`DOG-${selectedAnimal === 'DOG'}`}
          active={selectedAnimal === 'DOG'}
          onClick={() => handleSelect('DOG')}
        >
          강아지
        </ButtonSelector>
        <ButtonSelector
          key={`CAT-${selectedAnimal === 'CAT'}`}
          active={selectedAnimal === 'CAT'}
          onClick={() => handleSelect('CAT')}
        >
          고양이
        </ButtonSelector>
      </S.AnimalChoiceContainer>

      <S.BreederListVer2>
        {breeders.slice(0, 5).map((breeder, index) => (
          <S.BreederCardVer2
            key={breeder.breederId}
            onClick={() => navigate(`/breeder-detail/${breeder.breederId}`)}
          >
            <S.RankingNum>{index + 1}</S.RankingNum>
            <S.BreederProfileVer2
              src={breeder.profileUrl || '/img/defaultprofile.png'}
              alt="profileImg"
            />
            <S.BreederDetails>
              <S.BreederNameStars>
                <S.BreederNameVer2>{breeder.tradeName}</S.BreederNameVer2>
                <S.ReviewStarsVer2>
                  ⭐ {(breeder.breederRating ?? 0).toFixed(1)}
                </S.ReviewStarsVer2>
              </S.BreederNameStars>
              <S.BreederInfoVer2>경력 {breeder.careerYear}년</S.BreederInfoVer2>
            </S.BreederDetails>
          </S.BreederCardVer2>
        ))}
      </S.BreederListVer2>
    </S.PBContainerVer2>
  );
}

function InfoArticle() {
  const [currentPage, setCurrentPage] = useState(0);
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // 데이터 받아오기
  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await api.get('/main/tips', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.data.isSuccess) {
          setArticleData(response.data.result);
        } else {
          setError(response.data.message);
        }
        console.log('브리더 랭킹 데이터 요청 성공');
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    getInfo();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
        {articleData.slice(0, 10).map((data) => (
          <S.InfoCard
            key={data.postId}
            onClick={() => navigate(`/WritingDetail/${data.postId}`)}
          >
            <S.CardContainer>
              <S.InfoCardImg
                src={data.postImageUrl || '/img/mainTipDefault.png'}
                alt="InfoCard"
              />
              {/* <S.InfoCardImg
                src={
                  data.postImageUrl.startsWith('http')
                    ? data.postImageUrl
                    : `${process.env.PUBLIC_URL}/${data.postImageUrl}` ||
                      '/img/mainTipDefault.png'
                }
                alt="InfoCard"
              /> */}

              <S.InfoTitle>{data.title}</S.InfoTitle>
            </S.CardContainer>
            <S.ProFileContainer>
              <S.ProfileImg
                src={
                  data.breederImageUrl === null ||
                  data.breederImageUrl === 'default_image_url'
                    ? '/img/defaultprofile.png'
                    : data.breederImageUrl
                }
                alt="InfoCard"
              />
              <S.ProFileName>{data.profileName}</S.ProFileName>
            </S.ProFileContainer>
          </S.InfoCard>
        ))}
      </Slider>
    </S.IAContainer>
  );
}

function AdoptionReview() {
  const [currentPage, setCurrentPage] = useState(0);
  const [previewReviewData, setPreviewReviewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // 리뷰 미리보기 데이터 받아오기
  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await api.get('/main/reviews', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.data.isSuccess) {
          setPreviewReviewData(response.data.result);
        } else {
          setError(response.data.message);
        }
        console.log('분양 후기 미리보기 데이터 요청 성공');
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    getInfo();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
        {previewReviewData.slice(0, 10).map((review) => (
          <S.ReviewCard
            key={review.postId}
            onClick={() => navigate(`/WritingDetail/${review.postId}`)}
          >
            <S.ReviewCardImg
              src={review.postImageUrl || '/img/mainReviewDefault.png'}
              alt="InfoCard"
            />
            <S.ReviewDetail>{review.title}</S.ReviewDetail>
          </S.ReviewCard>
        ))}
      </Slider>
    </S.ARContainer>
  );
}

export default Main;
