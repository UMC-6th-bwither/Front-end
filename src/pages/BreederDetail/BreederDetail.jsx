import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import MenuSelect from '../../components/MenuSelect/MenuSelect';
import * as A from './BreederDetail.style';
import 'react-multi-carousel/lib/styles.css';
import BreederInfo from '../../components/BreederDetail/BreederInfo';
import KennelInfo from '../../components/BreederDetail/KennelInfo';
import CareDog from '../../components/BreederDetail/CareDog';
import BreederReview from '../../components/BreederDetail/BreederReview';
import BreederQna from '../../components/BreederDetail/BreederQna';
import BreederCommunity from '../../components/BreederDetail/BreederCommunity';
import Badge from '../../components/badge/Badge';
import Button from '../../components/button/Button';
import BusinessInfoModal from '../../components/BreederDetail/BusinessInfoModal';

function BreederDetail() {
  const [activeMenu, setActiveMenu] = useState('브리더 정보');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [breederImage, setBreederImage] = useState('');
  const [topImage, setTopImage] = useState('/img/breederdetailbackimg.jpg');

  const breederInfoRef = useRef(null);
  const kennelInfoRef = useRef(null);
  const careDogRef = useRef(null);
  const reviewRef = useRef(null);
  const qnaRef = useRef(null);
  const communityRef = useRef(null);

  const menuItems = [
    '브리더 정보',
    '켄넬 정보',
    '관리 중인 강아지',
    '후기(22)',
    '질문/답변',
    '꿀정보',
  ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // 브리더 프로필 이미지, 썸네일 불러오는 api 추가 예정
        const breederResponse = await axios.get('/api/breeder/image');
        setBreederImage(
          breederResponse.data.image || '/img/defaultprofile.png',
        );

        const topImageResponse = await axios.get('/api/top/image');
        setTopImage(topImageResponse.data.image || '/img/breederinfoedit.png');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('이미지를 불러오기 에러 발생:', error);
        setBreederImage('/img/defaultprofile.png');
        setTopImage('/img/breederinfoedit.png');
      }
    };

    fetchImages();
  }, []);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === '브리더 정보') {
      breederInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '켄넬 정보') {
      kennelInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '관리 중인 강아지') {
      careDogRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '후기(22)') {
      reviewRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '질문/답변') {
      qnaRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '꿀정보') {
      communityRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 공유 아이콘 클릭시
  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      // eslint-disable-next-line no-alert
      alert('클립보드에 url이 복사됐어요');
    });
  };

  // 하트 클릭시
  const toggleFavorite = async () => {
    setIsFavorite((prev) => !prev);
    try {
      await axios.post('/api/favorite/breeder', {
        breederId: 'BREEDER_ID',
        favorite: !isFavorite,
      });
      // eslint-disable-next-line no-console
      console.log('저장 완료');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('저장 실패:', error);
    }
  };

  return (
    <A.Container>
      {isModalOpen && <BusinessInfoModal onClose={closeModal} />}

      <A.TopImage image={topImage} />
      <A.TopBox>
        <A.OverlappingImage alt="프로필사진" image={breederImage} />

        <A.TopLeftBox>
          <A.BreederInfoTitleBox>
            <A.BreederInfoTitle>
              🐶 행복한 분양의 시작 - 해피 브리더
            </A.BreederInfoTitle>
            <A.BreederInfoTitleBoxRight>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                style={{ cursor: 'pointer' }}
                onClick={handleCopyUrl}
              >
                <path
                  d="M0.740234 12.8V17.75H15.2602V12.8M2.72023 6.36042L8.00023 1.25L13.2802 6.36042M8.00023 12.8V1.25183"
                  stroke="#323232"
                  strokeWidth="1.375"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {isFavorite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ cursor: 'pointer' }}
                  onClick={toggleFavorite}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 20C11.6307 20.6528 11.6303 20.6526 11.6303 20.6526L11.6278 20.6511L11.6215 20.6476L11.5995 20.6349C11.5806 20.624 11.5534 20.6082 11.5185 20.5877C11.4487 20.5466 11.3479 20.4864 11.2205 20.4081C10.9659 20.2516 10.6045 20.0223 10.172 19.7281C9.30829 19.1407 8.15358 18.2896 6.9955 17.2368C4.72338 15.1712 2.25 12.1603 2.25 8.72728C2.25 7.46309 2.68357 6.23697 3.47842 5.25761C4.2734 4.2781 5.38101 3.60568 6.61366 3.35666C7.8464 3.10762 9.12621 3.29784 10.2349 3.89419C10.9297 4.2679 11.53 4.78639 12 5.40887C12.47 4.78639 13.0703 4.2679 13.7651 3.89419C14.8738 3.29784 16.1536 3.10762 17.3863 3.35666C18.619 3.60568 19.7266 4.2781 20.5216 5.25761C21.3164 6.23697 21.75 7.46309 21.75 8.72728C21.75 12.1603 19.2766 15.1712 17.0045 17.2368C15.8464 18.2896 14.6917 19.1407 13.828 19.7281C13.3955 20.0223 13.0341 20.2516 12.7795 20.4081C12.6521 20.4864 12.5513 20.5466 12.4815 20.5877C12.4466 20.6082 12.4194 20.624 12.4005 20.6349L12.3785 20.6476L12.3722 20.6511L12.3703 20.6522C12.3703 20.6522 12.3693 20.6528 12 20ZM12 20L12.3693 20.6528C12.1401 20.7824 11.8594 20.7822 11.6303 20.6526L12 20Z"
                    fill="#E76467"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ cursor: 'pointer' }}
                  onClick={toggleFavorite}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.52438 5.71522C8.7232 5.28429 7.79974 5.14735 6.91069 5.32696C6.02155 5.50658 5.21995 5.99212 4.6431 6.70287C4.06612 7.41378 3.75 8.30581 3.75 9.22728C3.75 11.9761 5.77662 14.6015 8.0045 16.6269C9.09642 17.6195 10.1917 18.4275 11.0155 18.9878C11.4233 19.2651 11.7627 19.4806 12 19.6265C12.2373 19.4806 12.5767 19.2651 12.9845 18.9878C13.8083 18.4275 14.9036 17.6195 15.9955 16.6269C18.2234 14.6015 20.25 11.9761 20.25 9.22728C20.25 8.30581 19.9339 7.41378 19.3569 6.70287C18.7801 5.99212 17.9784 5.50658 17.0893 5.32696C16.2003 5.14735 15.2768 5.28429 14.4756 5.71522C13.6743 6.14624 13.0438 6.84535 12.6933 7.6951C12.5775 7.97589 12.3037 8.1591 12 8.1591C11.6963 8.1591 11.4225 7.97589 11.3067 7.6951C10.9562 6.84535 10.3257 6.14624 9.52438 5.71522ZM12 20.5C11.6307 21.1528 11.6305 21.1527 11.6303 21.1526L11.6278 21.1511L11.6215 21.1476L11.5995 21.1349C11.5806 21.124 11.5534 21.1082 11.5185 21.0877C11.4487 21.0466 11.3479 20.9864 11.2205 20.9081C10.9659 20.7516 10.6045 20.5223 10.172 20.2281C9.30829 19.6407 8.15358 18.7896 6.9955 17.7368C4.72338 15.6712 2.25 12.6603 2.25 9.22728C2.25 7.96309 2.68357 6.73697 3.47842 5.75761C4.2734 4.7781 5.38101 4.10568 6.61366 3.85666C7.8464 3.60762 9.12621 3.79784 10.2349 4.39419C10.9297 4.7679 11.53 5.28639 12 5.90887C12.47 5.28639 13.0703 4.7679 13.7651 4.39419C14.8738 3.79784 16.1536 3.60762 17.3863 3.85666C18.619 4.10568 19.7266 4.7781 20.5216 5.75761C21.3164 6.73697 21.75 7.96309 21.75 9.22728C21.75 12.6603 19.2766 15.6712 17.0045 17.7368C15.8464 18.7896 14.6917 19.6407 13.828 20.2281C13.3955 20.5223 13.0341 20.7516 12.7795 20.9081C12.6521 20.9864 12.5513 21.0466 12.4815 21.0877C12.4466 21.1082 12.4194 21.124 12.4005 21.1349L12.3785 21.1476L12.3722 21.1511L12.3703 21.1522C12.3701 21.1523 12.3693 21.1528 12 20.5ZM12 20.5L12.3693 21.1528C12.1401 21.2824 11.8594 21.2822 11.6303 21.1526L12 20.5Z"
                    fill="#323232"
                  />
                </svg>
              )}
            </A.BreederInfoTitleBoxRight>
          </A.BreederInfoTitleBox>
          <A.BreederInfoSubTitleBox>
            <A.BreederInfoSubTitle>
              비글, 골든 리트리버 전문
            </A.BreederInfoSubTitle>
            <A.BreederInfoLocation>
              <A.BreederInfoLocationIcon1
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_1_1486)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2188 7.27399C16.2188 12.217 10.3858 17.5 10.3858 17.5C10.3858 17.5 4.55078 12.542 4.55078 7.27399C4.55078 4.17699 7.16278 1.66699 10.3848 1.66699C13.6058 1.66699 16.2178 4.17699 16.2178 7.27399H16.2188Z"
                    stroke="#737373"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.6284 7.91728C12.6345 8.19473 12.585 8.47059 12.483 8.72867C12.3809 8.98674 12.2284 9.22184 12.0342 9.42017C11.8401 9.61849 11.6084 9.77605 11.3525 9.88359C11.0967 9.99113 10.822 10.0465 10.5444 10.0464C10.2669 10.0464 9.99221 9.99087 9.73643 9.8832C9.48065 9.77554 9.24895 9.61787 9.05493 9.41945C8.8609 9.22104 8.70846 8.98586 8.60655 8.72774C8.50463 8.46961 8.4553 8.19373 8.46145 7.91628C8.47338 7.37161 8.69813 6.85326 9.08757 6.47227C9.477 6.09127 10.0001 5.87793 10.5449 5.87793C11.0898 5.87793 11.6129 6.09127 12.0023 6.47227C12.3918 6.85326 12.6165 7.37261 12.6284 7.91728Z"
                    stroke="#737373"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1486">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </A.BreederInfoLocationIcon1>
              서울시 강서구
            </A.BreederInfoLocation>
          </A.BreederInfoSubTitleBox>

          <A.InfoContent>
            비글, 골든 리트리버 전문 브리더로, 대표가 직접 방문하는 ✨해피
            브리더✨ 입니다.
          </A.InfoContent>
          <A.BreederInfoLabelBox>
            <Badge
              color="#2257DF"
              backgroundColor="#EFF4FF"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.66262 2.41821C5.66262 3.35842 5.09098 4.1206 4.38582 4.1206C3.68067 4.1206 3.10903 3.35842 3.10903 2.41821C3.10903 1.47801 3.68067 0.71582 4.38582 0.71582C5.09098 0.71582 5.66262 1.47801 5.66262 2.41821ZM6.01728 4.76633C8.81517 4.76633 10.8019 7.91222 10.0923 9.91955C9.90746 10.4423 9.42956 10.234 8.69676 9.91462C8.01436 9.61722 7.11092 9.22347 6.01728 9.23401C4.97131 9.24408 4.10229 9.63534 3.43164 9.93728C2.66487 10.2825 2.15741 10.511 1.94127 9.91955C1.12616 7.68918 3.21939 4.76633 6.01728 4.76633ZM7.61434 4.1206C8.31949 4.1206 8.89113 3.35842 8.89113 2.41821C8.89113 1.47801 8.31949 0.71582 7.61434 0.71582C6.90919 0.71582 6.33755 1.47801 6.33755 2.41821C6.33755 3.35842 6.90919 4.1206 7.61434 4.1206ZM2.59484 3.70058C3.09467 4.29626 3.12261 5.09571 2.65723 5.48621C2.19186 5.8767 1.4094 5.71037 0.909568 5.11469C0.409734 4.51901 0.381799 3.71956 0.847173 3.32906C1.31255 2.93857 2.095 3.1049 2.59484 3.70058ZM9.34278 5.48622C9.80815 5.87672 10.5906 5.71038 11.0904 5.11471C11.5903 4.51903 11.6182 3.71957 11.1528 3.32908C10.6875 2.93858 9.90501 3.10492 9.40517 3.7006C8.90534 4.29628 8.8774 5.09573 9.34278 5.48622Z"
                    fill="#F87B45"
                  />
                </svg>
              }
            >
              강아지 전문
            </Badge>
            <Badge
              color="#323232"
              backgroundColor="#ECFAF1"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 7.625L6.88 11L12 5"
                    stroke="#2DC261"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              본인인증
            </Badge>
            <Badge
              color="#FA5963"
              backgroundColor="#FFF2F3"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.05743 3.70833C1.05743 3.14454 1.51448 2.6875 2.07827 2.6875H11.9209C12.4847 2.6875 12.9417 3.14454 12.9417 3.70833V5.02083H12.945V5.89583C11.8413 5.89583 11.0492 6.66712 11.0492 7.5C11.0492 8.33288 11.8413 9.10417 12.945 9.10417V9.97917H12.9417V11.2917C12.9417 11.8555 12.4847 12.3125 11.9209 12.3125H2.07827C1.51448 12.3125 1.05743 11.8555 1.05743 11.2917V9.98774H1.05469V9.11274C2.15843 9.11274 2.95052 8.34146 2.95052 7.50857C2.95052 6.67563 2.15843 5.9044 1.05469 5.9044V5.0294H1.05743V3.70833ZM5.63292 6.7118C6.11614 6.7118 6.5079 6.32005 6.5079 5.8368C6.5079 5.35355 6.11614 4.9618 5.63292 4.9618C5.14966 4.9618 4.75792 5.35355 4.75792 5.8368C4.75792 6.32005 5.14966 6.7118 5.63292 6.7118ZM8.97645 10.0553C9.45969 10.0553 9.85145 9.66358 9.85145 9.18035C9.85145 8.69706 9.45969 8.30535 8.97645 8.30535C8.49322 8.30535 8.10145 8.69706 8.10145 9.18035C8.10145 9.66358 8.49322 10.0553 8.97645 10.0553ZM5.16656 9.43194C4.9957 9.26114 4.9957 8.98412 5.16656 8.81326L8.60942 5.37036C8.78028 5.1995 9.0573 5.1995 9.22816 5.37036C9.39902 5.54121 9.39902 5.81823 9.22816 5.98908L5.78528 9.43194C5.61442 9.6028 5.33741 9.6028 5.16656 9.43194Z"
                    fill="#FA5963"
                  />
                </svg>
              }
            >
              사업자등록증
            </Badge>
          </A.BreederInfoLabelBox>
          <A.BreederInfoBottomBox>
            <A.BreederInfoBottom1>
              <A.BreederInfoBottomTitle>개체수</A.BreederInfoBottomTitle>
              <A.BreederInfoBottomContent>5마리</A.BreederInfoBottomContent>
            </A.BreederInfoBottom1>
            <A.BreederInfoBottom2>
              <A.BreederInfoBottomTitle>리뷰</A.BreederInfoBottomTitle>
              <A.BreederInfoBottomReviewBox>
                <A.BreederInfoBottomReviewIcon
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_1529)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9529 2.52961L12.9629 6.44676L17.4558 7.07533C18.7558 7.25676 19.2772 8.79533 18.3343 9.67819L15.0829 12.7268L15.8515 17.0339C16.0729 18.2796 14.7129 19.231 13.5486 18.6425L9.53005 16.6096L5.51147 18.6425C4.34719 19.231 2.98719 18.2796 3.20862 17.0339L3.97719 12.7268L0.72576 9.67819C-0.217097 8.79533 0.302903 7.25676 1.60433 7.07533L6.09719 6.44676L8.10719 2.52961C8.69005 1.39247 10.37 1.39247 10.9529 2.52961Z"
                      fill="#FFCE21"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1529">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.244141 0.25)"
                      />
                    </clipPath>
                  </defs>
                </A.BreederInfoBottomReviewIcon>
                <A.BreederInfoBottomReviewText1>
                  5.0
                </A.BreederInfoBottomReviewText1>
                <A.BreederInfoBottomReviewText2>
                  (22)
                </A.BreederInfoBottomReviewText2>
              </A.BreederInfoBottomReviewBox>
            </A.BreederInfoBottom2>
            <A.BreederInfoBottom3>
              <A.BreederInfoBottomTitle>총 경력</A.BreederInfoBottomTitle>
              <A.BreederInfoBottomContent>3년</A.BreederInfoBottomContent>
            </A.BreederInfoBottom3>
            <A.BreederInfoBottom4>
              <A.BreederInfoBottomTitle>신뢰 등급</A.BreederInfoBottomTitle>
              <A.BreederInfoBottomContent>2등급</A.BreederInfoBottomContent>
            </A.BreederInfoBottom4>
          </A.BreederInfoBottomBox>

          <A.ReviewEvent>
            <div>🎉</div>
            <div>
              <A.ReviewEventTitle>리뷰이벤트 진행 중!</A.ReviewEventTitle>

              <A.ReviewEventContent>
                해피브리더에서 분양 후 리뷰를 작성해주시면 목줄을 무료로
                제공해드립니다.
              </A.ReviewEventContent>
            </div>
          </A.ReviewEvent>
        </A.TopLeftBox>
        <A.TopRightWrapper>
          <A.TopRightBox>
            <A.TopRightBoxInquiry>
              해피 브리더에게 자세한 문의를 요청해보세요. 자세한 분양 절차에
              대한 정보를 받아보실 수 있어요.
            </A.TopRightBoxInquiry>
            <Button orange>문의하기</Button>
          </A.TopRightBox>
          <A.TopRightBoxResponse>
            평균 <span>1시간 내</span> 응답하는 브리더입니다
          </A.TopRightBoxResponse>
          <Button whiteBorder onClick={openModal}>
            사업자 정보 확인하기
          </Button>
        </A.TopRightWrapper>
      </A.TopBox>

      <A.InfoWrapper>
        <MenuSelect
          menus={menuItems}
          activeMenu={activeMenu}
          setActiveMenu={handleMenuClick}
        />
        <BreederInfo ref={breederInfoRef} />
        <KennelInfo ref={kennelInfoRef} />
        <CareDog ref={careDogRef} />
        <BreederReview ref={reviewRef} />
        <BreederQna ref={qnaRef} />
        <BreederCommunity ref={communityRef} />
      </A.InfoWrapper>
    </A.Container>
  );
}

export default BreederDetail;
