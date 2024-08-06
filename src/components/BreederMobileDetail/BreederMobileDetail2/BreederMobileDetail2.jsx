import { useState } from 'react';
import * as S from './BreederMobileDetail2.style';

export default function BreederMobileDetail2() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <S.Container>
      <div>
        <S.Title>브리더 정보</S.Title>
        <S.SubContentLayout>
          <S.SubContentContainer>
            <S.IconContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
              >
                <path
                  d="M0.50928 0.5C0.248357 0.5 0.0585938 0.689763 0.0585938 0.950687V19.0493C0.0585938 19.3102 0.248357 19.5 0.50928 19.5H11.4918C11.7527 19.5 11.9425 19.3102 11.9425 19.0493V0.950687C11.9425 0.689763 11.7527 0.5 11.4918 0.5L0.50928 0.5ZM2.43063 2.87203H9.54673V14.7322H2.43063V2.87203ZM5.98868 15.9182C6.65285 15.9182 7.1747 16.4401 7.1747 17.1042C7.1747 17.7684 6.65285 18.2903 5.98868 18.2903C5.32451 18.2903 4.80266 17.7684 4.80266 17.1042C4.80266 16.4401 5.32451 15.9182 5.98868 15.9182Z"
                  fill="#737373"
                />
              </svg>
            </S.IconContainer>
            <S.SubContent>010-1234-5678</S.SubContent>
          </S.SubContentContainer>
          <S.SubContentContainer>
            <S.IconContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_356_11108)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.918 10.0977C17.918 12.0868 17.1278 13.9944 15.7213 15.401C14.3147 16.8075 12.4071 17.5977 10.418 17.5977C8.42885 17.5977 6.52119 16.8075 5.11467 15.401C3.70814 13.9944 2.91797 12.0868 2.91797 10.0977C2.91797 8.10853 3.70814 6.20088 5.11467 4.79436C6.52119 3.38783 8.42885 2.59766 10.418 2.59766C12.4071 2.59766 14.3147 3.38783 15.7213 4.79436C17.1278 6.20088 17.918 8.10853 17.918 10.0977Z"
                    stroke="#737373"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.56641 6.10547V10.9515H13.0274"
                    stroke="#737373"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_356_11108">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </S.IconContainer>
            <S.SubContent>연락 가능 시간 : 오전 7시 - 오후 11시</S.SubContent>
          </S.SubContentContainer>
          <S.SubContentContainer>
            <S.IconContainer>
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
            </S.IconContainer>
            <S.SubContent>블로그</S.SubContent>
            <S.SubContentUrl>
              https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0
            </S.SubContentUrl>
          </S.SubContentContainer>
          <S.SubContentContainer>
            <S.IconContainer>
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
            </S.IconContainer>
            <S.SubContent>인스타그램</S.SubContent>
            <S.SubContentUrl>
              https://www.instagram.com/@happybreeder
            </S.SubContentUrl>
          </S.SubContentContainer>
        </S.SubContentLayout>
      </div>
      <S.BreederDetailContainer>
        <S.Title>브리더 상세설명</S.Title>
        <S.BreederDetailContentContainer>
          <S.BreederDetailContentText
            style={{ maxHeight: isExpanded ? 'none' : '400px' }}
          >
            {`안녕하세요 투명하고 깨끗한 해피 브리더입니다~!
          
          ✨해피 브리더✨가 궁금해요!
✔ 대표가 직접 견적 확인 및 모든 상담에 참여하여 성.격.대로 꼼.꼼.하게 진행합니다.
✔ 저품질 서비스를 하지 않습니다.
✔ 분양에 앞서 상세한 설명드리며 투명하게 정보를 공유합니다.
✔ 몸에 해로운 저가 사료를 사용하지 않으며 친환경 인증 획득한 고가 사료를 사용하여 강아지의 건강을 최우선으로 합니다.
✔ 최선을 다하는 해피 브리더에게 안심하고 맡기실 수 있습니다.

🌈 해피브리더 분양 과정 🌈
① 고객님과 컨택 후, 분양자가 2주간 분양에 신경쓸 수 있도
② 시험가동 후 제품 이상여부 확인 후 에어컨 분해작업 진행`}
          </S.BreederDetailContentText>

          {!isExpanded && (
            <>
              <S.BreederDetailContentGradient />
              <S.MoreButton onClick={() => setIsExpanded(true)}>
                상세설명 더보기
                <S.ButtonIconContainer>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.55313 12.4002C8.69653 12.3996 8.8328 12.3374 8.92727 12.2295L14.8763 5.43083C15.0581 5.22302 15.0371 4.90713 14.8293 4.72529C14.6215 4.54344 14.3056 4.5645 14.1237 4.77231L8.5478 11.1445L2.8735 4.76915C2.68991 4.56288 2.37386 4.54449 2.16759 4.72808C1.96131 4.91167 1.94292 5.22772 2.12651 5.43399L8.17753 12.2326C8.27287 12.3397 8.40967 12.4008 8.55313 12.4002Z"
                      fill="#FE834D"
                    />
                  </svg>
                </S.ButtonIconContainer>
              </S.MoreButton>
            </>
          )}
        </S.BreederDetailContentContainer>
      </S.BreederDetailContainer>
      <div>
        <S.Title>전문 견종</S.Title>
        <S.BreederTagsContainer>
          <S.BreederTag>비글</S.BreederTag>
          <S.BreederTag>골든 리트리버</S.BreederTag>
        </S.BreederTagsContainer>
      </div>
      <div>
        <S.Title>경력</S.Title>
        <S.BreederCareerContainer>
          <S.BreederCareerIcon>
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
          </S.BreederCareerIcon>
          <S.BreederCareer>총 경력 3년</S.BreederCareer>
        </S.BreederCareerContainer>
        <S.BreederCareerDetail>
          <S.BreederCareerDetailName>해피 브리더</S.BreederCareerDetailName>
          <S.BreederCareerDetailContent>
            2023년 3월 - 현재 · 1년 4개월
          </S.BreederCareerDetailContent>
          <S.BreederCareerDetailContentSub>
            브리더 전문가 양성과정 수료
          </S.BreederCareerDetailContentSub>
        </S.BreederCareerDetail>
      </div>
      <div>
        <S.Title>학력</S.Title>
        <S.BreederCareerDetail>
          <S.BreederCareerDetailName>서연대학교</S.BreederCareerDetailName>
          <S.BreederCareerDetailContent>
            2014년 2월 - 2016년 8월
          </S.BreederCareerDetailContent>
          <S.BreederCareerDetailContentSub>
            반려동물학과
          </S.BreederCareerDetailContentSub>
        </S.BreederCareerDetail>
      </div>
      <div>
        <S.Title>자격증 및 기타 서류</S.Title>
        <S.BreederWarrantyConatiner>
          <S.BreederWarrantyImgContainer>
            <S.BreederWarrantyImg src="/img/breeder_warranty_example_1.png" />
          </S.BreederWarrantyImgContainer>
          <S.BreederWarrantyImgContainer>
            <S.BreederWarrantyImg src="/img/breeder_warranty_example_1.png" />
          </S.BreederWarrantyImgContainer>
          <S.BreederWarrantyImgContainer>
            <S.BreederWarrantyImg src="/img/breeder_warranty_example_1.png" />
          </S.BreederWarrantyImgContainer>
        </S.BreederWarrantyConatiner>
      </div>
    </S.Container>
  );
}
