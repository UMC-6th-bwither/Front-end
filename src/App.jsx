// import { useState } from 'react';
// import MenuSelect from './components/MenuSelect';
import ChatBreederInfo from './components/ChatBreederInfo';

function App() {
  // const [activieMenu, setActiveMenu] = useState('브리더 정보');

  // const menu = [
  //   '브리더 정보',
  //   '켄넬 정보',
  //   '관리 중인 강아지',
  //   '후기 (22)',
  //   '질문/답변',
  //   '커뮤니티',
  // ];
  return (
    <>
      {/* <MenuSelect
        menus={menu}
        activeMenu={activieMenu}
        setActiveMenu={setActiveMenu}
      />{' '} */}
      <ChatBreederInfo />
    </>
  );
}

export default App;
