/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as A from '../../pages/WaitingAnimalDetail/WaitingAnimalDetail.style';

const WaitingParentDogInfo = React.forwardRef(
  (
    {
      animalParents,
      animalName,
      animalType,
      isEditMode,
      editedData,
      handleInputChange,
    },
    ref,
  ) => {
    const [selectedParent, setSelectedParent] = useState(null);
    const [selectedHealthCheckImages, setSelectedHealthCheckImages] = useState([]);

    const handleIconClick = (parent) => {
      setSelectedParent(parent);
      const selectedParentData = animalParents.find((p) => p.type === parent);
      if (selectedParentData) {
        setSelectedHealthCheckImages(selectedParentData.healthCheckImages);
      }
    };

    const closeModal = () => {
      setSelectedParent(null);
      setSelectedHealthCheckImages([]);
    };

    const parentTitle =
      animalType === 'DOG' ? '부모 강아지 정보' : '부모 고양이 정보';

    return (
      <div ref={ref} style={{ marginBottom: '96px' }}>
        <A.InfoTitle>{parentTitle}</A.InfoTitle>
        {animalParents.map((parent) => (
          <A.ParentDogCard key={parent.animalParentsId}>
            <A.ParentDogImage
              style={{ overflow: 'hidden', borderRadius: '12px' }}
            >
              <img
                src={parent.imageUrl}
                alt={`${parent.name} 사진`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </A.ParentDogImage>
            <A.ParentDogInfo>
              <A.ParentDogNameContainer>
                {isEditMode ? (
                  <input
                    type="text"
                    name={`parentName-${parent.animalParentsId}`}
                    value={editedData[`parentName-${parent.animalParentsId}`] || parent.name}
                    onChange={handleInputChange}
                    placeholder="부모 강아지 이름"
                    style={{ fontSize: '16px', fontWeight: 'bold' }}
                  />
                ) : (
                  <A.ParentDogName>{parent.name}</A.ParentDogName>
                )}
                <A.ParentDogNameGender>
                  {parent.type === 'MOTHER'
                    ? `${animalName} 모`
                    : `${animalName} 부`}
                </A.ParentDogNameGender>
                {parent.type === 'MOTHER' ? (
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
                ) : (
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
                )}
              </A.ParentDogNameContainer>
              <A.ParentDogDetail>
                <A.ParentDogLabel>종</A.ParentDogLabel>
                {isEditMode ? (
                  <input
                    type="text"
                    name={`parentBreed-${parent.animalParentsId}`}
                    value={
                      editedData[`parentBreed-${parent.animalParentsId}`] ||
                      parent.breed
                    }
                    onChange={handleInputChange}
                  />
                ) : (
                  <A.ParentDogValue>{parent.breed}</A.ParentDogValue>
                )}
              </A.ParentDogDetail>
              <A.ParentDogDetail>
                <A.ParentDogLabel>출생</A.ParentDogLabel>
                {isEditMode ? (
                  <input
                    type="text"
                    name={`parentBirthDate-${parent.animalParentsId}`}
                    value={
                      editedData[`parentBirthDate-${parent.animalParentsId}`] ||
                      parent.birthDate
                    }
                    onChange={handleInputChange}
                  />
                ) : (
                  <A.ParentDogValue>{parent.birthDate}</A.ParentDogValue>
                )}
              </A.ParentDogDetail>
              <A.ParentDogDetail>
                <A.ParentDogLabel>유전질환</A.ParentDogLabel>
                {isEditMode ? (
                  <input
                    type="text"
                    name={`parentHereditary-${parent.animalParentsId}`}
                    value={
                      editedData[
                        `parentHereditary-${parent.animalParentsId}`
                      ] || parent.hereditary
                    }
                    onChange={handleInputChange}
                  />
                ) : (
                  <A.ParentDogValue>{parent.hereditary}</A.ParentDogValue>
                )}
              </A.ParentDogDetail>
              <A.ParentDogDetail>
                <A.ParentDogLabel>성격</A.ParentDogLabel>
                {isEditMode ? (
                  <input
                    type="text"
                    name={`parentCharacter-${parent.animalParentsId}`}
                    value={
                      editedData[`parentCharacter-${parent.animalParentsId}`] ||
                      parent.character
                    }
                    onChange={handleInputChange}
                  />
                ) : (
                  <A.ParentDogValue>{parent.character}</A.ParentDogValue>
                )}
              </A.ParentDogDetail>
              <A.ParentDogDetail>
                <A.ParentDogLabel>
                  수의사 검진 결과
                  <A.InfoIcon
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    onClick={() => handleIconClick(parent.type)}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5C10.6667 6.676 10.7369 6.84556 10.8619 6.97059C10.987 7.09562 11.1565 7.16667 11.3333 7.16667C11.5101 7.16667 11.6797 7.09562 11.8047 6.97059C11.9297 6.84556 12 6.676 12 6.5C12 6.32319 11.9297 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333ZM6 9.66667H10.6667V11.3333H6V9.66667ZM1.33333 4.83333H5.99999V6.83333H1.33333V4.83333ZM1.33333 7.66667H5.99999V9.66667H1.33333V7.66667Z"
                      fill="#9E9E9E"
                    />
                  </A.InfoIcon>
                </A.ParentDogLabel>
                {isEditMode ? (
                  <input
                    type="text"
                    name={`parentHealthCheck-${parent.animalParentsId}`}
                    value={
                      editedData[
                        `parentHealthCheck-${parent.animalParentsId}`
                      ] || parent.healthCheck
                    }
                    onChange={handleInputChange}
                  />
                ) : (
                  <A.ParentDogValue>{parent.healthCheck}</A.ParentDogValue>
                )}
              </A.ParentDogDetail>
            </A.ParentDogInfo>
          </A.ParentDogCard>
        ))}

        {/* Parent info modal */}
        {selectedParent && (
          <A.Modal>
            <A.ModalContent>
              <A.ModalHeader>
                <h2>{selectedParent}의 검진 결과</h2>
                <button onClick={closeModal}>닫기</button>
              </A.ModalHeader>
              <A.ModalBody>
                <A.ImageList>
                  {selectedHealthCheckImages.map((img, index) => (
                    <A.ImageItem key={index}>
                      <img src={img} alt={`검진 결과 ${index + 1}`} />
                    </A.ImageItem>
                  ))}
                </A.ImageList>
              </A.ModalBody>
            </A.ModalContent>
          </A.Modal>
        )}
      </div>
    );
  },
);

WaitingParentDogInfo.propTypes = {
  animalParents: PropTypes.array.isRequired,
  animalName: PropTypes.string.isRequired,
  animalType: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  editedData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default WaitingParentDogInfo;
