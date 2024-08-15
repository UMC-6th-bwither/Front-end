import React, { useState } from 'react';
import * as A from '../../pages/WaitingAnimalDetail/WaitingAnimalDetail.style';

const WaitingParentDogInfo = React.forwardRef((props, ref) => {
  const [selectedParent, setSelectedParent] = useState(null);

  const handleIconClick = (parent) => {
    setSelectedParent(parent);
  };

  const closeModal = () => {
    setSelectedParent(null);
  };
  return (
    <div ref={ref} style={{ marginBottom: '96px' }}>
      <A.InfoTitle>부모 강아지 정보</A.InfoTitle>
      <A.ParentDogCard>
        <A.ParentDogImage>여긴 이미지</A.ParentDogImage>
        <A.ParentDogInfo>
          <A.ParentDogNameContainer>
            <A.ParentDogName>행복이</A.ParentDogName>
            <A.ParentDogNameGender>행복이 모</A.ParentDogNameGender>
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
          </A.ParentDogNameContainer>
          <A.ParentDogDetail>
            <A.ParentDogLabel>종</A.ParentDogLabel>
            <A.ParentDogValue>비글</A.ParentDogValue>
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>출생</A.ParentDogLabel>
            <A.ParentDogValue>2020.03.14.</A.ParentDogValue>
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>유전질환</A.ParentDogLabel>
            <A.ParentDogValue>없음</A.ParentDogValue>
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>성격</A.ParentDogLabel>
            <A.ParentDogValue>차분함</A.ParentDogValue>
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
                onClick={() => handleIconClick('mother')}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5V10.5C10.6667 10.6768 10.5964 10.8464 10.4714 10.9714C10.3464 11.0964 10.1768 11.1667 10 11.1667H2C1.82319 11.1667 1.65362 11.0964 1.5286 10.9714C1.40357 10.8464 1.33333 10.6768 1.33333 10.5V2.5C1.33333 2.32319 1.40357 2.15362 1.5286 2.0286C1.65362 1.90357 1.82319 1.83333 2 1.83333H6C6.17681 1.83333 6.34638 1.7631 6.4714 1.63807C6.59643 1.51305 6.66667 1.34348 6.66667 1.16667C6.66667 0.989856 6.59643 0.820286 6.4714 0.695262C6.34638 0.570238 6.17681 0.5 6 0.5H2C1.46957 0.5 0.960859 0.710714 0.585787 1.08579C0.210714 1.46086 0 1.96957 0 2.5V10.5C0 11.0304 0.210714 11.5391 0.585787 11.9142C0.960859 12.2893 1.46957 12.5 2 12.5H10C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5V6.5C12 6.32319 11.9298 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333Z"
                  fill="#2D2D2D"
                />
                <path
                  d="M8.66728 1.83333H9.72061L5.52728 6.02C5.46479 6.08197 5.4152 6.15571 5.38135 6.23695C5.3475 6.31819 5.33008 6.40532 5.33008 6.49333C5.33008 6.58134 5.3475 6.66848 5.38135 6.74972C5.4152 6.83096 5.46479 6.90469 5.52728 6.96667C5.58925 7.02915 5.66299 7.07875 5.74423 7.11259C5.82547 7.14644 5.9126 7.16387 6.00061 7.16387C6.08862 7.16387 6.17576 7.14644 6.25699 7.11259C6.33823 7.07875 6.41197 7.02915 6.47394 6.96667L10.6673 2.78V3.83333C10.6673 4.01014 10.7375 4.17971 10.8625 4.30474C10.9876 4.42976 11.1571 4.5 11.3339 4.5C11.5108 4.5 11.6803 4.42976 11.8053 4.30474C11.9304 4.17971 12.0006 4.01014 12.0006 3.83333V1.16667C12.0006 0.989856 11.9304 0.820286 11.8053 0.695262C11.6803 0.570238 11.5108 0.5 11.3339 0.5H8.66728C8.49047 0.5 8.3209 0.570238 8.19587 0.695262C8.07085 0.820286 8.00061 0.989856 8.00061 1.16667C8.00061 1.34348 8.07085 1.51305 8.19587 1.63807C8.3209 1.7631 8.49047 1.83333 8.66728 1.83333Z"
                  fill="#2D2D2D"
                />
              </A.InfoIcon>
            </A.ParentDogLabel>
            <A.ParentDogValue>이상 없음</A.ParentDogValue>
          </A.ParentDogDetail>
        </A.ParentDogInfo>
      </A.ParentDogCard>

      <A.ParentDogCard>
        <A.ParentDogImage>여긴 이미지</A.ParentDogImage>
        <A.ParentDogInfo>
          <A.ParentDogNameContainer>
            <A.ParentDogName>행복이</A.ParentDogName>
            <A.ParentDogNameGender>행복이 부</A.ParentDogNameGender>
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
          </A.ParentDogNameContainer>
          <A.ParentDogDetail>
            <A.ParentDogLabel>종</A.ParentDogLabel>
            <A.ParentDogValue>비글</A.ParentDogValue>
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>출생</A.ParentDogLabel>
            <A.ParentDogValue>2020.03.14.</A.ParentDogValue>
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>유전질환</A.ParentDogLabel>
            <A.ParentDogValue>없음</A.ParentDogValue>
          </A.ParentDogDetail>
          <A.ParentDogDetail>
            <A.ParentDogLabel>성격</A.ParentDogLabel>
            <A.ParentDogValue>활발함</A.ParentDogValue>
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
                onClick={() => handleIconClick('father')}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5V10.5C10.6667 10.6768 10.5964 10.8464 10.4714 10.9714C10.3464 11.0964 10.1768 11.1667 10 11.1667H2C1.82319 11.1667 1.65362 11.0964 1.5286 10.9714C1.40357 10.8464 1.33333 10.6768 1.33333 10.5V2.5C1.33333 2.32319 1.40357 2.15362 1.5286 2.0286C1.65362 1.90357 1.82319 1.83333 2 1.83333H6C6.17681 1.83333 6.34638 1.7631 6.4714 1.63807C6.59643 1.51305 6.66667 1.34348 6.66667 1.16667C6.66667 0.989856 6.59643 0.820286 6.4714 0.695262C6.34638 0.570238 6.17681 0.5 6 0.5H2C1.46957 0.5 0.960859 0.710714 0.585787 1.08579C0.210714 1.46086 0 1.96957 0 2.5V10.5C0 11.0304 0.210714 11.5391 0.585787 11.9142C0.960859 12.2893 1.46957 12.5 2 12.5H10C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5V6.5C12 6.32319 11.9298 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333Z"
                  fill="#2D2D2D"
                />
                <path
                  d="M8.66728 1.83333H9.72061L5.52728 6.02C5.46479 6.08197 5.4152 6.15571 5.38135 6.23695C5.3475 6.31819 5.33008 6.40532 5.33008 6.49333C5.33008 6.58134 5.3475 6.66848 5.38135 6.74972C5.4152 6.83096 5.46479 6.90469 5.52728 6.96667C5.58925 7.02915 5.66299 7.07875 5.74423 7.11259C5.82547 7.14644 5.9126 7.16387 6.00061 7.16387C6.08862 7.16387 6.17576 7.14644 6.25699 7.11259C6.33823 7.07875 6.41197 7.02915 6.47394 6.96667L10.6673 2.78V3.83333C10.6673 4.01014 10.7375 4.17971 10.8625 4.30474C10.9876 4.42976 11.1571 4.5 11.3339 4.5C11.5108 4.5 11.6803 4.42976 11.8053 4.30474C11.9304 4.17971 12.0006 4.01014 12.0006 3.83333V1.16667C12.0006 0.989856 11.9304 0.820286 11.8053 0.695262C11.6803 0.570238 11.5108 0.5 11.3339 0.5H8.66728C8.49047 0.5 8.3209 0.570238 8.19587 0.695262C8.07085 0.820286 8.00061 0.989856 8.00061 1.16667C8.00061 1.34348 8.07085 1.51305 8.19587 1.63807C8.3209 1.7631 8.49047 1.83333 8.66728 1.83333Z"
                  fill="#2D2D2D"
                />
              </A.InfoIcon>
            </A.ParentDogLabel>
            <A.ParentDogValue>이상 없음</A.ParentDogValue>
          </A.ParentDogDetail>
        </A.ParentDogInfo>
      </A.ParentDogCard>
      {selectedParent && (
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
                  d="M14.8964 0.396447C15.0917 0.201184 15.4083 0.201184 15.6036 0.396447C15.7988 0.591709 15.7988 0.908291 15.6036 1.10355L8.70711 8L15.6036 14.8964C15.7988 15.0917 15.7988 15.4083 15.6036 15.6036C15.4083 15.7988 15.0917 15.7988 14.8964 15.6036L8 8.70711L1.10355 15.6036C0.908291 15.7988 0.591709 15.7988 0.396446 15.6036C0.201185 15.4083 0.201185 15.0917 0.396446 14.8964L7.29289 8L0.396447 1.10355C0.201185 0.908291 0.201185 0.591709 0.396447 0.396447C0.591709 0.201184 0.908291 0.201184 1.10355 0.396447L8 7.29289L14.8964 0.396447Z"
                  fill="#C5C5C5"
                />
              </svg>{' '}
            </A.CloseButton>
            {selectedParent === 'mother' && (
              <img
                src="mother_checkup_image_url"
                alt="행복이 모 수의사 검진 결과"
              />
            )}
            {selectedParent === 'father' && (
              <img
                src="father_checkup_image_url"
                alt="행복이 부 수의사 검진 결과"
              />
            )}
          </A.ModalContent>
        </A.ModalOverlay>
      )}
    </div>
  );
});

WaitingParentDogInfo.displayName = 'WaitingParentDogInfo';

export default WaitingParentDogInfo;
