/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import * as S from './BreederContactCard.style';
import Button from '../button/Button';

export default function BreederContactCard({
  breederId,
  breederLocation,
  breederName,
  badgeComponents,
  noButton = false,
}) {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.SpanningContainer>
        <S.ImageContainer>
          <S.Image src="/img/post_thumbnail_example_3.jpeg" />
        </S.ImageContainer>
        <S.ContentContainer>
          <S.LocationTagContainer>
            <S.IconContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_916_14758)">
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
                    d="M12.6284 7.91704C12.6345 8.19449 12.585 8.47035 12.483 8.72842C12.3809 8.9865 12.2284 9.2216 12.0342 9.41992C11.8401 9.61825 11.6084 9.7758 11.3525 9.88335C11.0967 9.99089 10.822 10.0462 10.5444 10.0462C10.2669 10.0461 9.99221 9.99062 9.73643 9.88296C9.48065 9.77529 9.24895 9.61763 9.05493 9.41921C8.8609 9.22079 8.70846 8.98562 8.60655 8.72749C8.50463 8.46937 8.4553 8.19349 8.46145 7.91604C8.47338 7.37136 8.69813 6.85302 9.08757 6.47202C9.477 6.09103 10.0001 5.87769 10.5449 5.87769C11.0898 5.87769 11.6129 6.09103 12.0023 6.47202C12.3918 6.85302 12.6165 7.37236 12.6284 7.91704Z"
                    stroke="#737373"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_916_14758">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </S.IconContainer>
            <S.LocationTag>{breederLocation}</S.LocationTag>
          </S.LocationTagContainer>
          <S.BreederTagContainer>{breederName}</S.BreederTagContainer>
          <S.BadgeContainer>{badgeComponents}</S.BadgeContainer>
        </S.ContentContainer>
      </S.SpanningContainer>
      {!noButton && (
        <div>
          <Button
            orange
            width="auto"
            paddingHorizontal={14}
            onClick={() => {
              if (breederId) navigate(`form/${breederId}`);
            }}
          >
            후기 등록
          </Button>
        </div>
      )}
    </S.Container>
  );
}
