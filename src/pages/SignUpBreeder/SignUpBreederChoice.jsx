import { useState } from 'react';
import * as B from './SignUpBreeder.style';
import progressBar50 from '../../../public/icons/signUp/progress-bar-50.svg';
import choiceDog from '../../../public/icons/signUp/choice_dog.png';
import choiceCat from '../../../public/icons/signUp/choice_cat.png';
import search from '../../../public/icons/signUp/search.svg';
import Button from '../../components/SignUpButton/Button';
import tagX from '../../../public/icons/signUp/breedTag_x.svg';
import { animalBreeds } from '../selectData';

export default function SingUpBreederChoice() {
  const [selectedAnimal, setSelectedAnimal] = useState(null); // 강아지,고양이 선택
  const [searchBreed, setSearchBreed] = useState(''); // 검색 상태
  const [selectedBreeds, setSelectedBreeds] = useState([]); // 선택된 종 상태

  // 동물 선택 핸들러
  const handleAnimalSelect = (animal) => {
    setSelectedAnimal(animal);
    setSelectedBreeds([]);
  };

  const onSearchBreed = (e) => {
    setSearchBreed(e.target.value);
  };

  // 선택된 동물에따른 종 필터링
  const filteredBreeds = selectedAnimal
    ? animalBreeds[selectedAnimal].filter((breed) =>
        breed.includes(searchBreed),
      )
    : [];

  const handleBreedSelect = (breed) => {
    if (selectedBreeds.includes(breed)) {
      const updatedBreeds = selectedBreeds.filter((b) => b !== breed);
      setSelectedBreeds(updatedBreeds);
    } else {
      setSelectedBreeds([...selectedBreeds, breed]);
    }
    setSearchBreed(''); // 검색필드 비우기
  };

  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 브위더와 함께 올바른 반려동물 분양문화를 이끌어가요
      </B.WelcomeMsg>
      <B.Container>
        <B.ProgressBar src={progressBar50} />
        <B.Text>어떤 동물을 브리딩 하시나요?</B.Text>
        <B.ContentWrapper>
          <B.ChoiceWrapper>
            <B.Choice
              onClick={() => handleAnimalSelect('dog')}
              className={selectedAnimal === 'dog' ? 'active' : ''}
            >
              <img src={choiceDog} alt="choice_dog_icon" className="img" />
              <div className="text">강아지</div>
            </B.Choice>
            <B.Choice
              onClick={() => handleAnimalSelect('cat')}
              className={selectedAnimal === 'cat' ? 'active' : ''}
            >
              <img src={choiceCat} alt="choice_cat_icon" className="img" />
              <div className="text">고양이</div>
            </B.Choice>
          </B.ChoiceWrapper>
          <B.SearchWrapper>
            <div>
              <B.SearchBar
                type="text"
                placeholder="관리하는 주요한 종에 대해 알려주세요"
                onChange={onSearchBreed}
                value={searchBreed}
              />
              <img src={search} alt="searchIcon" />
            </div>
            {searchBreed && filteredBreeds.length > 0 && (
              <B.DropDown>
                {filteredBreeds.map((breed) => (
                  <B.DropItem
                    key={breed}
                    onClick={() => handleBreedSelect(breed)}
                    onKeyDown={() => handleBreedSelect(breed)}
                    role="button"
                    tabIndex={0}
                  >
                    {breed}
                  </B.DropItem>
                ))}
              </B.DropDown>
            )}
          </B.SearchWrapper>
          <B.TagWrapper>
            {selectedBreeds.map((breed) => (
              <B.BreedTag key={breed} onClick={() => handleBreedSelect(breed)}>
                {breed}
                <img src={tagX} alt="X" />
              </B.BreedTag>
            ))}
          </B.TagWrapper>
        </B.ContentWrapper>
        <B.BtnWrapper2>
          <Button white text="이전" path="SignUpBreeder" />
          <Button text="다음" path="SignUpBreederInfo" />
        </B.BtnWrapper2>
      </B.Container>
    </B.Background>
  );
}
