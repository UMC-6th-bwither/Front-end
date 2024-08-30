/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import * as BL from './BreederList.style';
import { cities, animalBreeds } from '../selectData';
import Pagination from '../../components/Pagination/Pagination';
import BreederCard from '../../components/BreederCard/BreederCard';
import DropBox from '../../components/DropBoxes/DropBox';
import nothingBowl from '/img/nothing_bowl.svg';
import api from '../../api/api';

function BreederList() {
  const [totalPage, setTotalPage] = useState(0);
  const [activeCities, setActiveCities] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedSort, setSelectedSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState([]);
  const [breederCards, setBreederCards] = useState([]); // api 호출 데이터 저장
  const [totalElements, setTotalElements] = useState();
  const [listSize, setListSize] = useState();

  // api 호출
  useEffect(() => {
    const fetchBreeder = async () => {
      try {
        const response = await api.get('/breeder', {
          params: {
            page: currentPage - 1,
            regions: selectedCities.join(','),
            animalType: selectedAnimal,
            species: selectedBreed,
            sort: selectedSort,
          },
        });
        const data = response.data.result;
        setBreederCards(data.breederList);
        setTotalPage(data.totalPage);
        setTotalElements(data.totalElements);
        setListSize(data.listSize);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching breeders', error);
      }
    };

    fetchBreeder();
  }, [
    currentPage,
    selectedCities,
    selectedAnimal,
    selectedBreed,
    selectedSort,
  ]);

  // 북마크 저장, 취소
  const handleBookmarkChange = async (breederId, newStatus) => {
    try {
      const token = localStorage.getItem('accessToken');
      // const breederId = 1;

      if (newStatus === 'BOOKING') {
        // 북마크 추가
        const response = await api.post(
          `/breeder/${breederId}/bookmark`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            params: {
              breederId,
            },
          },
        );

        if (response.data && response.data.code === 'SUCCESS_BOOKMARK_ANIMAL') {
          setIsBookmarked((prev) => ({
            ...prev,
            [breederId]: newStatus,
          }));
        } else {
          // eslint-disable-next-line no-console
          console.error('Bookmarking failed', response.data.message);
        }
      } else if (newStatus === 'BEFORE') {
        // 북마크 제거
        const response = await api.delete(`/breeder/${breederId}/bookmark`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          params: {
            breederId,
          },
        });

        if (
          response.data &&
          response.data.code === 'SUCCESS_REMOVE_BOOKMARK_ANIMAL'
        ) {
          setIsBookmarked((prev) => ({
            ...prev,
            [breederId]: newStatus,
          }));
        } else {
          // eslint-disable-next-line no-console
          console.error('Unbookmarking failed', response.data.message);
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error handling bookmark:', error);
    }
  };
  // 강아지, 고양이 선택
  const handleAnimalChange = (event) => {
    setSelectedAnimal(event);
    setBreeds(animalBreeds[event] || []);
  };
  // 강아지, 고양이에 따른 종 변화
  useEffect(() => {
    setBreeds(animalBreeds[selectedAnimal] || []);
  }, [selectedAnimal, setSelectedAnimal]);
  // 종 선택
  const handleBreedChange = (value) => {
    setSelectedBreed(value);
  };
  // 정렬 선택
  const handleSortChange = (value) => {
    setSelectedSort(value);
  };
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

  // 페이지네이션 데이터 분할
  // const paginatedReviews = breederCards.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage,
  // );

  return (
    <BL.Border>
      <BL.RegionContainer>
        <BL.Left>
          <div className="title">전국 브리더</div>
          <div className="detail">
            믿을 수 있는 브리더를
            <br />
            브위더 단 한 곳에서 찾으세요
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
                { value: '', label: '전체' },
                { value: 'DOG', label: '강아지' },
                { value: 'CAT', label: '고양이' },
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
              { value: 'createdAt', label: '최신순' },
              { value: 'breederMemberCount', label: '인기순' },
              { value: 'animalCount', label: '개체순' },
            ]}
            onChange={handleSortChange}
          />
        </BL.SelectContainer>

        <BL.CardsContainer className={breederCards.length === 0 ? 'empty' : ''}>
          {breederCards.length > 0 ? (
            <div className="breederCard">
              {breederCards.map((breeder) => (
                <BreederCard
                  key={breeder.breederId}
                  id={breeder.breederId}
                  to="/breeder-detail"
                  photo={breeder.profileUrl}
                  location={breeder.address}
                  name={breeder.breederName}
                  breederExperience={breeder.careerYear}
                  numberOfCertifications={breeder.certificateCount}
                  waitingDogs={breeder.waitAnimal}
                  waitlistCount={breeder.waitlist}
                  rating={breeder.breederRating}
                  reviewCount={breeder.reviewCount}
                  initialIsBookmarked={
                    isBookmarked[breeder.breederId] || 'BEFORE'
                  }
                  onBookmarkChange={(newStatus) =>
                    handleBookmarkChange(breeder.breederId, newStatus)
                  }
                />
              ))}
            </div>
          ) : (
            <BL.NothingContainer>
              <img src={nothingBowl} alt="no animals" />
              <div className="nothing_text">아직 브리더가 없어요..</div>
            </BL.NothingContainer>
          )}
          <Pagination
            totalItems={totalElements}
            itemsPerPage={listSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </BL.CardsContainer>
      </BL.AnimalContainer>
    </BL.Border>
  );
}

export default BreederList;
