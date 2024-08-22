/* eslint-disable react/prop-types */
import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '600px',
    padding: '0',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

export default function AddressSearchModal({
  isOpen,
  setIsOpen,
  setZipCode,
  setAddress,
}) {
  const handleComplete = (data) => {
    setZipCode(data.zonecode); // 부모 컴포넌트에 우편번호 전달
    setAddress(data.roadAddress); // 부모 컴포넌트에 도로명 주소 전달
    setIsOpen(false); // 모달 닫기
  };

  const closeModal = () => setIsOpen(false);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
    >
      <DaumPostcode
        onComplete={handleComplete}
        style={{ width: '100%', height: '100%' }}
      />
      <button type="button" onClick={closeModal}>
        닫기
      </button>
    </Modal>
  );
}
