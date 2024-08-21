/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import * as A from './Breeder.style';
import bookmark from '/img/bookmark.svg';
import { animalBreeds } from '../../selectData';
import BreederCard from '../../../components/BreederCard/BreederCard';
import DropBox from '../../../components/DropBoxes/DropBox';
import nothingBowl from '../../../../public/img/nothing_bowl.svg';
import Pagination from '../../../components/Pagination/Pagination';
import VerticalMenuSelector from '../../../components/VerticalMenuSelector/VerticalMenuSelector';
import api from '../../../api/api';

const menuItems1 = [
  { name: '저장한 글', href: '/myreview/save' },
  { name: '나의 후기', href: '/myreview/review' },
];

const menuItems2 = [
  { name: '저장한 동물', href: '/myreview/animal' },
  { name: '저장한 브리더', href: '/myreview/breeder' },
];

function Breeder() {
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmaredBreeder, setBookmarkedBreeder] = useState([]);

  // api 호출
  useEffect(() => {
    const fetchBreederBookmark = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        const response = await api.get('/breeder/bookmark', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          params: {
            page: currentPage,
            animalType: selectedAnimal,
            species: selectedBreed,
          },
        });
        const data = response.data.result;
        setBookmarkedBreeder(data.breederList);
      } catch (error) {
        console.error('Error fetching bookmaredBreeder', error);
      }
    };

    fetchBreederBookmark();
  }, [currentPage]);

  // 강아지, 고양이 선택
  const handleAnimalChange = (value) => {
    setSelectedAnimal(value);
  };
  // 강아지, 고양이에 따른 종 변화
  useEffect(() => {
    setBreeds(animalBreeds[selectedAnimal] || []);
  }, [selectedAnimal, setSelectedAnimal]);
  // 종 핸들러
  const handleBreedChange = (value) => {
    setSelectedBreed(value);
  };

  return (
    <A.Border>
      <A.SideHeader>
        <VerticalMenuSelector
          activeItemName=""
          items={menuItems1}
          title="커뮤니티"
        />
        <VerticalMenuSelector
          activeItemName="저장한 브리더"
          items={menuItems2}
          title="스크랩"
        />
      </A.SideHeader>

      <A.MainContainer>
        <A.TopContainer>
          <A.IconContainer>
            <img src={bookmark} alt="bookmark svg" className="bookmark" />
          </A.IconContainer>
          <A.Text>저장한 브리더</A.Text>
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
                id="breed-dropbox"
                label="종 선택"
                options={[
                  { value: '', label: '종 선택' },
                  ...breeds.map((breed) => ({ value: breed, label: breed })),
                ]}
                onChange={handleBreedChange}
              />
            </A.Left>
          </A.SelectContainer>

          <A.CardsContainer
            className={bookmaredBreeder.length === 0 ? 'empty' : ''}
          >
            {bookmaredBreeder.length > 0 ? (
              <>
                <div className="dogCard">
                  {bookmaredBreeder.map((breeder) => (
                    <BreederCard
                      key={breeder.breederId}
                      photo={breeder.profileUrl}
                      location={breeder.address}
                      name={breeder.breederName}
                      breederExperience={breeder.careerYear}
                      numberOfCertifications={breeder.certificateCount}
                      waitingDogs={breeder.waitAnimal}
                      waitlistCount={breeder.waitList}
                      rating={breeder.breederRating}
                      reviewCount={breeder.reviewCount}
                      isBookmarked={breeder.isBookmarked}
                      setIsBookmarked={() => {}}
                    />
                  ))}
                </div>
                <Pagination
                  totalItems={bookmaredBreeder.length}
                  itemsPerPage={20}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </>
            ) : (
              <A.NothingContainer>
                <img src={nothingBowl} alt="no animals" />
                <div className="nothing_text">
                  아직 브리더를 저장하지 않았어요..
                </div>
              </A.NothingContainer>
            )}
          </A.CardsContainer>
        </A.BottomContainer>
      </A.MainContainer>
    </A.Border>
  );
}

export default Breeder;
