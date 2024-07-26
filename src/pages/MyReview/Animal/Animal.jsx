/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import * as A from './Animal.style';
import bookmark from '../../../../public/img/bookmark.svg';
import footprint from '../../../../public/img/footprint.svg';
import { animalBreeds } from '../../selectData';
import DogCard from '../../../components/DogCard/DogCard';
import DropBox from '../../../components/dropBox/DropBox';

function Animal() {
  //  ** DogCard API호출 필요 **
  //  예시 데이터 15개
  const 전체DogCard = [
    {
      photo: '',
      location: '서울',
      name: '바둑이',
      breed: '포메라니안',
      birthDate: '2020-01-01',
      gender: '수컷',
      breederName: '김철수',
      waitlistCount: 5,
      isBookmarked: true,
    },
    {
      photo: '',
      location: '부산',
      name: '쫑이',
      breed: '푸들',
      birthDate: '2019-05-03',
      gender: '암컷',
      breederName: '이영희',
      waitlistCount: 0,
      isBookmarked: true,
    },
    {
      photo: '',
      location: '대구',
      name: '멍멍이',
      breed: '말티즈',
      birthDate: '2018-07-11',
      gender: '수컷',
      breederName: '박민수',
      waitlistCount: 7,
      isBookmarked: false,
    },
    {
      photo: '',
      location: '인천',
      name: '냥이',
      breed: '러시안 블루',
      birthDate: '2017-12-24',
      gender: '암컷',
      breederName: '최지우',
      waitlistCount: 0,
      isBookmarked: true,
    },
    {
      photo: '',
      location: '광주',
      name: '코코',
      breed: '비숑 프리제',
      birthDate: '2021-03-15',
      gender: '수컷',
      breederName: '정성훈',
      waitlistCount: 4,
      isBookmarked: true,
    },
    {
      photo: '',
      location: '대전',
      name: '하루',
      breed: '치와와',
      birthDate: '2022-10-10',
      gender: '암컷',
      breederName: '박지성',
      waitlistCount: 0,
      isBookmarked: false,
    },
    {
      photo: '',
      location: '울산',
      name: '보리',
      breed: '요크셔 테리어',
      birthDate: '2020-08-20',
      gender: '수컷',
      breederName: '김하늘',
      waitlistCount: 1,
      isBookmarked: true,
    },
    {
      photo: '',
      location: '수원',
      name: '사랑이',
      breed: '골든 리트리버',
      birthDate: '2019-02-05',
      gender: '암컷',
      breederName: '홍길동',
      waitlistCount: 8,
      isBookmarked: false,
    },
    {
      photo: '',
      location: '성남',
      name: '몽이',
      breed: '보더 콜리',
      birthDate: '2016-04-25',
      gender: '수컷',
      breederName: '박찬호',
      waitlistCount: 0,
      isBookmarked: true,
    },
    {
      photo: '',
      location: '청주',
      name: '초코',
      breed: '닥스훈트',
      birthDate: '2018-09-14',
      gender: '암컷',
      breederName: '이순신',
      waitlistCount: 9,
      isBookmarked: true,
    },
    {
      photo: '',
      location: '전주',
      name: '나비',
      breed: '페르시안',
      birthDate: '2017-06-30',
      gender: '수컷',
      breederName: '안중근',
      waitlistCount: 0,
      isBookmarked: true,
    },
    {
      photo: '',
      location: '제주',
      name: '모찌',
      breed: '프렌치 불독',
      birthDate: '2015-11-19',
      gender: '암컷',
      breederName: '유관순',
      waitlistCount: 4,
      isBookmarked: true,
    },
    {
      photo: '',
      location: '강릉',
      name: '까미',
      breed: '비글',
      birthDate: '2021-01-01',
      gender: '수컷',
      breederName: '김구',
      waitlistCount: 7,
      isBookmarked: false,
    },
    {
      photo: '',
      location: '포항',
      name: '보라',
      breed: '사모예드',
      birthDate: '2022-12-31',
      gender: '암컷',
      breederName: '윤봉길',
      waitlistCount: 5,
      isBookmarked: true,
    },
    {
      photo: '',
      location: '서울',
      name: '마루',
      breed: '달마티안',
      birthDate: '2018-03-03',
      gender: '수컷',
      breederName: '김좌진',
      waitlistCount: 6,
      isBookmarked: false,
    },
  ];

  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  // const [isBookmarked, setIsBookmarked] = useState({});
  const [isReserved, setIsReserved] = useState(false);

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
      (!isReserved || pet.waitlistCount === 0) &&
      pet.isBookmarked
    );
  });

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
                // setIsBookmarked={}
              />
            ),
          )}
        </A.CardsContainer>
      </A.BottomContainer>
    </A.Border>
  );
}

export default Animal;
