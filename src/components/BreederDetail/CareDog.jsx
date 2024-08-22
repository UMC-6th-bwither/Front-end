import React from 'react';
import PropTypes from 'prop-types';
import * as A from '../../pages/BreederDetail/BreederDetail.style';

const CareDog = React.forwardRef((props, ref) => {
  const { breedingAnimals } = props;

  //  const defaultImageSrc = '/img/kennelex.png';
  //  const defaultAltText = '강아지 켄넬 사진';

  return (
    <div ref={ref} style={{ marginBottom: '64px' }}>
      <A.InfoItem>
        <A.InfoTitle>관리 중인 강아지</A.InfoTitle>
        <A.CareImgBox>
          {breedingAnimals.map((animal) => (
            <A.CareImg key={animal.animalId}>
              <img src={animal.animalImage} alt="animalImage" />
              <A.KennelImgText>{`${animal.name || '강아지'} (${animal.age}살, ${animal.gender === 'MALE' ? '남아' : '여아'})`}</A.KennelImgText>
            </A.CareImg>
          ))}
        </A.CareImgBox>
      </A.InfoItem>
    </div>
  );
});

CareDog.displayName = 'CareDog';

CareDog.propTypes = {
  breedingAnimals: PropTypes.arrayOf(
    PropTypes.shape({
      animalId: PropTypes.number.isRequired,
      animalImage: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.string.isRequired,
      name: PropTypes.string,
    }),
  ),
};

CareDog.defaultProps = {
  breedingAnimals: [],
};

export default CareDog;
