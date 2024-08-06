import Carousel from 'react-multi-carousel';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as MP from './MypageGeneral.style';
import profile from '../../../public/img/profile.png';
import footprint from '../../../public/img/mypage_footprint.svg';
import ReservationDogCard from '../../components/ReservationDogCard/ReservationDogCard';
import RecentDogCard from '../../components/RecentDogCard/RecentDogCard';
import RecentBreederCard from '../../components/RecentBreederCard/RecentBreederCard';
import DeleteAccountModal from '../../components/DeleteAccountModal/DeleteAccountModal';
import {
  openDeleteAccountModal,
  closeDeleteAccountModal,
  selectModal,
} from '../../redux/modalSlice';
// 예시 데이터
import { recentDogData, recentBreederData } from './recentData';
import { waitingDogData } from './waitingData';

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

function LeftArrow2({ onClick }) {
  return <MP.Arrow2 className="left" onClick={onClick} />;
}
LeftArrow2.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function RightArrow2({ onClick }) {
  return <MP.Arrow2 className="right" onClick={onClick} />;
}
RightArrow2.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function MypageGeneral() {
  const dispatch = useDispatch();
  const { isDeleteAccountModalOpen } = useSelector(selectModal);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const responsive2 = {
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
    <MP.Border>
      <MP.TopContainer>
        <MP.ProfileContainer>
          <MP.Title>마이페이지</MP.Title>
          <MP.Profile>
            <MP.Left>
              <img src={profile} alt="profile" className="profile_img" />
              <MP.Info>
                <div>김경숙</div>
                <div>example@eamil.com</div>
              </MP.Info>
            </MP.Left>
            <MP.Right>
              <button type="button" className="edit_profile_btn">
                프로필 설정
              </button>
            </MP.Right>
          </MP.Profile>
        </MP.ProfileContainer>

        <MP.ReservationContainer>
          <div className="resTitle">나의 예약</div>
          <MP.Reservation>
            <MP.ResContent>
              <div className="waitingnum">
                <img src={footprint} alt="footprint" />
                <div>
                  대기 예약 순번{' '}
                  <span className="emphasis">{waitingDogData.length}번째</span>
                  예요!
                </div>
              </div>
              <MP.CardsContainer>
                <Carousel
                  responsive={responsive2}
                  customLeftArrow={<LeftArrow2 />}
                  customRightArrow={<RightArrow2 />}
                >
                  {waitingDogData.map((petdata) => (
                    <ReservationDogCard
                      key={petdata.id}
                      photo={petdata.photo}
                      location={petdata.location}
                      name={petdata.name}
                      breed={petdata.breed}
                      birthDate={petdata.birthDate}
                      gender={petdata.gender}
                      breederName={petdata.breederName}
                      waitlistCount={petdata.waitlistCount}
                    />
                  ))}
                </Carousel>
              </MP.CardsContainer>
            </MP.ResContent>
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
              {recentDogData.map((dogdata) => (
                <RecentDogCard
                  key={dogdata.id}
                  photo={dogdata.photo}
                  name={dogdata.name}
                  gender={dogdata.gender}
                  breed={dogdata.breed}
                  breederName={dogdata.breederName}
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
              customLeftArrow={<LeftArrow />}
              customRightArrow={<RightArrow />}
            >
              {recentBreederData.map((breederdata) => (
                <RecentBreederCard
                  key={breederdata.id}
                  photo={breederdata.photo}
                  name={breederdata.name}
                  location={breederdata.location}
                  breederExperience={breederdata.breederExperience}
                />
              ))}
            </Carousel>
          </MP.SliderContainer>
        </MP.Recent>
      </MP.RecentContainer>

      <MP.BottomContainer>
        <MP.SectionContainer>
          <div className="title">커뮤니티</div>
          <MP.SectionLinks>
            <div>내가 쓴 글</div>
            <div>댓글 단 글</div>
            <div>나의 후기</div>
          </MP.SectionLinks>
        </MP.SectionContainer>
        <MP.SectionContainer>
          <div className="title">스크랩</div>
          <MP.SectionLinks>
            <MP.NavLink to="/myreview/animal">저장한 동물</MP.NavLink>
            <MP.NavLink to="/myreview/breeder">저장한 브리더</MP.NavLink>
            <div>저장한 글</div>
          </MP.SectionLinks>
        </MP.SectionContainer>
        <MP.SectionContainer>
          <div className="title">계정</div>
          <MP.SectionLinks>
            <div>로그아웃</div>
            <div
              type="button"
              onClick={() => dispatch(openDeleteAccountModal())}
            >
              회원탈퇴
            </div>
            <DeleteAccountModal
              isOpen={isDeleteAccountModalOpen}
              onSubmit={() => dispatch(openDeleteAccountModal())}
              onCancel={() => dispatch(closeDeleteAccountModal())}
            />
          </MP.SectionLinks>
        </MP.SectionContainer>
      </MP.BottomContainer>
    </MP.Border>
  );
}

export default MypageGeneral;
