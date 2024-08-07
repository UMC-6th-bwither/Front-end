import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import MenuSelect from '../../components/MenuSelect/MenuSelect';
import * as A from './WaitingAnimalDetail.style';
import Badge from '../../components/badge/Badge';
import Button from '../../components/button/Button';
import 'react-multi-carousel/lib/styles.css';
import WaitingDogInfo from '../../components/WaitingAnimalDetail/WaitingDogInfo';
import WaitingParentDogInfo from '../../components/WaitingAnimalDetail/WaitingParentDogInfo';
import WaitingBreederInfo from '../../components/WaitingAnimalDetail/WaitingBreederInfo';

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

function WaitingAnimalDetail() {
  const [activeMenu, setActiveMenu] = useState('강아지 정보');
  const [isFavorite, setIsFavorite] = useState(false);

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
  const navigate = useNavigate();

  // 브리더에게 문의하기 클릭
  const handleInquiryClick = () => {
    navigate('/breeder-chat');
    // 브리더 id별로 채팅화면으로 이동되게 수정할 예정
  };

  // 공유 아이콘 클릭
  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      // eslint-disable-next-line no-alert
      alert('클립보드에 url이 복사됐어요');
    });
  };

  // 하트 클릭
  const toggleFavorite = async () => {
    setIsFavorite((prev) => !prev);
    try {
      await axios.post('/api/favorite/breeder', {
        breederId: 'BREEDER_ID',
        favorite: !isFavorite,
      });
      // eslint-disable-next-line no-console
      console.log('저장 완료');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('저장 실패:', error);
    }
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                style={{ marginRight: '20px', cursor: 'pointer' }}
                onClick={handleCopyUrl}
              >
                <path
                  d="M0.740234 12.8V17.75H15.2602V12.8M2.72023 6.36042L8.00023 1.25L13.2802 6.36042M8.00023 12.8V1.25183"
                  stroke="#323232"
                  strokeWidth="1.375"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {isFavorite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ cursor: 'pointer' }}
                  onClick={toggleFavorite}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 20C11.6307 20.6528 11.6303 20.6526 11.6303 20.6526L11.6278 20.6511L11.6215 20.6476L11.5995 20.6349C11.5806 20.624 11.5534 20.6082 11.5185 20.5877C11.4487 20.5466 11.3479 20.4864 11.2205 20.4081C10.9659 20.2516 10.6045 20.0223 10.172 19.7281C9.30829 19.1407 8.15358 18.2896 6.9955 17.2368C4.72338 15.1712 2.25 12.1603 2.25 8.72728C2.25 7.46309 2.68357 6.23697 3.47842 5.25761C4.2734 4.2781 5.38101 3.60568 6.61366 3.35666C7.8464 3.10762 9.12621 3.29784 10.2349 3.89419C10.9297 4.2679 11.53 4.78639 12 5.40887C12.47 4.78639 13.0703 4.2679 13.7651 3.89419C14.8738 3.29784 16.1536 3.10762 17.3863 3.35666C18.619 3.60568 19.7266 4.2781 20.5216 5.25761C21.3164 6.23697 21.75 7.46309 21.75 8.72728C21.75 12.1603 19.2766 15.1712 17.0045 17.2368C15.8464 18.2896 14.6917 19.1407 13.828 19.7281C13.3955 20.0223 13.0341 20.2516 12.7795 20.4081C12.6521 20.4864 12.5513 20.5466 12.4815 20.5877C12.4466 20.6082 12.4194 20.624 12.4005 20.6349L12.3785 20.6476L12.3722 20.6511L12.3703 20.6522C12.3703 20.6522 12.3693 20.6528 12 20ZM12 20L12.3693 20.6528C12.1401 20.7824 11.8594 20.7822 11.6303 20.6526L12 20Z"
                    fill="#E76467"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ cursor: 'pointer' }}
                  onClick={toggleFavorite}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.52438 5.71522C8.7232 5.28429 7.79974 5.14735 6.91069 5.32696C6.02155 5.50658 5.21995 5.99212 4.6431 6.70287C4.06612 7.41378 3.75 8.30581 3.75 9.22728C3.75 11.9761 5.77662 14.6015 8.0045 16.6269C9.09642 17.6195 10.1917 18.4275 11.0155 18.9878C11.4233 19.2651 11.7627 19.4806 12 19.6265C12.2373 19.4806 12.5767 19.2651 12.9845 18.9878C13.8083 18.4275 14.9036 17.6195 15.9955 16.6269C18.2234 14.6015 20.25 11.9761 20.25 9.22728C20.25 8.30581 19.9339 7.41378 19.3569 6.70287C18.7801 5.99212 17.9784 5.50658 17.0893 5.32696C16.2003 5.14735 15.2768 5.28429 14.4756 5.71522C13.6743 6.14624 13.0438 6.84535 12.6933 7.6951C12.5775 7.97589 12.3037 8.1591 12 8.1591C11.6963 8.1591 11.4225 7.97589 11.3067 7.6951C10.9562 6.84535 10.3257 6.14624 9.52438 5.71522ZM12 20.5C11.6307 21.1528 11.6305 21.1527 11.6303 21.1526L11.6278 21.1511L11.6215 21.1476L11.5995 21.1349C11.5806 21.124 11.5534 21.1082 11.5185 21.0877C11.4487 21.0466 11.3479 20.9864 11.2205 20.9081C10.9659 20.7516 10.6045 20.5223 10.172 20.2281C9.30829 19.6407 8.15358 18.7896 6.9955 17.7368C4.72338 15.6712 2.25 12.6603 2.25 9.22728C2.25 7.96309 2.68357 6.73697 3.47842 5.75761C4.2734 4.7781 5.38101 4.10568 6.61366 3.85666C7.8464 3.60762 9.12621 3.79784 10.2349 4.39419C10.9297 4.7679 11.53 5.28639 12 5.90887C12.47 5.28639 13.0703 4.7679 13.7651 4.39419C14.8738 3.79784 16.1536 3.60762 17.3863 3.85666C18.619 4.10568 19.7266 4.7781 20.5216 5.75761C21.3164 6.73697 21.75 7.96309 21.75 9.22728C21.75 12.6603 19.2766 15.6712 17.0045 17.7368C15.8464 18.7896 14.6917 19.6407 13.828 20.2281C13.3955 20.5223 13.0341 20.7516 12.7795 20.9081C12.6521 20.9864 12.5513 21.0466 12.4815 21.0877C12.4466 21.1082 12.4194 21.124 12.4005 21.1349L12.3785 21.1476L12.3722 21.1511L12.3703 21.1522C12.3701 21.1523 12.3693 21.1528 12 20.5ZM12 20.5L12.3693 21.1528C12.1401 21.2824 11.8594 21.2822 11.6303 21.1526L12 20.5Z"
                    fill="#323232"
                  />
                </svg>
              )}
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
            <Button whiteBorder>혈통서 보기</Button>
            <Button orange onClick={handleInquiryClick}>
              브리더에게 문의하기
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
        <WaitingBreederInfo ref={breederInfoRef} />
      </A.InfoWrapper>
    </A.Container>
  );
}

export default WaitingAnimalDetail;
