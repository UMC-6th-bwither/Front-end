import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as B from './BreederAnimalList.style';
import DogCard from '../../components/DogCard/DogCard';
import DropBox from '../../components/DropBoxes/DropBox';
import { animalBreeds, 전체DogCard } from '../selectData';

function BreederAnimalList() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [breeds, setBreeds] = useState([
    ...animalBreeds.dog,
    ...animalBreeds.cat,
  ]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };

  const handleBreedChange = (value) => {
    setSelectedBreed(value);
  };

  const filteredDogCards = 전체DogCard.filter((dog) => {
    return (
      (selectedGender === '' || dog.gender === selectedGender) &&
      (selectedBreed === '' || dog.breed === selectedBreed)
    );
  });

  return (
    <B.Border>
      <B.Title>내가 관리 중인 아이들</B.Title>
      <B.ContentContainer>
        <B.SelectContainer>
          <div className="dropBoxes">
            <DropBox
              id="gender-dropbox"
              label="성별 선택"
              options={[
                { value: '', label: '성별 선택' },
                { value: '수컷', label: '남아' },
                { value: '암컷', label: '여아' },
              ]}
              onChange={handleGenderChange}
            />
            <DropBox
              id="breed-dropbox"
              label="종 선택"
              options={[
                { value: '', label: '종 선택' },
                ...breeds.map((breed) => ({ value: breed, label: breed })),
              ]}
              onChange={handleBreedChange}
            />
          </div>
          <B.Button onClick={() => navigate(`/animal-upload`)}>
            추가하기
          </B.Button>
        </B.SelectContainer>
        <B.CardsContainer>
          {filteredDogCards.map((dog) => (
            <DogCard
              key={dog.id}
              photo={dog.photo}
              location={dog.location}
              name={dog.name}
              breed={dog.breed}
              birthDate={dog.birthDate}
              gender={dog.gender}
              breederName={dog.breederName}
              waitlistCount={dog.waitlistCount}
              isBookmarked={dog.isBookmarked}
              setIsBookmarked={() => {}}
              //   onClick={() => navigate(`/상세 페이지)}
            />
          ))}
        </B.CardsContainer>
      </B.ContentContainer>
    </B.Border>
  );
}

export default BreederAnimalList;
