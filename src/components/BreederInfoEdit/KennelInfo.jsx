/* eslint-disable react/prop-types */
import React, { useState, useImperativeHandle, useRef, useEffect } from 'react';
import * as A from '../../pages/BreederInfoEdit/BreederInfoEdit.style';

const KennelInfo = React.forwardRef(({ userData }, ref) => {
  const localRef = useRef();
  const [kennelPictures, setKennelPictures] = useState([]);
  const [kennelAddress, setKennelAddress] = useState('');
  const [businessHours, setBusinessHours] = useState('');
  const [numberOfDogs, setNumberOfDogs] = useState('');

  useImperativeHandle(ref, () => ({
    getKennelInfoData() {
      return {
        kennelAddress,
        kennelHours: businessHours,
        kennelPopulation: numberOfDogs,
        kennelPictures,
      };
    },
    scrollIntoView(options) {
      if (localRef.current) {
        localRef.current.scrollIntoView(options);
      }
    },
  }));

  const handleDeleteKennelPicture = (id) => {
    setKennelPictures((prevPictures) =>
      prevPictures.filter((picture) => picture.id !== id),
    );
  };

  const handleKennelFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setKennelPictures([
        ...kennelPictures,
        { id: URL.createObjectURL(file), name: file.name },
      ]);
    }
  };

  // 유저 데이터 받아오는 로직
  useEffect(() => {
    if (userData) {
      const { breederDTO } = userData;
      setKennelAddress(breederDTO.kennelAddress);
      setBusinessHours(breederDTO.businessTime);
      setNumberOfDogs(breederDTO.animalCount);

      setKennelPictures(
        breederDTO.breederFiles
          .filter((file) => {
            return file.type === 'KENNEL';
          })
          .map((file, index) => {
            return {
              id: file.breederFilePath,
              name: `breeder_kennel_pictures_${index}`,
            };
          }),
      );
    }
  }, [userData]);

  return (
    <div ref={localRef} style={{ marginBottom: '64px' }}>
      <A.InfoItem>
        <A.InfoTitle>켄넬 정보</A.InfoTitle>
        <A.InfoContentBox>
          {/* 켄넬 주소 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0007 1.66699C8.24403 1.6669 6.55836 2.36012 5.31002 3.59598C4.06168 4.83185 3.35155 6.51046 3.33398 8.26699C3.33398 12.8337 9.20898 17.917 9.45898 18.1337C9.60993 18.2628 9.80202 18.3337 10.0007 18.3337C10.1993 18.3337 10.3914 18.2628 10.5423 18.1337C10.834 17.917 16.6673 12.8337 16.6673 8.26699C16.6498 6.51046 15.9396 4.83185 14.6913 3.59598C13.4429 2.36012 11.7573 1.6669 10.0007 1.66699ZM10.0007 16.3753C8.60898 15.0503 5.00065 11.3753 5.00065 8.26699C5.00065 6.94091 5.52744 5.66914 6.46512 4.73146C7.4028 3.79378 8.67457 3.26699 10.0007 3.26699C11.3267 3.26699 12.5985 3.79378 13.5362 4.73146C14.4739 5.66914 15.0006 6.94091 15.0007 8.26699C15.0007 11.3503 11.3923 15.0503 10.0007 16.3753Z"
              fill="#737373"
            />
            <path
              d="M10.0007 5C9.42379 5 8.85988 5.17106 8.38024 5.49155C7.9006 5.81203 7.52676 6.26756 7.306 6.80051C7.08525 7.33346 7.02749 7.9199 7.14003 8.48568C7.25257 9.05146 7.53035 9.57116 7.93826 9.97906C8.34616 10.387 8.86586 10.6648 9.43164 10.7773C9.99742 10.8898 10.5839 10.8321 11.1168 10.6113C11.6498 10.3906 12.1053 10.0167 12.4258 9.53708C12.7463 9.05744 12.9173 8.49353 12.9173 7.91667C12.9173 7.14312 12.61 6.40125 12.063 5.85427C11.5161 5.30729 10.7742 5 10.0007 5ZM10.0007 9.16667C9.75343 9.16667 9.51175 9.09336 9.30619 8.956C9.10063 8.81865 8.94041 8.62343 8.8458 8.39502C8.75119 8.16661 8.72644 7.91528 8.77467 7.6728C8.8229 7.43033 8.94195 7.2076 9.11677 7.03278C9.29158 6.85797 9.51431 6.73892 9.75679 6.69068C9.99927 6.64245 10.2506 6.66721 10.479 6.76182C10.7074 6.85643 10.9026 7.01664 11.04 7.2222C11.1773 7.42777 11.2507 7.66944 11.2507 7.91667C11.2507 8.24819 11.119 8.56613 10.8845 8.80055C10.6501 9.03497 10.3322 9.16667 10.0007 9.16667Z"
              fill="#737373"
            />
          </svg>
          <A.InfoContentTitle>켄넬 주소</A.InfoContentTitle>
          <A.InfoInputBox
            type="text"
            placeholder="서울특별시 강서구 어쩌고동 어쩌고로 123-1"
            value={kennelAddress}
            onChange={(e) => setKennelAddress(e.target.value)}
          />
        </A.InfoContentBox>

        {/* 영업 시간 */}
        <A.InfoContentBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_1_1884)">
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
              <clipPath id="clip0_1_1884">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <A.InfoContentTitle>영업 시간</A.InfoContentTitle>
          <A.InfoInputBox
            type="text"
            placeholder="영업 시간을 입력해주세요"
            value={businessHours}
            onChange={(e) => setBusinessHours(e.target.value)}
          />
        </A.InfoContentBox>

        {/* 개체수 */}
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
              d="M7.50786 2.84676C7.50786 4.41898 6.67402 5.69351 5.64542 5.69351C4.61682 5.69351 3.78297 4.41898 3.78297 2.84676C3.78297 1.27454 4.61682 0 5.64542 0C6.67402 0 7.50786 1.27454 7.50786 2.84676ZM8.02521 6.7733C12.1065 6.7733 15.0045 12.0339 13.9693 15.3906C13.6998 16.2647 13.0027 15.9164 11.9337 15.3823C10.9383 14.885 9.62049 14.2266 8.02521 14.2442C6.49947 14.2611 5.23183 14.9153 4.25356 15.4202C3.13509 15.9975 2.39486 16.3796 2.07957 15.3906C0.890576 11.6609 3.94396 6.7733 8.02521 6.7733ZM10.3548 5.69351C11.3834 5.69351 12.2173 4.41898 12.2173 2.84676C12.2173 1.27454 11.3834 0 10.3548 0C9.32622 0 8.49238 1.27454 8.49238 2.84676C8.49238 4.41898 9.32622 5.69351 10.3548 5.69351ZM3.03293 4.99115C3.76203 5.98725 3.80278 7.3241 3.12394 7.9771C2.4451 8.63009 1.30374 8.35194 0.57464 7.35584C-0.154462 6.35974 -0.195211 5.02288 0.483625 4.36989C1.16246 3.7169 2.30382 3.99505 3.03293 4.99115ZM12.8761 7.97712C13.5549 8.63011 14.6963 8.35197 15.4254 7.35586C16.1545 6.35976 16.1952 5.02291 15.5164 4.36992C14.8376 3.71693 13.6962 3.99508 12.9671 4.99118C12.238 5.98728 12.1972 7.32413 12.8761 7.97712Z"
              fill="#737373"
            />
          </svg>
          <A.InfoContentTitle>개체수</A.InfoContentTitle>
          <A.InfoInputBox
            type="text"
            placeholder="비글 2마리, 골든리트리버 3마리"
            value={numberOfDogs}
            onChange={(e) => setNumberOfDogs(e.target.value)}
          />
        </A.InfoContentBox>

        {/* 기존 코드 유지 */}
        <A.KennelImgBox>
          {/* 추가된 사진들이 앞쪽에 위치 */}
          {kennelPictures.map((cert) => (
            <div key={cert.id} style={{ position: 'relative' }}>
              <A.CertificateImg2 as="img" src={cert.id} alt={cert.name} />
              <A.CertificateIconBox>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  style={{
                    position: 'absolute',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleDeleteKennelPicture(cert.id)}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.09367 2.50789C0.70315 2.11736 0.70315 1.4842 1.09367 1.09367C1.4842 0.70315 2.11736 0.70315 2.50789 1.09367L5.00078 3.58657L7.49368 1.09367C7.8842 0.70315 8.51737 0.70315 8.90789 1.09367C9.29841 1.4842 9.29841 2.11736 8.90789 2.50789L6.415 5.00078L8.90789 7.49367C9.29841 7.8842 9.29841 8.51736 8.90789 8.90789C8.51736 9.29841 7.8842 9.29841 7.49367 8.90789L5.00078 6.415L2.50789 8.90789C2.11736 9.29841 1.4842 9.29841 1.09368 8.90789C0.703151 8.51736 0.703151 7.8842 1.09368 7.49367L3.58657 5.00078L1.09367 2.50789Z"
                    fill="white"
                  />
                </svg>
              </A.CertificateIconBox>
            </div>
          ))}
          {/* 파일 첨부 버튼은 맨 끝에 위치 */}
          <label htmlFor="kennel-file-upload">
            <A.CertificateImg2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M17 0C17.5636 0 18.1041 0.223884 18.5026 0.622398C18.9011 1.02091 19.125 1.56141 19.125 2.125V14.875H31.875C32.4386 14.875 32.9791 15.0989 33.3776 15.4974C33.7761 15.8959 34 16.4364 34 17C34 17.5636 33.7761 18.1041 33.3776 18.5026C32.9791 18.9011 32.4386 19.125 31.875 19.125H19.125V31.875C19.125 32.4386 18.9011 32.9791 18.5026 33.3776C18.1041 33.7761 17.5636 34 17 34C16.4364 34 15.8959 33.7761 15.4974 33.3776C15.0989 32.9791 14.875 32.4386 14.875 31.875V19.125H2.125C1.56141 19.125 1.02091 18.9011 0.622398 18.5026C0.223884 18.1041 0 17.5636 0 17C0 16.4364 0.223884 15.8959 0.622398 15.4974C1.02091 15.0989 1.56141 14.875 2.125 14.875H14.875V2.125C14.875 1.56141 15.0989 1.02091 15.4974 0.622398C15.8959 0.223884 16.4364 0 17 0Z"
                  fill="#C5C5C5"
                />
              </svg>
              파일 첨부
            </A.CertificateImg2>
            <input
              id="kennel-file-upload"
              type="file"
              style={{ display: 'none' }}
              onChange={handleKennelFileUpload}
            />
          </label>
        </A.KennelImgBox>
      </A.InfoItem>
      <A.Line />
    </div>
  );
});

KennelInfo.displayName = ' KennelInfo';

export default KennelInfo;
