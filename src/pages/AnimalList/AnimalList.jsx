/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as AL from './AnimalList.style';
import { cities, animalBreeds, 전체DogCard } from '../selectData';
import Pagination from '../../components/Pagination/Pagination';
import DogCard from '../../components/DogCard/DogCard';
import DropBox from '../../components/DropBoxes/DropBox';
import ButtonSelector from '../../components/buttonselector/ButtonSelector';

function AnimalList() {
  const [activeCities, setActiveCities] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isReserved, setIsReserved] = useState(false);

  useEffect(() => {
    setBreeds(animalBreeds[selectedAnimal] || []);
  }, [selectedAnimal, setSelectedAnimal]);

  const handleAnimalChange = (value) => {
    setSelectedAnimal(value);
  };

  const handleCityChange = (city) => {
    setActiveCities(
      (prevCities) =>
        prevCities.includes(city)
          ? prevCities.filter((c) => c !== city) // 배열에서 도시를 제거하여 비활성화
          : [...prevCities, city], // 배열에 도시를 추가하여 활성화
    );

    setSelectedCities((prevCities) => {
      if (prevCities.includes(city)) {
        return prevCities.filter((c) => c !== city); // 이미 선택된 지역 -> 제거
      }
      return [...prevCities, city]; // 새 지역 추가
    });
    setCurrentPage(1);
  };

  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };

  const handleBreedChange = (value) => {
    setSelectedBreed(value);
  };

  const toggleReservation = () => {
    setIsReserved(!isReserved);
  };

  // 선택된 조건에 따른 DogCard데이터 필터링
  const filteredDogCards = 전체DogCard.filter((dog) => {
    return (
      (selectedGender === '' || dog.gender === selectedGender) &&
      (selectedBreed === '' || dog.breed === selectedBreed) &&
      (selectedCities.length === 0 || selectedCities.includes(dog.location)) &&
      (!isReserved || dog.waitlistCount === 0)
    );
  });

  return (
    <AL.Border>
      <AL.RegionContainer>
        <AL.Left>
          <div className="title">전국에서 당신을 기다려요</div>
          <div className="detail">
            브위더에서
            <br />
            소중한 가족이 되어주세요
          </div>
        </AL.Left>
        <AL.Right>
          {cities.map((city, index) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              key={index}
              role="button"
              tabIndex={0}
              className={`item ${activeCities.includes(city) ? 'active' : ''}`}
              onClick={() => handleCityChange(city)}
              onKeyDown={() => {}}
            >
              {city}
            </div>
          ))}
        </AL.Right>
      </AL.RegionContainer>

      <AL.AnimalContainer>
        <AL.SelectContainer>
          <AL.AnimalSelector>
            <DropBox
              id="animal-dropbox"
              label="전체"
              options={[
                { value: 'entire', label: '전체' },
                { value: 'dog', label: '강아지' },
                { value: 'cat', label: '고양이' },
              ]}
              onChange={handleAnimalChange}
            />
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
            <ButtonSelector border onClick={toggleReservation}>
              예약 중 제외
            </ButtonSelector>
          </AL.AnimalSelector>
          <DropBox
            id="sort-dropbox"
            label="최신순"
            options={[
              { value: 'latest', label: '최신순' },
              { value: 'popular', label: '인기순' },
              { value: 'distance', label: '거리순' },
            ]}
          />
        </AL.SelectContainer>

        <AL.CardsContainer>
          <div className="dogCard">
            {filteredDogCards.map((dog, index) => (
              <DogCard
                key={index}
                to="/waitinganimal-detail"
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
              />
            ))}
          </div>
          <Pagination
            totalItems={filteredDogCards.length}
            itemsPerPage={20}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </AL.CardsContainer>
      </AL.AnimalContainer>
    </AL.Border>
  );
}

export default AnimalList;
