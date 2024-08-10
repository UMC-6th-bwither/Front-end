import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import * as S from './Pagination.style';

function Pagination({ totalItems, itemsPerPage, currentPage, setCurrentPage }) {
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalItems / itemsPerPage),
  );
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
      <S.GroupPageBtn
        onClick={handlePreviousGroup}
        disabled={currentPageGroup === 0}
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.25"
            y="0.25"
            width="18.5"
            height="18.5"
            rx="3.75"
            fill="white"
          />
          <rect
            x="0.25"
            y="0.25"
            width="18.5"
            height="18.5"
            rx="3.75"
            stroke="#D2D2D2"
            strokeWidth="0.5"
          />
          <path
            d="M12 4.5L7 9.5L12 14.5"
            stroke="#222222"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </S.GroupPageBtn>
      <div>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ).map((page) => (
          <S.PageButton
            key={page}
            onClick={() => handleClick(page)}
            disabled={page === currentPage}
          >
            {page}
          </S.PageButton>
        ))}
      </div>
      <S.GroupPageBtn
        onClick={handleNextGroup}
        disabled={endPage >= totalPages}
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.25"
            y="0.25"
            width="18.5"
            height="18.5"
            rx="3.75"
            fill="white"
          />
          <rect
            x="0.25"
            y="0.25"
            width="18.5"
            height="18.5"
            rx="3.75"
            stroke="#D2D2D2"
            strokeWidth="0.5"
          />
          <path
            d="M7 4.5L12 9.5L7 14.5"
            stroke="#222222"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </S.GroupPageBtn>
    </S.Pagination>
  );
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
