/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import * as AL from './AnimalList.style';
import { cities, animalBreeds } from '../selectData';
import Pagination from '../../components/Pagination/Pagination';
import DogCard from '../../components/DogCard/DogCard';

function AnimalList() {
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  // const [selectedGender, setSelectedGender] = useState('');
  // const [selectedBreed, setSelectedBreed] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  // const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setBreeds(animalBreeds[selectedAnimal] || []);
  }, [selectedAnimal, setSelectedAnimal]);

  const handleAnimalChange = (event) => {
    const animal = event.target.value;
    setSelectedAnimal(animal);
    setBreeds(animalBreeds[animal] || []);
  };

  // DogCard API호출

  // const handleGenderChange = (event) => {
  //   setSelectedGender(event.target.value);
  // };

  // const handleBreedChange = (event) => {
  //   setSelectedBreed(event.target.value);
  // };

  // 선택된 조건에 따른 DogCard데이터 필터링
  // const filteredDogCards = 전체DogCard.filter((dog) => {
  //   return (
  //     (selectedAnimal === 'entire' || dog.breed === selectedBreed) &&
  //     (selectedGender === '' || dog.gender === selectedGender)
  //   );
  // });

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
            <div key={index} className="item">
              {city}
            </div>
          ))}
        </AL.Right>
      </AL.RegionContainer>

      <AL.AnimalContainer>
        <AL.SelectContainer>
          <AL.AnimalSelector>
            <div className="select-container">
              <select
                onChange={handleAnimalChange}
                className="select-box animals"
              >
                <option value="entire">전체</option>
                <option value="dog">강아지</option>
                <option value="cat">고양이</option>
              </select>
            </div>
            <div className="select-container">
              <select
                // onChange={handleGenderChange}
                className="select-box gender"
                // value={selectedGender}
              >
                <option value="">성별 선택</option>
                <option value="male">남아</option>
                <option value="female">여아</option>
              </select>
            </div>
            <div className="select-container">
              <select
                // onChange={handleBreedChange}
                className="select-box breeds"
                // value={selectedBreed}
              >
                <option value="">종 선택</option>
                {breeds.map((breed, index) => (
                  <option key={index} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>
            <AL.ReservationBtn>예약 중 제외</AL.ReservationBtn>
          </AL.AnimalSelector>
          <select className="select-box sort">
            <option value="latest">최신순</option>
            <option value="distance">거리순</option>
          </select>
        </AL.SelectContainer>

        <AL.ContentContainer>
          <div className="dogCard">
            {/* {filteredDogCards.map((dog, index) => (
              <DogCard
                key={index}
                photo={dog.photo}
                location={dog.location}
                name={dog.name}
                breed={dog.breed}
                birthDate={dog.birthDate}
                gender={dog.gender}
                breederName={dog.breederName}
                waitlistCount={dog.waitlistCount}
                isBookmarked={isBookmarked}
                setIsBookmarked={setIsBookmarked}
              />
            ))} */}
          </div>
          <div>
            {/* <Pagination
              totalItems={filteredDogCards.length}
              itemsPerPage={6}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            /> */}
          </div>
        </AL.ContentContainer>
      </AL.AnimalContainer>
    </AL.Border>
  );
}

export default AnimalList;
