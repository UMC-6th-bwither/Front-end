/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import * as A from './Animal.style';
import bookmark from '/img/bookmark.svg';
import footprint from '/img/footprint.svg';
import { animalBreeds } from '../../selectData';
import DogCard from '../../../components/DogCard/DogCard';
import DropBox from '../../../components/DropBoxes/DropBox';
import nothingBowl from '/img/nothing_bowl.svg';
import Pagination from '../../../components/Pagination/Pagination';
import VerticalMenuSelector from '../../../components/VerticalMenuSelector/VerticalMenuSelector';
import ButtonSelector from '../../../components/buttonselector/ButtonSelector';
import api from '../../../api/api';

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
  const [isReserved, setIsReserved] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [boodmarkedAnimal, setBookmaredAnimal] = useState([]);

  // api 호출
  useEffect(() => {
    const fetchAnimalBookmark = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        const response = await api.get('/animals/bookmark', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          params: {
            memberId: 1,
            page: currentPage,
            animalType: selectedAnimal,
            gender: selectedGender,
            breed: selectedBreed,
            status: isReserved,
          },
        });
        const data = response.data.result;
        setBookmaredAnimal(data.animalList);
      } catch (error) {
        console.error('Error fetching bookmaredAnimal', error);
      }
    };

    fetchAnimalBookmark();
  }, [currentPage, selectedAnimal, selectedGender, selectedBreed, isReserved]);

  // 강아지, 고양이 선택
  const handleAnimalChange = (value) => {
    setSelectedAnimal(value);
  };
  // 강아지, 고양이에 따른 종 변화
  useEffect(() => {
    setBreeds(animalBreeds[selectedAnimal] || []);
  }, [selectedAnimal, setSelectedAnimal]);
  // 성별 핸들러
  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };
  // 종 핸들러
  const handleBreedChange = (value) => {
    setSelectedBreed(value);
  };
  // 예약 상태 토글
  const toggleReservation = () => {
    setIsReserved((prevStatus) => (prevStatus === 'BEFORE' ? '' : 'BEFORE'));
  };

  // 선택된 조건에 따른 DogCard데이터 필터링
  // const bookmaredPet = boodmarkedAnimal.filter((pet) => {
  //   return (
  //     pet.status === 'BOOKING' &&
  //     (selectedGender === '' || pet.gender === selectedGender) &&
  //     (selectedBreed === '' || pet.breed === selectedBreed) &&
  //     (!isReserved || pet.waitlistCount === 0)
  //   );
  // });

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
                  { value: '', label: '전체' },
                  { value: 'DOG', label: '강아지' },
                  { value: 'CAT', label: '고양이' },
                ]}
                onChange={handleAnimalChange}
              />
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
              <ButtonSelector border onClick={toggleReservation}>
                예약 중 제외
              </ButtonSelector>
            </A.Left>
          </A.SelectContainer>
          <A.CardsContainer
            className={boodmarkedAnimal.length === 0 ? 'empty' : ''}
          >
            {boodmarkedAnimal.length > 0 ? (
              <>
                <div className="dogCard">
                  {boodmarkedAnimal.map((pet) => (
                    <DogCard
                      key={pet.animalId}
                      photo={pet.imageUrl}
                      location={pet.location}
                      name={pet.name}
                      breed={pet.breed}
                      birthDate={pet.birthDate}
                      gender={pet.gender}
                      breederName={pet.breederName}
                      waitlistCount={0}
                      isBookmarked={pet.status}
                      setIsBookmarked={() => {}}
                    />
                  ))}
                </div>
                <Pagination
                  totalItems={boodmarkedAnimal.length}
                  itemsPerPage={20}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </>
            ) : (
              <A.NothingContainer>
                <img src={nothingBowl} alt="no animals" />
                <div className="nothing_text">
                  아직 동물을 저장하지 않았어요..
                </div>
              </A.NothingContainer>
            )}
          </A.CardsContainer>
        </A.BottomContainer>
      </A.MainContainer>
    </A.Border>
  );
}

export default Animal;
