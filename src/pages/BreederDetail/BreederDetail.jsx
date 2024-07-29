import { useState, useRef } from 'react';
import MenuSelect from '../../components/MenuSelect/MenuSelect';
import * as A from './BreederDetail.style';
import 'react-multi-carousel/lib/styles.css';
import BreederInfo from '../../components/BreederDetail/BreederInfo';
import KennelInfo from '../../components/BreederDetail/KennelInfo';
import CareDog from '../../components/BreederDetail/CareDog';
import BreederReview from '../../components/BreederDetail/BreederReview';
import BreederQna from '../../components/BreederDetail/BreederQna';
import BreederCommunity from '../../components/BreederDetail/BreederCommunity';

function BreederDetail() {
  const [activeMenu, setActiveMenu] = useState('브리더 정보');
  const breederInfoRef = useRef(null);
  const kennelInfoRef = useRef(null);
  const careDogRef = useRef(null);
  const reviewRef = useRef(null);
  const qnaRef = useRef(null);
  const communityRef = useRef(null);

  const menuItems = [
    '브리더 정보',
    '켄넬 정보',
    '관리 중인 강아지',
    '후기(22)',
    '질문/답변',
    '커뮤니티',
  ];

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === '브리더 정보') {
      breederInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '켄넬 정보') {
      kennelInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '관리 중인 강아지') {
      careDogRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '후기(22)') {
      reviewRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '질문/답변') {
      qnaRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '커뮤니티') {
      communityRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <A.Container>
      <A.InfoWrapper>
        <MenuSelect
          menus={menuItems}
          activeMenu={activeMenu}
          setActiveMenu={handleMenuClick}
        />
        <BreederInfo ref={breederInfoRef} />
        <KennelInfo ref={kennelInfoRef} />
        <CareDog ref={careDogRef} />
        <BreederReview ref={reviewRef} />
        <BreederQna ref={qnaRef} />
        <BreederCommunity ref={communityRef} />
      </A.InfoWrapper>
    </A.Container>
  );
}

export default BreederDetail;
