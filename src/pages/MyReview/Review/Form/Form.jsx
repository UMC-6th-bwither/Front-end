/* eslint-disable react/prop-types */
import { useRef } from 'react';
import * as P from './Form.style';
import * as S from './Title.style';
import VerticalMenuSelector from '../../../../components/VerticalMenuSelector/VerticalMenuSelector';
import Editor from '../../../../components/Editor/Editor';
import TitleForm from '../../../../components/Editor/TitleForm/TitleForm';
import BreederContactCard from '../../../../components/BreederContactCard/BreederContactCard';
import BadgeVariant from '../../../../components/badge/BadgeVariant';

const menuItems1 = [
  {
    name: '저장한 글',
    href: '/myreview/save',
  },
  {
    name: '나의 후기',
    href: '/myreview/review',
  },
];
const menuItems2 = [
  {
    name: '저장한 동물',
    href: '/myreview/animal',
  },
  {
    name: '저장한 브리더',
    href: '/myreview/breeder',
  },
];

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/review_write.svg" />
    </P.IconContainer>
  );
}

function StarButton() {
  return (
    <S.StarButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="none"
      >
        <path
          d="M11.5099 18.9243L17.092 22.3005C18.1142 22.9192 19.3652 22.0046 19.0961 20.8478L17.6166 14.499L22.553 10.2216C23.4542 9.44147 22.97 7.96187 21.7863 7.86772L15.2896 7.31623L12.7473 1.31714C12.29 0.22762 10.7297 0.22762 10.2724 1.31714L7.73016 7.30278L1.23339 7.85427C0.0497111 7.94842 -0.434521 9.42802 0.466688 10.2082L5.40316 14.4855L3.92356 20.8344C3.65455 21.9911 4.90548 22.9058 5.92774 22.2871L11.5099 18.9243Z"
          fill="#F4F4F4"
        />
      </svg>
    </S.StarButton>
  );
}

export default function ReviewForm() {
  const editorRef = useRef(null);

  const editorSubmitClickHandler = async () => {
    if (editorRef.current) {
      const { editorInstance } = editorRef.current;
      const savedData = await editorInstance.save();

      // eslint-disable-next-line no-console
      console.log(savedData);
    }
  };

  return (
    <P.Layout>
      <P.VerticalMenuLayout>
        <VerticalMenuSelector
          title="커뮤니티"
          items={menuItems1}
          activeItemName="나의 후기"
        />
        <VerticalMenuSelector
          title="스크랩"
          items={menuItems2}
          activeItemName=""
        />
      </P.VerticalMenuLayout>

      <P.MainContainer>
        <Icon />
        <P.TitleLayout>
          <div>
            <P.MainTitle>나의 후기</P.MainTitle>
            <P.MainSubTitle>당신의 후기를 기다려요!</P.MainSubTitle>
          </div>
          <P.TitleButtonContainer>
            <P.Category $active onClick={editorSubmitClickHandler}>
              게시하기
            </P.Category>
          </P.TitleButtonContainer>
        </P.TitleLayout>
        <BreederContactCard
          breederLocation="서울 강서구"
          breederName="😊 행복한 분양의 시작 - 해피 브리더"
          badgeComponents={[
            <BadgeVariant content="강아지 전문" />,
            <BadgeVariant content="본인인증" />,
            <BadgeVariant content="사업자등록증" />,
            <BadgeVariant content="혜택" />,
          ]}
          noButton
        />
        <S.OptionsSection>
          <S.Instruction>내용과 관련된 동물을 선택해주세요</S.Instruction>
          <S.Options>
            <S.OptionButton onClick={() => handleOptionClick('전체')}>
              전체
            </S.OptionButton>
            <S.OptionButton onClick={() => handleOptionClick('강아지')}>
              강아지
            </S.OptionButton>
            <S.OptionButton onClick={() => handleOptionClick('고양이')}>
              고양이
            </S.OptionButton>
          </S.Options>
        </S.OptionsSection>
        <S.OptionsSection>
          <S.Instruction>별점을 남겨주세요</S.Instruction>
          <S.StarContainer>
            <StarButton />
            <StarButton />
            <StarButton />
            <StarButton />
            <StarButton />
          </S.StarContainer>
        </S.OptionsSection>
        <Editor ref={editorRef} />
      </P.MainContainer>
    </P.Layout>
  );
}
