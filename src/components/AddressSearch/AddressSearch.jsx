import React from 'react';
import DaumPostcode from 'react-daum-postcode';

export default function AddressSearch() {
  const handleComplete = (data) => {
    console.log(data); // 검색된 주소 정보 처리
  };

  return (
    <DaumPostcode
      onComplete={handleComplete}
      style={{ width: '100%', height: '450px' }}
    />
  );
}
