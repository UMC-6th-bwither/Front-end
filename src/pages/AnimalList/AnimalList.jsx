/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as AL from './AnimalList.style';
import { cities, animalBreeds } from '../selectData';
import Pagination from '../../components/Pagination/Pagination';
import DogCard from '../../components/DogCard/DogCard';
import DropBox from '../../components/DropBoxes/DropBox';
import nothingBowl from '../../../public/img/nothing_bowl.svg';
import ButtonSelector from '../../components/buttonselector/ButtonSelector';
import api from '../../api/api';

function AnimalList() {
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const [activeCities, setActiveCities] = useState([]);
  const [selectedSort, setSelectedSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isReserved, setIsReserved] = useState('');
  const [isBookmarked, setIsBookmarked] = useState([]);
  const [dogCards, setDogCards] = useState([]); // api 호출 데이터 저장

  // api 호출
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await api.get('/animals', {
          params: {
            page: currentPage - 1,
            regions: selectedCities.join(','),
            animalType: selectedAnimal,
            gender: selectedGender,
            breed: selectedBreed,
            status: isReserved,
            sort: selectedSort,
          },
        });
        const data = response.data.result.animalList;

        // 북마크 초기 상태 설정
        const initialBookmarks = {};
        data.forEach((dog) => {
          initialBookmarks[dog.animalId] = dog.status;
        });

        setDogCards(data);
        setIsBookmarked(initialBookmarks);
      } catch (error) {
        console.error('Error fetching animals', error);
      }
    };

    fetchAnimals();
  }, [
    currentPage,
    selectedCities,
    selectedAnimal,
    selectedGender,
    selectedBreed,
    isReserved,
    selectedSort,
  ]);

  // 북마크 저장, 취소
  const handleBookmarkChange = async (animalId, newStatus) => {
    try {
      const token = localStorage.getItem('accessToken');

      if (newStatus === 'BOOKING') {
        // 북마크 추가
        const response = await api.post(`/animals/${animalId}/bookmark`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          params: {
            animalId,
          },
        });

        if (response.data && response.data.code === 'SUCCESS_BOOKMARK_ANIMAL') {
          setIsBookmarked((prev) => ({
            ...prev,
            [animalId]: newStatus,
          }));
        } else {
          console.error('Bookmarking failed', response.data.message);
        }
      } else if (newStatus === 'BEFORE') {
        // 북마크 제거
        const response = await api.delete(`/animals/${animalId}/bookmark`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          params: {
            animalId,
          },
        });

        if (
          response.data &&
          response.data.code === 'SUCCESS_REMOVE_BOOKMARK_ANIMAL'
        ) {
          setIsBookmarked((prev) => ({
            ...prev,
            [animalId]: newStatus,
          }));
        } else {
          console.error('Unbookmarking failed', response.data.message);
        }
      }
    } catch (error) {
      console.error('Error handling bookmark:', error);
    }
  };

  // 강아지, 고양이 선택
  const handleAnimalChange = (value) => {
    setSelectedAnimal(value);
  };

  // 강아지, 고양이에 따른 종 변화
  useEffect(() => {
    setBreeds(animalBreeds[selectedAnimal] || []);
  }, [selectedAnimal, setSelectedAnimal]);

  // 지역 선택
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

  // 성별 선택
  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };
  // 동물 종 선택
  const handleBreedChange = (value) => {
    setSelectedBreed(value);
  };
  // 예약 중 버튼
  const toggleReservation = () => {
    setIsReserved((prevStatus) => (prevStatus === 'BEFORE' ? '' : 'BEFORE'));
  };
  // 정렬 선택
  const handleSortChange = (value) => {
    setSelectedSort(value);
  };
  // 선택된 조건에 따른 DogCard데이터 필터링
  // const filteredDogCards = dogCards.filter((dog) => {
  //   return (
  //     (selectedCities.length === 0 ||
  //       selectedCities.some((city) => dog.location.includes(city))) &&
  //     (!isReserved || dog.waitList === 0)
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
          </AL.AnimalSelector>
          <DropBox
            id="sort-dropbox"
            label="최신순"
            options={[
              { value: 'createdAt', label: '최신순' },
              { value: 'animalMemberCount', label: '인기순' },
            ]}
            onChange={handleSortChange}
          />
        </AL.SelectContainer>

        <AL.CardsContainer className={dogCards.length === 0 ? 'empty' : ''}>
          {dogCards.length > 0 ? (
            <>
              <div className="dogCard">
                {dogCards.map((dog, index) => (
                  <DogCard
                    key={dog.aniamlId}
                    id={dog.animalId}
                    to="/waitinganimal-detail"
                    photo={dog.imageUrl}
                    location={dog.location}
                    name={dog.name}
                    breed={dog.breed}
                    birthDate={dog.birthDate}
                    gender={dog.gender}
                    breederName={dog.breederName}
                    initialIsBookmarked={isBookmarked[dog.aniamlId] || 'BEFORE'}
                    onBookmarkChange={(newStatus) =>
                      handleBookmarkChange(dog.animalId, newStatus)
                    }
                  />
                ))}
              </div>
              <Pagination
                totalItems={dogCards.length}
                itemsPerPage={20}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          ) : (
            <AL.NothingContainer>
              <img src={nothingBowl} alt="no animals" />
              <div className="nothing_text">아직 동물들이 없어요..</div>
            </AL.NothingContainer>
          )}
        </AL.CardsContainer>
      </AL.AnimalContainer>
    </AL.Border>
  );
}

export default AnimalList;
