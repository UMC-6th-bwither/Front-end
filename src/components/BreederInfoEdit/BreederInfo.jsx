import React, { useState } from 'react';
import * as A from '../../pages/BreederInfoEdit/BreederInfoEdit.style';

const BreederInfo = React.forwardRef((props, ref) => {
  const [certificates, setCertificates] = useState([]);
  const [animalTypes, setAnimalTypes] = useState([
    { id: 1, name: '비글' },
    { id: 2, name: '고양이' },
  ]);
  const [newAnimalType, setNewAnimalType] = useState('');

  const [employmentStartDate, setEmploymentStartDate] = useState(null);
  const [employmentEndDate, setEmploymentEndDate] = useState(null);
  const [isEmploymentStartCalendarOpen, setIsEmploymentStartCalendarOpen] =
    useState(false);
  const [isEmploymentEndCalendarOpen, setIsEmploymentEndCalendarOpen] =
    useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCertificates([
        ...certificates,
        { id: URL.createObjectURL(file), name: file.name },
      ]);
    }
  };

  const handleDeleteCertificate = (id) => {
    const newCertificates = certificates.filter((cert) => cert.id !== id);
    setCertificates(newCertificates);
  };

  const handleDeleteAnimalType = (id) => {
    const newAnimalTypes = animalTypes.filter((animal) => animal.id !== id);
    setAnimalTypes(newAnimalTypes);
  };

  const handleAddAnimalType = () => {
    if (newAnimalType.trim() !== '') {
      setAnimalTypes([...animalTypes, { id: Date.now(), name: newAnimalType }]);
      setNewAnimalType('');
    }
  };

  return (
    <div ref={ref} style={{ marginBottom: '64px' }}>
      <A.InfoItem>
        <A.InfoTitle>브리더 정보</A.InfoTitle>
        <A.InfoContentBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              d="M0.50928 0.5C0.248357 0.5 0.0585938 0.689763 0.0585938 0.950687V19.0493C0.0585938 19.3102 0.248357 19.5 0.50928 19.5H11.4918C11.7527 19.5 11.9425 19.3102 11.9425 19.0493V0.950687C11.9425 0.689763 11.7527 0.5 11.4918 0.5L0.50928 0.5ZM2.43063 2.87203H9.54673V14.7322H2.43063V2.87203ZM5.98868 15.9182C6.65285 15.9182 7.1747 16.4401 7.1747 17.1042C7.1747 17.7684 6.65285 18.2903 5.98868 18.2903C5.32451 18.2903 4.80266 17.7684 4.80266 17.1042C4.80266 16.4401 5.32451 15.9182 5.98868 15.9182Z"
              fill="#737373"
            />
          </svg>
          <A.InfoInputBox
            type="text"
            placeholder="연락 가능한 번호를 입력해주세요"
          />
        </A.InfoContentBox>
        <A.InfoContentBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ marginLeft: '-4px' }}
          >
            <g clipPath="url(#clip0_1_1782)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.918 10.0957C17.918 12.0848 17.1278 13.9925 15.7213 15.399C14.3147 16.8055 12.4071 17.5957 10.418 17.5957C8.42885 17.5957 6.52119 16.8055 5.11467 15.399C3.70814 13.9925 2.91797 12.0848 2.91797 10.0957C2.91797 8.10658 3.70814 6.19893 5.11467 4.7924C6.52119 3.38588 8.42885 2.5957 10.418 2.5957C12.4071 2.5957 14.3147 3.38588 15.7213 4.7924C17.1278 6.19893 17.918 8.10658 17.918 10.0957Z"
                stroke="#737373"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.56445 6.10254V10.9485H13.0255"
                stroke="#737373"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1782">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <A.InfoInputBox
            type="text"
            placeholder="연락 가능한 시간을 입력해주세요"
          />
        </A.InfoContentBox>
        <A.InfoContentBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ marginLeft: '-1px' }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.85714 14.8571C6.85714 15.4883 7.36882 16 8 16C8.63118 16 9.14286 15.4883 9.14286 14.8571V9.14286H14.8571C15.4883 9.14286 16 8.63118 16 8C16 7.36882 15.4883 6.85714 14.8571 6.85714H9.14286V1.14286C9.14286 0.511675 8.63118 0 8 0C7.36882 0 6.85714 0.511674 6.85714 1.14286V6.85714H1.14286C0.511675 6.85714 0 7.36882 0 8C0 8.63118 0.511674 9.14286 1.14286 9.14286H6.85714V14.8571Z"
              fill="#737373"
            />
          </svg>
          <A.InfoContent>블로그</A.InfoContent>
          <A.InfoInputBox
            type="text"
            placeholder="블로그 주소를 입력해주세요"
          />
        </A.InfoContentBox>
        <A.InfoContentBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ marginLeft: '-1px' }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.85714 14.8571C6.85714 15.4883 7.36882 16 8 16C8.63118 16 9.14286 15.4883 9.14286 14.8571V9.14286H14.8571C15.4883 9.14286 16 8.63118 16 8C16 7.36882 15.4883 6.85714 14.8571 6.85714H9.14286V1.14286C9.14286 0.511675 8.63118 0 8 0C7.36882 0 6.85714 0.511674 6.85714 1.14286V6.85714H1.14286C0.511675 6.85714 0 7.36882 0 8C0 8.63118 0.511674 9.14286 1.14286 9.14286H6.85714V14.8571Z"
              fill="#737373"
            />
          </svg>
          <A.InfoContent>인스타그램</A.InfoContent>
          <A.InfoInputBox
            type="text"
            placeholder="인스타그램 주소를 입력해주세요"
          />
        </A.InfoContentBox>
      </A.InfoItem>
      <A.InfoItem>
        <A.InfoTitle>브리더 상세설명</A.InfoTitle>
        <A.InfoInputContentBox
          type="text"
          placeholder="브리더에 대해 알려주세요"
        />
      </A.InfoItem>
      <A.InfoItemSecond>
        <A.InfoTitle>전문 견종</A.InfoTitle>

        <A.AnimalSelectBox>
          {animalTypes.map((animal) => (
            <A.AnimalSelect key={animal.id}>
              {animal.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                onClick={() => handleDeleteAnimalType(animal.id)}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M2.25176 2.25176C2.33137 2.17196 2.42593 2.10864 2.53004 2.06544C2.63416 2.02224 2.74577 2 2.85849 2C2.97121 2 3.08282 2.02224 3.18693 2.06544C3.29104 2.10864 3.38561 2.17196 3.46521 2.25176L8.00022 6.78849L12.5352 2.25176C12.6149 2.17209 12.7095 2.10888 12.8136 2.06576C12.9177 2.02264 13.0293 2.00045 13.142 2.00045C13.2546 2.00045 13.3662 2.02264 13.4703 2.06576C13.5744 2.10888 13.669 2.17209 13.7487 2.25176C13.8284 2.33144 13.8916 2.42603 13.9347 2.53013C13.9778 2.63423 14 2.74581 14 2.85849C14 2.97117 13.9778 3.08274 13.9347 3.18685C13.8916 3.29095 13.8284 3.38554 13.7487 3.46521L9.21196 8.00022L13.7487 12.5352C13.8284 12.6149 13.8916 12.7095 13.9347 12.8136C13.9778 12.9177 14 13.0293 14 13.142C14 13.2546 13.9778 13.3662 13.9347 13.4703C13.8916 13.5744 13.8284 13.669 13.7487 13.7487C13.669 13.8284 13.5744 13.8916 13.4703 13.9347C13.3662 13.9778 13.2546 14 13.142 14C13.0293 14 12.9177 13.9778 12.8136 13.9347C12.7095 13.8916 12.6149 13.8284 12.5352 13.7487L8.00022 9.21196L3.46521 13.7487C3.38554 13.8284 3.29095 13.8916 3.18685 13.9347C3.08274 13.9778 2.97117 14 2.85849 14C2.74581 14 2.63423 13.9778 2.53013 13.9347C2.42603 13.8916 2.33144 13.8284 2.25176 13.7487C2.17209 13.669 2.10888 13.5744 2.06576 13.4703C2.02264 13.3662 2.00045 13.2546 2.00045 13.142C2.00045 13.0293 2.02264 12.9177 2.06576 12.8136C2.10888 12.7095 2.17209 12.6149 2.25176 12.5352L6.78849 8.00022L2.25176 3.46521C2.17196 3.38561 2.10864 3.29104 2.06544 3.18693C2.02224 3.08282 2 2.97121 2 2.85849C2 2.74577 2.02224 2.63416 2.06544 2.53004C2.10864 2.42593 2.17196 2.33137 2.25176 2.25176Z"
                  fill="#C5C5C5"
                />
              </svg>
            </A.AnimalSelect>
          ))}
        </A.AnimalSelectBox>
        <A.InfoInputBtnBox>
          <A.InfoInputContentLine
            type="text"
            value={newAnimalType}
            onChange={(e) => setNewAnimalType(e.target.value)}
            placeholder="종을 입력해주세요"
          />
          <A.InfoInputBtn onClick={handleAddAnimalType}>추가</A.InfoInputBtn>
        </A.InfoInputBtnBox>
      </A.InfoItemSecond>
      <A.InfoItemSecond>
        <A.InfoTitle>경력</A.InfoTitle>
        <A.InfoContentBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.68 3C14.813 3 16.578 4.55 16.578 6.512L16.577 7.011H20.86C21.181 7.011 21.447 7.253 21.493 7.567L21.5 7.663V19.348C21.5 19.708 21.214 20 20.86 20H3.14003C3.05519 19.9992 2.97134 19.9817 2.89327 19.9485C2.81519 19.9153 2.74442 19.8671 2.68499 19.8066C2.62556 19.746 2.57863 19.6744 2.5469 19.5957C2.51516 19.517 2.49924 19.4328 2.50003 19.348V7.663C2.50003 7.303 2.78603 7.012 3.14003 7.012L7.42203 7.011V6.512C7.42203 4.612 9.07503 3.1 11.115 3.005L11.32 3H12.68ZM7.91403 14.834H3.77903V18.696H20.22V14.834H16.085V15.687C16.085 16.047 15.799 16.338 15.445 16.338C15.2907 16.3366 15.1419 16.2798 15.0259 16.1779C14.9099 16.0761 14.8344 15.9359 14.813 15.783L14.806 15.687L14.805 14.834H9.19403V15.687C9.19403 16.047 8.90803 16.338 8.55403 16.338C8.39948 16.3368 8.2505 16.2801 8.13429 16.1783C8.01808 16.0764 7.94238 15.9361 7.92103 15.783L7.91503 15.687L7.91403 14.834ZM20.22 8.315H3.78003L3.77903 13.53H7.91403V12.678C7.91403 12.318 8.20103 12.026 8.55403 12.026C8.87603 12.026 9.14203 12.267 9.18703 12.582L9.19403 12.678V13.53H14.805V12.678C14.805 12.318 15.092 12.026 15.445 12.026C15.767 12.026 16.033 12.267 16.079 12.582L16.085 12.678V13.53H20.22V8.315ZM12.68 4.304H11.32C9.85503 4.304 8.70203 5.316 8.70203 6.512V7.012H15.298V6.512C15.298 5.364 14.235 4.385 12.854 4.309L12.68 4.304Z"
              fill="#FE834D"
            />
          </svg>
          <A.InfoContentCarrer>총 경력 3년</A.InfoContentCarrer>
        </A.InfoContentBox>
        <A.MiniTitle>해피 브리더</A.MiniTitle>
        <A.MiniContent>2023년 3월 - 현재 · 1년 4개월</A.MiniContent>
        <A.MiniContent2>브리더 전문가 양성과정 수료</A.MiniContent2>
        <A.InfoInputContentLine3Box>
          <A.InfoInputContentLine3
            type="text"
            style={{ marginBottom: '12px' }}
            placeholder="기관명을 입력해주세요"
          />
          <A.InfoInputContentLine2Box>
            <A.DateInputWrapper>
              <A.InfoInputContentLine2
                type="text"
                placeholder="입사연월"
                value={
                  employmentStartDate
                    ? employmentStartDate.toISOString().split('T')[0]
                    : ''
                }
                onFocus={() => setIsEmploymentStartCalendarOpen(true)}
                readOnly
              />
              <A.CalendarIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                fill="none"
                onClick={() =>
                  setIsEmploymentStartCalendarOpen(
                    !isEmploymentStartCalendarOpen,
                  )
                }
              >
                <path
                  d="M3.9711 0C4.10106 0 4.22569 0.0516249 4.31758 0.143518C4.40948 0.23541 4.4611 0.360044 4.4611 0.49V1.4063H9.723V0.4963C9.723 0.366344 9.77462 0.24171 9.86652 0.149818C9.95841 0.0579249 10.083 0.0063 10.213 0.0063C10.343 0.0063 10.4676 0.0579249 10.5595 0.149818C10.6514 0.24171 10.703 0.366344 10.703 0.4963V1.4063H12.6C12.9712 1.4063 13.3272 1.5537 13.5897 1.8161C13.8522 2.0785 13.9998 2.43442 14 2.8056V12.6007C13.9998 12.9719 13.8522 13.3278 13.5897 13.5902C13.3272 13.8526 12.9712 14 12.6 14H1.4C1.02882 14 0.672829 13.8526 0.410298 13.5902C0.147767 13.3278 0.000185591 12.9719 0 12.6007L0 2.8056C0.000185591 2.43442 0.147767 2.0785 0.410298 1.8161C0.672829 1.5537 1.02882 1.4063 1.4 1.4063H3.4811V0.4893C3.48129 0.359465 3.53299 0.235012 3.62487 0.14327C3.71674 0.0515286 3.84126 -1.32484e-07 3.9711 0ZM0.98 5.4194V12.6007C0.98 12.6559 0.990864 12.7105 1.01197 12.7614C1.03308 12.8124 1.06401 12.8587 1.10302 12.8977C1.14202 12.9367 1.18832 12.9676 1.23927 12.9887C1.29023 13.0098 1.34484 13.0207 1.4 13.0207H12.6C12.6552 13.0207 12.7098 13.0098 12.7607 12.9887C12.8117 12.9676 12.858 12.9367 12.897 12.8977C12.936 12.8587 12.9669 12.8124 12.988 12.7614C13.0091 12.7105 13.02 12.6559 13.02 12.6007V5.4292L0.98 5.4194ZM4.6669 10.2333V11.3995H3.5V10.2333H4.6669ZM7.5831 10.2333V11.3995H6.4169V10.2333H7.5831ZM10.5 10.2333V11.3995H9.3331V10.2333H10.5ZM4.6669 7.4494V8.6156H3.5V7.4494H4.6669ZM7.5831 7.4494V8.6156H6.4169V7.4494H7.5831ZM10.5 7.4494V8.6156H9.3331V7.4494H10.5ZM3.4811 2.3856H1.4C1.34484 2.3856 1.29023 2.39646 1.23927 2.41757C1.18832 2.43868 1.14202 2.46961 1.10302 2.50862C1.06401 2.54762 1.03308 2.59392 1.01197 2.64487C0.990864 2.69583 0.98 2.75044 0.98 2.8056V4.4401L13.02 4.4499V2.8056C13.02 2.75044 13.0091 2.69583 12.988 2.64487C12.9669 2.59392 12.936 2.54762 12.897 2.50862C12.858 2.46961 12.8117 2.43868 12.7607 2.41757C12.7098 2.39646 12.6552 2.3856 12.6 2.3856H10.703V3.0359C10.703 3.16586 10.6514 3.29049 10.5595 3.38238C10.4676 3.47428 10.343 3.5259 10.213 3.5259C10.083 3.5259 9.95841 3.47428 9.86652 3.38238C9.77462 3.29049 9.723 3.16586 9.723 3.0359V2.3856H4.4611V3.0296C4.4611 3.15956 4.40948 3.28419 4.31758 3.37608C4.22569 3.46798 4.10106 3.5196 3.9711 3.5196C3.84114 3.5196 3.71651 3.46798 3.62462 3.37608C3.53272 3.28419 3.4811 3.15956 3.4811 3.0296V2.3856Z"
                  fill="#C5C5C5"
                />
              </A.CalendarIcon>
              {isEmploymentStartCalendarOpen && (
                <A.CustomDatePicker
                  selected={employmentStartDate}
                  onChange={(date) => {
                    setEmploymentStartDate(date);
                    setIsEmploymentStartCalendarOpen(false);
                  }}
                  inline
                  dateFormat="yyyy/MM/dd"
                />
              )}
            </A.DateInputWrapper>
            <A.InfoInputContentLine22 />
            <A.DateInputWrapper>
              <A.InfoInputContentLine2
                type="text"
                placeholder="퇴사연월"
                value={
                  employmentEndDate
                    ? employmentEndDate.toISOString().split('T')[0]
                    : ''
                }
                onFocus={() => setIsEmploymentEndCalendarOpen(true)}
                readOnly
              />
              <A.CalendarIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                fill="none"
                onClick={() =>
                  setIsEmploymentEndCalendarOpen(!isEmploymentEndCalendarOpen)
                }
              >
                <path
                  d="M3.9711 0C4.10106 0 4.22569 0.0516249 4.31758 0.143518C4.40948 0.23541 4.4611 0.360044 4.4611 0.49V1.4063H9.723V0.4963C9.723 0.366344 9.77462 0.24171 9.86652 0.149818C9.95841 0.0579249 10.083 0.0063 10.213 0.0063C10.343 0.0063 10.4676 0.0579249 10.5595 0.149818C10.6514 0.24171 10.703 0.366344 10.703 0.4963V1.4063H12.6C12.9712 1.4063 13.3272 1.5537 13.5897 1.8161C13.8522 2.0785 13.9998 2.43442 14 2.8056V12.6007C13.9998 12.9719 13.8522 13.3278 13.5897 13.5902C13.3272 13.8526 12.9712 14 12.6 14H1.4C1.02882 14 0.672829 13.8526 0.410298 13.5902C0.147767 13.3278 0.000185591 12.9719 0 12.6007L0 2.8056C0.000185591 2.43442 0.147767 2.0785 0.410298 1.8161C0.672829 1.5537 1.02882 1.4063 1.4 1.4063H3.4811V0.4893C3.48129 0.359465 3.53299 0.235012 3.62487 0.14327C3.71674 0.0515286 3.84126 -1.32484e-07 3.9711 0ZM0.98 5.4194V12.6007C0.98 12.6559 0.990864 12.7105 1.01197 12.7614C1.03308 12.8124 1.06401 12.8587 1.10302 12.8977C1.14202 12.9367 1.18832 12.9676 1.23927 12.9887C1.29023 13.0098 1.34484 13.0207 1.4 13.0207H12.6C12.6552 13.0207 12.7098 13.0098 12.7607 12.9887C12.8117 12.9676 12.858 12.9367 12.897 12.8977C12.936 12.8587 12.9669 12.8124 12.988 12.7614C13.0091 12.7105 13.02 12.6559 13.02 12.6007V5.4292L0.98 5.4194ZM4.6669 10.2333V11.3995H3.5V10.2333H4.6669ZM7.5831 10.2333V11.3995H6.4169V10.2333H7.5831ZM10.5 10.2333V11.3995H9.3331V10.2333H10.5ZM4.6669 7.4494V8.6156H3.5V7.4494H4.6669ZM7.5831 7.4494V8.6156H6.4169V7.4494H7.5831ZM10.5 7.4494V8.6156H9.3331V7.4494H10.5ZM3.4811 2.3856H1.4C1.34484 2.3856 1.29023 2.39646 1.23927 2.41757C1.18832 2.43868 1.14202 2.46961 1.10302 2.50862C1.06401 2.54762 1.03308 2.59392 1.01197 2.64487C0.990864 2.69583 0.98 2.75044 0.98 2.8056V4.4401L13.02 4.4499V2.8056C13.02 2.75044 13.0091 2.69583 12.988 2.64487C12.9669 2.59392 12.936 2.54762 12.897 2.50862C12.858 2.46961 12.8117 2.43868 12.7607 2.41757C12.7098 2.39646 12.6552 2.3856 12.6 2.3856H10.703V3.0359C10.703 3.16586 10.6514 3.29049 10.5595 3.38238C10.4676 3.47428 10.343 3.5259 10.213 3.5259C10.083 3.5259 9.95841 3.47428 9.86652 3.38238C9.77462 3.29049 9.723 3.16586 9.723 3.0359V2.3856H4.4611V3.0296C4.4611 3.15956 4.40948 3.28419 4.31758 3.37608C4.22569 3.46798 4.10106 3.5196 3.9711 3.5196C3.84114 3.5196 3.71651 3.46798 3.62462 3.37608C3.53272 3.28419 3.4811 3.15956 3.4811 3.0296V2.3856Z"
                  fill="#C5C5C5"
                />
              </A.CalendarIcon>
              {isEmploymentEndCalendarOpen && (
                <A.CustomDatePicker
                  selected={employmentEndDate}
                  onChange={(date) => {
                    setEmploymentEndDate(date);
                    setIsEmploymentEndCalendarOpen(false);
                  }}
                  inline
                  dateFormat="yyyy/MM/dd"
                />
              )}
            </A.DateInputWrapper>
          </A.InfoInputContentLine2Box>
        </A.InfoInputContentLine3Box>

        <A.InfoInputContentBox
          type="text"
          placeholder="경력에 대한 간단한 설명을 작성해주세요"
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '24px',
            justifyContent: 'flex-end',
            gap: '12px',
          }}
        >
          <A.InfoInputBtn>저장</A.InfoInputBtn>
          <A.InfoInputBtn>추가</A.InfoInputBtn>
        </div>
      </A.InfoItemSecond>
      <A.InfoItemSecond>
        <A.InfoTitle>학력</A.InfoTitle>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '970px',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '12px',
          }}
        >
          <A.InfoInputContentLine4
            type="text"
            placeholder="학교명을 입력해주세요"
          />
          <A.InfoInputContentLine4
            type="text"
            placeholder="학과명을 입력해주세요"
          />
        </div>
        {/* 달력추가 예정 */}
        <A.InfoInputContentLine2Box>
          <A.DateInputWrapper>
            <A.InfoInputContentLine2
              type="text"
              placeholder="입학연월"
              value={startDate ? startDate.toISOString().split('T')[0] : ''}
              onFocus={() => setIsStartCalendarOpen(true)}
              readOnly
            />
            <A.CalendarIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              fill="none"
              onClick={() => setIsStartCalendarOpen(!isStartCalendarOpen)}
            >
              <path
                d="M3.9711 0C4.10106 0 4.22569 0.0516249 4.31758 0.143518C4.40948 0.23541 4.4611 0.360044 4.4611 0.49V1.4063H9.723V0.4963C9.723 0.366344 9.77462 0.24171 9.86652 0.149818C9.95841 0.0579249 10.083 0.0063 10.213 0.0063C10.343 0.0063 10.4676 0.0579249 10.5595 0.149818C10.6514 0.24171 10.703 0.366344 10.703 0.4963V1.4063H12.6C12.9712 1.4063 13.3272 1.5537 13.5897 1.8161C13.8522 2.0785 13.9998 2.43442 14 2.8056V12.6007C13.9998 12.9719 13.8522 13.3278 13.5897 13.5902C13.3272 13.8526 12.9712 14 12.6 14H1.4C1.02882 14 0.672829 13.8526 0.410298 13.5902C0.147767 13.3278 0.000185591 12.9719 0 12.6007L0 2.8056C0.000185591 2.43442 0.147767 2.0785 0.410298 1.8161C0.672829 1.5537 1.02882 1.4063 1.4 1.4063H3.4811V0.4893C3.48129 0.359465 3.53299 0.235012 3.62487 0.14327C3.71674 0.0515286 3.84126 -1.32484e-07 3.9711 0ZM0.98 5.4194V12.6007C0.98 12.6559 0.990864 12.7105 1.01197 12.7614C1.03308 12.8124 1.06401 12.8587 1.10302 12.8977C1.14202 12.9367 1.18832 12.9676 1.23927 12.9887C1.29023 13.0098 1.34484 13.0207 1.4 13.0207H12.6C12.6552 13.0207 12.7098 13.0098 12.7607 12.9887C12.8117 12.9676 12.858 12.9367 12.897 12.8977C12.936 12.8587 12.9669 12.8124 12.988 12.7614C13.0091 12.7105 13.02 12.6559 13.02 12.6007V5.4292L0.98 5.4194ZM4.6669 10.2333V11.3995H3.5V10.2333H4.6669ZM7.5831 10.2333V11.3995H6.4169V10.2333H7.5831ZM10.5 10.2333V11.3995H9.3331V10.2333H10.5ZM4.6669 7.4494V8.6156H3.5V7.4494H4.6669ZM7.5831 7.4494V8.6156H6.4169V7.4494H7.5831ZM10.5 7.4494V8.6156H9.3331V7.4494H10.5ZM3.4811 2.3856H1.4C1.34484 2.3856 1.29023 2.39646 1.23927 2.41757C1.18832 2.43868 1.14202 2.46961 1.10302 2.50862C1.06401 2.54762 1.03308 2.59392 1.01197 2.64487C0.990864 2.69583 0.98 2.75044 0.98 2.8056V4.4401L13.02 4.4499V2.8056C13.02 2.75044 13.0091 2.69583 12.988 2.64487C12.9669 2.59392 12.936 2.54762 12.897 2.50862C12.858 2.46961 12.8117 2.43868 12.7607 2.41757C12.7098 2.39646 12.6552 2.3856 12.6 2.3856H10.703V3.0359C10.703 3.16586 10.6514 3.29049 10.5595 3.38238C10.4676 3.47428 10.343 3.5259 10.213 3.5259C10.083 3.5259 9.95841 3.47428 9.86652 3.38238C9.77462 3.29049 9.723 3.16586 9.723 3.0359V2.3856H4.4611V3.0296C4.4611 3.15956 4.40948 3.28419 4.31758 3.37608C4.22569 3.46798 4.10106 3.5196 3.9711 3.5196C3.84114 3.5196 3.71651 3.46798 3.62462 3.37608C3.53272 3.28419 3.4811 3.15956 3.4811 3.0296V2.3856Z"
                fill="#C5C5C5"
              />
            </A.CalendarIcon>
            {isStartCalendarOpen && (
              <A.CustomDatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setIsStartCalendarOpen(false);
                }}
                inline
                dateFormat="yyyy/MM/dd"
              />
            )}
          </A.DateInputWrapper>
          <A.InfoInputContentLine22 />
          <A.DateInputWrapper>
            <A.InfoInputContentLine2
              type="text"
              placeholder="졸업연월"
              value={endDate ? endDate.toISOString().split('T')[0] : ''}
              onFocus={() => setIsEndCalendarOpen(true)}
              readOnly
            />
            <A.CalendarIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              fill="none"
              onClick={() => setIsEndCalendarOpen(!isEndCalendarOpen)}
            >
              <path
                d="M3.9711 0C4.10106 0 4.22569 0.0516249 4.31758 0.143518C4.40948 0.23541 4.4611 0.360044 4.4611 0.49V1.4063H9.723V0.4963C9.723 0.366344 9.77462 0.24171 9.86652 0.149818C9.95841 0.0579249 10.083 0.0063 10.213 0.0063C10.343 0.0063 10.4676 0.0579249 10.5595 0.149818C10.6514 0.24171 10.703 0.366344 10.703 0.4963V1.4063H12.6C12.9712 1.4063 13.3272 1.5537 13.5897 1.8161C13.8522 2.0785 13.9998 2.43442 14 2.8056V12.6007C13.9998 12.9719 13.8522 13.3278 13.5897 13.5902C13.3272 13.8526 12.9712 14 12.6 14H1.4C1.02882 14 0.672829 13.8526 0.410298 13.5902C0.147767 13.3278 0.000185591 12.9719 0 12.6007L0 2.8056C0.000185591 2.43442 0.147767 2.0785 0.410298 1.8161C0.672829 1.5537 1.02882 1.4063 1.4 1.4063H3.4811V0.4893C3.48129 0.359465 3.53299 0.235012 3.62487 0.14327C3.71674 0.0515286 3.84126 -1.32484e-07 3.9711 0ZM0.98 5.4194V12.6007C0.98 12.6559 0.990864 12.7105 1.01197 12.7614C1.03308 12.8124 1.06401 12.8587 1.10302 12.8977C1.14202 12.9367 1.18832 12.9676 1.23927 12.9887C1.29023 13.0098 1.34484 13.0207 1.4 13.0207H12.6C12.6552 13.0207 12.7098 13.0098 12.7607 12.9887C12.8117 12.9676 12.858 12.9367 12.897 12.8977C12.936 12.8587 12.9669 12.8124 12.988 12.7614C13.0091 12.7105 13.02 12.6559 13.02 12.6007V5.4292L0.98 5.4194ZM4.6669 10.2333V11.3995H3.5V10.2333H4.6669ZM7.5831 10.2333V11.3995H6.4169V10.2333H7.5831ZM10.5 10.2333V11.3995H9.3331V10.2333H10.5ZM4.6669 7.4494V8.6156H3.5V7.4494H4.6669ZM7.5831 7.4494V8.6156H6.4169V7.4494H7.5831ZM10.5 7.4494V8.6156H9.3331V7.4494H10.5ZM3.4811 2.3856H1.4C1.34484 2.3856 1.29023 2.39646 1.23927 2.41757C1.18832 2.43868 1.14202 2.46961 1.10302 2.50862C1.06401 2.54762 1.03308 2.59392 1.01197 2.64487C0.990864 2.69583 0.98 2.75044 0.98 2.8056V4.4401L13.02 4.4499V2.8056C13.02 2.75044 13.0091 2.69583 12.988 2.64487C12.9669 2.59392 12.936 2.54762 12.897 2.50862C12.858 2.46961 12.8117 2.43868 12.7607 2.41757C12.7098 2.39646 12.6552 2.3856 12.6 2.3856H10.703V3.0359C10.703 3.16586 10.6514 3.29049 10.5595 3.38238C10.4676 3.47428 10.343 3.5259 10.213 3.5259C10.083 3.5259 9.95841 3.47428 9.86652 3.38238C9.77462 3.29049 9.723 3.16586 9.723 3.0359V2.3856H4.4611V3.0296C4.4611 3.15956 4.40948 3.28419 4.31758 3.37608C4.22569 3.46798 4.10106 3.5196 3.9711 3.5196C3.84114 3.5196 3.71651 3.46798 3.62462 3.37608C3.53272 3.28419 3.4811 3.15956 3.4811 3.0296V2.3856Z"
                fill="#C5C5C5"
              />
            </A.CalendarIcon>
            {isEndCalendarOpen && (
              <A.CustomDatePicker
                selected={endDate}
                onChange={(date) => {
                  setEndDate(date);
                  setIsEndCalendarOpen(false);
                }}
                inline
                dateFormat="yyyy/MM/dd"
              />
            )}
          </A.DateInputWrapper>{' '}
        </A.InfoInputContentLine2Box>
      </A.InfoItemSecond>
      <A.InfoItem>
        <A.InfoTitle>자격증 및 기타 서류</A.InfoTitle>
        <A.CertificateImgBox>
          {certificates.map((cert) => (
            <div key={cert.id} style={{ position: 'relative' }}>
              <A.CertificateImg as="img" src={cert.id} alt={cert.name} />
              <A.CertificateIconBox>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  style={{
                    position: 'absolute',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleDeleteCertificate(cert.id)}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.09367 2.50789C0.70315 2.11736 0.70315 1.4842 1.09367 1.09367C1.4842 0.70315 2.11736 0.70315 2.50789 1.09367L5.00078 3.58657L7.49368 1.09367C7.8842 0.70315 8.51737 0.70315 8.90789 1.09367C9.29841 1.4842 9.29841 2.11736 8.90789 2.50789L6.415 5.00078L8.90789 7.49367C9.29841 7.8842 9.29841 8.51736 8.90789 8.90789C8.51736 9.29841 7.8842 9.29841 7.49367 8.90789L5.00078 6.415L2.50789 8.90789C2.11736 9.29841 1.4842 9.29841 1.09368 8.90789C0.703151 8.51736 0.703151 7.8842 1.09368 7.49367L3.58657 5.00078L1.09367 2.50789Z"
                    fill="white"
                  />
                </svg>
              </A.CertificateIconBox>
            </div>
          ))}
          <label htmlFor="file-upload">
            <A.CertificateImg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M17 0C17.5636 0 18.1041 0.223884 18.5026 0.622398C18.9011 1.02091 19.125 1.56141 19.125 2.125V14.875H31.875C32.4386 14.875 32.9791 15.0989 33.3776 15.4974C33.7761 15.8959 34 16.4364 34 17C34 17.5636 33.7761 18.1041 33.3776 18.5026C32.9791 18.9011 32.4386 19.125 31.875 19.125H19.125V31.875C19.125 32.4386 18.9011 32.9791 18.5026 33.3776C18.1041 33.7761 17.5636 34 17 34C16.4364 34 15.8959 33.7761 15.4974 33.3776C15.0989 32.9791 14.875 32.4386 14.875 31.875V19.125H2.125C1.56141 19.125 1.02091 18.9011 0.622398 18.5026C0.223884 18.1041 0 17.5636 0 17C0 16.4364 0.223884 15.8959 0.622398 15.4974C1.02091 15.0989 1.56141 14.875 2.125 14.875H14.875V2.125C14.875 1.56141 15.0989 1.02091 15.4974 0.622398C15.8959 0.223884 16.4364 0 17 0Z"
                  fill="#C5C5C5"
                />
              </svg>
              파일 첨부
            </A.CertificateImg>
            <input
              id="file-upload"
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
          </label>
        </A.CertificateImgBox>
      </A.InfoItem>
      <A.Line />
    </div>
  );
});

BreederInfo.displayName = 'BreederInfo';

export default BreederInfo;
