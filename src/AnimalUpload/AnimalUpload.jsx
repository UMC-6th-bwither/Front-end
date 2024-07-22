import { useState } from 'react';
import MenuSelect from '../components/MenuSelect/MenuSelect';
import * as A from './AnimalUpload.style';

export default function AnimalUpload() {
  const [activeMenu, setActiveMenu] = useState('강아지 정보');

  const menu = ['강아지 정보', '부모 강아지 정보', '브리더 정보'];
  return (
    <div>
      <div>헤더</div>
      <A.Container>
        <A.Title>행복이의 가족이 되어주세요</A.Title>
        <div>강아지 정보 컴포넌트</div>
        <MenuSelect
          menus={menu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </A.Container>
      <div>푸터</div>
    </div>
  );
}
