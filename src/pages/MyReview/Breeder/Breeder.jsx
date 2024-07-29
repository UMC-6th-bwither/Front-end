/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import * as A from './Breeder.style';
import bookmark from '../../../../public/img/bookmark.svg';
import { animalBreeds } from '../../selectData';
import BreederCard from '../../../components/BreederCard/BreederCard';
import DropBox from '../../../components/dropBox/DropBox';

function Breeder() {
  //  ** Breeder Card API호출 필요 **

  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  // const bookmarkedBreeder = 전체BreederCard.filter(breeder => breeder.isBookmarked); 북마크된 브리더 필터링

  useEffect(() => {
    setBreeds(animalBreeds[selectedAnimal] || []);
  }, [selectedAnimal, setSelectedAnimal]);

  const handleAnimalChange = (event) => {
    setSelectedAnimal(event);
    setBreeds(animalBreeds[event] || []);
  };

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
                  { value: 'entire', label: '전체' },
                  { value: 'dog', label: '강아지' },
                  { value: 'cat', label: '고양이' },
                ]}
                onChange={handleAnimalChange}
              />
              <DropBox
                id="breed-dropbox"
                label="종 선택"
                options={breeds.map((breed) => ({
                  value: breed,
                  label: breed,
                }))}
              />
            </A.Left>
          </A.SelectContainer>

          <A.CardsContainer>
            {/* {bookmarkedBreeder.map((breeder, index) => ( //필터링된 카드 나열
            <BreederCard
              key={index}
              photo={breeder.photo}
              location={breeder.location}
              name={breeder.name}
              breederExperience={breeder.breederExperience}
              numberOfCertifications={breeder.numberOfCertifications}
              waitingDogs={breeder.waitingDogs}
              waitlistCount={breeder.waitlistCount}
              rating={breeder.rating}
              reviewCount={breeder.reviewCount}
              isBookmarked={breeder.isBookmarked}
              setIsBookmarked= () => {} 
            />
          ))} */}
            <BreederCard />
          </A.CardsContainer>
        </A.BottomContainer>
      </A.MainContainer>
    </A.Border>
  );
}

export default Breeder;
