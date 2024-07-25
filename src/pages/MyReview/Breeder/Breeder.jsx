/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import * as A from './Breeder.style';
import bookmark from '../../../../public/img/bookmark.svg';
import { animalBreeds } from '../../selectData';

function Breeder() {
  //  ** Breeder Card API호출 필요 **

  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  // const bookmarkedBreeder = 전체BreederCard.filter(breeder => breeder.isBookmarked); 북마크된 브리더 필터링

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
        </A.IconContainer>
        <A.Text>저장한 브리더</A.Text>
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
          </A.Left>
        </A.SelectContainer>

        <A.CardsContainer />
      </A.BottomContainer>
    </A.Border>
  );
}

export default Breeder;
