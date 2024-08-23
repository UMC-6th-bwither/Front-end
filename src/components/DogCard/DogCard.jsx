import PropTypes from 'prop-types';
import { useState } from 'react';
import * as S from './DogCard.style';
import { Heart, Gender, Foot, People } from '../../../public/img/CardInfoIcon';
import {
  BookmarkActive,
  BookmarkInactive,
} from '../../../public/img/BookmarkIcon';

function DogCard({
  to,
  id,
  photo,
  location,
  name,
  breed,
  birthDate,
  gender,
  breederName,
  // waitlistCount,
  initialIsBookmarked,
  onBookmarkChange,
  showBookmarkBtn,
}) {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);

  const bookmarking = async () => {
    const newStatus = isBookmarked === 'BOOKING' ? 'BEFORE' : 'BOOKING';
    try {
      await onBookmarkChange(newStatus);
      setIsBookmarked(newStatus);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error updating bookmark status:', error);
    }
  };

  return (
    <S.CardBox>
      <S.Click to={`/waitinganimal-detail/${id}`}>
        {/* {waitlistCount > 0 && <S.ReservationBadge>예약중</S.ReservationBadge>} */}
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
            {/* {waitlistCount > 0 && (
              <p className="info">
                <People />
                <span>대기예약 </span>
                <strong>{waitlistCount}명</strong>
              </p>
            )} */}
          </S.SubInfo>
        </S.InfoContainer>
      </S.Click>

      {showBookmarkBtn && (
        <S.BookmarkBtn onClick={bookmarking}>
          {isBookmarked === 'BOOKING' ? (
            <BookmarkActive />
          ) : (
            <BookmarkInactive />
          )}
        </S.BookmarkBtn>
      )}
    </S.CardBox>
  );
}

DogCard.propTypes = {
  to: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  breederName: PropTypes.string.isRequired,
  // waitlistCount: PropTypes.number,
  initialIsBookmarked: PropTypes.string.isRequired,
  onBookmarkChange: PropTypes.func.isRequired,
  showBookmarkBtn: PropTypes.bool,
};

DogCard.defaultProps = {
  // waitlistCount: 0,
  showBookmarkBtn: true,
};
export default DogCard;
