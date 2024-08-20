import Carousel from 'react-multi-carousel';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as MP from './MypageGeneral.style';
import profile from '../../../public/img/profile.png';
import footprintLine from '../../../public/img/footprintLine.svg';
import ReservationDogCard from '../../components/ReservationDogCard/ReservationDogCard';
import RecentDogCard from '../../components/RecentDogCard/RecentDogCard';
import RecentBreederCard from '../../components/RecentBreederCard/RecentBreederCard';
import SmallButton from '../../components/smallbutton/SmallButton';
import DeleteAccountModal from '../../components/DeleteAccountModal/DeleteAccountModal';
import { openDeleteAccountModal, selectModal } from '../../redux/modalSlice';
import api from '../../api/api';
// 예시 데이터
// import { waitingDogData } from './waitingData';

function LeftArrow({ onClick }) {
  return <MP.Arrow className="left" onClick={onClick} />;
}
LeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function RightArrow({ onClick }) {
  return <MP.Arrow className="right" onClick={onClick} />;
}
RightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function MypageGeneral() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isDeleteAccountModalOpen } = useSelector(selectModal);
  const [userData, setUserData] = useState(null);
  const [recentAnimals, setRecentAnimals] = useState([]);
  const [recentBreeders, setRecentBreeders] = useState([]);
  const [inquiries, setInquiries] = useState([]);

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
            'Content-Type': 'application/json',
          }),
        ]);

        const UserDtoData = userResponse.data.result.userDTO;

        setUserData(UserDtoData);
        setInquiries(inquiriesResponse.data.result);
        setRecentAnimals(animalsResponse.data.result);
        setRecentBreeders(breedersResponse.data.result);
      } catch (error) {
        console.error('Error fetching recentData', error);
      }
    };

    fetchRecentData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <MP.Border>
      <MP.TopContainer>
        <MP.ProfileContainer>
          <MP.Title>마이페이지</MP.Title>
          <MP.Profile>
            <MP.Left>
              {userData && (
                <img
                  src={userData.profileImage ? userData.profileImage : profile}
                  alt="profile"
                  className="profile_img"
                />
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
            <Carousel
              responsive={responsive}
              className="carousel"
              customLeftArrow={<LeftArrow />}
              customRightArrow={<RightArrow />}
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
            </Carousel>
          </MP.SliderContainer>
        </MP.Recent>
        <MP.Recent>
          <div>최근 본 브리더</div>
          <MP.SliderContainer>
            <Carousel
              responsive={responsive}
              className="carousel"
              customLeftArrow={<LeftArrow />}
              customRightArrow={<RightArrow />}
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
            </Carousel>
          </MP.SliderContainer>
        </MP.Recent>
      </MP.RecentContainer>

      <MP.FootpintLine src={footprintLine} alt="footprintLine" />

      <MP.BottomContainer>
        <MP.SectionContainer>
          <div className="title">커뮤니티</div>
          <MP.SectionLinks>
            <MP.NavLink to="/myreview/post">내가 쓴 글</MP.NavLink>
            <MP.NavLink to="/myreview/comment">댓글 단 글</MP.NavLink>
            <MP.NavLink to="/myreview/review">나의 후기</MP.NavLink>
          </MP.SectionLinks>
        </MP.SectionContainer>
        <MP.SectionContainer>
          <div className="title">스크랩</div>
          <MP.SectionLinks>
            <MP.NavLink to="/myreview/animal">저장한 동물</MP.NavLink>
            <MP.NavLink to="/myreview/breeder">저장한 브리더</MP.NavLink>
            <MP.NavLink to="/myreview/save">저장한 글</MP.NavLink>
          </MP.SectionLinks>
        </MP.SectionContainer>
        <MP.SectionContainer>
          <div className="title">계정</div>
          <MP.SectionLinks>
            <MP.NavLink>로그아웃</MP.NavLink>
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
