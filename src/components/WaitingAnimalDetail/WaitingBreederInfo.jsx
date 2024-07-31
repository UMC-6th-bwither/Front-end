import React from 'react';
import * as A from '../../pages/WaitingAnimalDetail/WaitingAnimalDetail.style';
import Badge from '../badge/Badge';

const WaitingBreederInfo = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <A.InfoItem>
        <A.InfoTitle>브리더 정보</A.InfoTitle>
        <A.BreederInfoTitleBox>
          <A.BreederInfoTitle>
            😊 행복한 분양의 시작 - 해피 브리더
          </A.BreederInfoTitle>
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
            <A.BreederInfoLocationIcon2
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5V10.5C10.6667 10.6768 10.5964 10.8464 10.4714 10.9714C10.3464 11.0964 10.1768 11.1667 10 11.1667H2C1.82319 11.1667 1.65362 11.0964 1.5286 10.9714C1.40357 10.8464 1.33333 10.6768 1.33333 10.5V2.5C1.33333 2.32319 1.40357 2.15362 1.5286 2.0286C1.65362 1.90357 1.82319 1.83333 2 1.83333H6C6.17681 1.83333 6.34638 1.7631 6.4714 1.63807C6.59643 1.51305 6.66667 1.34348 6.66667 1.16667C6.66667 0.989856 6.59643 0.820286 6.4714 0.695262C6.34638 0.570238 6.17681 0.5 6 0.5H2C1.46957 0.5 0.960859 0.710714 0.585787 1.08579C0.210714 1.46086 0 1.96957 0 2.5V10.5C0 11.0304 0.210714 11.5391 0.585787 11.9142C0.960859 12.2893 1.46957 12.5 2 12.5H10C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5V6.5C12 6.32319 11.9298 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333Z"
                fill="#2D2D2D"
              />
              <path
                d="M8.66728 1.83333H9.72061L5.52728 6.02C5.46479 6.08197 5.4152 6.15571 5.38135 6.23695C5.3475 6.31819 5.33008 6.40532 5.33008 6.49333C5.33008 6.58134 5.3475 6.66848 5.38135 6.74972C5.4152 6.83096 5.46479 6.90469 5.52728 6.96667C5.58925 7.02915 5.66299 7.07875 5.74423 7.11259C5.82547 7.14644 5.9126 7.16387 6.00061 7.16387C6.08862 7.16387 6.17576 7.14644 6.25699 7.11259C6.33823 7.07875 6.41197 7.02915 6.47394 6.96667L10.6673 2.78V3.83333C10.6673 4.01014 10.7375 4.17971 10.8625 4.30474C10.9876 4.42976 11.1571 4.5 11.3339 4.5C11.5108 4.5 11.6803 4.42976 11.8053 4.30474C11.9304 4.17971 12.0006 4.01014 12.0006 3.83333V1.16667C12.0006 0.989856 11.9304 0.820286 11.8053 0.695262C11.6803 0.570238 11.5108 0.5 11.3339 0.5H8.66728C8.49047 0.5 8.3209 0.570238 8.19587 0.695262C8.07085 0.820286 8.00061 0.989856 8.00061 1.16667C8.00061 1.34348 8.07085 1.51305 8.19587 1.63807C8.3209 1.7631 8.49047 1.83333 8.66728 1.83333Z"
                fill="#2D2D2D"
              />
            </A.BreederInfoLocationIcon2>
          </A.BreederInfoLocation>
        </A.BreederInfoTitleBox>
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
            혜택
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
        </A.BreederInfoBottomBox>
      </A.InfoItem>
    </div>
  );
});

WaitingBreederInfo.displayName = 'WaitingBreederInfo';

export default WaitingBreederInfo;
