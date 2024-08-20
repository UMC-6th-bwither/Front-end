/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import * as A from './Animal.style';
import * as P from '../MyReview.style';
import bookmark from '/img/bookmark.svg';
import footprint from '/img/footprint.svg';
import { animalBreeds, 전체DogCard } from '../../selectData';
import DogCard from '../../../components/DogCard/DogCard';
import DropBox from '../../../components/DropBoxes/DropBox';
import Pagination from '../../../components/Pagination/Pagination';
import VerticalMenuSelector from '../../../components/VerticalMenuSelector/VerticalMenuSelector';

const menuItems1 = [
  { name: '저장한 글', href: '/myreview/save' },
  { name: '나의 후기', href: '/myreview/review' },
];

const menuItems2 = [
  { name: '저장한 동물', href: '/myreview/animal' },
  { name: '저장한 브리더', href: '/myreview/breeder' },
];

function Animal() {
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [isReserved, setIsReserved] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setBreeds(animalBreeds[selectedAnimal] || []);
  }, [selectedAnimal, setSelectedAnimal]);

  const handleAnimalChange = (event) => {
    setSelectedAnimal(event);
    setBreeds(animalBreeds[event] || []);
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
  const bookmaredPet = 전체DogCard.filter((pet) => {
    return (
      (selectedGender === '' || pet.gender === selectedGender) &&
      (selectedBreed === '' || pet.breed === selectedBreed) &&
      (!isReserved || pet.waitlistCount === 0)
    );
  });

  return (
    <A.Border>
      <A.SideHeader>
        <VerticalMenuSelector
          activeItemName=""
          items={menuItems1}
          title="커뮤니티"
        />
        <VerticalMenuSelector
          activeItemName="저장한 동물"
          items={menuItems2}
          title="스크랩"
        />
      </A.SideHeader>
      <A.MainContainer>
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
              <A.ReservationBtn onClick={toggleReservation}>
                {isReserved ? '예약 중 포함' : '예약 중 제외'}
              </A.ReservationBtn>
            </A.Left>
          </A.SelectContainer>
          <A.CardsContainer>
            <div className="dogCard">
              {bookmaredPet.map(
                (
                  pet,
                  index, // 필터링된 카드 나열
                ) => (
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
                    setIsBookmarked={() => {}}
                  />
                ),
              )}
            </div>
            <Pagination
              totalItems={bookmaredPet.length}
              itemsPerPage={20}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </A.CardsContainer>
        </A.BottomContainer>
      </A.MainContainer>
    </A.Border>
  );
}

export default Animal;
