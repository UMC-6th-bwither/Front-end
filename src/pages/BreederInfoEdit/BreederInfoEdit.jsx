import { useState, useRef } from 'react';
import MenuSelect from '../../components/MenuSelect/MenuSelect';
import * as A from './BreederInfoEdit.style';
import 'react-multi-carousel/lib/styles.css';
import BreederInfo from '../../components/BreederInfoEdit/BreederInfo';
// import KennelInfo from '../../components/BreederInfoEdit/KennelInfo';
// import CareDog from '../../components/BreederInfoEdit/CareDog';
// import BreederQna from '../../components/BreederInfoEdit/BreederQna';

function BreederInfoEdit() {
  const [activeMenu, setActiveMenu] = useState('브리더 정보');

  const breederInfoRef = useRef(null);
  const kennelInfoRef = useRef(null);
  const careDogRef = useRef(null);
  const qnaRef = useRef(null);

  const menuItems = [
    '브리더 정보',
    '켄넬 정보',
    '관리 중인 강아지',
    '질문/답변',
  ];

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === '브리더 정보') {
      breederInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '켄넬 정보') {
      kennelInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '관리 중인 강아지') {
      careDogRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (menu === '질문/답변') {
      qnaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <A.Container>
      <A.TopImage />
      <A.TopBox>
        <A.OverlappingImage />

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
              >
                <path
                  d="M0.740234 12.8V17.75H15.2602V12.8M2.72023 6.36042L8.00023 1.25L13.2802 6.36042M8.00023 12.8V1.25183"
                  stroke="#323232"
                  strokeWidth="1.375"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.52438 5.71522C8.7232 5.28429 7.79974 5.14735 6.91069 5.32696C6.02155 5.50658 5.21995 5.99212 4.6431 6.70287C4.06612 7.41378 3.75 8.30581 3.75 9.22728C3.75 11.9761 5.77662 14.6015 8.0045 16.6269C9.09642 17.6195 10.1917 18.4275 11.0155 18.9878C11.4233 19.2651 11.7627 19.4806 12 19.6265C12.2373 19.4806 12.5767 19.2651 12.9845 18.9878C13.8083 18.4275 14.9036 17.6195 15.9955 16.6269C18.2234 14.6015 20.25 11.9761 20.25 9.22728C20.25 8.30581 19.9339 7.41378 19.3569 6.70287C18.7801 5.99212 17.9784 5.50658 17.0893 5.32696C16.2003 5.14735 15.2768 5.28429 14.4756 5.71522C13.6743 6.14624 13.0438 6.84535 12.6933 7.6951C12.5775 7.97589 12.3037 8.1591 12 8.1591C11.6963 8.1591 11.4225 7.97589 11.3067 7.6951C10.9562 6.84535 10.3257 6.14624 9.52438 5.71522ZM12 20.5C11.6307 21.1528 11.6305 21.1527 11.6303 21.1526L11.6278 21.1511L11.6215 21.1476L11.5995 21.1349C11.5806 21.124 11.5534 21.1082 11.5185 21.0877C11.4487 21.0466 11.3479 20.9864 11.2205 20.9081C10.9659 20.7516 10.6045 20.5223 10.172 20.2281C9.30829 19.6407 8.15358 18.7896 6.9955 17.7368C4.72338 15.6712 2.25 12.6603 2.25 9.22728C2.25 7.96309 2.68357 6.73697 3.47842 5.75761C4.2734 4.7781 5.38101 4.10568 6.61366 3.85666C7.8464 3.60762 9.12621 3.79784 10.2349 4.39419C10.9297 4.7679 11.53 5.28639 12 5.90887C12.47 5.28639 13.0703 4.7679 13.7651 4.39419C14.8738 3.79784 16.1536 3.60762 17.3863 3.85666C18.619 4.10568 19.7266 4.7781 20.5216 5.75761C21.3164 6.73697 21.75 7.96309 21.75 9.22728C21.75 12.6603 19.2766 15.6712 17.0045 17.7368C15.8464 18.7896 14.6917 19.6407 13.828 20.2281C13.3955 20.5223 13.0341 20.7516 12.7795 20.9081C12.6521 20.9864 12.5513 21.0466 12.4815 21.0877C12.4466 21.1082 12.4194 21.124 12.4005 21.1349L12.3785 21.1476L12.3722 21.1511L12.3703 21.1522C12.3701 21.1523 12.3693 21.1528 12 20.5ZM12 20.5L12.3693 21.1528C12.1401 21.2824 11.8594 21.2822 11.6303 21.1526L12 20.5Z"
                  fill="#323232"
                />
              </svg>
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
        </A.TopLeftBox>
        <A.TopRightWrapper>
          <A.TopRightBox>
            <A.TopRightBoxInquiry>
              해피 브리더에게 자세한 문의를 요청해보세요. 자세한 분양 절차에
              대한 정보를 받아보실 수 있어요.
            </A.TopRightBoxInquiry>
          </A.TopRightBox>
        </A.TopRightWrapper>
      </A.TopBox>

      <A.InfoWrapper>
        <MenuSelect
          menus={menuItems}
          activeMenu={activeMenu}
          setActiveMenu={handleMenuClick}
        />
        <BreederInfo ref={breederInfoRef} />
        {/* <KennelInfo ref={kennelInfoRef} />
        <CareDog ref={careDogRef} />
        <BreederQna ref={qnaRef} /> */}
      </A.InfoWrapper>
    </A.Container>
  );
}

export default BreederInfoEdit;
