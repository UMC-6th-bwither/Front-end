import PropTypes from 'prop-types';
import * as S from './ReservationDogCard.style';
import BadgeVariant from '../badge/BadgeVariant';
import loc from '/img/location.svg';
import profile from '/img/profile.png';

function ReservationDogCard({ id, photo, location, breederName, phone }) {
  return (
    <S.CardBox to={`/breeder-detail/${id}`} key={id}>
      <S.PhotoContainer>
        <img src={photo || profile} alt="animal_photo" className="photo" />
      </S.PhotoContainer>

      <S.InfoContainer>
        <div className="location">
          <img src={loc} alt="location" />
          <div>{location}</div>
        </div>
        <div className="breederName">😊 {breederName}</div>
        <div className="phone">☎ {phone}</div>
        <div className="badges">
          <BadgeVariant content="강아지 전문" />
          <BadgeVariant content="본인인증" />
          <BadgeVariant content="사업자등록증" />
          <BadgeVariant content="혜택" />
        </div>
      </S.InfoContainer>
    </S.CardBox>
  );
}

ReservationDogCard.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  breederName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ReservationDogCard;
