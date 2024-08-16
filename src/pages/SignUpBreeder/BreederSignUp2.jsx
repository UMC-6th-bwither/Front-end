import { useState } from 'react';
import * as B from './SignUpBreeder.style';
import progressBar50 from '../../../public/icons/signUp/progress-bar-50.svg';
import choiceDog from '../../../public/icons/signUp/choice_dog.png';
import choiceCat from '../../../public/icons/signUp/choice_cat.png';
import search from '../../../public/icons/signUp/search.svg';
import Button from '../../components/SignUpButton/Button';
import tagX from '../../../public/icons/signUp/breedTag_x.svg';

const dogBreeds = [
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
];

const catBreeds = [
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
];

function SearchBar({ breeds, addTag }) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);

    if (value.length > 0) {
      const filteredSuggestions = breeds.filter((breed) =>
        breed.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === '기타') {
      addTag(selectedValue); // '기타'를 선택한 경우 입력된 값을 태그로 추가
    } else {
      addTag(selectedValue); // 선택한 값만 태그로 추가
    }
    setInputValue(''); // 입력값 초기화
    setSuggestions([]); // 드롭다운 초기화
  };

  const isOtherOptionVisible =
    inputValue.trim() !== '' && suggestions.length === 0;

  return (
    <B.SearchWrapper>
      <B.SearchBar
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="관리하는 주요한 종에 대해 알려주세요"
      />
      <img src={search} alt="searchIcon" />
      {(suggestions.length > 0 || isOtherOptionVisible) && (
        <B.DropDown onChange={handleSelect} size={suggestions.length + 1}>
          {suggestions.map((suggestion, index) => (
            <B.DropItem key={index} value={suggestion}>
              {suggestion}
            </B.DropItem>
          ))}
          {isOtherOptionVisible && <B.DropItem value="기타">기타</B.DropItem>}
        </B.DropDown>
      )}
    </B.SearchWrapper>
  );
}

function TagList({ tags, removeTag }) {
  return (
    <B.TagWrapper>
      {tags.map((tag, index) => (
        <B.BreedTag key={index} className="tag">
          {tag}
          <img src={tagX} alt="X" onClick={() => removeTag(tag)} />
        </B.BreedTag>
      ))}
    </B.TagWrapper>
  );
}

export default function BreederSignUp2() {
  const [selectedAnimal, setSelectedAnimal] = useState(null); // 강아지,고양이 선택

  const [tags, setTags] = useState([]);

  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleAnimalSelect = (animal) => {
    setSelectedAnimal(animal);
    // setTags([]); // 동물을 변경할 때 태그 초기화
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
          <SearchBar
            breeds={selectedAnimal === 'dog' ? dogBreeds : catBreeds}
            addTag={addTag}
          />
          <TagList tags={tags} removeTag={removeTag} />
        </B.ContentWrapper>
        <B.BtnWrapper2>
          <Button white text="이전" path="breeder-signup/1" />
          <Button text="다음" path="breeder-signup/3" />
        </B.BtnWrapper2>
      </B.Container>
    </B.Background>
  );
}
