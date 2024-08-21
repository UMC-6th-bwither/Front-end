import PropTypes from 'prop-types';
import * as R from './RecentBreederCard.style';

function RecentBreederCard({ id, photo, location, name, breederExperience }) {
  return (
    <div>
      <R.Border key={id}>
        <R.ImgContainer>
          <img src={photo} alt={name} className="photo" />
        </R.ImgContainer>
        <R.Explain>
          <R.Main>
            <div className="left">
              <div>{name}</div>
            </div>
            <div className="right">{location}</div>
          </R.Main>
          <R.Sub>{breederExperience}</R.Sub>
        </R.Explain>
      </R.Border>
    </div>
  );
}

RecentBreederCard.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  breederExperience: PropTypes.string.isRequired,
};

export default RecentBreederCard;
