import { useState } from 'react';

import Button from '../components/button/Button';
import SmallButton from '../components/smallbutton/SmallButton';
import ButtonSelector from '../components/buttonselector/ButtonSelector';
import Badge from '../components/badge/Badge';

function App() {
  const [buttonSelection, setButtonSelection] = useState({});

  const selectButtonHandler = (selectionInfo) => {
    setButtonSelection(selectionInfo);
  };

  return (
    <>
      <p>
        ButtonOrange, Icon
        <Button orange icon="/icons/pencil.svg">
          글 작성하기
        </Button>
      </p>
      <p>
        ButtonOrangeBorder, Icon
        <Button orangeBorder icon="/icons/pencil_orange.svg">
          글 작성하기
        </Button>
      </p>
      <p>
        ButtonWhite
        <Button white>브리더에게 문의하기</Button>
      </p>
      <p>
        ButtonWhiteBorder, AutoWidth
        <Button whiteBorder width="auto" paddingHorizontal={60}>
          혈통서 보기
        </Button>
      </p>
      <p>
        ButtonOrangeBorder, AutoWidth
        <Button orangeBorder width="auto" paddingHorizontal={30}>
          이전
        </Button>
      </p>
      <p>
        SmallButton
        <SmallButton>프로필 설정</SmallButton>
      </p>
      <p>
        ButtonSelector, Border
        <ButtonSelector border onClick={selectButtonHandler}>
          예약 중 제외
        </ButtonSelector>
        buttonSelection.active: {buttonSelection.active ? 'true' : 'false'}{' '}
        <br />
        buttonSelection.content: {buttonSelection.content}
      </p>
      <p>
        ButtonSelector
        <ButtonSelector>고양이</ButtonSelector>
      </p>
      <p>
        <Badge
          color="#FA5963"
          backgroundColor="#FFF2F3"
          icon="/icons/ticket.svg"
        >
          혜택
        </Badge>
        <Badge
          color="#2257DF"
          backgroundColor="#EFF4FF"
          icon="/icons/dog_footprint.svg"
        >
          강아지 전문
        </Badge>
        <Badge
          color="#323232"
          backgroundColor="#ECFAF1"
          icon="/icons/check.svg"
        >
          본인인증
        </Badge>
      </p>
    </>
  );
}

export default App;
