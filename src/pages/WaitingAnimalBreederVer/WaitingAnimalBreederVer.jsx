import { useState, useRef } from 'react';

import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import MenuSelect from '../../components/MenuSelect/MenuSelect';
import * as A from './WaitingAnimalBreederVer.style';
import Badge from '../../components/badge/Badge';
import Button from '../../components/button/Button';
import 'react-multi-carousel/lib/styles.css';
import WaitingDogInfo from '../../components/WaitingAnimalBreederVer/WaitingDogInfo';
import WaitingParentDogInfo from '../../components/WaitingAnimalBreederVer/WaitingParentDogInfo';

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

function WaitingAnimalBreederVer() {
  const [activeMenu, setActiveMenu] = useState('강아지 정보');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dogInfoRef = useRef(null);
  const parentDogInfoRef = useRef(null);
  const breederInfoRef = useRef(null);

  const menuItems = ['강아지 정보', '부모 강아지 정보', '브리더 정보'];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === '강아지 정보') {
      dogInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '부모 강아지 정보') {
      parentDogInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '브리더 정보') {
      breederInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <A.Container>
      <A.Title>행복이의 가족이 되어주세요</A.Title>
      <A.Card>
        <A.Image src="https://via.placeholder.com/360" alt="dog" />
        <A.InfoContainer>
          <A.Reservation>
            <A.TextContainer>
              <A.ReservationPoint>10명</A.ReservationPoint>의 대기 예약자가
              있어요.
            </A.TextContainer>
            <A.IconContainer>
              <A.EditBtn>편집</A.EditBtn>
            </A.IconContainer>
          </A.Reservation>
          <A.DogContainer>
            <A.DogName>행복이</A.DogName>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="17"
              viewBox="0 0 8 17"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5.87378C4.80274 5.87378 5.45349 5.22303 5.45349 4.42029C5.45349 3.61755 4.80274 2.9668 4 2.9668C3.19726 2.9668 2.54651 3.61755 2.54651 4.42029C2.54651 5.22303 3.19726 5.87378 4 5.87378ZM7.45349 4.42029C7.45349 5.97987 6.4197 7.29799 5 7.72678V11.8887H7.5V13.8887H5V16.0332H3V13.8887H0.5V11.8887H3V7.72678C1.5803 7.29799 0.546509 5.97987 0.546509 4.42029C0.546509 2.51298 2.09269 0.966797 4 0.966797C5.90731 0.966797 7.45349 2.51298 7.45349 4.42029Z"
                fill="#D86480"
              />
            </svg>
          </A.DogContainer>
          <A.DogInfo>
            <p>
              <strong>종</strong> 비글
            </p>
            <p>
              <strong>성별</strong> 여아
            </p>
            <p>
              <strong>생일</strong> 2023.01.23.
            </p>
            <p>
              <strong>예방접종</strong> 1~3차 접종
            </p>
            <p>
              <strong>바이러스 질환 검사</strong> 음성
            </p>
          </A.DogInfo>
          <A.StatusContainer>
            <Badge
              backgroundColor="#ECFAF1"
              color="#323232"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M4 8.125L6.88 11.5L12 5.5"
                    stroke="#2DC261"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              예방접종 완료
            </Badge>
            <Badge
              backgroundColor="#ECFAF1"
              color="#323232"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M4 8.125L6.88 11.5L12 5.5"
                    stroke="#2DC261"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              바이러스 음성
            </Badge>
          </A.StatusContainer>
          <A.ButtonContainer>
            <Button whiteBorder onClick={openModal}>
              혈통서 보기
            </Button>
          </A.ButtonContainer>
        </A.InfoContainer>
      </A.Card>
      <A.SliderContainer>
        <Carousel
          responsive={responsive}
          customLeftArrow={<LeftArrow />}
          customRightArrow={<RightArrow />}
        >
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail" />
          {/* <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail" />
          <A.Thumbnail src="https://via.placeholder.com/60" alt="thumbnail" /> */}
        </Carousel>
      </A.SliderContainer>
      <A.InfoWrapper>
        <MenuSelect
          menus={menuItems}
          activeMenu={activeMenu}
          setActiveMenu={handleMenuClick}
        />
        <WaitingDogInfo ref={dogInfoRef} />
        <WaitingParentDogInfo ref={parentDogInfoRef} />
      </A.InfoWrapper>
      {isModalOpen && (
        <A.ModalOverlay onClick={closeModal}>
          <A.ModalContent onClick={(e) => e.stopPropagation()}>
            <A.CloseButton onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.8964 0.396447C15.0917 0.201184 15.4083 0.201184 15.6036 0.396447C15.7988 0.591709 15.7988 0.908291 15.6036 1.10355L8.70711 8L15.6036 14.8964C15.7988 15.0917 15.7988 15.4083 15.6036 15.6036C15.4083 15.7988 15.0917 15.7988 14.8964 15.6036L8 8.70711L1.10355 15.6036C0.908291 15.7988 0.591709 15.7988 0.396446 15.6036C0.201185 15.4083 0.201185 15.0917 0.396447 14.8964L7.29289 8L0.396447 1.10355C0.201185 0.908291 0.201185 0.591709 0.396447 0.396447C0.591709 0.201184 0.908291 0.201184 1.10355 0.396447L8 7.29289L14.8964 0.396447Z"
                  fill="#C5C5C5"
                />
              </svg>
            </A.CloseButton>
            <img src="https://via.placeholder.com/400" alt="Pedigree" />
          </A.ModalContent>
        </A.ModalOverlay>
      )}
    </A.Container>
  );
}

export default WaitingAnimalBreederVer;
