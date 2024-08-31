/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import api from '../../api/api';
import useAuth from '../../hooks/useAuth';
import MenuSelect from '../../components/MenuSelect/MenuSelect';
import * as A from './WaitingAnimalDetail.style';
import Badge from '../../components/badge/Badge';
import Button from '../../components/button/Button';
import 'react-multi-carousel/lib/styles.css';
import WaitingDogInfo from '../../components/WaitingAnimalDetail/WaitingDogInfo';
import WaitingParentDogInfo from '../../components/WaitingAnimalDetail/WaitingParentDogInfo';
import WaitingBreederInfo from '../../components/WaitingAnimalDetail/WaitingBreederInfo';

function LeftArrow({ onClick = () => {} }) {
  return <A.Arrow className="left" onClick={onClick} />;
}

LeftArrow.propTypes = {
  onClick: PropTypes.func,
};

function RightArrow({ onClick = () => {} }) {
  return <A.Arrow className="right" onClick={onClick} />;
}

RightArrow.propTypes = {
  onClick: PropTypes.func,
};

function WaitingAnimalDetail() {
  const { token } = useAuth();
  const { breederId } = useAuth();

  const [activeMenu, setActiveMenu] = useState('강아지 정보');
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animalData, setAnimalData] = useState(null);
  const [animalImagePath, setAnimalImagePath] = useState('');
  const [pedigreeImagePath, setPedigreeImagePath] = useState('');

  const { animalId } = useParams();

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
  useEffect(() => {
    const fetchRecentAnimal = async () => {
      try {
        if (!animalId) {
          console.error('Animal ID가 없습니다.');
          return;
        }
        const response = await api.post(
          `/user/recent-animals?animalId=${encodeURIComponent(animalId)}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.data.isSuccess) {
          console.log('최근 본 동물 업데이트 성공');
        } else {
          console.error('최근 본 동물 업데이트 실패:', response.data.message);
        }
      } catch (error) {
        console.error('최근 본 동물 업데이트 중 에러 발생:', error);
      }
    };

    const fetchAnimalDetail = async () => {
      try {
        const response = await api.get(`/animals/${animalId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.isSuccess) {
          setAnimalData(response.data.result);

          const animalImageFile = response.data.result.files.find(
            (file) => file.type === 'ANIMAL_IMAGE',
          );

          const pedigreeFile = response.data.result.files.find(
            (file) => file.type === 'PEDIGREE',
          );

          if (animalImageFile) {
            setAnimalImagePath(animalImageFile.animalFilePath);
          }

          if (pedigreeFile) {
            setPedigreeImagePath(pedigreeFile.animalFilePath);
          }

          fetchRecentAnimal();
        } else {
          console.error('동물 정보 가져오기 에러:', response.data.message);
        }
      } catch (error) {
        console.error('동물 정보 가져오기 에러:', error);
      }
    };

    fetchAnimalDetail();
  }, [animalId, token]);

  const handleInquiryClick = async () => {
    try {
      const response = await api.post(
        `/inquiries?breederId=${breederId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.data.isSuccess) {
        alert('문의 요청을 보냈습니다!');
      } else {
        alert('문의 요청에 실패했습니다.');
      }
    } catch (error) {
      console.error('문의 요청 에러 발생:', error);
      alert('문의 요청 중 오류가 발생했습니다.');
    }
  };

  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      // eslint-disable-next-line no-alert
      alert('클립보드에 url이 복사됐어요');
    });
  };

  const toggleFavorite = async () => {
    try {
      const endpoint = `/animals/${animalId}/bookmark`;

      if (isFavorite) {
        // 북마크 해제
        await api.delete(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // eslint-disable-next-line no-console
        console.log('북마크 해제');
      } else {
        // 북마크 추가
        await api.post(
          endpoint,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        // eslint-disable-next-line no-console
        console.log('북마크 성공');
      }

      setIsFavorite((prev) => !prev);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('북마크 에러 발생:', error);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!animalData) return <div>로딩 중...</div>;
  // 로딩 스피너로 바꿀 예정!!

  const genderIcon =
    animalData.gender === 'MALE' ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.70775 0.809974L5.70906 0.808669L5.00195 0.101562L5.00065 0.102868L4.99934 0.101562L4.29224 0.808669L4.29354 0.809974L0.00195312 5.10156L0.70906 5.80867L4.50061 2.01712V9.02714C2.83024 9.26939 1.54712 10.7072 1.54712 12.4447C1.54712 14.352 3.0933 15.8982 5.00061 15.8982C6.90792 15.8982 8.4541 14.352 8.4541 12.4447C8.4541 10.7072 7.17098 9.26939 5.50061 9.02714V2.01704L9.29224 5.80867L9.99934 5.10156L5.70775 0.809974ZM7.4541 12.4447C7.4541 13.7997 6.35564 14.8982 5.00061 14.8982C3.64558 14.8982 2.54712 13.7997 2.54712 12.4447C2.54712 11.0897 3.64558 9.99121 5.00061 9.99121C6.35564 9.99121 7.4541 11.0897 7.4541 12.4447Z"
          fill="#4270F8"
        />
      </svg>
    ) : (
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
    );

  return (
    <A.Container>
      <A.Title>{animalData.name}의 가족이 되어주세요</A.Title>
      <A.Card>
        <A.Image
          src={animalImagePath || 'https://via.placeholder.com/360'}
          alt="dog"
        />
        <A.InfoContainer>
          <A.Reservation>
            <A.TextContainer>
              <A.ReservationPoint>{animalData.waitList}명</A.ReservationPoint>의
              분양 희망자가 있어요.
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
            <A.DogName>{animalData.name}</A.DogName>
            {genderIcon}
          </A.DogContainer>
          <A.DogInfo>
            <p>
              <strong>종</strong> {animalData.breed}
            </p>
            <p>
              <strong>성별</strong>
              {animalData.gender === 'MALE' ? '남아' : '여아'}
            </p>
            <p>
              <strong>생일</strong> {animalData.birthDate}
            </p>
            <p>
              <strong>예방접종</strong> {animalData.vaccinationStatus}
            </p>
            <p>
              <strong>바이러스 질환 검사</strong> {animalData.virusStatus}
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
            <Button orange onClick={handleInquiryClick}>
              브리더에게 문의 요청
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
        <WaitingDogInfo ref={dogInfoRef} animalData={animalData} />
        <WaitingParentDogInfo
          ref={parentDogInfoRef}
          animalParents={animalData.animalParents}
          animalName={animalData.name}
          animalType={animalData.type}
        />
        <WaitingBreederInfo ref={breederInfoRef} breeder={animalData.breeder} />
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
            {pedigreeImagePath && (
              <img
                src={pedigreeImagePath}
                alt="Pedigree"
                style={{ width: '80%', height: 'auto' }}
              />
            )}
          </A.ModalContent>
        </A.ModalOverlay>
      )}
    </A.Container>
  );
}

export default WaitingAnimalDetail;
