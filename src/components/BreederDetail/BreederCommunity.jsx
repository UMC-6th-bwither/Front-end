import React from 'react';
import PropTypes from 'prop-types';
import * as A from '../../pages/BreederDetail/BreederDetail.style';

const BreederCommunity = React.forwardRef((props, ref) => {
  const { breederTips } = props;
  // const images = [
  //   {
  //     id: 1,
  //     src: '/img/kennelex.png',
  //     alt: '강아지 켄넬 사진 1',
  //     text: '견주만 휴가를 가나요, 반려견도,,,',
  //     breederName: '해피브리더',
  //     breederIcon: '/path-to-breeder-icon1.jpg',
  //   },
  //   {
  //     id: 2,
  //     src: '/path/to/image2.jpg',
  //     alt: '강아지 켄넬 사진 2',
  //     text: '견주만 휴가를 가나요, 반려견도,,,',
  //     breederName: '해피브리더',
  //     breederIcon: '/path-to-breeder-icon1.jpg',
  //   },
  //   {
  //     id: 3,
  //     src: '/path/to/image3.jpg',
  //     alt: '강아지 켄넬 사진 3',
  //     text: '견주만 휴가를 가나요, 반려견도,,,',
  //     breederName: '해피브리더',
  //     breederIcon: '/path-to-breeder-icon1.jpg',
  //   },
  // ];

  return (
    <div ref={ref} style={{ marginBottom: '96px' }}>
      <A.InfoItem>
        <A.InfoTitle>브리더의 꿀정보</A.InfoTitle>
        <A.TipImgBox>
          {breederTips.map((image) => (
            <A.TipImgWrapper key={image.postId}>
              <A.TipImg key={image.postId}>
                <img src={image.thumbnail} alt="썸네일" />
                <A.TipImgText>{image.title}</A.TipImgText>
              </A.TipImg>

              <A.TipBreederInfo>
                <A.TipBreederIcon
                  style={{ backgroundImage: `url(${image.userProfile})` }}
                />
                <A.TipBreederName>{image.userName}</A.TipBreederName>
              </A.TipBreederInfo>
            </A.TipImgWrapper>
          ))}
        </A.TipImgBox>
      </A.InfoItem>
    </div>
  );
});

BreederCommunity.displayName = 'BreederCommunity';

BreederCommunity.propTypes = {
  breederTips: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      userName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      userProfile: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
    }),
  ),
};

BreederCommunity.defaultProps = {
  breederTips: [],
};

export default BreederCommunity;
