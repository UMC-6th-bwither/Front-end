import { useState, useEffect } from 'react';
import * as S from './Pagination.style.jsx';

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage}) => {
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / itemsPerPage));  
  const [currentPageGroup, setCurrentPageGroup] = useState(0);  

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / itemsPerPage));  
    setCurrentPageGroup(Math.floor((currentPage - 1) / 5));  
  }, [totalItems, itemsPerPage, currentPage]);

  const handleClick = (page) => {
    setCurrentPage(page);  
  };

  const handlePreviousGroup = () => {
    setCurrentPageGroup(currentPageGroup - 1); 
    setCurrentPage(currentPageGroup * 5);
  };

  const handleNextGroup = () => {
    setCurrentPageGroup(currentPageGroup + 1);       
    setCurrentPage((currentPageGroup + 1) * 5 + 1);  
  };

  const startPage = currentPageGroup * 5 + 1;  
  const endPage = Math.min((currentPageGroup + 1) * 5, totalPages);  

  return (
    <S.Pagination>
      <S.GroupPageBtn onClick={handlePreviousGroup} disabled={currentPageGroup === 0}> 〈 </S.GroupPageBtn>
      <div>
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(page => (
          <S.PageButton
            key={page}
            onClick={() => handleClick(page)}
            disabled={page === currentPage} 
            //aria-current={page === currentPage ? 'page' : null}
          >
            {page}
          </S.PageButton>
        ))}
      </div>
      <S.GroupPageBtn onClick={handleNextGroup} disabled={endPage >= totalPages} > 〉 </S.GroupPageBtn>
    </S.Pagination>
  );
};

export default Pagination;
