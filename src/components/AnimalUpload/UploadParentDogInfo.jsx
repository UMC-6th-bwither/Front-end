/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as A from '../../pages/AnimalUpload/AnimalUpload.style';

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

const UploadParentDogInfo = forwardRef(({ selectedAnimal, onChange }, ref) => {
  const [motherBirthDate, setMotherBirthDate] = useState('');
  const [fatherBirthDate, setFatherBirthDate] = useState('');
  const [motherBreed, setMotherBreed] = useState('');
  const [fatherBreed, setFatherBreed] = useState('');
  const [motherImage, setMotherImage] = useState(null);
  const [fatherImage, setFatherImage] = useState(null);
  const [motherUploadedFileName, setMotherUploadedFileName] = useState('');
  const [fatherUploadedFileName, setFatherUploadedFileName] = useState('');

  const updateParentInfo = (field, value) => {
    onChange(field, value);
  };

  const DogInfoInput = forwardRef(
    ({ value, onClick, placeholder }, innerRef) => (
      <A.DogInfoInput
        onClick={onClick}
        ref={innerRef}
        value={value}
        placeholder={placeholder}
        readOnly
      />
    ),
  );

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

  const breedOptions = selectedAnimal === '강아지' ? dogBreeds : catBreeds;

  const handleNameChange = (event, parent) => {
    const value = event.target.value;
    if (value.length <= 30) {
      updateParentInfo(`${parent}Name`, value);
      event.target.setCustomValidity('');
    } else {
      event.target.setCustomValidity('이름은 30자 이내로 입력해주세요.');
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toISOString().split('T')[0];
  };

  const handleDateChange = (setDate, parentField) => (date) => {
    const formattedDate = formatDate(date);
    setDate(formattedDate);
    onChange(parentField, formattedDate);
  };

  const handleDescriptionChange = (event, parentField) => {
    const value = event.target.value;
    if (value.length <= 500) {
      updateParentInfo(parentField, value);
      event.target.setCustomValidity('');
    } else {
      event.target.setCustomValidity('글자 수는 500자 이내로 제한됩니다.');
    }
  };

  const handleBreedChange = (setSelectedBreed, parentField) => (event) => {
    const value = event.target.value;
    setSelectedBreed(value);
    updateParentInfo(parentField, value);
  };

  const handleMotherImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMotherImage(URL.createObjectURL(file));
      updateParentInfo('motherImages', [file]);
    }
  };

  const handleFatherImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFatherImage(URL.createObjectURL(file));
      updateParentInfo('fatherImages', [file]);
    }
  };

  const handleMotherFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMotherUploadedFileName(file.name);
      updateParentInfo('motherHealthCheckImages', [file]);
    }
  };

  const handleFatherFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFatherUploadedFileName(file.name);
      updateParentInfo('fatherHealthCheckImages', [file]);
    }
  };

  return (
    <div ref={ref} style={{ marginBottom: '96px' }}>
      <A.ParentInfoTitleBox>
        <A.ParentInfoTitle>부모 {selectedAnimal} 정보</A.ParentInfoTitle>
      </A.ParentInfoTitleBox>

      {/* 모 */}
      <A.ParentDogCard>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="motherImageUpload"
          onChange={handleMotherImageChange}
        />
        <A.ParentDogImage
          onClick={() => document.getElementById('motherImageUpload').click()}
        >
          {motherImage ? (
            <img
              src={motherImage}
              alt="모 사진"
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <>
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
            </>
          )}
        </A.ParentDogImage>
        <A.ParentDogInfo>
          <A.ParentDogNameBox>
            <A.ParentDogName
              type="text"
              maxLength={30}
              onChange={(e) => handleNameChange(e, 'mother')}
              placeholder="이름을 입력하세요"
            />
            <A.ParentDogGenderBox>
              <A.ParentDogGender>모</A.ParentDogGender>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5.37573C4.80274 5.37573 5.45349 4.72498 5.45349 3.92224C5.45349 3.1195 4.80274 2.46875 4 2.46875C3.19726 2.46875 2.54651 3.1195 2.54651 3.92224C2.54651 4.72498 3.19726 5.37573 4 5.37573ZM7.45349 3.92224C7.45349 5.48182 6.4197 6.79995 5 7.22873V11.3906H7.5V13.3906H5V15.5352H3V13.3906H0.5V11.3906H3V7.22873C1.5803 6.79995 0.546509 5.48182 0.546509 3.92224C0.546509 2.01493 2.09269 0.46875 4 0.46875C5.90731 0.46875 7.45349 2.01493 7.45349 3.92224Z"
                  fill="#D86480"
                />
              </svg>
            </A.ParentDogGenderBox>
          </A.ParentDogNameBox>
          <A.ParentDogDetail>
            <A.ParentDogLabel>종</A.ParentDogLabel>
            <A.BreedSelect
              value={motherBreed}
              onChange={handleBreedChange(setMotherBreed, 'motherBreed')}
            >
              <A.BreedOption value="">정확한 품종명을 선택하세요</A.BreedOption>
              {breedOptions.map((breed) => (
                <A.BreedOption key={breed} value={breed}>
                  {breed}
                </A.BreedOption>
              ))}
            </A.BreedSelect>
            {motherBreed === '직접입력' && (
              <A.DogInfoText
                type="text"
                placeholder="품종을 입력하세요"
                value={motherBreed}
                onChange={handleBreedChange(setMotherBreed, 'motherBreed')}
              />
            )}
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>출생</A.ParentDogLabel>
            <A.InputWrapper>
              <A.CustomDatePicker
                selected={motherBirthDate ? new Date(motherBirthDate) : null}
                onChange={handleDateChange(
                  setMotherBirthDate,
                  'motherBirthDate',
                )}
                customInput={<DogInfoInput />}
                dateFormat="yyyy-MM-dd"
                popperPlacement="right-start"
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
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>유전질환</A.ParentDogLabel>
            <A.ParentDogValueInput
              type="text"
              maxLength={500}
              onChange={(e) => handleDescriptionChange(e, 'motherHereditary')}
              placeholder="유전질환을 입력하세요"
            />
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>성격</A.ParentDogLabel>
            <A.ParentDogValueInput
              type="text"
              maxLength={500}
              onChange={(e) => handleDescriptionChange(e, 'motherCharacter')}
              placeholder="성격에 대해 간략히 적어주세요"
            />
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>
              수의사 검진 결과
              <A.InfoIcon
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5V10.5C10.6667 10.6768 10.5964 10.8464 10.4714 10.9714C10.3464 11.0964 10.1768 11.1667 10 11.1667H2C1.82319 11.1667 1.65362 11.0964 1.5286 10.9714C1.40357 10.8464 1.33333 10.6768 1.33333 10.5V2.5C1.33333 2.32319 1.40357 2.15362 1.5286 2.0286C1.65362 1.90357 1.82319 1.83333 2 1.83333H6C6.17681 1.83333 6.34638 1.7631 6.4714 1.63807C6.59643 1.51305 6.66667 1.34348 6.66667 1.16667C6.66667 0.989856 6.59643 0.820286 6.4714 0.695262C6.34638 0.570238 6.17681 0.5 6 0.5H2C1.46957 0.5 0.960859 0.710714 0.585787 1.08579C0.210714 1.46086 0 1.96957 0 2.5V10.5C0 11.0304 0.210714 11.5391 0.585787 11.9142C0.960859 12.2893 1.46957 12.5 2 12.5H10C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5V6.5C12 6.32319 11.9298 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333Z"
                  fill="#2D2D2D"
                />
                <path
                  d="M8.66728 1.83333H9.72061L5.52728 6.02C5.46479 6.08197 5.4152 6.15571 5.38135 6.23695C5.3475 6.31819 5.33008 6.40532 5.33008 6.49333C5.33008 6.58134 5.3475 6.66848 5.38135 6.74972C5.4152 6.83096 5.46479 6.90469 5.52728 6.96667C5.58925 7.02915 5.66299 7.07875 5.74423 7.11259C5.82547 7.14644 5.9126 7.16387 6.00061 7.16387C6.08862 7.16387 6.17576 7.14644 6.25699 7.11259C6.33823 7.07875 6.41197 7.02915 6.47394 6.96667L10.6673 2.78V3.83333C10.6673 4.01014 10.7375 4.17971 10.8625 4.30474C10.9876 4.42976 11.1571 4.5 11.3339 4.5C11.5108 4.5 11.6803 4.42976 11.8053 4.30474C11.9304 4.17971 12.0006 4.01014 12.0006 3.83333V1.16667C12.0006 0.989856 11.9304 0.820286 11.8053 0.695262C11.6803 0.570238 11.5108 0.5 11.3339 0.5H8.66728C8.49047 0.5 8.3209 0.570238 8.19587 0.695262C8.07085 0.820286 8.00061 0.989856 8.00061 1.16667C8.00061 1.34348 8.07085 1.51305 8.19587 1.63807C8.3209 1.7631 8.49047 1.83333 8.66728 1.83333Z"
                  fill="#2D2D2D"
                />
              </A.InfoIcon>
            </A.ParentDogLabel>
            <A.ParentDogValueInput
              type="text"
              placeholder="검진 결과를 간략히 적어주세요"
              onChange={(e) => handleDescriptionChange(e, 'motherHealthCheck')}
            />
          </A.ParentDogDetail>
          <A.InfoFileBoxContainer>
            <A.ParentInfoFileBox>
              <label>
                첨부파일
                <input
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleMotherFileUpload}
                />
              </label>
            </A.ParentInfoFileBox>
            {motherUploadedFileName && (
              <A.InfoFileBoxNameContainer>
                <A.InfoFileBoxName>{motherUploadedFileName}</A.InfoFileBoxName>
                <svg
                  onClick={() => {
                    setMotherUploadedFileName('');
                    updateParentInfo('motherHealthCheckImages', []);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ cursor: 'pointer' }}
                >
                  <path
                    d="M2.25176 2.25176C2.33137 2.17196 2.42593 2.10864 2.53004 2.06544C2.63416 2.02224 2.74577 2 2.85849 2C2.97121 2 3.08282 2.02224 3.18693 2.06544C3.29104 2.10864 3.38561 2.17196 3.46521 2.25176L8.00022 6.78849L12.5352 2.25176C12.6149 2.17209 12.7095 2.10888 12.8136 2.06576C12.9177 2.02264 13.0293 2.00045 13.142 2.00045C13.2546 2.00045 13.3662 2.02264 13.4703 2.06576C13.5744 2.10888 13.669 2.17209 13.7487 2.25176C13.8284 2.33144 13.8916 2.42603 13.9347 2.53013C13.9778 2.63423 14 2.74581 14 2.85849C14 2.97117 13.9778 3.08274 13.9347 3.18685C13.8916 3.29095 13.8284 3.38554 13.7487 3.46521L9.21196 8.00022L13.7487 12.5352C13.8284 12.6149 13.8916 12.7095 13.9347 12.8136C13.9778 12.9177 14 13.0293 14 13.142C14 13.2546 13.9778 13.3662 13.9347 13.4703C13.8916 13.5744 13.8284 13.669 13.7487 13.7487C13.669 13.8284 13.5744 13.8916 13.4703 13.9347C13.3662 13.9778 13.2546 14 13.142 14C13.0293 14 12.9177 13.9778 12.8136 13.9347C12.7095 13.8916 12.6149 13.8284 12.5352 13.7487L8.00022 9.21196L3.46521 13.7487C3.38554 13.8284 3.29095 13.8916 3.18685 13.9347C3.08274 13.9778 2.97117 14 2.85849 14C2.74581 14 2.63423 13.9778 2.53013 13.9347C2.42603 13.8916 2.33144 13.8284 2.25176 13.7487C2.17209 13.669 2.10888 13.5744 2.06576 13.4703C2.02264 13.3662 2.00045 13.2546 2.00045 13.142C2.00045 13.0293 2.02264 12.9177 2.06576 12.8136C2.10888 12.7095 2.17209 12.6149 2.25176 12.5352L6.78849 8.00022L2.25176 3.46521C2.17196 3.38561 2.10864 3.29104 2.06544 3.18693C2.02224 3.08282 2 2.97121 2 2.85849C2 2.74577 2.02224 2.63416 2.06544 2.53004C2.10864 2.42593 2.17196 2.33137 2.25176 2.25176Z"
                    fill="#737373"
                  />
                </svg>
              </A.InfoFileBoxNameContainer>
            )}
          </A.InfoFileBoxContainer>
        </A.ParentDogInfo>
      </A.ParentDogCard>

      {/* 부 */}
      <A.ParentDogCard>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="fatherImageUpload"
          onChange={handleFatherImageChange}
        />
        <A.ParentDogImage
          onClick={() => document.getElementById('fatherImageUpload').click()}
        >
          {fatherImage ? (
            <img
              src={fatherImage}
              alt="부 사진"
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <>
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
            </>
          )}
        </A.ParentDogImage>
        <A.ParentDogInfo>
          <A.ParentDogNameBox>
            <A.ParentDogName
              type="text"
              maxLength={30}
              onChange={(e) => handleNameChange(e, 'father')}
              placeholder="이름을 입력하세요"
            />
            <A.ParentDogGenderBox>
              <A.ParentDogGender>부</A.ParentDogGender>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.70775 0.809974L5.70906 0.808669L5.00195 0.101562L5.00065 0.102868L4.99934 0.101562L4.29224 0.808669L4.29354 0.809974L0.00195312 5.10156L0.70906 5.80867L4.50061 2.01712V9.02714C2.83024 9.26939 1.54712 10.7072 1.54712 12.4447C1.54712 14.352 3.0933 15.8982 5.00061 15.8982C6.90792 15.8982 8.4541 14.352 8.4541 12.4447C8.4541 10.7072 7.17098 9.26939 5.50061 9.02714V2.01704L9.29224 5.80867L9.99934 5.10156L5.70775 0.809974ZM7.4541 12.4447C7.4541 13.7997 6.35564 14.8982 5.00061 14.8982C3.64558 14.8982 2.54712 13.7997 2.54712 12.4447C2.54712 11.0897 3.64558 9.99121 5.00061 9.99121C6.35564 9.99121 7.4541 11.0897 7.4541 12.4447Z"
                  fill="#4270F8"
                />
              </svg>
            </A.ParentDogGenderBox>
          </A.ParentDogNameBox>
          <A.ParentDogDetail>
            <A.ParentDogLabel>종</A.ParentDogLabel>
            <A.BreedSelect
              value={fatherBreed}
              onChange={handleBreedChange(setFatherBreed, 'fatherBreed')}
            >
              <A.BreedOption value="">정확한 품종명을 선택하세요</A.BreedOption>
              {breedOptions.map((breed) => (
                <A.BreedOption key={breed} value={breed}>
                  {breed}
                </A.BreedOption>
              ))}
            </A.BreedSelect>
            {fatherBreed === '직접입력' && (
              <A.DogInfoText
                type="text"
                placeholder="품종을 입력하세요"
                value={fatherBreed}
                onChange={handleBreedChange(setFatherBreed, 'fatherBreed')}
              />
            )}
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>출생</A.ParentDogLabel>
            <A.InputWrapper>
              <A.CustomDatePicker
                selected={fatherBirthDate ? new Date(fatherBirthDate) : null}
                onChange={handleDateChange(
                  setFatherBirthDate,
                  'fatherBirthDate',
                )}
                customInput={<DogInfoInput />}
                dateFormat="yyyy-MM-dd"
                popperPlacement="right-start"
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
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>유전질환</A.ParentDogLabel>
            <A.ParentDogValueInput
              type="text"
              maxLength={500}
              onChange={(e) => handleDescriptionChange(e, 'fatherHereditary')}
              placeholder="유전질환을 입력하세요"
            />
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>성격</A.ParentDogLabel>
            <A.ParentDogValueInput
              type="text"
              maxLength={500}
              onChange={(e) => handleDescriptionChange(e, 'fatherCharacter')}
              placeholder="성격에 대해 간략히 적어주세요"
            />
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>
              수의사 검진 결과
              <A.InfoIcon
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5V10.5C10.6667 10.6768 10.5964 10.8464 10.4714 10.9714C10.3464 11.0964 10.1768 11.1667 10 11.1667H2C1.82319 11.1667 1.65362 11.0964 1.5286 10.9714C1.40357 10.8464 1.33333 10.6768 1.33333 10.5V2.5C1.33333 2.32319 1.40357 2.15362 1.5286 2.0286C1.65362 1.90357 1.82319 1.83333 2 1.83333H6C6.17681 1.83333 6.34638 1.7631 6.4714 1.63807C6.59643 1.51305 6.66667 1.34348 6.66667 1.16667C6.66667 0.989856 6.59643 0.820286 6.4714 0.695262C6.34638 0.570238 6.17681 0.5 6 0.5H2C1.46957 0.5 0.960859 0.710714 0.585787 1.08579C0.210714 1.46086 0 1.96957 0 2.5V10.5C0 11.0304 0.210714 11.5391 0.585787 11.9142C0.960859 12.2893 1.46957 12.5 2 12.5H10C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5V6.5C12 6.32319 11.9298 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333Z"
                  fill="#2D2D2D"
                />
                <path
                  d="M8.66728 1.83333H9.72061L5.52728 6.02C5.46479 6.08197 5.4152 6.15571 5.38135 6.23695C5.3475 6.31819 5.33008 6.40532 5.33008 6.49333C5.33008 6.58134 5.3475 6.66848 5.38135 6.74972C5.4152 6.83096 5.46479 6.90469 5.52728 6.96667C5.58925 7.02915 5.66299 7.07875 5.74423 7.11259C5.82547 7.14644 5.9126 7.16387 6.00061 7.16387C6.08862 7.16387 6.17576 7.14644 6.25699 7.11259C6.33823 7.07875 6.41197 7.02915 6.47394 6.96667L10.6673 2.78V3.83333C10.6673 4.01014 10.7375 4.17971 10.8625 4.30474C10.9876 4.42976 11.1571 4.5 11.3339 4.5C11.5108 4.5 11.6803 4.42976 11.8053 4.30474C11.9304 4.17971 12.0006 4.01014 12.0006 3.83333V1.16667C12.0006 0.989856 11.9304 0.820286 11.8053 0.695262C11.6803 0.570238 11.5108 0.5 11.3339 0.5H8.66728C8.49047 0.5 8.3209 0.570238 8.19587 0.695262C8.07085 0.820286 8.00061 0.989856 8.00061 1.16667C8.00061 1.34348 8.07085 1.51305 8.19587 1.63807C8.3209 1.7631 8.49047 1.83333 8.66728 1.83333Z"
                  fill="#2D2D2D"
                />
              </A.InfoIcon>
            </A.ParentDogLabel>
            <A.ParentDogValueInput
              type="text"
              placeholder="검진 결과를 간략히 적어주세요"
              onChange={(e) => handleDescriptionChange(e, 'fatherHealthCheck')}
            />
          </A.ParentDogDetail>
          <A.InfoFileBoxContainer>
            <A.ParentInfoFileBox>
              <label>
                첨부파일
                <input
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFatherFileUpload}
                />
              </label>
            </A.ParentInfoFileBox>
            {fatherUploadedFileName && (
              <A.InfoFileBoxNameContainer>
                <A.InfoFileBoxName>{fatherUploadedFileName}</A.InfoFileBoxName>
                <svg
                  onClick={() => {
                    setFatherUploadedFileName('');
                    updateParentInfo('fatherHealthCheckImages', []);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ cursor: 'pointer' }}
                >
                  <path
                    d="M2.25176 2.25176C2.33137 2.17196 2.42593 2.10864 2.53004 2.06544C2.63416 2.02224 2.74577 2 2.85849 2C2.97121 2 3.08282 2.02224 3.18693 2.06544C3.29104 2.10864 3.38561 2.17196 3.46521 2.25176L8.00022 6.78849L12.5352 2.25176C12.6149 2.17209 12.7095 2.10888 12.8136 2.06576C12.9177 2.02264 13.0293 2.00045 13.142 2.00045C13.2546 2.00045 13.3662 2.02264 13.4703 2.06576C13.5744 2.10888 13.669 2.17209 13.7487 2.25176C13.8284 2.33144 13.8916 2.42603 13.9347 2.53013C13.9778 2.63423 14 2.74581 14 2.85849C14 2.97117 13.9778 3.08274 13.9347 3.18685C13.8916 3.29095 13.8284 3.38554 13.7487 3.46521L9.21196 8.00022L13.7487 12.5352C13.8284 12.6149 13.8916 12.7095 13.9347 12.8136C13.9778 12.9177 14 13.0293 14 13.142C14 13.2546 13.9778 13.3662 13.9347 13.4703C13.8916 13.5744 13.8284 13.669 13.7487 13.7487C13.669 13.8284 13.5744 13.8916 13.4703 13.9347C13.3662 13.9778 13.2546 14 13.142 14C13.0293 14 12.9177 13.9778 12.8136 13.9347C12.7095 13.8916 12.6149 13.8284 12.5352 13.7487L8.00022 9.21196L3.46521 13.7487C3.38554 13.8284 3.29095 13.8916 3.18685 13.9347C3.08274 13.9778 2.97117 14 2.85849 14C2.74581 14 2.63423 13.9778 2.53013 13.9347C2.42603 13.8916 2.33144 13.8284 2.25176 13.7487C2.17209 13.669 2.10888 13.5744 2.06576 13.4703C2.02264 13.3662 2.00045 13.2546 2.00045 13.142C2.00045 13.0293 2.02264 12.9177 2.06576 12.8136C2.10888 12.7095 2.17209 12.6149 2.25176 12.5352L6.78849 8.00022L2.25176 3.46521C2.17196 3.38561 2.10864 3.29104 2.06544 3.18693C2.02224 3.08282 2 2.97121 2 2.85849C2 2.74577 2.02224 2.63416 2.06544 2.53004C2.10864 2.42593 2.17196 2.33137 2.25176 2.25176Z"
                    fill="#737373"
                  />
                </svg>
              </A.InfoFileBoxNameContainer>
            )}
          </A.InfoFileBoxContainer>
        </A.ParentDogInfo>
      </A.ParentDogCard>
    </div>
  );
});

UploadParentDogInfo.displayName = 'UploadParentDogInfo';

UploadParentDogInfo.propTypes = {
  selectedAnimal: PropTypes.string.isRequired,
};

export default UploadParentDogInfo;
