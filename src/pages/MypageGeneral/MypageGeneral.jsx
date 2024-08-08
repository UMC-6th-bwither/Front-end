import Carousel from 'react-multi-carousel';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as MP from './MypageGeneral.style';
import profile from '../../../public/img/profile.png';
import rightArrow from '../../../public/img/rightArrow.svg';
import footprint from '../../../public/img/mypage_footprint.svg';
import footprintLine from '../../../public/img/footprintLine.svg';
import ReservationDogCard from '../../components/ReservationDogCard/ReservationDogCard';
import RecentDogCard from '../../components/RecentDogCard/RecentDogCard';
import RecentBreederCard from '../../components/RecentBreederCard/RecentBreederCard';
import SmallButton from '../../components/smallbutton/SmallButton';
import DeleteAccountModal from '../../components/DeleteAccountModal/DeleteAccountModal';
import { openDeleteAccountModal, selectModal } from '../../redux/modalSlice';
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

function MypageGeneral() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isDeleteAccountModalOpen } = useSelector(selectModal);

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
              <img src={profile} alt="profile" className="profile_img" />
              <MP.Info>
                <div>김경숙</div>
                <div>example@eamil.com</div>
              </MP.Info>
            </MP.Left>
            <div>
              <SmallButton>
                {/* onClick={() => navigate(`/수정페이지`)} -> 수정 페이지 추가되면 */}
                프로필 설정
              </SmallButton>
            </div>
          </MP.Profile>
        </MP.ProfileContainer>

        <MP.ReservationContainer>
          <div className="resTitle">나의 예약</div>
          <MP.Reservation>
            <MP.CardsContainer>
              {waitingDogData.map((petdata) => (
                <MP.ResContent key={petdata.id}>
                  <div className="content">
                    <div className="waitingnum">
                      <img src={footprint} alt="footprint" />
                      <pre>
                        대기 예약 순번
                        <span className="emphasis">
                          &nbsp;{petdata.waitlistCount}번째
                        </span>
                        예요!
                      </pre>
                    </div>
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
                  </div>
                  <button type="button" className="rightArrowButton">
                    {/* onClick={() => navigator(`/`)} */}
                    <img
                      src={rightArrow}
                      alt="rightArrow"
                      className="rightArrow"
                    />
                  </button>
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
              {recentDogData.slice(0, 30).map((dogdata) => (
                <RecentDogCard
                  key={dogdata.id}
                  photo={dogdata.photo}
                  name={dogdata.name}
                  gender={dogdata.gender}
                  breed={dogdata.breed}
                  breederName={dogdata.breederName}
                  waitlistCount={dogdata.waitlistCount}
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
              {recentBreederData.slice(0, 30).map((breederdata) => (
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
