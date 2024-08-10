import PropTypes from 'prop-types';
import * as S from './ReservationDogCard.style';
import { Heart, Gender, Foot, People } from '../../../public/img/CardInfoIcon';

function ReservationDogCard({
  id,
  photo,
  location,
  name,
  breed,
  birthDate,
  gender,
  breederName,
  waitlistCount,
}) {
  return (
    <S.CardBox key={id}>
      {waitlistCount > 0 && <S.ReservationBadge>예약중</S.ReservationBadge>}
      <S.PhotoContainer>
        <img src={photo} alt={name} className="photo" />
      </S.PhotoContainer>

      <S.InfoContainer>
        <div>
          <p className="location">{location}</p>
          <span className="name">{name}</span>
          <span className="breed">{breed}</span>
        </div>
        <S.SubInfo>
          <div className="info">
            <div>
              <Heart />
              <span>출생 </span>
              <strong>{birthDate}</strong>
            </div>
            <div>
              <Gender />
              <span>성별 </span>
              <strong>{gender}</strong>
            </div>
          </div>
          <div className="info">
            <div>
              <Foot />
              <span>브리더 </span>
              <strong>{breederName}</strong>
            </div>
            {waitlistCount > 0 && (
              <div>
                <People />
                <span>대기예약 </span>
                <strong>{waitlistCount}명</strong>
              </div>
            )}
          </div>
        </S.SubInfo>
      </S.InfoContainer>
    </S.CardBox>
  );
}

ReservationDogCard.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  breederName: PropTypes.string.isRequired,
  waitlistCount: PropTypes.number,
};

ReservationDogCard.defaultProps = {
  waitlistCount: 0,
};
export default ReservationDogCard;
