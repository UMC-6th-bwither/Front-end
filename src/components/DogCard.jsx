import * as S from './DogCard.style.jsx';
import { Heart, Gender, Foot, People } from '../assets/CardInfoIcon';
import { BookmarkActive, BookmarkInactive } from '../assets/BookmarkIcon';

const DogCard = ({
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
}) => {
  const bookmarking = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <S.CardBox>
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
            출생 <strong>{birthDate}</strong>
          </p>
          <p className="info">
            <Gender />
            성별 <strong>{gender}</strong>
          </p>
          <p className="info">
            <Foot />
            브리더 <strong>{breederName}</strong>
          </p>
          {waitlistCount > 0 && (
            <p className="info">
              <People />
              대기예약 <strong>{waitlistCount}명</strong>
            </p>
          )}
        </S.SubInfo>
      </S.InfoContainer>

      <S.BookmarkBtn onClick={bookmarking}>
        {isBookmarked ? <BookmarkActive /> : <BookmarkInactive />}
      </S.BookmarkBtn>
    </S.CardBox>
  );
};

export default DogCard;
