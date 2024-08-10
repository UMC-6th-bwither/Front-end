import React from 'react';
import * as A from '../../pages/BreederDetail/BreederDetail.style';

const CareDog = React.forwardRef((props, ref) => {
  const images = [
    {
      id: 1,
      src: '/img/kennelex.png',
      alt: '강아지 켄넬 사진 1',
      name: '행복이',
      age: '1살',
      gender: '여아',
    },
    {
      id: 2,
      src: '/path/to/image2.jpg',
      alt: '강아지 켄넬 사진 2',
      name: '행복이',
      age: '1살',
      gender: '여아',
    },
    {
      id: 3,
      src: '/path/to/image3.jpg',
      alt: '강아지 켄넬 사진 3',
      name: '행복이',
      age: '1살',
      gender: '여아',
    },
    {
      id: 4,
      src: '/path/to/image4.jpg',
      alt: '강아지 켄넬 사진 4',
      name: '행복이',
      age: '1살',
      gender: '여아',
    },
    {
      id: 5,
      src: '/path/to/image5.jpg',
      alt: '강아지 켄넬 사진 5',
      name: '행복이',
      age: '1살',
      gender: '여아',
    },
    {
      id: 6,
      src: '/path/to/image6.jpg',
      alt: '강아지 켄넬 사진 6',
      name: '행복이',
      age: '1살',
      gender: '여아',
    },
    {
      id: 7,
      src: '/path/to/image7.jpg',
      alt: '강아지 켄넬 사진 7',
      name: '행복이',
      age: '1살',
      gender: '여아',
    },
  ];

  return (
    <div ref={ref} style={{ marginBottom: '64px' }}>
      <A.InfoItem>
        <A.InfoTitle>관리 중인 강아지</A.InfoTitle>
        <A.CareImgBox>
          {images.map((image) => (
            <A.CareImg key={image.id}>
              <img src={image.src} alt={image.alt} />
              <A.KennelImgText>{`${image.name}(${image.age}, ${image.gender})`}</A.KennelImgText>
            </A.CareImg>
          ))}
        </A.CareImgBox>
      </A.InfoItem>
    </div>
  );
});

CareDog.displayName = 'CareDog';

export default CareDog;
