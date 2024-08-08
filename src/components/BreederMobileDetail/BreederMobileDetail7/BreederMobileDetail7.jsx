/* eslint-disable react/prop-types */
import * as S from './BreederMobileDetail7.style';

function Post({ postCategory, postTitle, postContent, postLike, postDate }) {
  return (
    <S.PostWrapper>
      <S.PostContainer>
        <S.PostCategory>{postCategory}</S.PostCategory>
        <S.PostTitle>{postTitle}</S.PostTitle>
        <S.PostContent>{postContent}</S.PostContent>
      </S.PostContainer>
      <S.PostFooter>
        <S.IconLayout>
          <S.IconContainer>
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
                d="M9.94103 7.04238V4.50937C9.94103 3.45938 9.11503 2.60938 8.09703 2.60938L5.63703 8.30937V15.2754H12.573C12.8736 15.2754 13.1639 15.1663 13.3901 14.9684C13.6164 14.7705 13.7631 14.4973 13.803 14.1994L14.652 8.49937C14.6791 8.31834 14.6674 8.13363 14.6178 7.95745C14.5681 7.78127 14.4816 7.61763 14.364 7.47738C14.2489 7.33982 14.1047 7.22947 13.9418 7.15426C13.7789 7.07905 13.6014 7.04084 13.422 7.04238H9.94103ZM3.92903 15.2754H2.56203C1.88303 15.2754 1.33203 14.7084 1.33203 14.0094V9.57538C1.33203 8.87538 1.88303 8.30937 2.56203 8.30937H3.92903V15.2754Z"
                fill="#C5C5C5"
              />
            </svg>
          </S.IconContainer>
          <S.IconTypo>{postLike}</S.IconTypo>
        </S.IconLayout>
        <S.DateTypo>{postDate}</S.DateTypo>
      </S.PostFooter>
    </S.PostWrapper>
  );
}

export default function BreederMobileDetail7() {
  return (
    <S.Container>
      <S.Title>브리더의 커뮤니티 활동</S.Title>
      <S.CategoryLayout>
        <S.Category $active>답변</S.Category>
        <S.Category>답변</S.Category>
      </S.CategoryLayout>
      <S.PostLayout>
        <Post
          postCategory="질문/고민"
          postTitle="입양 그렇게 어렵지 않습니다! 저희 상담 절차만 따라와주시면 큰
              어려움 없이 착한 아이들 만나실 수 있습니다."
          postContent="입양 절차가 어렵다고 들었는데 괜찮을까요?입양 절차가 어렵다고
              들었는데 괜찮을까요?입양 절차가 어렵다고 들었는데 괜찮을까요?입양
              절차가 어렵다고 들었는데 괜찮을까요?"
          postLike={0}
          postDate="2024.05.14"
        />
        <Post
          postCategory="질문/고민"
          postTitle="새끼 강아지의 사료 양은 강아지의 나이, 크기, 품종, 활동 수준 등에 따라 다르지만 대체적으로 사료 포장지에…"
          postContent="새끼 때 사료는 얼마나 주는 것이 좋을까요?"
          postLike={0}
          postDate="2024.05.14"
        />
      </S.PostLayout>
    </S.Container>
  );
}
