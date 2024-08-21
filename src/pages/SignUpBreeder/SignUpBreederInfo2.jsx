import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as B from './SignUpBreeder.style';
import progressBar90 from '/icons/signUp/progress-bar-90.svg';
import upload from '/icons/signUp/upload_plus.svg';
import plus from '/icons/signUp/plusBtn_plus.svg';
import calendar from '/icons/signUp/calendar.svg';
import Button from '../../components/SignUpButton/Button';
import unchecked from '/img/uncheckedCheck.svg';

const CustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <B.CustomInput
    ref={ref}
    onClick={onClick}
    placeholder={placeholder}
    value={value}
    readOnly
  />
));
CustomInput.displayName = 'CustomInput';

CustomInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
};

CustomInput.defaultProps = {
  value: '',
  onClick: () => {},
};

export default function SignUpBreederInfo2() {
  const [startDate, setStartDate] = useState(null);
  const [lastDate, setLastDate] = useState(null);

  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 브위더와 함께 올바른 반려동물 분양문화를 이끌어가요
      </B.WelcomeMsg>
      <B.Container>
        <B.ProgressBar src={progressBar90} />
        <B.Text>거의 다 왔어요! 더욱 자세히 알고싶어요</B.Text>
        <B.InputArea>
          <B.InputWrapper2>
            <B.InputTitle>
              운영하고 있는 켄넬/캐터리 주소<B.Star>*</B.Star>
            </B.InputTitle>
            <B.InputBoxWrapper>
              <B.InputBox2 placeholder="우편번호 입력" />
              <B.PostCodeBtn>우편번호 찾기</B.PostCodeBtn>
            </B.InputBoxWrapper>
            <B.InputBox2 placeholder="주소 입력" />
            <B.InputBox2 placeholder="상세 주소" />
          </B.InputWrapper2>
          <B.InputWrapper2>
            <B.InputTitle>
              캔넬/캐터리 사진<B.Star>*</B.Star>
            </B.InputTitle>
            <B.UploadFileWrapper>
              <B.FileUpload>
                <img src={upload} alt="upload" />
                <div className="text">파일 첨부</div>
              </B.FileUpload>
              <B.FileUpload />
              <B.FileUpload />
              <B.FileUpload />
              <B.FileUpload />
              <B.FileUpload />
            </B.UploadFileWrapper>
          </B.InputWrapper2>
          <B.InputWrapper2>
            <B.InputTitle>이용 중인 동물병원</B.InputTitle>
            <B.InputBox2 placeholder="병원명을 입력해주세요" />
          </B.InputWrapper2>
          <B.InputWrapper3>
            <B.InputTitle>자격증</B.InputTitle>
            <B.InputBoxWrapper>
              <B.InputBox2 placeholder="자격증명" />
              <B.PostCodeBtn>파일 첨부</B.PostCodeBtn>
            </B.InputBoxWrapper>
            <B.PlusBtn className="btn">
              <img src={plus} alt="plus_img" />
              추가하기
            </B.PlusBtn>
          </B.InputWrapper3>
          <B.InputWrapper3>
            <B.InputTitle>
              번식 경력<B.Star>*</B.Star>
            </B.InputTitle>
            <B.InputBoxWrapper>
              <B.InputBox3 placeholder="상호명" />
              <B.DateInputWrapper>
                <B.CustomDatePicker
                  className="datepicker"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="yyyy/MM"
                  showMonthYearPicker
                  customInput={<CustomInput placeholder="입사연월" />}
                  placeholderText="입사연월"
                />
                <B.CalendarIcon src={calendar} alt="calendar" />
              </B.DateInputWrapper>
              <B.Hyphen />
              <B.DateInputWrapper>
                <B.CustomDatePicker
                  selected={lastDate}
                  onChange={(date) => setLastDate(date)}
                  dateFormat="yyyy/MM"
                  showMonthYearPicker
                  customInput={<CustomInput placeholder="퇴사연월" />}
                  placeholderText="퇴사연월"
                />
                <B.CalendarIcon src={calendar} alt="calendar" />
              </B.DateInputWrapper>
            </B.InputBoxWrapper>
            <B.CheckWrapper>
              <img src={unchecked} alt="unchecked_check" /> 재직중
            </B.CheckWrapper>
            <B.PlusBtn className="btn">
              <img src={plus} alt="plus_img" />
              추가하기
            </B.PlusBtn>
          </B.InputWrapper3>
        </B.InputArea>
        <B.BtnWrapper2>
          <Button white text="이전" path="SignUpBreederInfo" />
          <Button text="다음" path="" />
        </B.BtnWrapper2>
      </B.Container>
    </B.Background>
  );
}
