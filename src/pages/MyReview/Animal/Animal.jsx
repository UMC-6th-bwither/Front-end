/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import * as A from './Animal.style';
import bookmark from '../../../../public/img/bookmark.svg';
import footprint from '../../../../public/img/footprint.svg';
import { animalBreeds } from '../../selectData';
import DogCard from '../../../components/DogCard/DogCard';

function Animal() {
  //  ** DogCard API호출 필요 **

  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  // const bookmarkedPet = 전체DogCard.filter(pet => pet.isBookmarked); 북마크된 동물 필터링

  useEffect(() => {
    setBreeds(animalBreeds[selectedAnimal] || []);
  }, [selectedAnimal, setSelectedAnimal]);

  const handleAnimalChange = (event) => {
    const animal = event.target.value;
    setSelectedAnimal(animal);
    setBreeds(animalBreeds[animal] || []);
  };

  return (
    <A.Border>
      <A.TopContainer>
        <A.IconContainer>
          <img src={bookmark} alt="bookmark svg" className="bookmark" />
          <img src={footprint} alt="footprint svg" className="footprint" />
        </A.IconContainer>
        <A.Text>저장한 동물</A.Text>
      </A.TopContainer>

      <A.BottomContainer>
        <A.SelectContainer>
          <A.Left>
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
            <A.ReservationBtn>예약 중 제외</A.ReservationBtn>
          </A.Left>
        </A.SelectContainer>
        <A.CardsContainer>
          {/* {bookmaredDogs.map((pet, index) => ( //필터링된 카드 나열
            <DogCard
              key={index}
              photo={pet.photo}
              location={pet.location}
              name={pet.name}
              breed={pet.breed}
              birthDate={pet.birthDate}
              gender={pet.gender}
              breederName={pet.breederName}
              waitlistCount={pet.waitlistCount}
              isBookmarked={pet.isBookmarked}
              setIsBookmarked= () => {} 
            />
          ))} */}
          <DogCard />
          <DogCard />
          <DogCard />
          <DogCard />
        </A.CardsContainer>
      </A.BottomContainer>
    </A.Border>
  );
}

export default Animal;
