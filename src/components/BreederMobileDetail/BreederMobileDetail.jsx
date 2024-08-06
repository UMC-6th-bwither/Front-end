import { useState } from 'react';

import BreederMobileDetail1 from './BreederMobileDetail1/BreederMobileDetail1';
import BreederMobileDetail2 from './BreederMobileDetail2/BreederMobileDetail2';
import BreederMobileDetail3 from './BreederMobileDetail3/BreederMobileDetail3';
import BreederMobileDetail4 from './BreederMobileDetail4/BreederMobileDetail4';
import * as S from './BreederMobileDetail.style';

export default function BreederMobileDetail() {
  const [page, setPage] = useState(1);

  const paginationBtnClickHandler = (pageIndex) => {
    setPage(pageIndex);
  };

  return (
    <S.Container>
      <S.PaginationContainer>
        {[1, 2, 3, 4].map((pageIndex) => (
          <S.PaginationButton
            key={pageIndex}
            $active={pageIndex === page}
            onClick={() => paginationBtnClickHandler(pageIndex)}
          />
        ))}
      </S.PaginationContainer>
      <S.ContentContainer>
        {page === 1 && <BreederMobileDetail1 />}
        {page === 2 && <BreederMobileDetail2 />}
        {page === 3 && <BreederMobileDetail3 />}
        {page === 4 && <BreederMobileDetail4 />}
      </S.ContentContainer>
    </S.Container>
  );
}
