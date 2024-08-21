import { useState } from 'react';
import * as B from './BwitherSignUp.style';
import progressBar50 from '/icons/signUp/progress-bar-50.svg';
import Button from '../../components/SignUpButton/Button';
import failX from '/icons/signUp/fail_x.svg';

export default function BwitherSignUp2() {
  const [firstField, setFirstField] = useState('');
  // const [secondField, setSecondField] = useState('');
  const [firstFieldError, setFirstFieldError] = useState('');
  // const [secondFieldError, setSecondFieldError] = useState('');

  const [view, setView] = useState(false);

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
        <B.InputArea>
          <B.InputWrapper2>
            <B.InputTitle>현재 어디서 거주 중이신가요?</B.InputTitle>
            <B.InputBoxWrapper>
              <B.InputBox2
                placeholder="우편번호 입력"
                autoFocus={{ borderColor: '#fe834d' }}
              />
              <B.PostCodeBtn>우편번호 찾기</B.PostCodeBtn>
            </B.InputBoxWrapper>
            <B.InputBox2 placeholder="주소 입력" />
            <B.InputBox2 placeholder="상세 주소" />
            <B.InputUnderText>
              문의한 브리더에게는 시, 구까지만 공개돼요
            </B.InputUnderText>
          </B.InputWrapper2>
          <B.InputWrapper2>
            <B.InputTitle>거주지에서 반려동물을 키울 수 있나요?</B.InputTitle>
            <B.RadioWrapper>
              <B.RadioBtn type="radio" name="location" id="option1" />
              <B.Label for="option1">네</B.Label>
              <B.RadioBtn type="radio" name="location" id="option2" />
              <B.Label for="option2">아니오</B.Label>
              <B.RadioBtn type="radio" name="location" id="option3" />
              <B.Label for="option3">모르겠어요</B.Label>
            </B.RadioWrapper>
          </B.InputWrapper2>
          <B.InputWrapper2>
            <B.InputTitle>현재 누구와 살고 계신가요?</B.InputTitle>
            <B.InputBoxWrapper>
              <B.InputBoxWrapper2>
                <B.InputBox2
                  placeholder="예) 아빠, 엄마, 동생 2명"
                  type="text"
                  value={firstField}
                  onChange={(e) => setFirstField(e.target.value)}
                  onBlur={() => {
                    if (!firstField) {
                      setFirstFieldError('가족구성원을 알려주세요');
                    } else {
                      setFirstFieldError('');
                    }
                  }}
                  style={{ borderColor: firstFieldError ? '#FA5963' : '' }}
                />
                {firstFieldError && (
                  <B.ErrorWrapper>
                    <B.FailX src={failX} />
                    <div style={{ color: '#FA5963' }}>{firstFieldError}</div>
                  </B.ErrorWrapper>
                )}
              </B.InputBoxWrapper2>
              <div onClick={() => setView(!view)} placeholder="본인 포함">
                <B.Dropdown />
              </div>
              <B.InputTitle>명</B.InputTitle>
            </B.InputBoxWrapper>
          </B.InputWrapper2>
          <B.InputWrapper2>
            <B.InputTitle>
              모든 가족 구성원 및 동거인의 동의를 받으셨나요?
            </B.InputTitle>
            <B.RadioWrapper>
              <B.RadioBtn type="radio" name="family" id="option4" />
              <B.Label for="option4">네, 모든 동의를 받았습니다.</B.Label>
              <B.RadioBtn type="radio" name="family" id="option5" />
              <B.Label for="option5">아니요, 반대하는 분이 계십니다.</B.Label>
              <B.RadioBtn type="radio" name="family" id="option6" />
              <B.Label for="option6">설득 중입니다.</B.Label>
            </B.RadioWrapper>
          </B.InputWrapper2>
          <B.InputWrapper2>
            <B.InputTitle>
              현재 다니고 계신 직장 또는 학교가 있으신가요?
            </B.InputTitle>
            <B.RadioWrapper>
              <B.RadioBtn type="radio" name="job" id="option7" />
              <B.Label for="option7">재직 중</B.Label>
              <B.RadioBtn type="radio" name="job" id="option8" />
              <B.Label for="option8">휴직 중</B.Label>
              <B.RadioBtn type="radio" name="job" id="option9" />
              <B.Label for="option9">재학 중</B.Label>
              <B.RadioBtn type="radio" name="job" id="option10" />
              <B.Label for="option10">휴학 중</B.Label>
              <B.RadioBtn type="radio" name="job" id="option11" />
              <B.Label for="option11">직업없음</B.Label>
            </B.RadioWrapper>
          </B.InputWrapper2>
          <B.InputWrapper2>
            <B.InputTitle>
              다니고 계신 직장이 있으시다면 근무 시간과 출퇴근 시간, 통근 시간을
              알려주세요.
            </B.InputTitle>
            <B.TimeGrid>
              <B.TimeWrapper>
                <B.TimeText>출근</B.TimeText>
                <B.InputBox2 placeholder="예) 7:00" />
              </B.TimeWrapper>
              <B.TimeWrapper>
                <B.TimeText>퇴근</B.TimeText>
                <B.InputBox2 placeholder="예) 7:00" />
              </B.TimeWrapper>
              <B.TimeWrapper>
                <B.TimeText>왕복</B.TimeText>
                <B.InputBox2 placeholder="예) 7:00" />
                <B.TimeText>시간</B.TimeText>
              </B.TimeWrapper>
            </B.TimeGrid>
          </B.InputWrapper2>
          <B.InputWrapper2>
            <B.InputTitle>이전에 반려동물을 키워본 경험이 있나요?</B.InputTitle>
            <B.RadioWrapper>
              <B.RadioBtn type="radio" name="experience" id="option12" />
              <B.Label for="option12">네</B.Label>
              <B.RadioBtn type="radio" name="experience" id="option13" />
              <B.Label for="option13">아니요</B.Label>
            </B.RadioWrapper>
          </B.InputWrapper2>
          <B.InputWrapper2>
            <B.InputTitle>
              있다면 현재 다른 반려동물을 키우고 있나요? 종 이름까지 적어주세요.
            </B.InputTitle>
            <B.InputBox2 />
          </B.InputWrapper2>
          <B.InputWrapper2>
            <B.InputTitle>향후 이사나 여행 계획 등이 있으신가요?</B.InputTitle>
            <B.RadioWrapper>
              <B.RadioBtn type="radio" name="future" id="option14" />
              <B.Label for="option14">이사 예정</B.Label>
              <B.RadioBtn type="radio" name="future" id="option15" />
              <B.Label for="option15">단기 여행 예정</B.Label>
              <B.RadioBtn type="radio" name="future" id="option16" />
              <B.Label for="option16">장기 여행 예정</B.Label>
              <B.RadioBtn type="radio" name="future" id="option17" />
              <B.Label for="option17">계획 없음</B.Label>
              <B.RadioBtn type="radio" name="future" id="option18" />
              <B.Label for="option18">기타</B.Label>
            </B.RadioWrapper>
          </B.InputWrapper2>
        </B.InputArea>
        <B.BtnWrapper2>
          <Button white text="이전" path="signup/1" />
          <Button text="다음" path="signup/3" />
        </B.BtnWrapper2>
      </B.Container>
    </B.Background>
  );
}
