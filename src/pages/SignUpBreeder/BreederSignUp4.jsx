/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import * as B from './BreederSignUp.style';
import progressBar90 from '/icons/signUp/progress-bar-90.svg';
import Button from '../../components/SignUpButton/Button';
import 'react-datepicker/dist/react-datepicker.css';
import beforeCheck from '/icons/signUp/check_before.svg';
import afterCheck from '/icons/signUp/check_after.svg';
import { updateSignupStep4, resetSignup } from '../../redux/breederSignupSlice';
import { postBreederSignup } from '../../apis/postUser';
import AddressSearchModal from '../../components/AddressSearch/AddressSearchModal';

function MoreIcon() {
  return (
    <>
      <B.InputImgMore>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M20 11.4286H11.4286V20H8.57143V11.4286H0V8.57143H8.57143V0H11.4286V8.57143H20V11.4286Z"
            fill="#272727"
          />
        </svg>
      </B.InputImgMore>
      <B.InputImgMoreText>파일 첨부</B.InputImgMoreText>
    </>
  );
}

function AddMoreButton({ count, setCount }) {
  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <B.AddMoreInputButtonContainer type="button" onClick={clickHandler}>
      <B.AddMoreInputButtonIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M16.5 9.14286H9.64286V16H7.35714V9.14286H0.5V6.85714H7.35714V0H9.64286V6.85714H16.5V9.14286Z"
            fill="white"
          />
        </svg>
      </B.AddMoreInputButtonIcon>
      <B.AddMoreInputButtonText>추가하기</B.AddMoreInputButtonText>
    </B.AddMoreInputButtonContainer>
  );
}

export default function BreederSignUp4() {
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [addressDetail, setAddressDetail] = useState('');

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [certCount, setCertCount] = useState(1);
  const [careerCount, setCareerCount] = useState(1);

  const [animalHospital, setAnimalHospital] = useState('');
  const [certificateNames, setCertificateNames] = useState(['']);
  const [certificateImages, setCertificateImages] = useState([]);

  const [careers, setCareers] = useState([
    {
      tradeName: null,
      startDate: null,
      endDate: null,
      showStartPicker: false,
      showEndPicker: false,
      isCurrentlyWorking: false,
    },
  ]);

  const handleCheck = (index) => {
    const updatedCareers = careers.map((career, i) =>
      i === index
        ? { ...career, isCurrentlyWorking: !career.isCurrentlyWorking }
        : career,
    );
    setCareers(updatedCareers);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files].slice(0, 6));
  };

  // 자격증 이름 변경 핸들러
  const handleNameChange = (index, event) => {
    const newNames = [...certificateNames];
    newNames[index] = event.target.value;
    setCertificateNames(newNames);
  };

  // 자격증 파일 추가
  const handleCertificateFileChange = (index, event) => {
    const file = event.target.files[0];
    const updatedFiles = [...certificateImages];
    updatedFiles[index] = file;
    setCertificateImages(updatedFiles);
  };

  // 자격증 파일 삭제
  const removeFile = (index) => {
    const newImages = [...certificateImages];
    newImages[index] = null;
    setCertificateImages(newImages);
  };

  const handleAddCareer = () => {
    setCareerCount(careerCount + 1);
    setCareers([
      ...careers,
      {
        tradeName: null,
        startDate: null,
        endDate: null,
        showStartPicker: false,
        showEndPicker: false,
        isCurrentlyWorking: false,
      },
    ]);
  };

  // tradeName 업데이트
  const handleTradeNameChange = (index, value) => {
    const updatedCareers = careers.map((career, i) =>
      i === index ? { ...career, tradeName: value } : career,
    );
    setCareers(updatedCareers);
  };

  const handleDateChange = (index, field, date) => {
    const formattedDate = date.toISOString().substring(0, 7);
    const updatedCareers = careers.map((career, i) =>
      i === index ? { ...career, [field]: formattedDate } : career,
    );
    setCareers(updatedCareers);
  };

  const handlePickerToggle = (index, field, value) => {
    const updatedCareers = careers.map((career, i) =>
      i === index ? { ...career, [field]: value } : career,
    );
    setCareers(updatedCareers);
  };

  const dispatch = useDispatch();
  const signupData = useSelector((state) => state.breederSignup);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');

    dispatch(
      updateSignupStep4({
        breederJoinDTO: {
          ...signupData.breederJoinDTO,
          zipcode,
          address,
          addressDetail,
          animalHospital,
          certificateNames,
          breedingCareers: careers.map((career) => ({
            tradeName: career.tradeName || '',
            joinDate: career.startDate,
            leaveDate: career.endDate,
            currentlyEmployed: career.isCurrentlyWorking,
          })),
        },
        certificateImages,
        kennelImages: selectedFiles,
      }),
    );

    const finalData = {
      ...signupData,
      breederJoinDTO: {
        ...signupData.breederJoinDTO,
        zipcode,
        address,
        addressDetail,
        animalHospital,
        certificateNames,
        breedingCareers: careers.map((career) => ({
          tradeName: career.tradeName || '',
          joinDate: career.startDate,
          leaveDate: career.endDate,
          currentlyEmployed: career.isCurrentlyWorking,
        })),
      },
      certificateImages,
      kennelImages: selectedFiles,
    };

    console.log('리덕스 상태:', finalData);

    navigate('/breeder-signup/5');

    try {
      const response = await postBreederSignup(finalData);
      console.log('브리더 회원가입 성공, Server response:', response);
      dispatch(resetSignup());
    } catch (error) {
      console.log('브리더 회원가입 api 요청 중 에러', error);
    }
  };

  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 브위더와 함께 올바른 반려동물 분양문화를 이끌어가요
      </B.WelcomeMsg>
      <B.Container>
        <B.ProgressBar src={progressBar90} />
        <B.Text>거의 다 왔어요! 더욱 자세히 알고싶어요</B.Text>
        <B.Form onSubmit={onSubmit}>
          <B.InputArea>
            <B.InputWrapper2>
              <B.InputTitleRequired>
                운영하고 있는 켄넬/캐터리 주소
              </B.InputTitleRequired>
              <AddressSearchModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setZipCode={setZipcode}
                setAddress={setAddress}
              />
              <B.InputBoxWrapper>
                <B.InputBox2
                  placeholder="우편번호 입력"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
                <B.PostCodeBtn type="button" onClick={() => setIsOpen(true)}>
                  우편번호 찾기
                </B.PostCodeBtn>
              </B.InputBoxWrapper>
              <B.InputBox2
                placeholder="주소 입력"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <B.InputBox2
                placeholder="상세 주소"
                value={addressDetail}
                onChange={(e) => setAddressDetail(e.target.value)}
              />
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitleRequired>캔넬/캐터리 사진</B.InputTitleRequired>
              <B.InputImgLayout>
                {[...Array(6)].map((_, index) => (
                  <B.InputImgContainer key={index}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                      id={`file-input-${index}`}
                    />
                    <label htmlFor={`file-input-${index}`}>
                      <B.InputImgContent>
                        {selectedFiles[index] ? (
                          <img
                            src={URL.createObjectURL(selectedFiles[index])}
                            alt={`Selected file ${index + 1}`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        ) : (
                          (selectedFiles[index - 1] || index === 0) && (
                            <MoreIcon />
                          )
                        )}
                      </B.InputImgContent>
                    </label>
                  </B.InputImgContainer>
                ))}
              </B.InputImgLayout>
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitle>이용 중인 동물병원</B.InputTitle>
              <B.InputBox2
                type="text"
                placeholder="병원명을 입력해주세요"
                value={animalHospital}
                onChange={(e) => setAnimalHospital(e.target.value)}
              />
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitle>자격증</B.InputTitle>

              {[...Array(certCount)].map((_, index) => (
                <B.InputBoxWrapper key={index}>
                  <B.InputBox2
                    placeholder="자격증명"
                    value={certificateNames[index] || ''}
                    onChange={(e) => handleNameChange(index, e)}
                    style={{
                      display:
                        certificateNames[index] && certificateImages[index]
                          ? 'none'
                          : 'inline-block',
                    }}
                  />
                  {certificateNames[index] && certificateImages[index] && (
                    <B.CertName>{certificateNames[index]}</B.CertName>
                  )}
                  <label htmlFor={`fileInput${index}`}>
                    <B.PostCodeBtn
                      style={{
                        display: certificateImages[index] ? 'none' : '',
                      }}
                    >
                      파일 첨부
                    </B.PostCodeBtn>
                    <input
                      type="file"
                      id={`fileInput${index}`}
                      style={{ display: 'none' }}
                      onChange={(e) => handleCertificateFileChange(index, e)}
                    />
                  </label>
                  {certificateImages[index] && (
                    <B.CertFileWrap>
                      <B.CertFile>{certificateImages[index].name}</B.CertFile>
                      <B.X onClick={() => removeFile(index)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2.25176 2.25176C2.33137 2.17196 2.42593 2.10864 2.53004 2.06544C2.63416 2.02224 2.74577 2 2.85849 2C2.97121 2 3.08282 2.02224 3.18693 2.06544C3.29104 2.10864 3.38561 2.17196 3.46521 2.25176L8.00022 6.78849L12.5352 2.25176C12.6149 2.17209 12.7095 2.10888 12.8136 2.06576C12.9177 2.02264 13.0293 2.00045 13.142 2.00045C13.2546 2.00045 13.3662 2.02264 13.4703 2.06576C13.5744 2.10888 13.669 2.17209 13.7487 2.25176C13.8284 2.33144 13.8916 2.42603 13.9347 2.53013C13.9778 2.63423 14 2.74581 14 2.85849C14 2.97117 13.9778 3.08274 13.9347 3.18685C13.8916 3.29095 13.8284 3.38554 13.7487 3.46521L9.21196 8.00022L13.7487 12.5352C13.8284 12.6149 13.8916 12.7095 13.9347 12.8136C13.9778 12.9177 14 13.0293 14 13.142C14 13.2546 13.9778 13.3662 13.9347 13.4703C13.8916 13.5744 13.8284 13.669 13.7487 13.7487C13.669 13.8284 13.5744 13.8916 13.4703 13.9347C13.3662 13.9778 13.2546 14 13.142 14C13.0293 14 12.9177 13.9778 12.8136 13.9347C12.7095 13.8916 12.6149 13.8284 12.5352 13.7487L8.00022 9.21196L3.46521 13.7487C3.38554 13.8284 3.29095 13.8916 3.18685 13.9347C3.08274 13.9778 2.97117 14 2.85849 14C2.74581 14 2.63423 13.9778 2.53013 13.9347C2.42603 13.8916 2.33144 13.8284 2.25176 13.7487C2.17209 13.669 2.10888 13.5744 2.06576 13.4703C2.02264 13.3662 2.00045 13.2546 2.00045 13.142C2.00045 13.0293 2.02264 12.9177 2.06576 12.8136C2.10888 12.7095 2.17209 12.6149 2.25176 12.5352L6.78849 8.00022L2.25176 3.46521C2.17196 3.38561 2.10864 3.29104 2.06544 3.18693C2.02224 3.08282 2 2.97121 2 2.85849C2 2.74577 2.02224 2.63416 2.06544 2.53004C2.10864 2.42593 2.17196 2.33137 2.25176 2.25176Z"
                            fill="#737373"
                          />
                        </svg>
                      </B.X>
                    </B.CertFileWrap>
                  )}
                </B.InputBoxWrapper>
              ))}

              <B.AddMoreInputButtonLayout>
                <AddMoreButton count={certCount} setCount={setCertCount} />
              </B.AddMoreInputButtonLayout>
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitleRequired>번식 경력</B.InputTitleRequired>
              {careers.map((career, index) => (
                <React.Fragment key={index}>
                  <B.BreedingInfoInputLayout>
                    <B.BreedingInfoInput
                      type="text"
                      style={{ marginRight: '12px' }}
                      placeholder="상호명"
                      value={career.tradeName || ''}
                      onChange={(e) =>
                        handleTradeNameChange(index, e.target.value)
                      }
                    />
                    <B.BreedingInfoInputPeriodLayout>
                      <B.BreedingInfoInputPeriodWrapper>
                        <DatePicker
                          selected={career.startDate}
                          onChange={(date) =>
                            handleDateChange(index, 'startDate', date)
                          }
                          dateFormat="yyyy-MM"
                          displayFormat="yyyy-MM"
                          customInput={
                            <B.BreedingInfoInputPeriod
                              type="text"
                              placeholder="입사연월"
                              value={career.startDate}
                            />
                          }
                          open={career.showStartPicker}
                          onClickOutside={() =>
                            handlePickerToggle(index, 'showStartPicker', false)
                          }
                        />
                        <B.BreedingInfoInputPeriodIcon
                          onClick={() =>
                            handlePickerToggle(index, 'showStartPicker', true)
                          }
                        >
                          <svg
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
                          </svg>
                        </B.BreedingInfoInputPeriodIcon>
                      </B.BreedingInfoInputPeriodWrapper>
                      <B.BreedingInfoInputPeriodDash />
                      <B.BreedingInfoInputPeriodWrapper>
                        <DatePicker
                          selected={career.endDate}
                          onChange={(date) =>
                            handleDateChange(index, 'endDate', date)
                          }
                          dateFormat="yyyy-MM"
                          displayFormat="yyyy-MM"
                          customInput={
                            <B.BreedingInfoInputPeriod
                              type="text"
                              placeholder="퇴사연월"
                              value={career.endDate}
                            />
                          }
                          open={career.showEndPicker}
                          onClickOutside={() =>
                            handlePickerToggle(index, 'showEndPicker', false)
                          }
                        />
                        <B.BreedingInfoInputPeriodIcon
                          onClick={() =>
                            handlePickerToggle(index, 'showEndPicker', true)
                          }
                        >
                          <svg
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
                          </svg>
                        </B.BreedingInfoInputPeriodIcon>
                      </B.BreedingInfoInputPeriodWrapper>
                    </B.BreedingInfoInputPeriodLayout>
                  </B.BreedingInfoInputLayout>
                  <B.BreedingInfoWorkingLayout>
                    <B.CheckBox
                      type="checkbox"
                      checked={careers[index].isCurrentlyWorking}
                      onClick={() => handleCheck(index)}
                    />
                    <B.Check
                      src={
                        careers[index].isCurrentlyWorking
                          ? afterCheck
                          : beforeCheck
                      }
                    />
                    <B.BreedingInfoWorkingLabel>
                      재직중
                    </B.BreedingInfoWorkingLabel>
                  </B.BreedingInfoWorkingLayout>
                </React.Fragment>
              ))}
              <B.AddMoreInputButtonLayout>
                <AddMoreButton count={careerCount} setCount={handleAddCareer} />
              </B.AddMoreInputButtonLayout>
            </B.InputWrapper2>
          </B.InputArea>
          <B.BtnWrapper2>
            <Button white text="이전" path="breeder-signup/3" />
            <Button text="다음" path="breeder-signup/5" type="submit" />
          </B.BtnWrapper2>
        </B.Form>
      </B.Container>
    </B.Background>
  );
}
