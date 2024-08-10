import PropTypes from 'prop-types';
import * as S from './DogCard.style';
import { Heart, Gender, Foot, People } from '../../../public/img/CardInfoIcon';
import {
  BookmarkActive,
  BookmarkInactive,
} from '../../../public/img/BookmarkIcon';

function DogCard({
  photo,
  location,
  name,
  breed,
  birthDate,
  gender,
  breederName,
  waitlistCount,
  isBookmarked,
  setIsBookmarked,
}) {
  const bookmarking = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <S.CardBox>
      {waitlistCount > 0 && <S.ReservationBadge>예약중</S.ReservationBadge>}
      <S.PhotoContainer>
        <img src={photo} alt={name} className="photo" />
      </S.PhotoContainer>

      <S.InfoContainer>
        <p className="location">{location}</p>
        <span className="name">{name}</span>{' '}
        <span className="breed">{breed}</span>
        <S.SubInfo>
          <p className="info">
            <Heart />
            <span>출생 </span>
            <strong>{birthDate}</strong>
          </p>
          <p className="info">
            <Gender />
            <span>성별 </span>
            <strong>{gender}</strong>
          </p>
          <p className="info">
            <Foot />
            <span>브리더 </span>
            <strong>{breederName}</strong>
          </p>
          {waitlistCount > 0 && (
            <p className="info">
              <People />
              <span>대기예약 </span>
              <strong>{waitlistCount}명</strong>
            </p>
          )}
        </S.SubInfo>
      </S.InfoContainer>

      <S.BookmarkBtn onClick={bookmarking}>
        {isBookmarked ? <BookmarkActive /> : <BookmarkInactive />}
      </S.BookmarkBtn>
    </S.CardBox>
  );
}

DogCard.propTypes = {
  photo: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  breederName: PropTypes.string.isRequired,
  waitlistCount: PropTypes.number,
  isBookmarked: PropTypes.bool.isRequired,
  setIsBookmarked: PropTypes.func.isRequired,
};

DogCard.defaultProps = {
  waitlistCount: 0,
};
export default DogCard;
