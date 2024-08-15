import { useState } from 'react';
import * as S from './SignUpTerms.style';

export default function SignUpTerms() {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const [checkedItems, setCheckedItems] = useState({
    term1: false,
    term2: false,
    term3: false,
  });

  const handleAllChecked = (event) => {
    const isChecked = event.target.checked;
    setIsAllChecked(isChecked);
    setCheckedItems({
      term1: isChecked,
      term2: isChecked,
      term3: isChecked,
      term4: isChecked,
    });
  };

  const handleItemChecked = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevItems) => {
      const updatedItems = { ...prevItems, [name]: checked };
      const allChecked = Object.values(updatedItems).every(Boolean);
      setIsAllChecked(allChecked);
      return updatedItems;
    });
  };

  return (
    <S.Container>
      <S.AllWrapper>
        <S.TextBox>
          <S.AllText>약관에 전체동의</S.AllText>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Checkbox
          type="checkbox"
          checked={isAllChecked}
          onChange={handleAllChecked}
        />
      </S.AllWrapper>
      <S.Divider />
      <S.Wrapper>
        <S.TextBox>
          <S.Text>만 14세 이상입니다</S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Checkbox
          type="checkbox"
          name="term1"
          checked={checkedItems.term1}
          onChange={handleItemChecked}
        />
      </S.Wrapper>
      <S.Wrapper>
        <S.TextBox>
          <S.Text>이용약관 동의</S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Checkbox
          type="checkbox"
          name="term2"
          checked={checkedItems.term2}
          onChange={handleItemChecked}
        />
      </S.Wrapper>
      <S.Wrapper>
        <S.TextBox>
          <S.Text>개인정보 수집 및 이용 동의</S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Checkbox
          type="checkbox"
          name="term3"
          checked={checkedItems.term3}
          onChange={handleItemChecked}
        />
      </S.Wrapper>
      <S.Wrapper>
        <S.TextBox>
          <S.Text>위치기반 서비스 이용 동의</S.Text>
          <S.SubText>(필수)</S.SubText>
        </S.TextBox>
        <S.Checkbox
          type="checkbox"
          name="term4"
          checked={checkedItems.term4}
          onChange={handleItemChecked}
        />
      </S.Wrapper>
    </S.Container>
  );
}
