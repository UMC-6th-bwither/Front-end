import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as A from '../../pages/BreederDetail/BreederDetail.style';

const BreederInfo = React.forwardRef((props, ref) => {
  const {
    contactableTime,
    snsAddress,
    detailDescription,
    species,
    careerYear,
    departmentName,
    enrollmentDate,
    graduationDate,
    breedingCareers,
    schoolName,
    files,
  } = props;

  const [showMore, setShowMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // const images = [
  //   { id: 1, src: '/img/kennelex.png', alt: '자격증 사진 1' },
  //   { id: 2, src: '/img/certificate2.jpg', alt: '자격증 사진 2' },
  //   { id: 3, src: '/img/certificate3.jpg', alt: '자격증 사진 3' },
  // ];

  const certificateFiles = files.filter((file) => file.type === 'CERTIFICATE');

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const openModal = (index) => {
    setCurrentImage(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % certificateFiles.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (currentImage - 1 + certificateFiles.length) % certificateFiles.length,
    );
  };

  const formattedEnrollmentDate = enrollmentDate
    ? new Date(enrollmentDate).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
      })
    : 'N/A';
  const formattedGraduationDate = graduationDate
    ? new Date(graduationDate).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
      })
    : 'N/A';

  return (
    <div ref={ref} style={{ marginBottom: '64px' }}>
      <A.InfoItem>
        <A.InfoTitle>브리더 정보</A.InfoTitle>

        <A.InfoContentBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_1_1782)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.918 10.0957C17.918 12.0848 17.1278 13.9925 15.7213 15.399C14.3147 16.8055 12.4071 17.5957 10.418 17.5957C8.42885 17.5957 6.52119 16.8055 5.11467 15.399C3.70814 13.9925 2.91797 12.0848 2.91797 10.0957C2.91797 8.10658 3.70814 6.19893 5.11467 4.7924C6.52119 3.38588 8.42885 2.5957 10.418 2.5957C12.4071 2.5957 14.3147 3.38588 15.7213 4.7924C17.1278 6.19893 17.918 8.10658 17.918 10.0957Z"
                stroke="#737373"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.56445 6.10254V10.9485H13.0255"
                stroke="#737373"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1782">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <A.InfoContent>연락 가능 시간: {contactableTime}</A.InfoContent>
        </A.InfoContentBox>
        <A.InfoContentBox>
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
              d="M6.85714 14.8571C6.85714 15.4883 7.36882 16 8 16C8.63118 16 9.14286 15.4883 9.14286 14.8571V9.14286H14.8571C15.4883 9.14286 16 8.63118 16 8C16 7.36882 15.4883 6.85714 14.8571 6.85714H9.14286V1.14286C9.14286 0.511675 8.63118 0 8 0C7.36882 0 6.85714 0.511674 6.85714 1.14286V6.85714H1.14286C0.511675 6.85714 0 7.36882 0 8C0 8.63118 0.511674 9.14286 1.14286 9.14286H6.85714V14.8571Z"
              fill="#737373"
            />
          </svg>
          <A.InfoContent>SNS</A.InfoContent>
          <A.InfoContentDetail>{snsAddress || '내용없음'} </A.InfoContentDetail>
        </A.InfoContentBox>
      </A.InfoItem>
      <A.InfoItem>
        <A.InfoTitle>브리더 상세설명</A.InfoTitle>
        <A.InfoContent>
          {showMore
            ? detailDescription
            : (detailDescription || '').substring(0, 17 * 26) || '내용없음'}
        </A.InfoContent>
        {detailDescription && detailDescription.length > 17 * 26 && (
          <A.ContentMoreButton showMore={showMore} onClick={handleShowMore}>
            상세설명 더보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.05313 12.4002C8.19653 12.3996 8.3328 12.3374 8.42727 12.2295L14.3763 5.43083C14.5581 5.22302 14.5371 4.90713 14.3293 4.72529C14.1215 4.54344 13.8056 4.5645 13.6237 4.77231L8.0478 11.1445L2.3735 4.76915C2.18991 4.56288 1.87386 4.54449 1.66759 4.72808C1.46131 4.91167 1.44292 5.22772 1.62651 5.43399L7.67753 12.2326C7.77287 12.3397 7.90967 12.4008 8.05313 12.4002Z"
                fill="#FE834D"
              />
            </svg>
          </A.ContentMoreButton>
        )}
      </A.InfoItem>
      <A.InfoItemSecond>
        <A.InfoTitle>전문 견종</A.InfoTitle>
        <A.AnimalSelectBox>
          {species.map((specie) => (
            <A.AnimalSelect key={specie}>{specie}</A.AnimalSelect>
          ))}
        </A.AnimalSelectBox>
      </A.InfoItemSecond>

      <A.InfoItemSecond>
        <A.InfoTitle>경력</A.InfoTitle>
        <A.InfoContentBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.68 3C14.813 3 16.578 4.55 16.578 6.512L16.577 7.011H20.86C21.181 7.011 21.447 7.253 21.493 7.567L21.5 7.663V19.348C21.5 19.708 21.214 20 20.86 20H3.14003C3.05519 19.9992 2.97134 19.9817 2.89327 19.9485C2.81519 19.9153 2.74442 19.8671 2.68499 19.8066C2.62556 19.746 2.57863 19.6744 2.5469 19.5957C2.51516 19.517 2.49924 19.4328 2.50003 19.348V7.663C2.50003 7.303 2.78603 7.012 3.14003 7.012L7.42203 7.011V6.512C7.42203 4.612 9.07503 3.1 11.115 3.005L11.32 3H12.68ZM7.91403 14.834H3.77903V18.696H20.22V14.834H16.085V15.687C16.085 16.047 15.799 16.338 15.445 16.338C15.2907 16.3366 15.1419 16.2798 15.0259 16.1779C14.9099 16.0761 14.8344 15.9359 14.813 15.783L14.806 15.687L14.805 14.834H9.19403V15.687C9.19403 16.047 8.90803 16.338 8.55403 16.338C8.39948 16.3368 8.2505 16.2801 8.13429 16.1783C8.01808 16.0764 7.94238 15.9361 7.92103 15.783L7.91503 15.687L7.91403 14.834ZM20.22 8.315H3.78003L3.77903 13.53H7.91403V12.678C7.91403 12.318 8.20103 12.026 8.55403 12.026C8.87603 12.026 9.14203 12.267 9.18703 12.582L9.19403 12.678V13.53H14.805V12.678C14.805 12.318 15.092 12.026 15.445 12.026C15.767 12.026 16.033 12.267 16.079 12.582L16.085 12.678V13.53H20.22V8.315ZM12.68 4.304H11.32C9.85503 4.304 8.70203 5.316 8.70203 6.512V7.012H15.298V6.512C15.298 5.364 14.235 4.385 12.854 4.309L12.68 4.304Z"
              fill="#FE834D"
            />
          </svg>
          <A.InfoContentCarrer>총 경력 {careerYear}년</A.InfoContentCarrer>
        </A.InfoContentBox>
        {breedingCareers.map((career) => (
          <React.Fragment key={career.tradeName}>
            <A.MiniTitle>{career.tradeName}</A.MiniTitle>
            <A.MiniContent>
              {new Date(career.joinDate).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
              })}{' '}
              -{' '}
              {career.currentlyEmployed
                ? '현재'
                : new Date(career.leaveDate).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                  })}
            </A.MiniContent>
            <A.MiniContent2>{career.description || '내용없음'}</A.MiniContent2>
          </React.Fragment>
        ))}
      </A.InfoItemSecond>
      <A.InfoItemSecond>
        <A.InfoTitle>학력</A.InfoTitle>
        <A.MiniTitle>{schoolName || '내용없음'}</A.MiniTitle>
        <A.MiniContent>
          {formattedEnrollmentDate} - {formattedGraduationDate}
        </A.MiniContent>
        <A.MiniContent2>{departmentName || '내용없음'}</A.MiniContent2>
      </A.InfoItemSecond>
      <A.InfoItem>
        <A.InfoTitle>자격증 및 기타 서류</A.InfoTitle>
        <A.CertificateImgBox>
          {certificateFiles.map((file, index) => (
            <A.CertificateImg
              key={file.breederFileId}
              onClick={() => openModal(index)}
            >
              <img
                src={file.breederFilePath}
                alt={`자격증 사진 ${index + 1}`}
              />
            </A.CertificateImg>
          ))}
        </A.CertificateImgBox>
      </A.InfoItem>
      <A.Line />

      {modalOpen && (
        <A.ModalOverlay onClick={closeModal}>
          <A.ModalContent onClick={(e) => e.stopPropagation()}>
            <A.ModalHeader>
              <A.CloseButton onClick={closeModal}>&times;</A.CloseButton>
            </A.ModalHeader>
            <A.ModalBody>
              <A.PrevButton onClick={prevImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="26"
                  viewBox="0 0 14 26"
                  fill="none"
                >
                  <path
                    d="M12.5 2L1.5 13L12.5 24"
                    stroke="#737373"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </A.PrevButton>
              <A.ModalImage
                src={certificateFiles[currentImage].breederFilePath}
                alt={
                  certificateFiles[currentImage].alt ||
                  `자격증 사진 ${currentImage + 1}`
                }
              />
              <A.NextButton onClick={nextImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="26"
                  viewBox="0 0 14 26"
                  fill="none"
                >
                  <path
                    d="M1.5 2L12.5 13L1.5 24"
                    stroke="#737373"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </A.NextButton>
            </A.ModalBody>
          </A.ModalContent>
        </A.ModalOverlay>
      )}
    </div>
  );
});

BreederInfo.displayName = 'BreederInfo';

BreederInfo.propTypes = {
  contactableTime: PropTypes.string,
  snsAddress: PropTypes.string,
  detailDescription: PropTypes.string,
  species: PropTypes.arrayOf(PropTypes.string),
  careerYear: PropTypes.number,
  departmentName: PropTypes.string,
  enrollmentDate: PropTypes.string,
  graduationDate: PropTypes.string,
  breedingCareers: PropTypes.arrayOf(
    PropTypes.shape({
      tradeName: PropTypes.string,
      joinDate: PropTypes.string,
      leaveDate: PropTypes.string,
      currentlyEmployed: PropTypes.bool,
      description: PropTypes.string,
    }),
  ),
  schoolName: PropTypes.string,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      breederFileId: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      breederFilePath: PropTypes.string.isRequired,
    }),
  ),
};

// defaultProps 정의
BreederInfo.defaultProps = {
  contactableTime: '내용없음',
  snsAddress: '내용없음',
  detailDescription: '내용없음',
  species: [],
  careerYear: 0,
  departmentName: '내용없음',
  enrollmentDate: null,
  graduationDate: null,
  breedingCareers: [],
  schoolName: '내용없음',
  files: [],
};
export default BreederInfo;
