import PropTypes from 'prop-types';
import * as S from './BreederCard.style';
import { Foot, People, Star } from '../../../public/img/CardInfoIcon';
import {
  BookmarkActive,
  BookmarkInactive,
} from '../../../public/img/BookmarkIcon';
import BadgeVariant from '../badge/BadgeVariant';

function BreederCard({
  to,
  photo,
  location,
  name,
  breederExperience,
  numberOfCertifications,
  waitingDogs,
  waitlistCount,
  rating,
  reviewCount,
  isBookmarked,
  setIsBookmarked,
}) {
  const bookmarking = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <S.CardBox to={to}>
      <S.PhotoContainer>
        <img src={photo} alt={name} className="photo" />
      </S.PhotoContainer>

      <S.InfoContainer>
        <p className="location">{location}</p>
        <span className="name">{name}</span>

        <S.CareerBadge>
          {breederExperience > 0 && (
            <BadgeVariant content={`${breederExperience}년 경력`} />
          )}
          {numberOfCertifications > 0 && (
            <BadgeVariant content={`자격증 ${numberOfCertifications}개`} />
          )}
        </S.CareerBadge>

        <S.SubInfo>
          <p className="info">
            <Foot />
            <span>입양 대기 강아지 </span>
            <strong>{waitingDogs}마리</strong>
          </p>
          {waitlistCount > 0 && (
            <p className="info">
              <People />
              <span>대기 예약 </span>
              <strong>{waitlistCount}명</strong>
            </p>
          )}
          <p className="info">
            <Star />
            <strong>{rating}</strong>
            <span style={{ color: '#737373' }}>리뷰 {reviewCount}개</span>
          </p>
        </S.SubInfo>
      </S.InfoContainer>

      <S.BookmarkBtn onClick={bookmarking}>
        {isBookmarked ? <BookmarkActive /> : <BookmarkInactive />}
      </S.BookmarkBtn>
    </S.CardBox>
  );
}

BreederCard.propTypes = {
  to: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  breederExperience: PropTypes.number,
  numberOfCertifications: PropTypes.number,
  waitingDogs: PropTypes.number,
  waitlistCount: PropTypes.number,
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
  isBookmarked: PropTypes.bool.isRequired,
  setIsBookmarked: PropTypes.func.isRequired,
};

BreederCard.defaultProps = {
  waitlistCount: 0,
  breederExperience: 0,
  numberOfCertifications: 0,
  waitingDogs: 0,
  rating: 0,
  reviewCount: 0,
};

export default BreederCard;
