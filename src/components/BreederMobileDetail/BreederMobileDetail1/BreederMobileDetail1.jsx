import * as S from './BreederMobileDetail1.style';
import BadgeVariant from '../../badge/BadgeVariant';

export default function BreederMobileDetail1() {
  return (
    <S.Container>
      <S.MainContentContainer>
        <S.ImgContainer>
          <S.Img src="img/breederprofile.png" />
        </S.ImgContainer>
        <S.BreederTitle>😊 행복한 분양의 시작 - 해피 브리더</S.BreederTitle>
        <S.BreederSubtitleContainer>
          <S.BreederSubtitleContainerSub>
            비글, 골든 리트리버 전문
          </S.BreederSubtitleContainerSub>
          <S.BreederSubtitleContainerLocationContainer>
            <S.BreederSubtitleContainerLocationIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <g clipPath="url(#clip0_356_11025)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2188 7.77497C16.2188 12.718 10.3858 18.001 10.3858 18.001C10.3858 18.001 4.55078 13.043 4.55078 7.77497C4.55078 4.67797 7.16278 2.16797 10.3848 2.16797C13.6058 2.16797 16.2178 4.67797 16.2178 7.77497H16.2188Z"
                    stroke="#737373"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.6284 8.41826C12.6345 8.69571 12.585 8.97157 12.483 9.22964C12.3809 9.48772 12.2284 9.72282 12.0342 9.92114C11.8401 10.1195 11.6084 10.277 11.3525 10.3846C11.0967 10.4921 10.822 10.5475 10.5444 10.5474C10.2669 10.5473 9.99221 10.4918 9.73643 10.3842C9.48065 10.2765 9.24895 10.1188 9.05493 9.92043C8.8609 9.72201 8.70846 9.48684 8.60655 9.22871C8.50463 8.97059 8.4553 8.69471 8.46145 8.41726C8.47338 7.87258 8.69813 7.35424 9.08757 6.97324C9.477 6.59225 10.0001 6.37891 10.5449 6.37891C11.0898 6.37891 11.6129 6.59225 12.0023 6.97324C12.3918 7.35424 12.6165 7.87358 12.6284 8.41826Z"
                    stroke="#737373"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_356_11025">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </S.BreederSubtitleContainerLocationIcon>
            <S.BreederSubtitleContainerLocationContent>
              서울시 강서구
            </S.BreederSubtitleContainerLocationContent>
          </S.BreederSubtitleContainerLocationContainer>
        </S.BreederSubtitleContainer>
        <S.BreederTagsContainer>
          <BadgeVariant content="강아지 전문" />
          <BadgeVariant content="본인인증" />
          <BadgeVariant content="사업자등록증" />
          <BadgeVariant content="혜택" />
        </S.BreederTagsContainer>
      </S.MainContentContainer>
      <S.BreederDetail>
        비글, 골든 리트리버 전문 브리더로, 대표가 직접 방문하는 ✨해피 브리더✨
        입니다. 서연대 반려동물학과 출신으로 믿을 수 있는 분양 약속 드립니다.
      </S.BreederDetail>
      <S.BreederGrid>
        <S.BreederGridItem>
          <S.BreederGridItemTitle>개체수</S.BreederGridItemTitle>
          <S.BreederGridItemContent>5마리</S.BreederGridItemContent>
        </S.BreederGridItem>
        <S.BreederGridItem>
          <S.BreederGridItemTitle>리뷰</S.BreederGridItemTitle>
          <S.BreederGridItemContent>
            <S.StarContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <g clipPath="url(#clip0_356_11067)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.9549 2.52864L12.9649 6.44578L17.4577 7.07435C18.7577 7.25578 19.2791 8.79435 18.3363 9.67721L15.0849 12.7258L15.8534 17.0329C16.0749 18.2786 14.7149 19.2301 13.5506 18.6415L9.532 16.6086L5.51343 18.6415C4.34914 19.2301 2.98914 18.2786 3.21057 17.0329L3.97914 12.7258L0.727713 9.67721C-0.215144 8.79435 0.304856 7.25578 1.60628 7.07435L6.09914 6.44578L8.10914 2.52864C8.692 1.3915 10.372 1.3915 10.9549 2.52864Z"
                    fill="#FFCE21"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_356_11067">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.246094 0.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </S.StarContainer>
            5.0
            <S.ReviewCount>(22)</S.ReviewCount>
          </S.BreederGridItemContent>
        </S.BreederGridItem>
        <S.BreederGridItem>
          <S.BreederGridItemTitle>총 경력</S.BreederGridItemTitle>
          <S.BreederGridItemContent>3년</S.BreederGridItemContent>
        </S.BreederGridItem>
        <S.BreederGridItem>
          <S.BreederGridItemTitle>신뢰 등급</S.BreederGridItemTitle>
          <S.BreederGridItemContent>2등급</S.BreederGridItemContent>
        </S.BreederGridItem>
      </S.BreederGrid>
    </S.Container>
  );
}
