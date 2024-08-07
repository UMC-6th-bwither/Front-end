/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../../../redux/bookmarkSlice';
import * as A from './Animal.style';
import bookmark from '../../../../public/img/bookmark.svg';
import footprint from '../../../../public/img/footprint.svg';
import { animalBreeds } from '../../selectData';
import DogCard from '../../../components/DogCard/DogCard';
import DropBox from '../../../components/DropBoxes/DropBox';

function Animal() {
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [isReserved, setIsReserved] = useState(false);

  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.card);

  useEffect(() => {
    console.log('Animal Page Bookmarks:', bookmarks);
  }, [bookmarks]); // 상태가 변경될 때마다 콘솔 출력

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
  const bookmaredPet = bookmarks.filter((pet) => {
    return (
      (selectedGender === '' || pet.gender === selectedGender) &&
      (selectedBreed === '' || pet.breed === selectedBreed) &&
      (!isReserved || pet.waitlistCount === 0) &&
      pet.isBookmarked
      // bookmarks[pet.name]
    );
  });

  return (
    <A.Border>
      <A.SideHeader>
        {/* <div className="community">
        <A.MenuTitle>커뮤니티</A.MenuTitle>
        <A.MenuSubtitleContainer>
          <A.MenuSubtitleActive to="/community/question">
            질문/고민
          </A.MenuSubtitleActive>
          <A.MenuSubtitleInActive to="/community/information">
            정보 공유
          </A.MenuSubtitleInActive>
          <A.MenuSubtitleInActive to="/community/daily">
            일상 이야기
          </A.MenuSubtitleInActive>
          <A.MenuSubtitleInActive to="/community/breederinformation">
            브리더의 꿀정보
          </A.MenuSubtitleInActive>
          <A.MenuSubtitleInActive>브위더 후기</A.MenuSubtitleInActive>
        </A.MenuSubtitleContainer>
      </div> */}
        <div className="scrap">
          <A.MenuTitle>스크랩</A.MenuTitle>
          <A.MenuSubtitleContainer>
            <A.MenuSubtitleInActive to="/myreview/animal">
              저장한 동물
            </A.MenuSubtitleInActive>
            <A.MenuSubtitleInActive to="/myreview/breeder">
              저장한 브리더
            </A.MenuSubtitleInActive>
            {/* <A.MenuSubtitleActive to="/myreview/save">
            저장한 글
          </A.MenuSubtitleActive> */}
          </A.MenuSubtitleContainer>
        </div>
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
                  setIsBookmarked={() => dispatch(toggleBookmark(pet.name))}
                />
              ),
            )}
          </A.CardsContainer>
        </A.BottomContainer>
      </A.MainContainer>
    </A.Border>
  );
}

export default Animal;
