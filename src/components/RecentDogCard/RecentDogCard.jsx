import PropTypes from 'prop-types';
import female from '../../../public/img/female.svg';
import * as R from './RecentDogCard.style';

function RecentDogCard({ id, photo, name, gender, breed, breederName }) {
  return (
    <div>
      <R.Border key={id}>
        <R.ImgContainer>
          <img src={photo} alt={name} />
        </R.ImgContainer>
        <R.Explain>
          <R.Main>
            <div className="left">
              <div>{name}</div>
              <img src={gender === '암컷' ? female : ''} alt={gender} />
            </div>
            <div className="right">{breed}</div>
          </R.Main>
          <R.Sub>{breederName}</R.Sub>
        </R.Explain>
      </R.Border>
    </div>
  );
}

RecentDogCard.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  breederName: PropTypes.string.isRequired,
};

export default RecentDogCard;
