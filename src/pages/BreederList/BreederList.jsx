/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import * as BL from './BreederList.style';
import { cities, animalBreeds, 전체BreederCard } from '../selectData';
import Pagination from '../../components/Pagination/Pagination';
import BreederCard from '../../components/BreederCard/BreederCard';
import DropBox from '../../components/DropBoxes/DropBox';

function BreederList() {
  // ** BreederCard API호출 필요 **

  const [activeCities, setActiveCities] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setBreeds(animalBreeds[selectedAnimal] || []);
  }, [selectedAnimal, setSelectedAnimal]);

  const handleAnimalChange = (event) => {
    setSelectedAnimal(event);
    setBreeds(animalBreeds[event] || []);
  };

  const handleBreedChange = (value) => {
    setSelectedBreed(value);
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

  const handleBookmarkToggle = (name) => {
    setIsBookmarked((preBookmarkedCards) => ({
      ...preBookmarkedCards,
      [name]: !preBookmarkedCards[name], // 해당 DogCard 상태 변경
    }));
  };

  // 선택된 조건에 따른 BreederCard데이터 필터링
  const filteredBreederCards = 전체BreederCard.filter((breeder) => {
    return (
      (selectedBreed === '' || breeder.breed === selectedBreed) &&
      (selectedCities.length === 0 || selectedCities.includes(breeder.location))
    );
  });

  return (
    <BL.Border>
      <BL.RegionContainer>
        <BL.Left>
          <div className="title">전국 브리더</div>
          <div className="detail">
            믿을 수 있는 브리더를 브위더 단 한 곳에서 찾으세요
          </div>
        </BL.Left>
        <BL.Right>
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
        </BL.Right>
      </BL.RegionContainer>

      <BL.AnimalContainer>
        <BL.SelectContainer>
          <BL.AnimalSelector>
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
              id="breed-dropbox"
              label="종 선택"
              options={[
                { value: '', label: '종 선택' },
                ...breeds.map((breed) => ({ value: breed, label: breed })),
              ]}
              onChange={handleBreedChange}
            />
          </BL.AnimalSelector>
          <DropBox
            id="sort-dropbox"
            label="최신순"
            options={[
              { value: 'latest', label: '최신순' },
              { value: 'popular', label: '인기순' },
              { value: 'distance', label: '거리순' },
              { value: 'individual', label: '개체순' },
            ]}
          />
        </BL.SelectContainer>

        <BL.CardsContainer>
          <div className="breederCard">
            {filteredBreederCards.map((breeder, index) => (
              <BreederCard
                key={index}
                photo={breeder.photo}
                location={breeder.location}
                name={breeder.name}
                breederExperience={breeder.breederExperience}
                numberOfCertifications={breeder.numberOfCertifications}
                waitingDogs={breeder.waitingDogs}
                waitlistCount={breeder.waitlistCount}
                rating={breeder.rating}
                reviewCount={breeder.reviewCount}
                isBookmarked={!!isBookmarked[breeder.name]}
                setIsBookmarked={() => handleBookmarkToggle(breeder.name)}
              />
            ))}
          </div>
          <div>
            <Pagination
              totalItems={100}
              itemsPerPage={20}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </BL.CardsContainer>
      </BL.AnimalContainer>
    </BL.Border>
  );
}

export default BreederList;
