/* eslint-disable no-alert */
import { useState, useRef, useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as P from './Form.style';
import * as S from './Title.style';
import VerticalMenuSelector from '../../../../components/VerticalMenuSelector/VerticalMenuSelector';
import Editor from '../../../../components/Editor/Editor';
import BreederContactCard from '../../../../components/BreederContactCard/BreederContactCard';
import BadgeVariant from '../../../../components/badge/BadgeVariant';
import useAuth from '../../../../hooks/useAuth';

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

function StarButton({ active, onClick }) {
  return (
    <S.StarButton onClick={onClick} $active={active}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="none"
      >
        <path
          d="M11.5099 18.9243L17.092 22.3005C18.1142 22.9192 19.3652 22.0046 19.0961 20.8478L17.6166 14.499L22.553 10.2216C23.4542 9.44147 22.97 7.96187 21.7863 7.86772L15.2896 7.31623L12.7473 1.31714C12.29 0.22762 10.7297 0.22762 10.2724 1.31714L7.73016 7.30278L1.23339 7.85427C0.0497111 7.94842 -0.434521 9.42802 0.466688 10.2082L5.40316 14.4855L3.92356 20.8344C3.65455 21.9911 4.90548 22.9058 5.92774 22.2871L11.5099 18.9243Z"
          fill={active ? '#FE834D' : '#F4F4F4'} // 활성화된 별은 금색으로 표시
        />
      </svg>
    </S.StarButton>
  );
}

export default function ReviewForm() {
  const { breederId } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn, token, userId } = useAuth();

  const [rating, setRating] = useState(0); // 별점 상태
  const [petType, setPetType] = useState('ALL'); // 동물 타입 상태
  const [editorData, setEditorData] = useState(null); // 에디터 데이터 상태
  const editorRef = useRef(null);

  const handleStarClick = useCallback((index) => {
    setRating(index); // 클릭한 별의 인덱스를 별점으로 설정
  }, []);

  const handleOptionClick = useCallback((type) => {
    if (type === '전체') setPetType('ALL');
    else if (type === '강아지') setPetType('DOG');
    else if (type === '고양이') setPetType('CAT');
  }, []);

  const submitReview = async (savedData) => {
    if (savedData.blocks.length === 0) {
      alert('내용이 입력되어야 합니다.');
      return;
    }
    if (rating === 0) {
      alert('별점이 입력되어야 합니다.');
      return;
    }
    const apiUrl = import.meta.env.VITE_API_URL;
    const endPoint = `${apiUrl}/post/create/review`;
    const response = await fetch(endPoint, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        breederId: breederId,
        userId: userId,
        petType: petType,
        rating: rating,
        category: 'BREEDER_REVIEWS',
        blocks: savedData.blocks, // 저장된 블록 데이터
      }),
    });

    const result = await response.json();

    if (result.isSuccess && result.code === 'COMMON200') {
      alert('후기를 등록했습니다.');
      navigate('/myreview/review');
    } else {
      alert('후기 등록에 실패했습니다.');
    }
  };

  const editorSubmitClickHandler = useCallback(async () => {
    if (editorRef.current) {
      const { editorInstance } = editorRef.current;
      const savedData = await editorInstance.save();
      await submitReview(savedData); // API 요청
    }
  }, [petType, rating, submitReview]);

  const memoizedEditor = useMemo(
    () => (
      <Editor
        ref={editorRef}
        readMode={false}
        savedData={editorData}
        onChange={(data) => setEditorData(data)}
      />
    ),
    [editorData],
  );

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
          breederId={breederId}
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
            <S.OptionButton
              onClick={() => handleOptionClick('전체')}
              $active={petType === 'ALL'}
            >
              전체
            </S.OptionButton>
            <S.OptionButton
              onClick={() => handleOptionClick('강아지')}
              $active={petType === 'DOG'}
            >
              강아지
            </S.OptionButton>
            <S.OptionButton
              onClick={() => handleOptionClick('고양이')}
              $active={petType === 'CAT'}
            >
              고양이
            </S.OptionButton>
          </S.Options>
        </S.OptionsSection>
        <S.OptionsSection>
          <S.Instruction>별점을 남겨주세요</S.Instruction>
          <S.StarContainer>
            {[1, 2, 3, 4, 5].map((index) => (
              <StarButton
                key={index}
                active={index <= rating} // 클릭된 별 이하의 별은 활성화
                onClick={() => handleStarClick(index)}
              />
            ))}
          </S.StarContainer>
        </S.OptionsSection>
        {memoizedEditor}
      </P.MainContainer>
    </P.Layout>
  );
}
