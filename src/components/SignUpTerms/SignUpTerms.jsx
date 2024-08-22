import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './SignUpTerms.style';
import beforeCheck from '/icons/signUp/check_before.svg';
import afterCheck from '/icons/signUp/check_after.svg';
import { FailX } from '../../pages/SignUpBwither/BwitherSignUp.style';
import failX from '/icons/signUp/fail_x.svg';
import { setActiveMenu } from '../../redux/menuSlice';
import { setAllChecked, setItemChecked } from '../../redux/termsSlice';

export default function SignUpTerms({ onTermsChecked, termsError }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAllChecked, checkedItems } = useSelector((state) => state.terms);

  const handleAllChecked = (event) => {
    const isChecked = event.target.checked;
    dispatch(setAllChecked({ isChecked }));
    onTermsChecked(isChecked); // 부모 컴포넌트에 상태 전달
  };

  const handleItemChecked = (event) => {
    const { name, checked } = event.target;
    dispatch(setItemChecked({ name, checked }));
    onTermsChecked(
      Object.values({ ...checkedItems, [name]: checked }).every(Boolean),
    );
  };

  const handleMenuClick = (menu) => {
    dispatch(setActiveMenu(menu));
    navigate('/TermsOfService'); // 페이지 이동
  };

  return (
    <S.Container>
      <S.AllWrapper>
        <S.TextBox>
          <S.AllText onClick={() => handleMenuClick('브위더 이용약관 동의')}>
            약관에 전체동의
          </S.AllText>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Label>
          <S.Checkbox
            type="checkbox"
            checked={isAllChecked}
            onChange={handleAllChecked}
          />
          <S.Check src={isAllChecked ? afterCheck : beforeCheck} />
        </S.Label>
      </S.AllWrapper>
      {termsError && (
        <S.ErrorWrapper>
          <FailX src={failX} />
          <span style={{ color: '#E76467' }}>{termsError}</span>
        </S.ErrorWrapper>
      )}
      <S.Divider />
      <S.Wrapper>
        <S.TextBox>
          <S.Text>만 14세 이상입니다</S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Label>
          <S.Checkbox
            type="checkbox"
            name="term1"
            checked={checkedItems.term1}
            onChange={handleItemChecked}
          />
          <S.Check src={checkedItems.term1 ? afterCheck : beforeCheck} />
        </S.Label>
      </S.Wrapper>
      <S.Wrapper>
        <S.TextBox>
          <S.Text onClick={() => handleMenuClick('브위더 이용약관 동의')}>
            이용약관 동의
          </S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Label>
          <S.Checkbox
            type="checkbox"
            name="term2"
            checked={checkedItems.term2}
            onChange={handleItemChecked}
          />
          <S.Check src={checkedItems.term2 ? afterCheck : beforeCheck} />
        </S.Label>
      </S.Wrapper>
      <S.Wrapper>
        <S.TextBox>
          <S.Text onClick={() => handleMenuClick('개인정보 수집 및 이용 동의')}>
            개인정보 수집 및 이용 동의
          </S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Label>
          <S.Checkbox
            type="checkbox"
            name="term3"
            checked={checkedItems.term3}
            onChange={handleItemChecked}
          />
          <S.Check src={checkedItems.term3 ? afterCheck : beforeCheck} />
        </S.Label>
      </S.Wrapper>
      <S.Wrapper>
        <S.TextBox>
          <S.Text onClick={() => handleMenuClick('위치기반 서비스 이용 동의')}>
            위치기반 서비스 이용 동의
          </S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Label>
          <S.Checkbox
            type="checkbox"
            name="term4"
            checked={checkedItems.term4}
            onChange={handleItemChecked}
          />
          <S.Check src={checkedItems.term4 ? afterCheck : beforeCheck} />
        </S.Label>
      </S.Wrapper>
    </S.Container>
  );
}
