/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import { useState, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import MenuSelect from '../../components/MenuSelect/MenuSelect';
import * as A from './AnimalUpload.style';
import Button from '../../components/button/Button';
import UploadDogInfo from '../../components/AnimalUpload/UploadDogInfo';
import UploadParentDogInfo from '../../components/AnimalUpload/UploadParentDogInfo';
import 'react-datepicker/dist/react-datepicker.css';
// import api from '../../api/api';
import useAuth from '../../hooks/useAuth';

const dogBreeds = [
  '직접입력',
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
  '요크셔테이러',
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
  '직접입력',
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
];

const DogInfoInput = forwardRef((props, ref) => {
  const { value, onClick, placeholder } = props;
  return (
    <A.DogInfoInput
      onClick={onClick}
      ref={ref}
      value={value}
      placeholder={placeholder}
      readOnly
    />
  );
});

DogInfoInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
};

DogInfoInput.defaultProps = {
  value: '',
  onClick: () => {},
  placeholder: '생년월일',
};

DogInfoInput.displayName = 'DogInfoInput';

function AnimalUpload() {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState('강아지 정보');
  const [birthDate, setBirthDate] = useState(null);
  const [dogInfoData, setDogInfoData] = useState({
    character: '',
    feature: '',
    feeding: '',
    vaccination: '',
    virusCheck: '',
    parasitic: '',
    healthCheck: '',
  });
  const [parentDogInfo, setParentDogInfo] = useState({
    motherName: '',
    fatherName: '',
    motherBreed: '',
    fatherBreed: '',
    motherBirthDate: null,
    fatherBirthDate: null,
    motherHereditary: '',
    fatherHereditary: '',
    motherCharacter: '',
    fatherCharacter: '',
    motherHealthCheck: '',
    fatherHealthCheck: '',
    motherImages: [],
    fatherImages: [],
    motherHealthCheckImages: [],
    fatherHealthCheckImages: [],
  });

  const dogInfoRef = useRef(null);
  const parentDogInfoRef = useRef(null);
  const [name, setName] = useState('');
  const [images, setImages] = useState([]);
  const [pedigreeFile, setPedigreeFile] = useState(null);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [customBreed, setCustomBreed] = useState('');
  const menuItems = ['강아지 정보', '부모 강아지 정보'];
  const [uploadedFiles, setUploadedFiles] = useState({
    feedingImages: [],
    vaccinationImages: [],
    virusCheckImages: [],
    parasiticImages: [],
    healthCheckImages: [],
  });

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === '강아지 정보') {
      dogInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '부모 강아지 정보') {
      parentDogInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDogInfoChange = (field, value) => {
    setDogInfoData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleParentDogInfoChange = (field, value) => {
    setParentDogInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length + images.length > 10) {
      // eslint-disable-next-line no-alert
      alert('최대 10개의 이미지만 업로드할 수 있습니다.');
      return;
    }
    setImages((prevImages) => [
      ...prevImages,
      ...files.slice(0, 10 - images.length),
    ]);
  };

  const handlePedigreeUpload = (event) => {
    const file = event.target.files[0];
    setPedigreeFile(file);
  };

  const pedigreeInputRef = useRef(null);

  const handlePedigreeButtonClick = () => {
    if (pedigreeInputRef.current) {
      pedigreeInputRef.current.click();
    }
  };

  const handleFileChange = (field, fileList) => {
    setUploadedFiles((prevFiles) => ({
      ...prevFiles,
      [field]: [...prevFiles[field], ...fileList],
    }));
  };

  const handleNameChange = (event) => {
    const inputName = event.target.value;
    if (inputName.length <= 30) {
      setName(inputName);
      event.target.setCustomValidity('');
    } else {
      event.target.setCustomValidity('이름은 30자 이내로 입력해주세요.');
    }
  };

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  const handleAnimalSelection = (animal) => {
    setSelectedAnimal(animal);
    setSelectedBreed('');
    setCustomBreed('');
  };

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
    if (event.target.value !== '직접입력') {
      setCustomBreed('');
    }
  };

  const handleCustomBreedChange = (event) => {
    setCustomBreed(event.target.value);
  };

  // if (selectedAnimal === '고양이') setBreedOptions(catBreeds);
  // const breedOptions = selectedAnimal === '강아지' ? dogBreeds : catBreeds;

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      return '';
    }
    return date.toISOString().split('T')[0];
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    // const breederId = parseInt(localStorage.getItem('breederId'), 10);
    // console.log('Breeder ID:', breederId);
    // const breederId = 1;
    const breederId = 1;

    // if (!formData.has('breederId')) {
    //   formData.append('breederId', breederId);
    // }

    Object.keys(uploadedFiles).forEach((key) => {
      uploadedFiles[key].forEach((file) => {
        formData.append(`files.${key}`, file);
      });
    });

    images.forEach((file) => {
      formData.append('files.animalImages', file);
    });

    if (pedigreeFile) {
      formData.append('files.pedigreeImage', pedigreeFile);
    } else {
      console.error('파일이 선택되지 않았습니다.');
      alert('파일을 선택해 주세요.');
      return;
    }

    const formattedBirthDate = formatDate(birthDate);

    formData.append('name', name || '');
    formData.append(
      'type',
      selectedAnimal === '강아지'
        ? 'DOG'
        : selectedAnimal === '고양이'
          ? 'CAT'
          : '',
    );
    formData.append(
      'breed',
      selectedBreed === '직접입력' ? customBreed : selectedBreed || '',
    );
    formData.append(
      'gender',
      selectedGender === '수컷'
        ? 'MALE'
        : selectedGender === '암컷'
          ? 'FEMALE'
          : '',
    );
    formData.append('birthDate', formattedBirthDate || '');

    Object.entries(dogInfoData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    Object.entries(parentDogInfo).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((file, index) => {
          formData.append(`${key}[${index}]`, file);
        });
      } else {
        formData.append(key, value);
      }
    });

    try {
      const response = await fetch(
        `http://ec2-3-37-97-6.ap-northeast-2.compute.amazonaws.com:8080/animals?breederId=${breederId}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      const data = await response.json();
      console.log('Response data:', data);

      if (data.isSuccess) {
        console.log('등록 성공');
        navigate('/BreederAnimalList');
      } else {
        console.error('등록 실패', data);
      }
    } catch (error) {
      console.error('요청 오류:', error);
    }
  };

  return (
    <A.Container>
      <A.Title>관리 중인 동물 정보 업로드</A.Title>
      <A.Card>
        <A.Image hasImage={images.length > 0}>
          {images.length > 0 ? (
            <img src={URL.createObjectURL(images[0])} alt="Uploaded" />
          ) : (
            <label htmlFor="file-upload">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M24 0C24.7957 0 25.5587 0.316071 26.1213 0.87868C26.6839 1.44129 27 2.20435 27 3V21H45C45.7957 21 46.5587 21.3161 47.1213 21.8787C47.6839 22.4413 48 23.2043 48 24C48 24.7957 47.6839 25.5587 47.1213 26.1213C46.5587 26.6839 45.7957 27 45 27H27V45C27 45.7957 26.6839 46.5587 26.1213 47.1213C25.5587 47.6839 24.7957 48 24 48C23.2043 48 22.4413 47.6839 21.8787 47.1213C21.3161 46.5587 21 45.7957 21 45V27H3C2.20435 27 1.44129 26.6839 0.87868 26.1213C0.316071 25.5587 0 24.7957 0 24C0 23.2043 0.316071 22.4413 0.87868 21.8787C1.44129 21.3161 2.20435 21 3 21H21V3C21 2.20435 21.3161 1.44129 21.8787 0.87868C22.4413 0.316071 23.2043 0 24 0Z"
                  fill="#C5C5C5"
                />
              </svg>
              사진 파일 첨부
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </label>
          )}
        </A.Image>
        <A.InfoContainer>
          <A.Name
            type="text"
            maxLength={30}
            value={name}
            onChange={handleNameChange}
            placeholder="이름을 입력하세요"
          />
          <A.AnimalSelectBox>
            <A.AnimalSelect
              selected={selectedAnimal === '강아지'}
              onClick={() => handleAnimalSelection('강아지')}
            >
              강아지
            </A.AnimalSelect>
            <A.AnimalSelect
              selected={selectedAnimal === '고양이'}
              onClick={() => handleAnimalSelection('고양이')}
            >
              고양이
            </A.AnimalSelect>
          </A.AnimalSelectBox>

          <A.DogInfo>
            <div>
              <strong>종</strong>
              <A.BreedSelect value={selectedBreed} onChange={handleBreedChange}>
                <A.BreedOption value="">
                  정확한 품종명을 선택하세요
                </A.BreedOption>
                {selectedAnimal === '강아지' &&
                  dogBreeds.map((breed) => (
                    <A.BreedOption key={breed} value={breed}>
                      {breed}
                    </A.BreedOption>
                  ))}
                {selectedAnimal === '고양이' &&
                  catBreeds.map((breed) => (
                    <A.BreedOption key={breed} value={breed}>
                      {breed}
                    </A.BreedOption>
                  ))}
              </A.BreedSelect>

              {selectedBreed === '직접입력' && (
                <A.DogInfoText
                  type="text"
                  placeholder="품종을 입력하세요"
                  value={customBreed}
                  onChange={handleCustomBreedChange}
                />
              )}
            </div>

            <div>
              <strong>성별</strong>
              <A.AnimalSelectBox>
                <A.AnimalSelect
                  selected={selectedGender === '수컷'}
                  onClick={() => handleGenderSelection('수컷')}
                >
                  수컷
                </A.AnimalSelect>
                <A.AnimalSelect
                  selected={selectedGender === '암컷'}
                  onClick={() => handleGenderSelection('암컷')}
                >
                  암컷
                </A.AnimalSelect>
              </A.AnimalSelectBox>
            </div>
            <div>
              <strong>생일</strong>
              <A.InputWrapper>
                <A.CustomDatePicker
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                  customInput={<DogInfoInput />}
                  locale="ko"
                  popperPlacement="right-start"
                  dateFormat="yyyy/MM/dd"
                  calendarContainer={A.CalendarContainer}
                />
                <A.SvgIcon
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3.9711 0C4.10106 0 4.22569 0.0516249 4.31758 0.143518C4.40948 0.23541 4.4611 0.360044 4.4611 0.49V1.4063H9.723V0.4963C9.723 0.366344 9.77462 0.24171 9.86652 0.149818C9.95841 0.0579249 10.083 0.0063 10.213 0.0063C10.343 0.0063 10.4676 0.0579249 10.5595 0.149818C10.6514 0.24171 10.703 0.366344 10.703 0.4963V1.4063H12.6C12.9712 1.4063 13.3272 1.5537 13.5897 1.8161C13.8522 2.0785 13.9998 2.43442 14 2.8056V12.6007C13.9998 12.9719 13.8522 13.3278 13.5897 13.5902C13.3272 13.8526 12.9712 14 12.6 14H1.4C1.02882 14 0.672829 13.8526 0.410298 13.5902C0.147767 13.3278 0.000185591 12.9719 0 12.6007L0 2.8056C0.000185591 2.43442 0.147767 2.0785 0.410298 1.8161C0.672829 1.5537 1.02882 1.4063 1.4 1.4063H3.4811V0.4893C3.48129 0.359465 3.53299 0.235012 3.62487 0.14327C3.71674 0.0515286 3.84126 -1.32484e-07 3.9711 0ZM0.98 5.4194V12.6007C0.98 12.6559 0.990864 12.7105 1.01197 12.7614C1.03308 12.8124 1.06401 12.8587 1.10302 12.8977C1.14202 12.9367 1.18832 12.9676 1.23927 12.9887C1.29023 13.0098 1.34484 13.0207 1.4 13.0207H12.6C12.6552 13.0207 12.7098 13.0098 12.7607 12.9887C12.8117 12.9676 12.858 12.9367 12.897 12.8977C12.936 12.8587 12.9669 12.8124 12.988 12.7614C13.0091 12.7105 13.02 12.6559 13.02 12.6007V5.4292L0.98 5.4194ZM4.6669 10.2333V11.3995H3.5V10.2333H4.6669ZM7.5831 10.2333V11.3995H6.4169V10.2333H7.5831ZM10.5 10.2333V11.3995H9.3331V10.2333H10.5ZM4.6669 7.4494V8.6156H3.5V7.4494H4.6669ZM7.5831 7.4494V8.6156H6.4169V7.4494H7.5831ZM10.5 7.4494V8.6156H9.3331V7.4494H10.5ZM3.4811 2.3856H1.4C1.34484 2.3856 1.29023 2.39646 1.23927 2.41757C1.18832 2.43868 1.14202 2.46961 1.10302 2.50862C1.06401 2.54762 1.03308 2.59392 1.01197 2.64487C0.990864 2.69583 0.98 2.75044 0.98 2.8056V4.4401L13.02 4.4499V2.8056C13.02 2.75044 13.0091 2.69583 12.988 2.64487C12.9669 2.59392 12.936 2.54762 12.897 2.50862C12.858 2.46961 12.8117 2.43868 12.7607 2.41757C12.7098 2.39646 12.6552 2.3856 12.6 2.3856H10.703V3.0359C10.703 3.16586 10.6514 3.29049 10.5595 3.38238C10.4676 3.47428 10.343 3.5259 10.213 3.5259C10.083 3.5259 9.95841 3.47428 9.86652 3.38238C9.77462 3.29049 9.723 3.16586 9.723 3.0359V2.3856H4.4611V3.0296C4.4611 3.15956 4.40948 3.28419 4.31758 3.37608C4.22569 3.46798 4.10106 3.5196 3.9711 3.5196C3.84114 3.5196 3.71651 3.46798 3.62462 3.37608C3.53272 3.28419 3.4811 3.15956 3.4811 3.0296V2.3856Z"
                    fill="#C5C5C5"
                  />
                </A.SvgIcon>
              </A.InputWrapper>
            </div>
          </A.DogInfo>
          <A.ButtonContainer>
            <Button whiteBorder onClick={handlePedigreeButtonClick}>
              혈통서 업로드
            </Button>
            <input
              ref={pedigreeInputRef}
              id="pedigree-upload"
              type="file"
              accept="image/*"
              onChange={handlePedigreeUpload}
              style={{ display: 'none' }}
            />
            <A.ButtonFileName>
              {pedigreeFile ? pedigreeFile.name : '파일을 선택하세요'}
            </A.ButtonFileName>
          </A.ButtonContainer>
        </A.InfoContainer>
      </A.Card>
      <A.ThumbnailContainer>
        {images.slice(1).map((image, index) => (
          <A.Thumbnail
            key={image.name || index}
            src={URL.createObjectURL(image)}
            alt={`thumbnail${index + 1}`}
          />
        ))}
      </A.ThumbnailContainer>
      <A.InfoWrapper>
        <MenuSelect
          menus={menuItems}
          activeMenu={activeMenu}
          setActiveMenu={handleMenuClick}
        />
        <A.MenuContentWrapper>
          <UploadDogInfo
            ref={dogInfoRef}
            name={name}
            onChange={handleDogInfoChange}
            onFileChange={handleFileChange}
            selectedAnimal={selectedAnimal}
          />
          <UploadParentDogInfo
            selectedAnimal={selectedAnimal}
            ref={dogInfoRef}
            onChange={handleParentDogInfoChange}
          />
        </A.MenuContentWrapper>
      </A.InfoWrapper>
      <A.ConfirmBtn onClick={handleSubmit}>확인</A.ConfirmBtn>
    </A.Container>
  );
}

export default AnimalUpload;
