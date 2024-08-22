/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import * as MP from './MypageGeneral.style';
import { LeftArrow, RightArrow } from '../../../public/img/ArrowIcon';
import profile from '/img/profile.png';
import footprintLine from '/img/footprintLine.svg';
import ReservationDogCard from '../../components/ReservationDogCard/ReservationDogCard';
import RecentDogCard from '../../components/RecentDogCard/RecentDogCard';
import RecentBreederCard from '../../components/RecentBreederCard/RecentBreederCard';
import SmallButton from '../../components/smallbutton/SmallButton';
import DeleteAccountModal from '../../components/DeleteAccountModal/DeleteAccountModal';
import { openDeleteAccountModal, selectModal } from '../../redux/modalSlice';
import { logout } from '../../redux/authSlice';
import api from '../../api/api';
// import useAuth from '../../hooks/useAuth';

function MypageGeneral() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { isLoggedIn, token } = useAuth();
  const { isDeleteAccountModalOpen } = useSelector(selectModal);
  const [userData, setUserData] = useState(null);
  const [recentAnimals, setRecentAnimals] = useState([]);
  const [recentBreeders, setRecentBreeders] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  const handleLogout = useCallback(async () => {
    await dispatch(logout());
    navigate('/');
  }, [dispatch, navigate]);

  // api 호출
  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        const [
          userResponse,
          inquiriesResponse,
          animalsResponse,
          breedersResponse,
        ] = await Promise.all([
          api.get('/user', {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }),
          api.get('/inquiries/breeders', {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }),
          api.get('/user/recent-animals', {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }),
          api.get(`/user/1/view-breeders`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }),
        ]);

        const UserDtoData = userResponse.data.result.userDTO;
        // eslint-disable-next-line no-console
        console.log(UserDtoData);
        setUserData(UserDtoData);
        setInquiries(inquiriesResponse.data.result);
        setRecentAnimals(animalsResponse.data.result);
        setRecentBreeders(breedersResponse.data.result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching recentData', error);
      }
    };

    fetchRecentData();
  }, []);

  // Slider
  const [currentPageDog, setCurrentPageDog] = useState(0);
  const [currentPageBreeder, setCurrentPageBreeder] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [hasDogItems, setHasDogItems] = useState(recentAnimals.length > 0);
  // eslint-disable-next-line no-unused-vars
  const [hasBreederItems, setHasBreederItems] = useState(
    recentBreeders.length > 0,
  );

  useEffect(() => {
    setHasDogItems(recentAnimals.length > 0);
  }, [recentAnimals]);

  useEffect(() => {
    setHasBreederItems(recentBreeders.length > 0);
  }, [recentBreeders]);

  const handleBeforeChangeDog = (current, next) => {
    if (current < next) {
      setCurrentPageDog(currentPageDog + 1);
    } else {
      setCurrentPageDog(currentPageDog - 1);
    }
  };
  const handleBeforeChangeBreeder = (current, next) => {
    if (current < next) {
      setCurrentPageBreeder(currentPageBreeder + 1);
    } else {
      setCurrentPageBreeder(currentPageBreeder - 1);
    }
  };

  const settingsDog = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    beforeChange: handleBeforeChangeDog,
    prevArrow:
      hasDogItems > 0 ? (
        <MP.SliderBtn disabled={currentPageDog === 0}>
          <LeftArrow />
        </MP.SliderBtn>
      ) : null,
    nextArrow:
      hasDogItems > 0 ? (
        <MP.SliderBtn disabled={currentPageBreeder === 2}>
          <RightArrow />
        </MP.SliderBtn>
      ) : null,
  };

  const settingsBreeder = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    beforeChange: handleBeforeChangeBreeder,
    prevArrow:
      hasBreederItems > 0 ? (
        <MP.SliderBtn disabled={currentPageBreeder === 0}>
          <LeftArrow />
        </MP.SliderBtn>
      ) : null,
    nextArrow:
      hasBreederItems > 0 ? (
        <MP.SliderBtn disabled={currentPageBreeder === 2}>
          <RightArrow />
        </MP.SliderBtn>
      ) : null,
  };

  return (
    <MP.Border>
      <MP.TopContainer>
        <MP.ProfileContainer>
          <MP.Title>마이페이지</MP.Title>
          <MP.Profile>
            <MP.Left>
              {userData && (
                <div className="profile_img_wrapper">
                  <img
                    src={
                      userData.profileImage ? userData.profileImage : profile
                    }
                    alt="profile"
                    className="profile_img"
                  />
                </div>
              )}
              <MP.Info>
                {userData && (
                  <>
                    <div className="name">{userData.name}</div>
                    <div className="email">{userData.email}</div>
                  </>
                )}
              </MP.Info>
            </MP.Left>
            <div>
              <SmallButton onClick={() => navigate(`/ProfileSettingGeneral`)}>
                프로필 설정
              </SmallButton>
            </div>
          </MP.Profile>
        </MP.ProfileContainer>

        <MP.ReservationContainer>
          <div className="resTitle">문의 요청한 브리더</div>
          <MP.Reservation>
            <MP.CardsContainer>
              {inquiries.map((breeder) => (
                <MP.ResContent key={breeder.id}>
                  <div className="content">
                    <ReservationDogCard
                      to="/breeder-detail"
                      key={breeder.id}
                      id={breeder.id}
                      photo={breeder.photo}
                      location={breeder.location}
                      name={breeder.name}
                      breederName={breeder.breederName}
                      phone={breeder.phone}
                    />
                  </div>
                </MP.ResContent>
              ))}
            </MP.CardsContainer>
          </MP.Reservation>
        </MP.ReservationContainer>
      </MP.TopContainer>

      <MP.RecentContainer>
        <MP.Recent>
          <div>최근 본 동물</div>
          <MP.SliderContainer>
            <Slider
              dots={settingsDog.dots}
              infinite={settingsDog.infinite}
              speed={settingsDog.speed}
              slidesToShow={settingsDog.slidesToShow}
              slidesToScroll={settingsDog.slidesToScroll}
              beforeChange={settingsDog.beforeChange}
              prevArrow={settingsDog.prevArrow}
              nextArrow={settingsDog.nextArrow}
            >
              {recentAnimals.slice(0, 30).map((animal) => (
                <RecentDogCard
                  key={animal.animalId}
                  photo={animal.imageUrl}
                  name={animal.name}
                  gender={animal.gender}
                  breed={animal.breed}
                  breederName={animal.breederName}
                  waitlistCount={animal.waitList}
                />
              ))}
            </Slider>
          </MP.SliderContainer>
        </MP.Recent>
        <MP.Recent>
          <div>최근 본 브리더</div>
          <MP.SliderContainer>
            <Slider
              dots={settingsBreeder.dots}
              infinite={settingsBreeder.infinite}
              speed={settingsBreeder.speed}
              slidesToShow={settingsBreeder.slidesToShow}
              slidesToScroll={settingsBreeder.slidesToScroll}
              beforeChange={settingsBreeder.beforeChange}
              prevArrow={settingsBreeder.prevArrow}
              nextArrow={settingsBreeder.nextArrow}
            >
              {recentBreeders.slice(0, 30).map((breeder) => (
                <RecentBreederCard
                  key={breeder.breederId}
                  photo={breeder.profileUrl}
                  name={breeder.breederName}
                  location={breeder.address}
                  breederExperience={breeder.careerYear}
                />
              ))}
            </Slider>
          </MP.SliderContainer>
        </MP.Recent>
      </MP.RecentContainer>

      <MP.FootpintLine src={footprintLine} alt="footprintLine" />

      <MP.BottomContainer>
        <MP.SectionContainer>
          <div className="title">커뮤니티</div>
          <MP.SectionLinks>
            <MP.NavLink to="/myreview/save">저장한 글</MP.NavLink>
            <MP.NavLink to="/myreview/review">나의 후기</MP.NavLink>
          </MP.SectionLinks>
        </MP.SectionContainer>
        <MP.SectionContainer>
          <div className="title">스크랩</div>
          <MP.SectionLinks>
            <MP.NavLink to="/myreview/animal">저장한 동물</MP.NavLink>
            <MP.NavLink to="/myreview/breeder">저장한 브리더</MP.NavLink>
          </MP.SectionLinks>
        </MP.SectionContainer>
        <MP.SectionContainer>
          <div className="title">계정</div>
          <MP.SectionLinks>
            <MP.NavLink type="button" onClick={handleLogout}>
              로그아웃
            </MP.NavLink>
            <MP.NavLink
              type="button"
              onClick={() => dispatch(openDeleteAccountModal())}
            >
              회원탈퇴
            </MP.NavLink>
            <DeleteAccountModal
              isOpen={isDeleteAccountModalOpen}
              userType="general"
            />
          </MP.SectionLinks>
        </MP.SectionContainer>
      </MP.BottomContainer>
    </MP.Border>
  );
}

export default MypageGeneral;
