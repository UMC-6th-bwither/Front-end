/* eslint-disable react/prop-types */
import { useState } from 'react';
import * as S from './BreederReviewAnimalCard.style';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function BreederReviewAnimalCard({
  postId,
  onClick,
  kennelName,
  imgSrc,
  star,
  context,
}) {
  const [modalOpened, setModalOpened] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleModalClick = async (e) => {
    e.stopPropagation();

    const apiUrl = import.meta.env.VITE_API_URL;
    const endPoint = `${apiUrl}/post/${postId}`;
    await fetch(endPoint, {
      method: 'DELETE',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    });

    alert('후기가 삭제되었습니다.');
    navigate(0);
  };

  return (
    <S.Container onClick={onClick}>
      <S.Square>
        {imgSrc && <S.SquareImage src={imgSrc} alt="이미지" />}
      </S.Square>
      <S.ContentContainer>
        <S.Flex>
          <S.FlexGrow>
            <S.Name>{kennelName}</S.Name>
            <S.StarFlex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.13928 0.824376L10.7473 3.95809L14.3416 4.46095C15.3816 4.60609 15.7987 5.83695 15.0444 6.54323L12.4433 8.98209L13.0581 12.4278C13.2353 13.4244 12.1473 14.1855 11.2158 13.7147L8.00099 12.0884L4.78613 13.7147C3.8547 14.1855 2.7667 13.4244 2.94385 12.4278L3.5587 8.98209L0.957561 6.54323C0.203276 5.83695 0.619276 4.60609 1.66042 4.46095L5.2547 3.95809L6.8627 0.824376C7.32899 -0.0853387 8.67299 -0.0853387 9.13928 0.824376Z"
                  fill="#FFCE21"
                />
              </svg>
              <S.Star>{star?.toFixed(1)}</S.Star>
            </S.StarFlex>
          </S.FlexGrow>

          <S.IconSectionWrapper>
            <S.IconContainer
              onClick={(e) => {
                e.stopPropagation();
                setModalOpened(!modalOpened);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="18"
                viewBox="0 0 4 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9ZM2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14C0.895431 14 0 14.8954 0 16C0 17.1046 0.895431 18 2 18Z"
                  fill="#C5C5C5"
                />
              </svg>
            </S.IconContainer>
            {modalOpened && (
              <S.ModalContainer onClick={handleModalClick}>
                삭제
              </S.ModalContainer>
            )}
          </S.IconSectionWrapper>
        </S.Flex>
        <S.Context>{context}</S.Context>
      </S.ContentContainer>
    </S.Container>
  );
}
