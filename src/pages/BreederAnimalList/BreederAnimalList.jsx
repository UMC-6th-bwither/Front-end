import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as B from './BreederAnimalList.style';
import DogCard from '../../components/DogCard/DogCard';
import DropBox from '../../components/DropBoxes/DropBox';
import nothingBowl from '/img/nothing_bowl.svg';
import Pagination from '../../components/Pagination/Pagination';
import { animalBreeds } from '../selectData';
import api from '../../api/api';

function BreederAnimalList() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [breeds, setBreeds] = useState([
    ...animalBreeds.DOG,
    ...animalBreeds.CAT,
  ]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breederDogCards, setBreederDogCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // api 호출
  useEffect(() => {
    const fetchBreederAnimals = async () => {
      try {
        const response = await api.get('/animals/breeder', {
          params: {
            breederId: 1,
            page: currentPage,
            gender: selectedGender,
            breed: selectedBreed,
          },
        });
        const data = response.data.result.animalList;
        setBreederDogCards(data);
      } catch (error) {
        console.error('Error fetching BreederAnimals', error);
      }
    };

    fetchBreederAnimals();
  }, [currentPage, selectedGender, selectedBreed]);

  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };

  const handleBreedChange = (value) => {
    setSelectedBreed(value);
  };

  // const filteredDogCards = breederDogCards.filter((dog) => {
  //   return (
  //     (selectedGender === '' || dog.gender === selectedGender) &&
  //     (selectedBreed === '' || dog.breed === selectedBreed)
  //   );
  // });

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
                { value: 'MALE', label: '남아' },
                { value: 'FEMALE', label: '여아' },
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
        <B.CardsContainer
          className={breederDogCards.length === 0 ? 'empty' : ''}
        >
          {breederDogCards.length > 0 ? (
            <>
              <div className="dogCard">
                {breederDogCards.map((dog) => (
                  <DogCard
                    to="/waitinganimal-detail"
                    key={dog.animalId}
                    photo={dog.imageUrl}
                    location={dog.location}
                    name={dog.name}
                    breed={dog.breed}
                    birthDate={dog.birthDate}
                    gender={dog.gender}
                    breederName={dog.breederName}
                    waitlistCount={dog.waitList}
                    initialIsBookmarked={dog.status}
                    onBookmarkChange={() => {}}
                    showBookmarkBtn={false}
                  />
                ))}
              </div>
              <Pagination
                totalItems={breederDogCards.length}
                itemsPerPage={20}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          ) : (
            <B.NothingContainer>
              <img src={nothingBowl} alt="no animals" />
              <div className="nothing_text">
                아직 관리중인 아이들이 없어요..
              </div>
            </B.NothingContainer>
          )}
        </B.CardsContainer>
      </B.ContentContainer>
    </B.Border>
  );
}

export default BreederAnimalList;
