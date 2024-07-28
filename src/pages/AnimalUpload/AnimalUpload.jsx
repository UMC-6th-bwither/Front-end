import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import MenuSelect from '../../components/MenuSelect/MenuSelect';
import * as A from './AnimalUpload.style';
import Button from '../../components/button/Button';
import 'react-multi-carousel/lib/styles.css';
import UploadDogInfo from '../../components/AnimalUpload/UploadDogInfo';
import UploadParentDogInfo from '../../components/AnimalUpload/UploadParentDogInfo';

function LeftArrow({ onClick }) {
  return <A.Arrow className="left" onClick={onClick} />;
}
LeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function RightArrow({ onClick }) {
  return <A.Arrow className="right" onClick={onClick} />;
}
RightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function AnimalUpload() {
  const [activeMenu, setActiveMenu] = useState('강아지 정보');
  const dogInfoRef = useRef(null);
  const parentDogInfoRef = useRef(null);

  const menuItems = ['강아지 정보', '부모 강아지 정보'];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 13,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 13,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 14,
    },
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === '강아지 정보') {
      dogInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '부모 강아지 정보') {
      parentDogInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <A.Container>
      <A.Title>관리 중인 동물 정보 업로드</A.Title>
      <A.Card>
        <A.Image>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M24 0C24.7957 0 25.5587 0.316071 26.1213 0.87868C26.6839 1.44129 27 2.20435 27 3V21H45C45.7957 21 46.5587 21.3161 47.1213 21.8787C47.6839 22.4413 48 23.2043 48 24C48 24.7957 47.6839 25.5587 47.1213 26.1213C46.5587 26.6839 45.7957 27 45 27H27V45C27 45.7957 26.6839 46.5587 26.1213 47.1213C25.5587 47.6839 24.7957 48 24 48C23.2043 48 22.4413 47.6839 21.8787 47.1213C21.3161 46.5587 21 45.7957 21 45V27H3C2.20435 27 1.44129 26.6839 0.87868 26.1213C0.316071 25.5587 0 24.7957 0 24C0 23.2043 0.316071 22.4413 0.87868 21.8787C1.44129 21.3161 2.20435 21 3 21H21V3C21 2.20435 21.3161 1.44129 21.8787 0.87868C22.4413 0.316071 23.2043 0 24 0Z"
              fill="#C5C5C5"
            />
          </svg>
          사진 파일 첨부
        </A.Image>
        <A.InfoContainer>
          <A.DogContainer>
            <A.Name>이름을 입력하세요</A.Name>
          </A.DogContainer>
          <A.AnimalSelectBox>
            <A.AnimalSelect>강아지</A.AnimalSelect>
            <A.AnimalSelect>고양이</A.AnimalSelect>
          </A.AnimalSelectBox>
          <A.DogInfo>
            <p>
              <strong>종</strong>
              <A.DogInfoText>정확한 품종명을 입력하세요</A.DogInfoText>
            </p>
            <p>
              <strong>성별</strong>
              <A.AnimalSelectBox>
                <A.AnimalSelect>수컷</A.AnimalSelect>
                <A.AnimalSelect>암컷</A.AnimalSelect>
              </A.AnimalSelectBox>
            </p>
            <p>
              <strong>생일</strong>
              <A.DogInfoInput type="number" placeholder="생년월일" />
            </p>
          </A.DogInfo>
          <A.ButtonContainer>
            <Button whiteBorder>혈통서 업로드</Button>
            <A.ButtonFileName>혈통서 파일명.jpg</A.ButtonFileName>
          </A.ButtonContainer>
        </A.InfoContainer>
      </A.Card>
      <A.SliderContainer>
        <Carousel
          responsive={responsive}
          customLeftArrow={<LeftArrow />}
          customRightArrow={<RightArrow />}
        >
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail1" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail1" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail2" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail3" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail4" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail5" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail6" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail7" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail8" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail9" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail10" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail11" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail12" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail13" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail14" />
        </Carousel>
      </A.SliderContainer>
      <A.InfoWrapper>
        <MenuSelect
          menus={menuItems}
          activeMenu={activeMenu}
          setActiveMenu={handleMenuClick}
        />
        <UploadDogInfo ref={dogInfoRef} />
        <UploadParentDogInfo ref={parentDogInfoRef} />
      </A.InfoWrapper>
    </A.Container>
  );
}

export default AnimalUpload;
