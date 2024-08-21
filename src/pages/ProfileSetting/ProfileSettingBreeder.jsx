import { useState } from 'react';
import Button from '../../components/button/Button';
import * as S from './ProfileSetting.style';
import ProfileSettingDropBox from '../../components/ProfileSettingDropBox/ProfileSettingDropBox';

function ProfileSettingBreeder() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordCheckVisible, setIsPasswordCheckVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePasswordCheckVisibility = () => {
    setIsPasswordCheckVisible(!isPasswordCheckVisible);
  };

  const handleSubmitClick = () => {
    alert('변경된 내용이 저장되었습니다');
    // myback(back)이동 로직 구현
  };

  const [roommateNum, setRoommateNum] = useState('5');

  const handleRoommateNumChange = (value) => {
    setRoommateNum(value);
  };

  return (
    <S.MainContainer>
      <S.ProfileContainer>
        <S.Title>프로필 설정</S.Title>

        <S.ProfileCard>
          <S.ImgContainer>
            <img src="" alt="" />
            <S.CameraIcon>
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
          </S.ImgContainer>

          <S.ProfileInfoContainer>
            <S.Name>해피 브리더</S.Name>
            <S.Email>example@email.com</S.Email>
          </S.ProfileInfoContainer>
        </S.ProfileCard>
      </S.ProfileContainer>

      <S.AccountContainer>
        <S.Title>계정 정보</S.Title>
        <div>
          <p>아이디</p>
          <p>exampleID</p>
        </div>

        <div>
          <p>비밀번호</p>
          <p>examplePW</p>
        </div>

        <div className="passwordcontainer">
          <div>
            <p>비밀번호 재설정</p>
            <S.InputContainer>
              <S.PWInput
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 적어주세요"
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
          </div>

          <div>
            <p>비밀번호 확인</p>
            <S.InputContainer>
              <S.PWInput type={isPasswordCheckVisible ? 'text' : 'password'} />
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
          </div>
        </div>
      </S.AccountContainer>

      <S.AdopterContainer>
        <S.Title>
          분양자 정보<p>브리더 문의 시 브리더에게 보이게 될 정보예요</p>
        </S.Title>

        <S.AdopterInfoContainer>
          <div>
            <p>전화번호</p>
            <S.PhoneNumInput type="text" placeholder="010-1234-5678" />
          </div>

          <div>
            <S.AdressContainer>
              <p>현재 어디서 거주 중이신가요?</p>
              <S.PostCodeContainer>
                <S.PostCodeInput type="text" placeholder="11111" />
                <S.PostCodeBtn>우편번호 찾기</S.PostCodeBtn>
              </S.PostCodeContainer>
              <S.ResidentInput type="text" placeholder="서울 브위더로11 22" />
              <S.ResidentInput type="text" placeholder="106호" />
              <p>문의한 브리더에게는 시, 구까지만 공개돼요</p>
            </S.AdressContainer>
          </div>

          <div>
            <p>거주지에서 반려동물을 키울 수 있나요?</p>
            <S.RadioContainer>
              <S.RadioBtn type="radio" id="yes" name="location" />
              <S.Label htmlFor="yes">
                <S.RadioIcon />네
              </S.Label>

              <S.RadioBtn type="radio" id="no" name="location" />
              <S.Label htmlFor="no">
                <S.RadioIcon />
                아니오
              </S.Label>

              <S.RadioBtn type="radio" id="unknown" name="location" />
              <S.Label htmlFor="unknown">
                <S.RadioIcon />
                모르겠어요
              </S.Label>
            </S.RadioContainer>
          </div>

          <div>
            <p>현재 누구와 살고 계신가요?</p>
            <S.RoommateContainer>
              <S.RoommateInput type="text" placeholder="아빠, 엄마, 동생 2명" />
              <S.RoommateNumContainer>
                <ProfileSettingDropBox
                  id="RoommateNum-dropbox"
                  label="5"
                  options={[
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                    { value: '4', label: '4' },
                    { value: '5', label: '5' },
                    { value: '6+', label: '6명 이상' },
                  ]}
                  onChange={handleRoommateNumChange}
                />
                <span>명</span>
              </S.RoommateNumContainer>
            </S.RoommateContainer>
          </div>

          <div>
            <p>모든 가족 구성원 및 동거인의 동의를 받으셨나요?</p>
            <S.RadioContainer>
              <S.RadioBtn type="radio" id="agree" name="family" />
              <S.Label htmlFor="agree">
                <S.RadioIcon />
                네, 모든 동의를 받았습니다.
              </S.Label>
              <S.RadioBtn type="radio" id="disagree" name="family" />
              <S.Label htmlFor="disagree">
                <S.RadioIcon />
                아니요, 반대하는 분이 계십니다.
              </S.Label>
              <S.RadioBtn type="radio" id="persuading" name="family" />
              <S.Label htmlFor="persuading">
                <S.RadioIcon />
                설득 중입니다.
              </S.Label>
            </S.RadioContainer>
          </div>

          <div>
            <p>현재 다니고 계신 직장 또는 학교가 있으신가요?</p>
            <S.RadioContainer>
              <S.RadioBtn type="radio" id="employed" name="job" />
              <S.Label htmlFor="employed">
                <S.RadioIcon />
                재직 중
              </S.Label>
              <S.RadioBtn type="radio" id="on_leave" name="job" />
              <S.Label htmlFor="on_leave">
                <S.RadioIcon />
                휴직 중
              </S.Label>
              <S.RadioBtn type="radio" id="student" name="job" />
              <S.Label htmlFor="student">
                <S.RadioIcon />
                재학 중
              </S.Label>
              <S.RadioBtn type="radio" id="on_break" name="job" />
              <S.Label htmlFor="on_break">
                <S.RadioIcon />
                휴학 중
              </S.Label>
              <S.RadioBtn type="radio" id="unemployed" name="job" />
              <S.Label htmlFor="unemployed">
                <S.RadioIcon />
                직업없음
              </S.Label>
            </S.RadioContainer>
          </div>

          <div>
            <p>
              다니고 계신 직장이 있으시다면 근무 시간과 출퇴근 시간, 통근 시간을
              알려주세요.
              <S.CommuteTimeContainer>
                <span>출근</span>
                <S.CommuteTimeInput type="text" placeholder="7:00" />
                <span>퇴근</span>
                <S.CommuteTimeInput type="text" placeholder="18:00" />
                <span>왕복</span>
                <S.CommuteTimeInput type="text" placeholder="2" />
                <span>시간</span>
              </S.CommuteTimeContainer>
            </p>
          </div>

          <div>
            <p>이전에 반려동물을 키워본 경험이 있나요?</p>
            <S.RadioContainer>
              <S.RadioBtn type="radio" id="experience_yes" name="experience" />
              <S.Label htmlFor="experience_yes">
                <S.RadioIcon />네
              </S.Label>

              <S.RadioBtn type="radio" id="experience_no" name="experience" />
              <S.Label htmlFor="experience_no" style={{ marginRight: '50%' }}>
                <S.RadioIcon />
                아니요
              </S.Label>
            </S.RadioContainer>
          </div>

          <div>
            <p>
              있다면 현재 다른 반려동물을 키우고 있나요? 종 이름까지 적어주세요.
              <S.BreedInput type="text" placeholder="포메라니안" />
            </p>
          </div>

          <div>
            <p>향후 이사나 여행 계획 등이 있으신가요?</p>
            <S.RadioContainer>
              <S.RadioBtn type="radio" id="moving_yes" name="movingplan" />
              <S.Label htmlFor="moving_yes">
                <S.RadioIcon />
                이사 예정
              </S.Label>

              <S.RadioBtn
                type="radio"
                id="moving_short_trip"
                name="movingplan"
              />
              <S.Label htmlFor="moving_short_trip">
                <S.RadioIcon />
                단기 여행 예정
              </S.Label>

              <S.RadioBtn
                type="radio"
                id="moving_long_trip"
                name="movingplan"
              />
              <S.Label htmlFor="moving_long_trip">
                <S.RadioIcon />
                장기 여행 예정
              </S.Label>

              <S.RadioBtn type="radio" id="moving_none" name="movingplan" />
              <S.Label htmlFor="moving_none">
                <S.RadioIcon />
                계획 없음
              </S.Label>

              <S.RadioBtn type="radio" id="moving_other" name="movingplan" />
              <S.Label htmlFor="moving_other">
                <S.RadioIcon />
                기타
              </S.Label>
            </S.RadioContainer>
          </div>
        </S.AdopterInfoContainer>
      </S.AdopterContainer>

      <S.SubmitContainer>
        <Button orange onClick={handleSubmitClick}>
          저장
        </Button>
      </S.SubmitContainer>
    </S.MainContainer>
  );
}

export default ProfileSettingBreeder;
