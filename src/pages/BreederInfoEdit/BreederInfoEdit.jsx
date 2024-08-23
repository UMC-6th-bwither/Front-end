/* eslint-disable object-shorthand */
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuSelect from '../../components/MenuSelect/MenuSelect';
import * as A from './BreederInfoEdit.style';
import 'react-multi-carousel/lib/styles.css';
import BreederInfo from '../../components/BreederInfoEdit/BreederInfo';
import KennelInfo from '../../components/BreederInfoEdit/KennelInfo';
import BreederQna from '../../components/BreederInfoEdit/BreederQna';
import './BreederInfoEdit.style';
import convertBlobUrlsToFileList from '../../utils/convertBlobUrlsToFileList';
import './styles.css';
import useAuth from '../../hooks/useAuth';
import loadImageFromURL from '../../utils/loadImageFromUrl';

function BreederInfoEdit() {
  const { isLoggedIn, token } = useAuth();

  const [activeMenu, setActiveMenu] = useState('브리더 정보');
  const [topImage, setTopImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [isReviewEventChecked, setIsReviewEventChecked] = useState(false);
  const [reviewEventContent, setReviewEventContent] = useState('');
  const [breederName, setBreederName] = useState('');
  const [breederIntro, setBreederIntro] = useState('');
  const [businessFileName, setBusinessFileName] = useState('');
  const [businessCertImage, setBusinessCertImage] = useState('');

  const [topImageBase64, setTopImageBase64] = useState('');
  const [profileImageBase64, setProfileImageBase64] = useState('');
  const [businessCertImageBase64, setBusinessCertImageBase64] = useState('');

  const navigate = useNavigate();

  const breederInfoRef = useRef(null);
  const kennelInfoRef = useRef(null);
  const careDogRef = useRef(null);
  const qnaRef = useRef(null);
  const topImageInputRef = useRef(null);
  const profileImageInputRef = useRef(null);
  const menuItems = [
    '브리더 정보',
    '켄넬 정보',
    '관리 중인 강아지',
    '질문/답변',
  ];

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === '브리더 정보') {
      breederInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '켄넬 정보') {
      kennelInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '관리 중인 강아지') {
      careDogRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '질문/답변') {
      qnaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBreederNameChange = (e) => {
    const { value } = e.target;
    if (value.length <= 20) {
      setBreederName(value);
    }
  };

  const handleBreederIntroChange = (e) => {
    const { value } = e.target;
    if (value.length <= 180) {
      setBreederIntro(value);
    }
  };

  const handleTopImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTopImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
      setTopImage(file);
    }
  };

  // 파일 선택
  const handleBusinessFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBusinessFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBusinessCertImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
      setBusinessCertImage(file);
    }
  };
  // 파일 삭제
  const handleBusinessFileRemove = () => {
    setBusinessFileName('');
    document.getElementById('businessFileInput').value = '';
    setBusinessCertImage(null);
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
      setProfileImage(file);
    }
  };

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() - 1); // 하루를 뺍니다

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const getSerializedData = async () => {
    const breederInfoData = breederInfoRef.current.getBreederInfoData();
    const kennelInfoData = kennelInfoRef.current.getKennelInfoData();
    const FAQData = qnaRef.current.getQnaData();

    // certificates와 kennelPictures 속성에 대해 convertBlobUrlsToFileList 함수를 적용
    const certificates = await convertBlobUrlsToFileList(
      breederInfoData.certificates,
    );
    const kennelPictures = await convertBlobUrlsToFileList(
      kennelInfoData.kennelPictures,
    );

    const data = {
      topImage: topImage,
      profileImage: profileImage,
      isReviewEventChecked: isReviewEventChecked,
      reviewEventContent: reviewEventContent,
      breederName: breederName,
      breederIntro: breederIntro,
      businessCertImage: businessCertImage,
      ...breederInfoData,
      ...kennelInfoData,
      ...FAQData,
      certificates, // 변환된 certificates 추가
      kennelPictures, // 변환된 kennelPictures 추가
    };

    return data;
  };

  const createFormData = (data) => {
    const formData = new FormData();

    // 파일 처리
    formData.append('backgroundImage', data.topImage);
    formData.append('registrationFiles', data.businessCertImage);
    data.certificates?.forEach((file, index) => {
      formData.append(`certificateFiles`, file);
    });
    data.kennelPictures?.forEach((file, index) => {
      formData.append(`kennelFiles`, file);
    });

    // 텍스트 필드 처리
    formData.append('tradeName', data.breederName);
    formData.append('description', data.breederIntro);
    formData.append('reviewEvent', data.reviewEventContent);
    formData.append('tradePhone', data.contactNumber);
    formData.append('contactableTime', data.contactTime);
    formData.append('snsAddress', data.sns);
    formData.append('descriptionDetail', data.breederDescription);

    // 동물 타입 처리
    const species = [];
    data.animalTypes.forEach((animal) => {
      species.push(animal.name);
      // formData.append(`species[${index}]`, animal.name);
    });
    formData.append('species', species.join(', '));

    // 텍스트 필드 처리
    formData.append('schoolName', data.schoolName);
    formData.append('departmentName', data.majorName);
    formData.append('enrollmentDate', formatDateString(data.enrollDate));
    formData.append('graduationDate', formatDateString(data.graduateDate));
    formData.append('kennelAddress', data.kennelAddress);
    formData.append('businessTime', data.kennelHours);
    formData.append('animalCount', data.kennelPopulation);

    // 질문 필드 처리
    formData.append('questionGuarantee', data.question1);
    formData.append('questionPedigree', data.question2);
    formData.append('questionBaby', data.question3);
    formData.append('questionPeriod', data.question4);
    formData.append('questionSupport', data.question5);

    // FormData 반환
    return formData;
  };

  const createCareerData = (input) => {
    return input.map((item) => {
      return {
        tradeName: item.company, // "company" -> "tradeName"
        joinDate: formatDateString(item.startDate), // "startDate" -> "joinDate" (날짜 부분만 추출)
        leaveDate: item.endDate ? formatDateString(item.endDate) : null, // "endDate" -> "leaveDate" (null일 경우 null 그대로 유지)
        currentlyEmployed: item.endDate === null, // "endDate"가 null이면 현재 근무 중으로 설정
        description: item.description, // "description" 그대로 매핑
      };
    });
  };

  const handleSaveClick = async () => {
    if (isReviewEventChecked && !reviewEventContent.trim()) {
      // eslint-disable-next-line no-alert
      alert('리뷰이벤트 내용을 입력해주세요.');
      return;
    }

    // 저장 로직 추가 예정

    // FormData 만들기
    const data = await getSerializedData();
    console.log(data);
    const formData = createFormData(data);
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ': ' + pair[1]);
    // }
    // console.log(formData);

    const apiUrl = import.meta.env.VITE_API_URL;
    // fetch 요청 1
    try {
      const endPoint = `${apiUrl}/breeder/info`;
      const res = await fetch(endPoint, {
        method: 'PATCH',
        body: formData,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
        },
      });
      const resData = await res.json();
    } catch (err) {
      alert('오류가 발생했습니다.');
    }

    // fetch 요청 2
    try {
      const careerData = createCareerData(data.careerList);
      const endPoint = `${apiUrl}/breeder/breeding`;
      const res2 = await fetch(endPoint, {
        method: 'PATCH',
        body: JSON.stringify(careerData),
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const res2Data = await res2.json();
    } catch (err) {
      alert('오류가 발생했습니다.');
    }

    // fetch 요청 3
    try {
      const endPoint = `${apiUrl}/breeder/profile`;
      const body = new FormData();
      body.append('profileImage', profileImage);

      fetch(endPoint, {
        body,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          // 'Content-Type': 'multipart/form-data',
        },
        method: 'PATCH',
      });
    } catch (err) {
      alert('오류가 발생했습니다.');
    }

    alert('성공적으로 저장되었습니다.');
    navigate('/mypagebreeder'); // 브리더 마이페이지
  };

  const handleReviewEventCheck = () => {
    setIsReviewEventChecked(!isReviewEventChecked);
    if (!isReviewEventChecked) {
      setReviewEventContent('');
    }
  };

  // 이미 저장된 폼 데이터 받아오는 로직
  const [userData, setUserData] = useState();
  const fetchUserData = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const endPoint = `${apiUrl}/user`;
      const res = await fetch(endPoint, {
        method: 'GET',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
        },
      });
      const { result } = await res.json();
      const { breederDTO, userDTO } = result;
      setProfileImageBase64(userDTO.profileImage);
      setProfileImage(await loadImageFromURL(userDTO.profileImage));
      setUserData(result);
      setTopImage(true);
      if (
        breederDTO.breederFiles.find((value) => {
          if (
            value.type === 'REGISTRATION' &&
            value.breederFilePath &&
            value.breederFilePath !== 'null'
          ) {
            return true;
          }
          return false;
        })
      )
        setBusinessFileName('사업자 등록증이 존재합니다.');
      setTopImageBase64(breederDTO.backgroundImage);
      setBreederName(breederDTO.tradeName);
      setReviewEventContent(breederDTO.reviewEvent);
      setBreederIntro(
        breederDTO.description !== 'null' ? breederDTO.description : '',
      );
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('불러오는 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (isLoggedIn && token) {
      fetchUserData();
    }
  }, [isLoggedIn]);

  return (
    <A.Container>
      <A.TopImage
        style={topImage ? { backgroundImage: `url(${topImageBase64})` } : {}}
      />
      <A.TopImageIcon onClick={() => topImageInputRef.current.click()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
        >
          <g filter="url(#filter0_d_912_16835)">
            <circle cx="21" cy="17" r="17" fill="white" />
          </g>
          <path
            d="M21.334 20.418C22.0243 20.418 22.584 19.8583 22.584 19.168C22.584 18.4776 22.0243 17.918 21.334 17.918C20.6436 17.918 20.084 18.4776 20.084 19.168C20.084 19.8583 20.6436 20.418 21.334 20.418Z"
            fill="#FE834D"
          />
          <path
            d="M27.1667 13.3333H24.6667V12.0833C24.6667 11.5308 24.4472 11.0009 24.0565 10.6102C23.6658 10.2195 23.1359 10 22.5833 10H20.0833C19.5308 10 19.0009 10.2195 18.6102 10.6102C18.2195 11.0009 18 11.5308 18 12.0833V13.3333H15.5C14.837 13.3333 14.2011 13.5967 13.7322 14.0656C13.2634 14.5344 13 15.1703 13 15.8333V22.5C13 23.163 13.2634 23.7989 13.7322 24.2678C14.2011 24.7366 14.837 25 15.5 25H27.1667C27.8297 25 28.4656 24.7366 28.9344 24.2678C29.4033 23.7989 29.6667 23.163 29.6667 22.5V15.8333C29.6667 15.1703 29.4033 14.5344 28.9344 14.0656C28.4656 13.5967 27.8297 13.3333 27.1667 13.3333ZM19.6667 12.0833C19.6667 11.9728 19.7106 11.8668 19.7887 11.7887C19.8668 11.7106 19.9728 11.6667 20.0833 11.6667H22.5833C22.6938 11.6667 22.7998 11.7106 22.878 11.7887C22.9561 11.8668 23 11.9728 23 12.0833V13.3333H19.6667V12.0833ZM21.3333 22.0833C20.7565 22.0833 20.1926 21.9123 19.7129 21.5918C19.2333 21.2713 18.8594 20.8158 18.6387 20.2828C18.4179 19.7499 18.3602 19.1634 18.4727 18.5977C18.5852 18.0319 18.863 17.5122 19.2709 17.1043C19.6788 16.6964 20.1985 16.4186 20.7643 16.306C21.3301 16.1935 21.9165 16.2513 22.4495 16.472C22.9824 16.6928 23.438 17.0666 23.7585 17.5463C24.0789 18.0259 24.25 18.5898 24.25 19.1667C24.25 19.9402 23.9427 20.6821 23.3957 21.2291C22.8487 21.776 22.1069 22.0833 21.3333 22.0833Z"
            fill="#FE834D"
          />
          <defs>
            <filter
              id="filter0_d_912_16835"
              x="0"
              y="0"
              width="42"
              height="42"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_912_16835"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_912_16835"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </A.TopImageIcon>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={topImageInputRef}
        onChange={handleTopImageChange}
      />
      <A.TopBox>
        <A.OverlappingImageContainer>
          <A.OverlappingImage
            style={
              profileImage
                ? { backgroundImage: `url(${profileImageBase64})` }
                : {}
            }
          />
          <A.ProfileIcon onClick={() => profileImageInputRef.current.click()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <g filter="url(#filter0_d_912_16835)">
                <circle cx="21" cy="17" r="17" fill="white" />
              </g>
              <path
                d="M21.334 20.418C22.0243 20.418 22.584 19.8583 22.584 19.168C22.584 18.4776 22.0243 17.918 21.334 17.918C20.6436 17.918 20.084 18.4776 20.084 19.168C20.084 19.8583 20.6436 20.418 21.334 20.418Z"
                fill="#FE834D"
              />
              <path
                d="M27.1667 13.3333H24.6667V12.0833C24.6667 11.5308 24.4472 11.0009 24.0565 10.6102C23.6658 10.2195 23.1359 10 22.5833 10H20.0833C19.5308 10 19.0009 10.2195 18.6102 10.6102C18.2195 11.0009 18 11.5308 18 12.0833V13.3333H15.5C14.837 13.3333 14.2011 13.5967 13.7322 14.0656C13.2634 14.5344 13 15.1703 13 15.8333V22.5C13 23.163 13.2634 23.7989 13.7322 24.2678C14.2011 24.7366 14.837 25 15.5 25H27.1667C27.8297 25 28.4656 24.7366 28.9344 24.2678C29.4033 23.7989 29.6667 23.163 29.6667 22.5V15.8333C29.6667 15.1703 29.4033 14.5344 28.9344 14.0656C28.4656 13.5967 27.8297 13.3333 27.1667 13.3333ZM19.6667 12.0833C19.6667 11.9728 19.7106 11.8668 19.7887 11.7887C19.8668 11.7106 19.9728 11.6667 20.0833 11.6667H22.5833C22.6938 11.6667 22.7998 11.7106 22.878 11.7887C22.9561 11.8668 23 11.9728 23 12.0833V13.3333H19.6667V12.0833ZM21.3333 22.0833C20.7565 22.0833 20.1926 21.9123 19.7129 21.5918C19.2333 21.2713 18.8594 20.8158 18.6387 20.2828C18.4179 19.7499 18.3602 19.1634 18.4727 18.5977C18.5852 18.0319 18.863 17.5122 19.2709 17.1043C19.6788 16.6964 20.1985 16.4186 20.7643 16.306C21.3301 16.1935 21.9165 16.2513 22.4495 16.472C22.9824 16.6928 23.438 17.0666 23.7585 17.5463C24.0789 18.0259 24.25 18.5898 24.25 19.1667C24.25 19.9402 23.9427 20.6821 23.3957 21.2291C22.8487 21.776 22.1069 22.0833 21.3333 22.0833Z"
                fill="#FE834D"
              />
              <defs>
                <filter
                  id="filter0_d_912_16835"
                  x="0"
                  y="0"
                  width="42"
                  height="42"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_912_16835"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_912_16835"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </A.ProfileIcon>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={profileImageInputRef}
            onChange={handleProfileImageChange}
          />
        </A.OverlappingImageContainer>
        <A.TopLeftBox>
          <A.BreederInfoTitleBox>
            <A.BreederInfoTitle
              type="text"
              placeholder="켄넬/캐터리 이름을 입력하세요"
              value={breederName}
              onChange={handleBreederNameChange}
            />
            <A.BreederInfoTitleBoxRight>
              <div>{breederName?.length}/20</div>
              <A.CertificateIconBox2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.09367 2.50789C0.70315 2.11736 0.70315 1.4842 1.09367 1.09367C1.4842 0.70315 2.11736 0.70315 2.50789 1.09367L5.00078 3.58657L7.49368 1.09367C7.8842 0.70315 8.51737 0.70315 8.90789 1.09367C9.29841 1.4842 9.29841 2.11736 8.90789 2.50789L6.415 5.00078L8.90789 7.49367C9.29841 7.8842 9.29841 8.51736 8.90789 8.90789C8.51736 9.29841 7.8842 9.29841 7.49367 8.90789L5.00078 6.415L2.50789 8.90789C2.11736 9.29841 1.4842 9.29841 1.09368 8.90789C0.703151 8.51736 0.703151 7.8842 1.09368 7.49367L3.58657 5.00078L1.09367 2.50789Z"
                    fill="white"
                  />
                </svg>
              </A.CertificateIconBox2>
            </A.BreederInfoTitleBoxRight>
          </A.BreederInfoTitleBox>

          <A.BreederInfoSubTitleWrapper>
            <A.BreederInfoSubTitle
              type="text"
              placeholder="켄넬 / 캐터리에 대한 간략한 소개를 해주세요."
              value={breederIntro}
              onChange={handleBreederIntroChange}
            />
            <A.CharCount>{breederIntro?.length}/180</A.CharCount>
          </A.BreederInfoSubTitleWrapper>

          <A.BreederInfoSubBtnBox>
            <A.UploadButton
              whiteBorder
              onClick={() =>
                document.getElementById('businessFileInput').click()
              }
            >
              사업자 등록증 업로드
            </A.UploadButton>

            {businessFileName && (
              <>
                <A.BreederInfoSubBtnText>
                  {businessFileName}
                </A.BreederInfoSubBtnText>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  onClick={handleBusinessFileRemove}
                  style={{ cursor: 'pointer' }}
                >
                  <path
                    d="M2.25176 2.25176C2.33137 2.17196 2.42593 2.10864 2.53004 2.06544C2.63416 2.02224 2.74577 2 2.85849 2C2.97121 2 3.08282 2.02224 3.18693 2.06544C3.29104 2.10864 3.38561 2.17196 3.46521 2.25176L8.00022 6.78849L12.5352 2.25176C12.6149 2.17209 12.7095 2.10888 12.8136 2.06576C12.9177 2.02264 13.0293 2.00045 13.142 2.00045C13.2546 2.00045 13.3662 2.02264 13.4703 2.06576C13.5744 2.10888 13.669 2.17209 13.7487 2.25176C13.8284 2.33144 13.8916 2.42603 13.9347 2.53013C13.9778 2.63423 14 2.74581 14 2.85849C14 2.97117 13.9778 3.08274 13.9347 3.18685C13.8916 3.29095 13.8284 3.38554 13.7487 3.46521L9.21196 8.00022L13.7487 12.5352C13.8284 12.6149 13.8916 12.7095 13.9347 12.8136C13.9778 12.9177 14 13.0293 14 13.142C14 13.2546 13.9778 13.3662 13.9347 13.4703C13.8916 13.5744 13.8284 13.669 13.7487 13.7487C13.669 13.8284 13.5744 13.8916 13.4703 13.9347C13.3662 13.9778 13.2546 14 13.142 14C13.0293 14 12.9177 13.9778 12.8136 13.9347C12.7095 13.8916 12.6149 13.8284 12.5352 13.7487L8.00022 9.21196L3.46521 13.7487C3.38554 13.8284 3.29104 13.8916 3.18693 13.9347C3.08282 13.9778 2.97121 14 2.85849 14C2.74581 14 2.63423 13.9778 2.53013 13.9347C2.42603 13.8916 2.33144 13.8284 2.25176 13.7487C2.17209 13.669 2.10888 13.5744 2.06576 13.4703C2.02264 13.3662 2.00045 13.2546 2.00045 13.142C2.00045 13.0293 2.02264 12.9177 2.06576 12.8136C2.10888 12.7095 2.17209 12.6149 2.25176 12.5352L6.78849 8.00022L2.25176 3.46521C2.17196 3.38561 2.10864 3.29104 2.06544 3.18693C2.02224 3.08282 2 2.97121 2 2.85849C2 2.74577 2.02224 2.63416 2.06544 2.53004C2.10864 2.42593 2.17196 2.33137 2.25176 2.25176Z"
                    fill="#737373"
                  />
                </svg>
              </>
            )}
            <input
              type="file"
              id="businessFileInput"
              style={{ display: 'none' }}
              onChange={handleBusinessFileChange}
            />
          </A.BreederInfoSubBtnBox>

          <A.ReviewEventTitleBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={handleReviewEventCheck}
              style={{ cursor: 'pointer' }}
            >
              <g clipPath="url(#clip0_912_16866)">
                <rect
                  width="24"
                  height="24"
                  rx="4"
                  fill={isReviewEventChecked ? '#FE834D' : 'white'}
                />
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="3"
                  stroke="#C5C5C5"
                  strokeOpacity="0.5"
                  strokeWidth="2"
                />
                {isReviewEventChecked && (
                  <path
                    d="M5.00004 12.2632L10.04 17L19 7"
                    stroke="#FFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                {!isReviewEventChecked && (
                  <path
                    d="M5.00004 12.2632L10.04 17L19 7"
                    stroke="#C5C5C5"
                    strokeOpacity="0.5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </g>
              <defs>
                <clipPath id="clip0_912_16866">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <A.ReviewEventTitle>리뷰이벤트</A.ReviewEventTitle>
          </A.ReviewEventTitleBox>

          <A.ReviewEventContent
            type="text"
            placeholder="이벤트 시 제공되는 서비스를 적어주세요"
            value={reviewEventContent}
            onChange={(e) => setReviewEventContent(e.target.value)}
            disabled={!isReviewEventChecked}
          />
        </A.TopLeftBox>
      </A.TopBox>

      <A.InfoWrapper>
        <MenuSelect
          menus={menuItems}
          activeMenu={activeMenu}
          setActiveMenu={handleMenuClick}
        />
        <BreederInfo ref={breederInfoRef} userData={userData} />
        <KennelInfo ref={kennelInfoRef} userData={userData} />
        <BreederQna ref={qnaRef} userData={userData} />
      </A.InfoWrapper>
      <A.FinishBtn onClick={handleSaveClick}>저장</A.FinishBtn>
    </A.Container>
  );
}

export default BreederInfoEdit;
