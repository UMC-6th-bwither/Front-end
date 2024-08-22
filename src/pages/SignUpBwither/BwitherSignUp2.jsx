import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as B from './BwitherSignUp.style';
import progressBar50 from '/icons/signUp/progress-bar-50.svg';
import Button from '../../components/SignUpButton/Button';
// import failX from '/icons/signUp/fail_x.svg';
import { updateSignupStep2, resetSignup } from '../../redux/signupSlice';
import { postSignUp } from '../../apis/postUser';
import Dropdown from '../../components/SignUpDropdown/Dropdown';
import AddressSearchModal from '../../components/AddressSearch/AddressSearchModal';

export default function BwitherSignUp2() {
  const dispatch = useDispatch();
  const signupData = useSelector((state) => state.signup);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [petAllowed, setPetAllowed] = useState('');
  const [cohabitant, setCohabitant] = useState('');
  const [familyAgreement, setFamilyAgreement] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [commuteTime, setCommuteTime] = useState('7');
  const [petExperience, setPetExperience] = useState(false);
  const [currentPet, setCurrentPet] = useState('');
  const [futurePlan, setFuturePlan] = useState('');

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [roundTripTime, setRoundTripTime] = useState('6');

  const handleInputChange = () => {
    setCommuteTime(`${startTime}, ${endTime}, ${roundTripTime}`);
  };

  // const [firstField, setFirstField] = useState('');
  // // const [secondField, setSecondField] = useState('');
  // const [firstFieldError, setFirstFieldError] = useState('');
  // const [secondFieldError, setSecondFieldError] = useState('');

  const [roommateNum, setRoommateNum] = useState(0);

  const handleRoommateNumChange = (value) => {
    setRoommateNum(value);
  };

  const handleCommuteTimeChange = (value) => {
    setRoundTripTime(value);
  };

  const handleFinalSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      updateSignupStep2({
        zipcode,
        address,
        addressDetail,
        petAllowed,
        cohabitant,
        cohabitantCount: roommateNum,
        familyAgreement,
        employmentStatus,
        commuteTime,
        petExperience,
        currentPet,
        futurePlan,
      }),
    );

    const finalData = {
      ...signupData,
      zipcode,
      address,
      addressDetail,
      petAllowed,
      cohabitant,
      cohabitantCount: roommateNum,
      familyAgreement,
      employmentStatus,
      commuteTime,
      petExperience,
      currentPet,
      futurePlan,
    };

    console.log('리덕스 상태:', finalData);

    navigate('/signup/3');

    try {
      const response = await postSignUp(finalData);
      console.log('회원가입 성공, Server response:', response);
      dispatch(resetSignup());
    } catch (error) {
      console.log('회원가입 api 요청 중 에러', error);
    }
  };

  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 당신의 소중한 반려동물을 위한 첫 걸음을 시작해보세요.
      </B.WelcomeMsg>
      <B.Container>
        <B.ProgressBar src={progressBar50} />
        <B.TextWrapper>
          <B.Text>반려동물이 살기 적합한 환경을 갖추고 있나요?</B.Text>
          <B.SubText>
            브리더 문의 시 해당 브리더에게만 일부 보여지는 정보입니다. <br />
            해당 정보의 사실 확인 후 분양 절차를 밟게 되니 사실만을 적어주세요.
          </B.SubText>
        </B.TextWrapper>
        <B.Form onSubmit={handleFinalSubmit}>
          <B.InputArea>
            <B.InputWrapper2>
              <B.InputTitle>현재 어디서 거주 중이신가요?</B.InputTitle>
              <AddressSearchModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setZipCode={setZipcode}
                setAddress={setAddress}
              />
              <B.InputBoxWrapper>
                <B.InputBox2
                  type="text"
                  placeholder="우편번호 입력"
                  autoFocus={{ borderColor: '#fe834d' }}
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
              <B.InputUnderText>
                문의한 브리더에게는 시, 구까지만 공개돼요
              </B.InputUnderText>
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitle>거주지에서 반려동물을 키울 수 있나요?</B.InputTitle>
              <B.RadioWrapper>
                <B.RadioBtn
                  type="radio"
                  name="location"
                  id="option1"
                  value="YES"
                  checked={petAllowed === 'YES'}
                  onChange={(e) => setPetAllowed(e.target.value)}
                />
                <B.Label htmlFor="option1">네</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="location"
                  id="option2"
                  value="NO"
                  checked={petAllowed === 'NO'}
                  onChange={(e) => setPetAllowed(e.target.value)}
                />
                <B.Label htmlFor="option2">아니오</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="location"
                  id="option3"
                  value="NOT_SURE"
                  checked={petAllowed === 'NOT_SURE'}
                  onChange={(e) => setPetAllowed(e.target.value)}
                />
                <B.Label htmlFor="option3">모르겠어요</B.Label>
              </B.RadioWrapper>
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitle>현재 누구와 살고 계신가요?</B.InputTitle>
              <B.InputBoxWrapper>
                <B.InputBoxWrapper2>
                  <B.InputBox2
                    placeholder="예) 아빠, 엄마, 동생 2명"
                    type="text"
                    value={cohabitant}
                    onChange={(e) => setCohabitant(e.target.value)}
                    // onBlur={() => {
                    //   if (!firstField) {
                    //     setFirstFieldError('가족구성원을 알려주세요');
                    //   } else {
                    //     setFirstFieldError('');
                    //   }
                    // }}
                    // style={{ borderColor: firstFieldError ? '#FA5963' : '' }}
                  />
                  {/* {firstFieldError && (
                    <B.ErrorWrapper>
                      <B.FailX src={failX} />
                      <div style={{ color: '#FA5963' }}>{firstFieldError}</div>
                    </B.ErrorWrapper>
                  )} */}
                </B.InputBoxWrapper2>
                <Dropdown
                  id="RoommateNum-dropbox"
                  label="본인 포함"
                  options={[
                    { value: '1', label: '1 (혼자)' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                    { value: '4', label: '4' },
                    { value: '5', label: '5' },
                    { value: '6', label: '6' },
                    { value: '7', label: '7 이상' },
                  ]}
                  onChange={handleRoommateNumChange}
                />
                <B.InputTitle>명</B.InputTitle>
              </B.InputBoxWrapper>
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitle>
                모든 가족 구성원 및 동거인의 동의를 받으셨나요?
              </B.InputTitle>
              <B.RadioWrapper>
                <B.RadioBtn
                  type="radio"
                  name="family"
                  id="option4"
                  value="AGREED"
                  checked={familyAgreement === 'AGREED'}
                  onChange={(e) => setFamilyAgreement(e.target.value)}
                />
                <B.Label htmlFor="option4">네, 모든 동의를 받았습니다.</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="family"
                  id="option5"
                  value="OPPOSED"
                  checked={familyAgreement === 'OPPOSED'}
                  onChange={(e) => setFamilyAgreement(e.target.value)}
                />
                <B.Label htmlFor="option5">
                  아니요, 반대하는 분이 계십니다.
                </B.Label>
                <B.RadioBtn
                  type="radio"
                  name="family"
                  id="option6"
                  value="PERSUADING"
                  checked={familyAgreement === 'PERSUADING'}
                  onChange={(e) => setFamilyAgreement(e.target.value)}
                />
                <B.Label htmlFor="option6">설득 중입니다.</B.Label>
              </B.RadioWrapper>
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitle>
                현재 다니고 계신 직장 또는 학교가 있으신가요?
              </B.InputTitle>
              <B.RadioWrapper>
                <B.RadioBtn
                  type="radio"
                  name="job"
                  id="option7"
                  value="EMPLOYED"
                  checked={employmentStatus === 'EMPLOYED'}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                />
                <B.Label htmlFor="option7">재직 중</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="job"
                  id="option8"
                  value="ON_LEAVE"
                  checked={employmentStatus === 'ON_LEAVE'}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                />
                <B.Label htmlFor="option8">휴직 중</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="job"
                  id="option9"
                  value="ENROLLED"
                  checked={employmentStatus === 'ENROLLED'}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                />
                <B.Label htmlFor="option9">재학 중</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="job"
                  id="option10"
                  value="ON_COLLEGE_LEAVE"
                  checked={employmentStatus === 'ON_COLLEGE_LEAVE'}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                />
                <B.Label htmlFor="option10">휴학 중</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="job"
                  id="option11"
                  value="UNEMPLOYED"
                  checked={employmentStatus === 'UNEMPLOYED'}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                />
                <B.Label htmlFor="option11">직업없음</B.Label>
              </B.RadioWrapper>
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitle>
                다니고 계신 직장이 있으시다면 근무 시간과 출퇴근 시간, 통근
                시간을 알려주세요.
              </B.InputTitle>
              <B.TimeGrid>
                <B.TimeWrapper>
                  <B.TimeText>출근</B.TimeText>
                  <B.InputBox2
                    placeholder="예) 7:00"
                    value={startTime}
                    onChange={(e) => {
                      setStartTime(e.target.value);
                      handleInputChange();
                    }}
                  />
                </B.TimeWrapper>
                <B.TimeWrapper>
                  <B.TimeText>퇴근</B.TimeText>
                  <B.InputBox2
                    placeholder="예) 8:00"
                    value={endTime}
                    onChange={(e) => {
                      setEndTime(e.target.value);
                      handleInputChange();
                    }}
                  />
                </B.TimeWrapper>
                <B.TimeWrapper>
                  <B.TimeText>왕복</B.TimeText>
                  <Dropdown
                    id="CommuteTime-dropbox"
                    label="시간 선택"
                    options={[
                      { value: '1', label: '1' },
                      { value: '2', label: '2' },
                      { value: '3', label: '3' },
                      { value: '4', label: '4' },
                      { value: '5', label: '5' },
                      { value: '6', label: '6 이상' },
                    ]}
                    onChange={handleCommuteTimeChange}
                  />
                  <B.TimeText>시간</B.TimeText>
                </B.TimeWrapper>
              </B.TimeGrid>
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitle>
                이전에 반려동물을 키워본 경험이 있나요?
              </B.InputTitle>
              <B.RadioWrapper>
                <B.RadioBtn
                  type="radio"
                  name="experience"
                  id="option12"
                  value="true"
                  checked={petExperience === 'true'}
                  onChange={(e) => setPetExperience(e.target.value)}
                />
                <B.Label htmlFor="option12">네</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="experience"
                  id="option13"
                  value="false"
                  checked={petExperience === 'false'}
                  onChange={(e) => setPetExperience(e.target.value)}
                />
                <B.Label htmlFor="option13">아니요</B.Label>
              </B.RadioWrapper>
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitle>
                있다면 현재 다른 반려동물을 키우고 있나요? 종 이름까지
                적어주세요.
              </B.InputTitle>
              <B.InputBox2
                type="text"
                value={currentPet}
                onChange={(e) => setCurrentPet(e.target.value)}
              />
            </B.InputWrapper2>
            <B.InputWrapper2>
              <B.InputTitle>
                향후 이사나 여행 계획 등이 있으신가요?
              </B.InputTitle>
              <B.RadioWrapper>
                <B.RadioBtn
                  type="radio"
                  name="future"
                  id="option14"
                  value="MOVE"
                  checked={futurePlan === 'MOVE'}
                  onChange={(e) => setFuturePlan(e.target.value)}
                />
                <B.Label htmlFor="option14">이사 예정</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="future"
                  id="option15"
                  value="SHORT_TRAVEL"
                  checked={futurePlan === 'SHORT_TRAVEL'}
                  onChange={(e) => setFuturePlan(e.target.value)}
                />
                <B.Label htmlFor="option15">단기 여행 예정</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="future"
                  id="option16"
                  value="LONG_TRAVEL"
                  checked={futurePlan === 'LONG_TRAVEL'}
                  onChange={(e) => setFuturePlan(e.target.value)}
                />
                <B.Label htmlFor="option16">장기 여행 예정</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="future"
                  id="option17"
                  value="NO_PLAN"
                  checked={futurePlan === 'NO_PLAN'}
                  onChange={(e) => setFuturePlan(e.target.value)}
                />
                <B.Label htmlFor="option17">계획 없음</B.Label>
                <B.RadioBtn
                  type="radio"
                  name="future"
                  id="option18"
                  value="OTHER"
                  checked={futurePlan === 'OTHER'}
                  onChange={(e) => setFuturePlan(e.target.value)}
                />
                <B.Label htmlFor="option18">기타</B.Label>
              </B.RadioWrapper>
            </B.InputWrapper2>
          </B.InputArea>
          <B.BtnWrapper2>
            <Button white text="이전" path="signup/1" />
            <Button text="다음" path="signup/3" type="submit" />
          </B.BtnWrapper2>
        </B.Form>
      </B.Container>
    </B.Background>
  );
}
