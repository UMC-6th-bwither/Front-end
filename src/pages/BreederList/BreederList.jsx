/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import * as BL from './BreederList.style';
import { cities, animalBreeds } from '../selectData';
import Pagination from '../../components/Pagination/Pagination';
import BreederCard from '../../components/BreederCard/BreederCard';
import DropBox from '../../components/dropBox/DropBox';

function BreederList() {
  // ** BreederCard API호출 필요 **
  //  예시 데이터 15개
  const 전체BreederCard = [
    {
      photo: '',
      location: '서울',
      name: '김철수',
      breederExperience: '5년',
      numberOfCertifications: 3,
      waitingDogs: 5,
      waitlistCount: 2,
      rating: 4.5,
      reviewCount: 10,
    },
    {
      photo: '',
      location: '부산',
      name: '이영희',
      breederExperience: '10년',
      numberOfCertifications: 5,
      waitingDogs: 8,
      waitlistCount: 4,
      rating: 4.8,
      reviewCount: 20,
    },
    {
      photo: '',
      location: '대구',
      name: '박민수',
      breederExperience: '3년',
      numberOfCertifications: 2,
      waitingDogs: 3,
      waitlistCount: 1,
      rating: 4.2,
      reviewCount: 5,
    },
    {
      photo: '',
      location: '인천',
      name: '최지영',
      breederExperience: '7년',
      numberOfCertifications: 4,
      waitingDogs: 6,
      waitlistCount: 3,
      rating: 4.6,
      reviewCount: 15,
    },
    {
      photo: '',
      location: '광주',
      name: '김은정',
      breederExperience: '6년',
      numberOfCertifications: 3,
      waitingDogs: 7,
      waitlistCount: 2,
      rating: 4.7,
      reviewCount: 12,
    },
    {
      photo: '',
      location: '대전',
      name: '이승현',
      breederExperience: '4년',
      numberOfCertifications: 2,
      waitingDogs: 4,
      waitlistCount: 1,
      rating: 4.4,
      reviewCount: 8,
    },
    {
      photo: '',
      location: '울산',
      name: '한지민',
      breederExperience: '8년',
      numberOfCertifications: 5,
      waitingDogs: 9,
      waitlistCount: 5,
      rating: 4.9,
      reviewCount: 25,
    },
    {
      photo: '',
      location: '경기',
      name: '박서준',
      breederExperience: '2년',
      numberOfCertifications: 1,
      waitingDogs: 2,
      waitlistCount: 1,
      rating: 4.1,
      reviewCount: 3,
    },
    {
      photo: '',
      location: '강원',
      name: '최예진',
      breederExperience: '9년',
      numberOfCertifications: 4,
      waitingDogs: 7,
      waitlistCount: 3,
      rating: 4.7,
      reviewCount: 18,
    },
    {
      photo: '',
      location: '충북',
      name: '김지훈',
      breederExperience: '1년',
      numberOfCertifications: 1,
      waitingDogs: 1,
      waitlistCount: 0,
      rating: 3.9,
      reviewCount: 2,
    },
    {
      photo: '',
      location: '충남',
      name: '이수정',
      breederExperience: '11년',
      numberOfCertifications: 6,
      waitingDogs: 10,
      waitlistCount: 6,
      rating: 4.8,
      reviewCount: 30,
    },
    {
      photo: '',
      location: '경북',
      name: '김태영',
      breederExperience: '3년',
      numberOfCertifications: 2,
      waitingDogs: 3,
      waitlistCount: 1,
      rating: 4.3,
      reviewCount: 6,
    },
    {
      photo: '',
      location: '전북',
      name: '박진우',
      breederExperience: '5년',
      numberOfCertifications: 3,
      waitingDogs: 5,
      waitlistCount: 2,
      rating: 4.5,
      reviewCount: 10,
    },
    {
      photo: '',
      location: '전남',
      name: '서지수',
      breederExperience: '4년',
      numberOfCertifications: 2,
      waitingDogs: 4,
      waitlistCount: 1,
      rating: 4.4,
      reviewCount: 8,
    },
    {
      photo: '',
      location: '제주',
      name: '최현우',
      breederExperience: '2년',
      numberOfCertifications: 1,
      waitingDogs: 2,
      waitlistCount: 1,
      rating: 4.1,
      reviewCount: 3,
    },
  ];

  const [activeCity, setActiveCity] = useState(null);
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

  const handleCityClick = (city) => {
    setActiveCity(city); // 클릭된 도시를 활성화 상태로 설정
    handleCityChange(city); // 기존 onClick 핸들러 호출
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
              className="item"
              isActive={activeCity === city}
              onClick={() => handleCityClick(city)}
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
