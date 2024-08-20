import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './TitleForm.style';

function TitleForm({ onTitleChange, onOptionSelect }) {
  const [title, setTitle] = useState('');
  const [activeOption, setActiveOption] = useState(null);
  const maxTitleLength = 65;

  const titleInputRef = useRef(null); // TitleInput에 대한 참조 생성

  useEffect(() => {
    // setTimeout을 사용하여 에디터가 포커스를 잡고 난 후 TitleInput에 다시 포커스
    const focusTimeout = setTimeout(() => {
      if (titleInputRef.current) {
        titleInputRef.current.focus();
      }
    }, 100); // 약간의 지연 시간 추가 (에디터가 포커스를 가져갈 시간)

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(focusTimeout);
  }, []);

  const handleInputChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (typeof onTitleChange === 'function') {
      onTitleChange(newTitle);
    }
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
    if (typeof onOptionSelect === 'function') {
      onOptionSelect(option);
    }
  };

  return (
    <S.Container>
      <S.TitleSection>
        <S.TitleInput
          type="text"
          placeholder="제목"
          value={title}
          onChange={handleInputChange}
          maxLength={maxTitleLength}
          ref={titleInputRef} // ref를 TitleInput에 연결
        />
        <S.TitleCounter>
          {title.length} / {maxTitleLength}
        </S.TitleCounter>
        <S.CloseButton onClick={() => setTitle('')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L8 5.87868L12.9393 0.93934C13.5251 0.353553 14.4749 0.353553 15.0607 0.93934C15.6464 1.52513 15.6464 2.47487 15.0607 3.06066L10.1213 8L15.0607 12.9393C15.6464 13.5251 15.6464 14.4749 15.0607 15.0607C14.4749 15.6464 13.5251 15.6464 12.9393 15.0607L8 10.1213L3.06066 15.0607C2.47487 15.6464 1.52513 15.6464 0.939341 15.0607C0.353554 14.4749 0.353554 13.5251 0.939341 12.9393L5.87868 8L0.93934 3.06066Z"
              fill="white"
            />
          </svg>
        </S.CloseButton>
      </S.TitleSection>
      <S.OptionsSection>
        <S.Instruction>내용과 관련된 동물을 선택해주세요</S.Instruction>
        <S.Options>
          <S.OptionButton
            onClick={() => handleOptionClick('전체')}
            $active={activeOption === '전체'}
          >
            전체
          </S.OptionButton>
          <S.OptionButton
            onClick={() => handleOptionClick('강아지')}
            $active={activeOption === '강아지'}
          >
            강아지
          </S.OptionButton>
          <S.OptionButton
            onClick={() => handleOptionClick('고양이')}
            $active={activeOption === '고양이'}
          >
            고양이
          </S.OptionButton>
        </S.Options>
      </S.OptionsSection>
    </S.Container>
  );
}

TitleForm.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onOptionSelect: PropTypes.func.isRequired,
};

export default TitleForm;
