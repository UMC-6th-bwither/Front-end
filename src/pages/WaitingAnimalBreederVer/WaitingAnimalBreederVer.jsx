/* eslint-disable react/require-default-props */
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import MenuSelect from '../../components/MenuSelect/MenuSelect';
import * as A from './WaitingAnimalBreederVer.style';
import Badge from '../../components/badge/Badge';
import Button from '../../components/button/Button';
import 'react-multi-carousel/lib/styles.css';
import WaitingDogInfo from '../../components/WaitingAnimalBreederVer/WaitingDogInfo';
import WaitingParentDogInfo from '../../components/WaitingAnimalBreederVer/WaitingParentDogInfo';
import api from '../../api/api';

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

function WaitingAnimalBreederVer() {
  const [activeMenu, setActiveMenu] = useState('강아지 정보');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [animalData, setAnimalData] = useState(null);
  const [animalImagePath, setAnimalImagePath] = useState('');
  const [pedigreeImagePath, setPedigreeImagePath] = useState('');
  const [editedData, setEditedData] = useState({});
  const dogInfoRef = useRef(null);
  const parentDogInfoRef = useRef(null);

  const menuItems = ['강아지 정보', '부모 강아지 정보'];
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
    const fetchAnimalDetail = async () => {
      try {
        const animalId = 1; // 임시 테스트
        const token = localStorage.getItem('token');

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

          setEditedData({
            name: response.data.result.name,
            breed: response.data.result.breed,
            birthDate: response.data.result.birthDate,
            vaccinationStatus: response.data.result.vaccinationStatus,
            virusStatus: response.data.result.virusStatus,
          });
        } else {
          console.error('동물 정보 가져오기 에러:', response.data.message);
        }
      } catch (error) {
        console.error('동물 정보 가져오기 에러:', error);
      }
    };

    fetchAnimalDetail();
  }, []);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === '강아지 정보') {
      dogInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '부모 강아지 정보') {
      parentDogInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setIsEditMode(true); // 편집 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const animalId = 1;
      const breederId = 2;

      const dataToSend = {
        ...editedData,
        animalId,
        breederId,
      };
      const response = await api.put(`/animals/${animalId}`, dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', 
        },
      });
      if (response.data.isSuccess) {
        setAnimalData(response.data.result);
        setIsEditMode(false);
      } else {
        console.error('동물 정보 업데이트 에러:', response.data.message);
      }
    } catch (error) {
      console.error('동물 정보 업데이트 에러:', error);
    }
  };

  if (!animalData) return <div>로딩 중...</div>;

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
              대기 예약자가 있어요.
            </A.TextContainer>
            <A.IconContainer>
              {!isEditMode && (
                <A.EditBtn onClick={handleEditClick}>편집</A.EditBtn>
              )}
              {isEditMode && (
                <A.EditBtn onClick={handleEditSubmit}>저장</A.EditBtn>
              )}
            </A.IconContainer>
          </A.Reservation>
          <A.DogContainer>
            {!isEditMode ? (
              <>
                <A.DogName>{animalData.name}</A.DogName>
                {genderIcon}
              </>
            ) : (
              <input
                type="text"
                name="name"
                value={editedData.name}
                onChange={handleInputChange}
              />
            )}
          </A.DogContainer>
          <A.DogInfo>
            {!isEditMode ? (
              <>
                <p>
                  <strong>종</strong> {animalData.breed}
                </p>
                <p>{animalData.gender === 'MALE' ? '남아' : '여아'}</p>
                <p>
                  <strong>생일</strong> {animalData.birthDate}
                </p>
                <p>
                  <strong>예방접종</strong> {animalData.vaccinationStatus}
                </p>
                <p>
                  <strong>바이러스 질환 검사</strong> {animalData.virusStatus}
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>종</strong>
                  <input
                    type="text"
                    name="breed"
                    value={editedData.breed}
                    onChange={handleInputChange}
                  />
                </p>
                <p>{animalData.gender === 'MALE' ? '남아' : '여아'}</p>
                <p>
                  <strong>생일</strong>
                  <input
                    type="text"
                    name="birthDate"
                    value={editedData.birthDate}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <strong>예방접종</strong>
                  <input
                    type="text"
                    name="vaccinationStatus"
                    value={editedData.vaccinationStatus}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <strong>바이러스 질환 검사</strong>
                  <input
                    type="text"
                    name="virusStatus"
                    value={editedData.virusStatus}
                    onChange={handleInputChange}
                  />
                </p>
              </>
            )}
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

export default WaitingAnimalBreederVer;
