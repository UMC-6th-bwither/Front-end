import React from 'react';
import * as A from '../../pages/BreederDetail/BreederDetail.style';

const BreederCommunity = React.forwardRef((props, ref) => {
  const images = [
    {
      id: 1,
      src: '/img/kennelex.png',
      alt: '강아지 켄넬 사진 1',
      text: '견주만 휴가를 가나요, 반려견도,,,',
      breederName: '해피브리더',
      breederIcon: '/path-to-breeder-icon1.jpg',
    },
    {
      id: 2,
      src: '/path/to/image2.jpg',
      alt: '강아지 켄넬 사진 2',
      text: '견주만 휴가를 가나요, 반려견도,,,',
      breederName: '해피브리더',
      breederIcon: '/path-to-breeder-icon1.jpg',
    },
    {
      id: 3,
      src: '/path/to/image3.jpg',
      alt: '강아지 켄넬 사진 3',
      text: '견주만 휴가를 가나요, 반려견도,,,',
      breederName: '해피브리더',
      breederIcon: '/path-to-breeder-icon1.jpg',
    },
  ];

  return (
    <div ref={ref} style={{ marginBottom: '96px' }}>
      <A.InfoItem>
        <A.InfoTitle>브리더의 꿀정보</A.InfoTitle>
        <A.TipImgBox>
          {images.map((image) => (
            <A.TipImgWrapper key={image.id}>
              <A.TipImg key={image.id}>
                <img src={image.src} alt={image.alt} />
                <A.TipImgText>{image.text}</A.TipImgText>
              </A.TipImg>

              <A.TipBreederInfo>
                <A.TipBreederIcon
                  style={{ backgroundImage: `url(${image.breederIcon})` }}
                />
                <A.TipBreederName>{image.breederName}</A.TipBreederName>
              </A.TipBreederInfo>
            </A.TipImgWrapper>
          ))}
        </A.TipImgBox>
      </A.InfoItem>
    </div>
  );
});

BreederCommunity.displayName = 'BreederCommunity';

export default BreederCommunity;
