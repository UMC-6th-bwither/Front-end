import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import * as S from './ProfileSetting.style';
import api from '../../api/api';

function ProfileSettingGeneral() {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordCheckVisible, setIsPasswordCheckVisible] = useState(false);

  const [profileImage, setProfileImage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePasswordCheckVisibility = () => {
    setIsPasswordCheckVisible(!isPasswordCheckVisible);
  };

  // 이미지 변경 핸들러
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
  const handleImageClick = () => {
    fileInputRef.current.click(); // 숨겨진 파일 입력 필드를 클릭
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(e.target.value)) {
      setPasswordError('조건에 맞지 않아요.');
    } else {
      setPasswordError('');
    }
  };

  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
    if (password !== e.target.value) {
      setPasswordCheckError('비밀번호가 일치하지 않아요.');
    } else {
      setPasswordCheckError('');
    }
  };

  // 기존 유저 정보 불러오기
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const token = localStorage.getItem('accessToken');

      try {
        const response = await api.get('/user', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.isSuccess) {
          const Data = response.data.result;
          setUserData(response.data.result);
          setProfileImage(Data.userDTO.profileImage);
          setLoading(false);
          console.log('데이터 불러오기 성공 User info:', Data);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        console.error('Error message:', err.message);
      } finally {
        setLoading(false);
      }
    };
    getUserInfo();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // 폼 제출 함수
  const handleSubmitClick = async () => {
    let hasError = false;

    if (passwordError || password.length === 0) {
      setPasswordError('조건에 맞지 않아요.');
      alert('비밀번호를 입력해주세요');
      hasError = true;
    } else if (passwordCheckError || password !== passwordCheck) {
      setPasswordCheckError('비밀번호가 일치하지 않아요.');
      alert('비밀번호가 일치하지 않습니다');
      hasError = true;
    }

    if (!hasError) {
      const requestBody = {
        profileImage,
        password,
      };

      const token = localStorage.getItem('accessToken');
      try {
        const response = await api.patch('/breeder/profile', requestBody, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('데이터 전송 성공 User info:', response);
        alert('변경된 내용이 저장되었습니다');
        navigate(`/MypageBreeder`);
        window.scrollTo(0, 0);
      } catch (err) {
        console.error('Error message:', err.message);
      }
    }
  };

  return (
    <S.MainContainer>
      <S.ProfileContainer>
        <S.Title>프로필 설정</S.Title>

        <S.ProfileCard>
          <S.ImgContainer>
            <S.ProfileImage src={profileImage} alt="Profile" />
            <S.CameraIcon onClick={handleImageClick}>
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1667 3.33333H11.6667V2.08333C11.6667 1.5308 11.4472 1.0009 11.0565 0.610194C10.6658 0.219493 10.1359 0 9.58333 0H7.08333C6.5308 0 6.0009 0.219493 5.61019 0.610194C5.21949 1.0009 5 1.5308 5 2.08333V3.33333H2.5C1.83696 3.33333 1.20107 3.59673 0.732233 4.06557C0.263392 4.53441 0 5.17029 0 5.83333V12.5C0 13.163 0.263392 13.7989 0.732233 14.2678C1.20107 14.7366 1.83696 15 2.5 15H14.1667C14.8297 15 15.4656 14.7366 15.9344 14.2678C16.4033 13.7989 16.6667 13.163 16.6667 12.5V5.83333C16.6667 5.17029 16.4033 4.53441 15.9344 4.06557C15.4656 3.59673 14.8297 3.33333 14.1667 3.33333ZM6.66667 2.08333C6.66667 1.97283 6.71057 1.86685 6.78871 1.78871C6.86685 1.71057 6.97283 1.66667 7.08333 1.66667H9.58333C9.69384 1.66667 9.79982 1.71057 9.87796 1.78871C9.9561 1.86685 10 1.97283 10 2.08333V3.33333H6.66667V2.08333ZM8.33333 12.0833C7.75647 12.0833 7.19256 11.9123 6.71292 11.5918C6.23328 11.2713 5.85944 10.8158 5.63868 10.2828C5.41793 9.74988 5.36017 9.16343 5.47271 8.59765C5.58525 8.03187 5.86304 7.51218 6.27094 7.10427C6.67884 6.69637 7.19854 6.41858 7.76432 6.30604C8.3301 6.1935 8.91654 6.25126 9.44949 6.47202C9.98244 6.69277 10.438 7.06661 10.7585 7.54625C11.0789 8.0259 11.25 8.5898 11.25 9.16667C11.25 9.94021 10.9427 10.6821 10.3957 11.2291C9.84875 11.776 9.10688 12.0833 8.33333 12.0833Z"
                  fill="#FE834D"
                />
              </svg>
            </S.CameraIcon>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
          </S.ImgContainer>

          <S.ProfileInfoContainer>
            <S.Name>{userData.userDTO.name}</S.Name>
            <S.Email>{userData.userDTO.email}</S.Email>
          </S.ProfileInfoContainer>
        </S.ProfileCard>
      </S.ProfileContainer>

      <S.AccountContainer>
        <S.Title>계정 정보</S.Title>
        <div>
          <p>아이디</p>
          <p>{userData.userDTO.username}</p>
        </div>
        <div>
          <p>비밀번호 재설정</p>
          <S.InputContainer>
            <S.PWInput
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="영문, 숫자, 특수문자 포함 8자 이상 적어주세요"
              value={password}
              onChange={handlePasswordChange}
            />
            <S.IconWrapper onClick={togglePasswordVisibility}>
              {isPasswordVisible ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5731 8.95043C2.15272 9.59594 2.15272 10.4041 2.5731 11.0496C3.52804 12.5159 5.76989 15 9.99901 15C14.2281 15 16.47 12.5159 17.4249 11.0496C17.8453 10.4041 17.8453 9.59594 17.4249 8.95043C16.47 7.48409 14.2281 5 9.99901 5C5.76989 5 3.52805 7.48408 2.5731 8.95043ZM9.99888 12C11.1035 12 11.9989 11.1046 11.9989 10C11.9989 8.89543 11.1035 8 9.99888 8C8.89431 8 7.99888 8.89543 7.99888 10C7.99888 11.1046 8.89431 12 9.99888 12Z"
                    fill="#C5C5C5"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.669922 0.806414C1.18886 0.624784 1.75657 0.896191 1.94166 1.41293L1.9469 1.42648C1.95325 1.44247 1.96517 1.47152 1.98329 1.51178C2.01959 1.59245 2.08033 1.71716 2.1703 1.8714C2.3507 2.18065 2.64491 2.60231 3.08993 3.02613C3.96135 3.85606 5.46704 4.75027 8.00027 4.75027C10.5335 4.75027 12.0392 3.85606 12.9106 3.02613C13.3556 2.60231 13.6498 2.18065 13.8302 1.8714C13.9202 1.71716 13.981 1.59245 14.0173 1.51178C14.0354 1.47152 14.0473 1.44247 14.0536 1.42648L14.0589 1.41292C14.244 0.896189 14.8117 0.624785 15.3306 0.806414C15.8519 0.988862 16.1266 1.55934 15.9441 2.08062L15.0003 1.75027C15.9441 2.08062 15.9439 2.08121 15.9437 2.08182L15.9433 2.08311L15.9422 2.08597L15.9398 2.09282L15.9332 2.11088C15.928 2.12484 15.9212 2.1426 15.9127 2.16391C15.8958 2.20652 15.8722 2.2634 15.8411 2.33251C15.779 2.4706 15.6866 2.65839 15.5578 2.87914C15.3007 3.31989 14.8949 3.89823 14.2899 4.47441C14.0842 4.6703 13.8571 4.86438 13.6071 5.05177L14.4913 6.5833C14.7674 7.0616 14.6036 7.67319 14.1253 7.94933C13.647 8.22547 13.0354 8.0616 12.7592 7.5833L11.8669 6.03777C11.0586 6.37167 10.1092 6.61646 9.00027 6.70933V8.25027C9.00027 8.80256 8.55256 9.25027 8.00027 9.25027C7.44799 9.25027 7.00027 8.80256 7.00027 8.25027V6.70933C5.85606 6.61351 4.88172 6.35595 4.05694 6.00565L3.14608 7.5833C2.86994 8.0616 2.25835 8.22547 1.78006 7.94933C1.30177 7.67319 1.13789 7.0616 1.41403 6.5833L2.32725 5.00157C2.10317 4.82981 1.89799 4.65286 1.71062 4.47441C1.10563 3.89823 0.699847 3.31989 0.442744 2.87914C0.313968 2.65839 0.221584 2.4706 0.159445 2.33251C0.128344 2.2634 0.10472 2.20652 0.0878211 2.16391C0.0793683 2.1426 0.072588 2.12484 0.0673871 2.11088L0.0607546 2.09282L0.0583025 2.08597L0.0572884 2.08311L0.0568339 2.08182C0.0566211 2.08121 0.0564141 2.08062 1.00027 1.75027L0.0564141 2.08062C-0.126033 1.55934 0.148643 0.988862 0.669922 0.806414Z"
                    fill="#C5C5C5"
                  />
                </svg>
              )}
            </S.IconWrapper>
          </S.InputContainer>
          {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}
        </div>

        <div>
          <p>비밀번호 확인</p>
          <S.InputContainer>
            <S.PWInput
              type={isPasswordCheckVisible ? 'text' : 'password'}
              value={passwordCheck}
              onChange={handlePasswordCheckChange}
            />

            <S.IconWrapper onClick={togglePasswordCheckVisibility}>
              {isPasswordCheckVisible ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5731 8.95043C2.15272 9.59594 2.15272 10.4041 2.5731 11.0496C3.52804 12.5159 5.76989 15 9.99901 15C14.2281 15 16.47 12.5159 17.4249 11.0496C17.8453 10.4041 17.8453 9.59594 17.4249 8.95043C16.47 7.48409 14.2281 5 9.99901 5C5.76989 5 3.52805 7.48408 2.5731 8.95043ZM9.99888 12C11.1035 12 11.9989 11.1046 11.9989 10C11.9989 8.89543 11.1035 8 9.99888 8C8.89431 8 7.99888 8.89543 7.99888 10C7.99888 11.1046 8.89431 12 9.99888 12Z"
                    fill="#C5C5C5"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.669922 0.806414C1.18886 0.624784 1.75657 0.896191 1.94166 1.41293L1.9469 1.42648C1.95325 1.44247 1.96517 1.47152 1.98329 1.51178C2.01959 1.59245 2.08033 1.71716 2.1703 1.8714C2.3507 2.18065 2.64491 2.60231 3.08993 3.02613C3.96135 3.85606 5.46704 4.75027 8.00027 4.75027C10.5335 4.75027 12.0392 3.85606 12.9106 3.02613C13.3556 2.60231 13.6498 2.18065 13.8302 1.8714C13.9202 1.71716 13.981 1.59245 14.0173 1.51178C14.0354 1.47152 14.0473 1.44247 14.0536 1.42648L14.0589 1.41292C14.244 0.896189 14.8117 0.624785 15.3306 0.806414C15.8519 0.988862 16.1266 1.55934 15.9441 2.08062L15.0003 1.75027C15.9441 2.08062 15.9439 2.08121 15.9437 2.08182L15.9433 2.08311L15.9422 2.08597L15.9398 2.09282L15.9332 2.11088C15.928 2.12484 15.9212 2.1426 15.9127 2.16391C15.8958 2.20652 15.8722 2.2634 15.8411 2.33251C15.779 2.4706 15.6866 2.65839 15.5578 2.87914C15.3007 3.31989 14.8949 3.89823 14.2899 4.47441C14.0842 4.6703 13.8571 4.86438 13.6071 5.05177L14.4913 6.5833C14.7674 7.0616 14.6036 7.67319 14.1253 7.94933C13.647 8.22547 13.0354 8.0616 12.7592 7.5833L11.8669 6.03777C11.0586 6.37167 10.1092 6.61646 9.00027 6.70933V8.25027C9.00027 8.80256 8.55256 9.25027 8.00027 9.25027C7.44799 9.25027 7.00027 8.80256 7.00027 8.25027V6.70933C5.85606 6.61351 4.88172 6.35595 4.05694 6.00565L3.14608 7.5833C2.86994 8.0616 2.25835 8.22547 1.78006 7.94933C1.30177 7.67319 1.13789 7.0616 1.41403 6.5833L2.32725 5.00157C2.10317 4.82981 1.89799 4.65286 1.71062 4.47441C1.10563 3.89823 0.699847 3.31989 0.442744 2.87914C0.313968 2.65839 0.221584 2.4706 0.159445 2.33251C0.128344 2.2634 0.10472 2.20652 0.0878211 2.16391C0.0793683 2.1426 0.072588 2.12484 0.0673871 2.11088L0.0607546 2.09282L0.0583025 2.08597L0.0572884 2.08311L0.0568339 2.08182C0.0566211 2.08121 0.0564141 2.08062 1.00027 1.75027L0.0564141 2.08062C-0.126033 1.55934 0.148643 0.988862 0.669922 0.806414Z"
                    fill="#C5C5C5"
                  />
                </svg>
              )}
            </S.IconWrapper>
          </S.InputContainer>
          {passwordCheckError && (
            <S.ErrorMessage>{passwordCheckError}</S.ErrorMessage>
          )}
        </div>
      </S.AccountContainer>

      <S.SubmitContainer>
        <Button orange onClick={handleSubmitClick}>
          저장
        </Button>
      </S.SubmitContainer>
    </S.MainContainer>
  );
}

export default ProfileSettingGeneral;
