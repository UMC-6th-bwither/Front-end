import { useState } from 'react';
import * as B from './BwitherSignUp.style';
import progressBar75 from '/icons/signUp/progress-bar-75.svg';
import Agreement from '../../components/SignUpAgreement/Agreement';
import Button from '../../components/SignUpButton/Button';
import beforeCheck from '/icons/signUp/check_before.svg';
import afterCheck from '/icons/signUp/check_after.svg';

export default function BwitherSignUp3() {
  const data = [
    {
      id: 0,
      content: '반려동물의 수명 동안 시간을 할애하여 책임지고 양육해야합니다.',
    },
    {
      id: 1,
      content: '분양 받은 반려동물은 어떠한 이유로든 파양이 불가합니다.',
    },
    {
      id: 2,
      content:
        '브리더에게 분양받을 수 있는 분양 대기 동물들은 동물 등록과 중성화 수술이 되어 있습니다.',
    },
    {
      id: 3,
      content:
        '브리더에게 반려동물을 분양 받기 전 브리더와 2주간 가족이 될 준비를 하게 됩니다.',
    },
    {
      id: 4,
      content:
        '분양 이후 브리더가 모니터링할 수 있는 정보를 1년간 제공 해야합니다.',
    },
  ];

  const [checkedItems, setCheckedItems] = useState(
    data.reduce((acc, content) => {
      acc[content.id] = false;
      return acc;
    }, {}),
  );

  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevItems) => {
      const updatedItems = { ...prevItems, [id]: !prevItems[id] };

      const allChecked = Object.values(updatedItems).every(Boolean);
      setIsAllChecked(allChecked);

      return updatedItems;
    });
  };

  const handleAllChecked = () => {
    const newCheckedState = !isAllChecked;
    setIsAllChecked(newCheckedState);

    const updatedItems = data.reduce((acc, content) => {
      acc[content.id] = newCheckedState;
      return acc;
    }, {});

    setCheckedItems(updatedItems);
  };

  return (
    <B.Background>
      <B.WelcomeMsg>
        환영해요! <br /> 당신의 소중한 반려동물을 위한 첫 걸음을 시작해보세요.
      </B.WelcomeMsg>
      <B.Container>
        <B.ProgressBar src={progressBar75} />
        <B.TextWrapper>
          <B.Text>이제 곧 브위더 서비스가 시작됩니다!</B.Text>
          <B.SubText>
            브위더 서비스를 이용하기 위해 알아야 할 몇 가지를 알려드릴게요
          </B.SubText>
        </B.TextWrapper>
        {data.map((content) => {
          return (
            <Agreement
              key={content.id}
              content={content.content}
              checked={checkedItems[content.id]}
              onChange={() => handleCheckboxChange(content.id)}
            />
          );
        })}
        <B.CheckWrapper>
          <B.CheckBox
            type="checkbox"
            checked={isAllChecked}
            onChange={handleAllChecked}
          />
          <B.Check src={isAllChecked ? afterCheck : beforeCheck} />
          <B.CheckText>모두 동의하기</B.CheckText>
        </B.CheckWrapper>
        <B.BtnWrapper2>
          <Button white text="이전" path="signup/2" />
          <Button text="완료" path="signup/4" />
        </B.BtnWrapper2>
      </B.Container>
    </B.Background>
  );
}
