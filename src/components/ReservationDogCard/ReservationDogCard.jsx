import PropTypes from 'prop-types';
import * as S from './ReservationDogCard.style';
import BadgeVariant from '../badge/BadgeVariant';
import loc from '../../../public/img/location.svg';

function ReservationDogCard({
  to,
  id,
  photo,
  location,
  name,
  breederName,
  phone,
}) {
  return (
    <S.CardBox to={to} key={id}>
      <S.PhotoContainer>
        <img src={photo} alt={name} className="photo" />
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
  to: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  breederName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ReservationDogCard;
