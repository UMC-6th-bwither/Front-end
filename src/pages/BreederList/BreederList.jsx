/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import * as BL from './BreederList.style';
import Pagination from '../../components/Pagination/Pagination';
import DogCard from '../../components/DogCard/DogCard';

function BreederList() {
  const cities = [
    '서울',
    '세종',
    '강원',
    '인천',
    '경기',
    '충북',
    '충남',
    '경북',
    '대전',
    '대구',
    '전북',
    '경남',
    '울산',
    '광주',
    '부산',
    '전남',
    '제주',
  ];
  const [, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const animalBreeds = {
    dog: [
      '골든 리트리버',
      '닥스훈트',
      '도베르만 핀셔',
      '래브라도 레트리버',
      '말티즈',
      '말티푸',
      '미니어처 슈나우저',
      '미니어처 핀셔',
      '베들링턴 테리어',
      '보더콜리',
      '비글',
      '비숑프리제',
      '사모예드',
      '시바이누',
      '시베리아허스키',
      '시추',
      '알래스칸 맬러뮤트',
      '요크셔테리어',
      '웰시코기',
      '이탈리안 그레이 하운드',
      '재페니스 스피츠',
      '잭 러셀 테리어',
      '저먼 셰퍼드',
      '차우차우',
      '치와와',
      '파피용',
      '퍼그',
      '포메라니안',
      '푸들',
      '프렌치불독',
      '기타',
    ],
    cat: [
      '노르웨이 숲',
      '데본 렉스',
      '돈스코이',
      '랙돌',
      '러시안 블루',
      '맹크스',
      '먼치킨',
      '메인 쿤',
      '민스킨',
      '벵갈',
      '봄베이',
      '브리티시 숏헤어',
      '사바나',
      '샴',
      '소말리',
      '소코케',
      '스코티쉬 폴드',
      '스핑크스',
      '아메리칸 밥테일',
      '아메리칸 숏헤어',
      '아메리칸 컬',
      '아비니시안',
      '엑조틱 숏헤어',
      '오리엔탈',
      '카오 마니',
      '코리안 숏헤어',
      '터키쉬 앙고라',
      '페르시안',
      '기타',
    ],
    entire: [],
  };
  animalBreeds.entire = [...animalBreeds.dog, ...animalBreeds.cat];

  const handleAnimalChange = (event) => {
    const animal = event.target.value;
    setSelectedAnimal(animal);
    setBreeds(animalBreeds[animal] || []);
  };

  return (
    <BL.Border>
      <BL.RegionContainer>
        <BL.Left>
          <div className="title">전국 브리더</div>
          <div className="detail">
            믿을 수 있는 브리더를 브위더 단 한 곳에서 찾으세요
          </div>
        </BL.Left>
        <BL.Right>
          {cities.map((city, index) => (
            <div key={index} className="item">
              {city}
            </div>
          ))}
        </BL.Right>
      </BL.RegionContainer>

      <BL.AnimalContainer>
        <BL.SelectContainer>
          <BL.AnimalSelector>
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
              <select className="select-box breeds">
                <option value="">종 선택</option>
                {breeds.map((breed, index) => (
                  <option key={index} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>
          </BL.AnimalSelector>
          <select className="select-box sort">
            <option value="latest">최신순</option>
          </select>
        </BL.SelectContainer>

        <BL.ContentContainer>
          <div className="dogCard">
            <DogCard
              photo=""
              location="서울 노원구"
              name="행복이"
              breed="골든리트리버"
              birthDate="2020-01-01"
              gender="수컷"
              breederName="해피브리더"
              waitlistCount={5}
              isBookmarked={isBookmarked}
              setIsBookmarked={setIsBookmarked}
            />
          </div>
          <div>
            <Pagination
              totalItems={100}
              itemsPerPage={9}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </BL.ContentContainer>
      </BL.AnimalContainer>
    </BL.Border>
  );
}

export default BreederList;
