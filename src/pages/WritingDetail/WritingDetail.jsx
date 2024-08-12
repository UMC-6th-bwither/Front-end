import React, { useState } from 'react';
import * as S from './WritingDetail.style';
import VerticalMenuSelector from '../../components/VerticalMenuSelector/VerticalMenuSelector';

const menuItems = [
  { name: '브리더의 꿀정보', href: '/community/breederinformation' },
  { name: '브위더 후기', href: '/community/review' },
];

function WritingDetail() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const copyUrlToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert('url이 복사되었어요');
      })
      .catch((err) => {
        console.error('URL 복사에 실패했습니다: ', err);
      });
  };

  const Bookmarking = async () => {
    setIsBookmarked(!isBookmarked);
  };

  // 데이터 예시
  const content = [
    {
      type: 'text',
      value:
        '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 거예요? 라고들 많이 질문을 하십니다. 하지만 어떻게 해야할지는 다들 모르시죠. 저희같은 경우엔 이렇게 합니다. 어떻게 하냐? 바로 이렇게요. 다들 어떤도움을 줄 수 있냐 물어보는데 하기야 그럴 수도 있겠다는 생각이들더라구요. 이럴 땐 굉장히 당황스럽 어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 거예요? 라고들 많이 질문을 하십니다. 하지만 어떻게 해야할지는 다들 모르시죠. 저희 같은 경우엔 이렇게 합니다. 어떻게 하냐? 바로 이렇게요. 다들 어떤 도움을 줄 수 있냐 물어보는데 하기야 그럴 수도 있겠다는 생각이 들더라구요. 이럴 땐 굉장히 당황스럽어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 거예요? 라고들 많이 질문을 하십니다. 하지만 어떻게 해야할지는 다들 모르시죠. 저희 같은 경우엔 이렇게 합니다. 어떻게 하냐? 바로바로 이렇게요. 다들 어떤 도움을 줄 수 있냐 물어보는데 하기야 그럴 수도 있겠다는 생각이 들더라구요. 이럴 땐 굉장히 당황스럽',
    },
    { type: 'image', value: '../../../public/img/WritingDetailSample.png' },
    { type: 'image', value: '../../../public/img/WritingDetailSample.png' },
    {
      type: 'text',
      value: '어떻게 해야 할까요?',
    },
    { type: 'image', value: '../../../public/img/WritingDetailSample.png' },
  ];

  return (
    <S.Layout>
      <S.NavbarContainer>
        <VerticalMenuSelector
          title="커뮤니티"
          items={menuItems}
          activeItemName="브리더의 꿀정보"
        />
      </S.NavbarContainer>
      <S.MainContainer>
        <S.Container>
          <S.TitleContainer>
            <S.Title>
              고양이들이 이런 행동을 할 땐? 어떻게 해야할까요
              <S.TitleIconContainer>
                <S.TitleIconFrame onClick={Bookmarking}>
                  {isBookmarked ? (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.85039 29.1973C6.63205 29.9878 5 29.1379 5 27.7128V5.67187C5 4.83064 5.33112 4.02386 5.92052 3.42902C6.50992 2.83418 7.30932 2.5 8.14286 2.5H23.8571C24.6907 2.5 25.4901 2.83418 26.0795 3.42902C26.6689 4.02386 27 4.83064 27 5.67187V27.7128C27 29.1379 25.368 29.9878 24.1496 29.1973L17.7003 25.0124C17.1932 24.6832 16.603 24.5081 16 24.5081C15.397 24.5081 14.8068 24.6832 14.2997 25.0124L7.85039 29.1973Z"
                        fill="#FE834D"
                        stroke="#F57137"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.85039 29.6973C6.63205 30.4879 5 29.6379 5 28.2128V6.17187C5 5.33064 5.33112 4.52386 5.92052 3.92902C6.50992 3.33418 7.30932 3 8.14286 3H23.8571C24.6907 3 25.4901 3.33418 26.0795 3.92902C26.6689 4.52386 27 5.33064 27 6.17187V28.2128C27 29.6379 25.368 30.4878 24.1496 29.6973L17.7003 25.5124C17.1932 25.1832 16.603 25.0081 16 25.0081C15.397 25.0081 14.8068 25.1832 14.2997 25.5124L7.85039 29.6973Z"
                        fill="white"
                        stroke="#C5C5C5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </S.TitleIconFrame>
                <S.TitleIconFrame onClick={copyUrlToClipboard}>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 22.4V29H25V22.4M9.45455 13.8139L16 7L22.5455 13.8139M16 22.4V7.00244"
                      stroke="#C5C5C5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </S.TitleIconFrame>
              </S.TitleIconContainer>
            </S.Title>
            <S.ProfileContainer>
              <S.ProfileImg />
              <S.ProfileName>김*숙</S.ProfileName>
              <S.Time>어제</S.Time>
            </S.ProfileContainer>
          </S.TitleContainer>

          <S.ContentContainer>
            {content.map((item, index) => (
              <React.Fragment key={index}>
                {item.type === 'text' ? (
                  <S.ContentText>{item.value}</S.ContentText>
                ) : (
                  <S.ContextImgContainer>
                    <img src={item.value} alt={`ContentImage ${index + 1}`} />
                  </S.ContextImgContainer>
                )}
              </React.Fragment>
            ))}

            <S.ContentIconContainer>
              <S.ContentIconFrame>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 4C18.3615 4 22.3474 6.74167 25.9644 12.22C26.3143 12.7529 26.5 13.3704 26.5 14.0008C26.5 14.6313 26.3143 15.2488 25.9644 15.7817C22.3474 21.26 18.3615 24 14 24C9.63846 24 5.65264 21.26 2.03562 15.7817C1.68573 15.2488 1.5 14.6313 1.5 14.0008C1.5 13.3704 1.68573 12.7529 2.03562 12.22C5.65437 6.74167 9.63846 4 14 4ZM14 10.6667C13.0816 10.6667 12.2008 11.0179 11.5513 11.643C10.9019 12.2681 10.5371 13.1159 10.5371 14C10.5371 14.8841 10.9019 15.7319 11.5513 16.357C12.2008 16.9821 13.0816 17.3333 14 17.3333C14.9184 17.3333 15.7992 16.9821 16.4487 16.357C17.0981 15.7319 17.4629 14.8841 17.4629 14C17.4629 13.1159 17.0981 12.2681 16.4487 11.643C15.7992 11.0179 14.9184 10.6667 14 10.6667Z"
                    fill="#C5C5C5"
                  />
                </svg>
                <S.ContentIconContent>145</S.ContentIconContent>
              </S.ContentIconFrame>
              <S.ContentIconFrame>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.53006 23.0436C6.86401 23.4599 6 22.9811 6 22.1956V6.22222C6 5.63285 6.24082 5.06762 6.66947 4.65087C7.09812 4.23413 7.67951 4 8.28571 4H19.7143C20.3205 4 20.9019 4.23413 21.3305 4.65087C21.7592 5.06762 22 5.63285 22 6.22222V22.1956C22 22.9811 21.136 23.4599 20.4699 23.0436L15.2366 19.7722C14.8678 19.5416 14.4385 19.4189 14 19.4189C13.5615 19.4189 13.1322 19.5416 12.7634 19.7722L7.53006 23.0436Z"
                    fill="#C5C5C5"
                  />
                </svg>
                <S.ContentIconContent>145</S.ContentIconContent>
              </S.ContentIconFrame>
            </S.ContentIconContainer>
          </S.ContentContainer>
        </S.Container>
      </S.MainContainer>
    </S.Layout>
  );
}

export default WritingDetail;
