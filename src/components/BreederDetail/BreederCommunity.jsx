import React, { useState } from 'react';
import * as A from '../../pages/BreederDetail/BreederDetail.style';

const BreederCommunity = React.forwardRef((props, ref) => {
  const [activeButton, setActiveButton] = useState('답변');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div ref={ref} style={{ marginBottom: '96px' }}>
      <A.InfoItem>
        <A.InfoTitle>브리더의 커뮤니티 활동</A.InfoTitle>
        <A.CommuBtnBox>
          <A.CommuBtn
            className={activeButton === '답변' ? 'active' : ''}
            onClick={() => handleButtonClick('답변')}
          >
            답변
          </A.CommuBtn>
          <A.CommuBtn
            className={activeButton === '게시글' ? 'active' : ''}
            onClick={() => handleButtonClick('게시글')}
          >
            게시글
          </A.CommuBtn>
        </A.CommuBtnBox>
        <A.CommuBox>
          <A.CommuCategory>질문/고민</A.CommuCategory>
          <A.CommuText1>
            입양 그렇게 어렵지 않습니다! 저희 상담 절차만 따라와주시면 큰 어려움
            없이 착한 아이들 만나실 수 있습니다.
          </A.CommuText1>
          <A.CommuText2>입양 절차가 어렵다고 들었는데 괜찮을까요?</A.CommuText2>
          <A.CommuNumBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.94103 6.34267V3.80967C9.94103 2.75967 9.11503 1.90967 8.09703 1.90967L5.63703 7.60967V14.5757H12.573C12.8736 14.5757 13.1639 14.4666 13.3901 14.2687C13.6164 14.0708 13.7631 13.7976 13.803 13.4997L14.652 7.79967C14.6791 7.61864 14.6674 7.43392 14.6178 7.25774C14.5681 7.08156 14.4816 6.91793 14.364 6.77767C14.2489 6.64011 14.1047 6.52977 13.9418 6.45456C13.7789 6.37934 13.6014 6.34113 13.422 6.34267H9.94103ZM3.92903 14.5757H2.56203C1.88303 14.5757 1.33203 14.0087 1.33203 13.3097V8.87567C1.33203 8.17567 1.88303 7.60967 2.56203 7.60967H3.92903V14.5757Z"
                fill="#C5C5C5"
              />
            </svg>
            <A.CommuNum>0</A.CommuNum>
          </A.CommuNumBox>
        </A.CommuBox>
        <A.CommuBox>
          <A.CommuCategory>질문/고민</A.CommuCategory>
          <A.CommuText1>
            입양 그렇게 어렵지 않습니다! 저희 상담 절차만 따라와주시면 큰 어려움
            없이 착한 아이들 만나실 수 있습니다.
          </A.CommuText1>
          <A.CommuText2>입양 절차가 어렵다고 들었는데 괜찮을까요?</A.CommuText2>
          <A.CommuNumBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.94103 6.34267V3.80967C9.94103 2.75967 9.11503 1.90967 8.09703 1.90967L5.63703 7.60967V14.5757H12.573C12.8736 14.5757 13.1639 14.4666 13.3901 14.2687C13.6164 14.0708 13.7631 13.7976 13.803 13.4997L14.652 7.79967C14.6791 7.61864 14.6674 7.43392 14.6178 7.25774C14.5681 7.08156 14.4816 6.91793 14.364 6.77767C14.2489 6.64011 14.1047 6.52977 13.9418 6.45456C13.7789 6.37934 13.6014 6.34113 13.422 6.34267H9.94103ZM3.92903 14.5757H2.56203C1.88303 14.5757 1.33203 14.0087 1.33203 13.3097V8.87567C1.33203 8.17567 1.88303 7.60967 2.56203 7.60967H3.92903V14.5757Z"
                fill="#C5C5C5"
              />
            </svg>
            <A.CommuNum>0</A.CommuNum>
          </A.CommuNumBox>
        </A.CommuBox>
      </A.InfoItem>
    </div>
  );
});

BreederCommunity.displayName = 'BreederCommunity';

export default BreederCommunity;
