import { useState, useRef, useEffect } from 'react';
import img from '../../../public/img/breederprofile.png';
import * as C from './ChatBreederInfo.style';

export default function ChatBreederInfo() {
  const [activePage, setActivePage] = useState(0);
  const containerRef = useRef(null);

  const pages = [
    {
      title: '😊 행복한 분양의 시작 - 해피 브리더',
      subtitle: (
        <>
          비글, 골든 리트리버 전문
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            style={{ marginLeft: '19px' }}
          >
            <g clipPath="url(#clip0_274_10940)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2188 7.77399C16.2188 12.717 10.3858 18 10.3858 18C10.3858 18 4.55078 13.042 4.55078 7.77399C4.55078 4.67699 7.16278 2.16699 10.3848 2.16699C13.6058 2.16699 16.2178 4.67699 16.2178 7.77399H16.2188Z"
                stroke="#737373"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.6284 8.41728C12.6345 8.69473 12.585 8.97059 12.483 9.22867C12.3809 9.48674 12.2284 9.72184 12.0342 9.92017C11.8401 10.1185 11.6084 10.276 11.3525 10.3836C11.0967 10.4911 10.822 10.5465 10.5444 10.5464C10.2669 10.5464 9.99221 10.4909 9.73643 10.3832C9.48065 10.2755 9.24895 10.1179 9.05493 9.91945C8.8609 9.72104 8.70846 9.48586 8.60655 9.22774C8.50463 8.96961 8.4553 8.69373 8.46145 8.41628C8.47338 7.87161 8.69813 7.35326 9.08757 6.97227C9.477 6.59127 10.0001 6.37793 10.5449 6.37793C11.0898 6.37793 11.6129 6.59127 12.0023 6.97227C12.3918 7.35326 12.6165 7.87261 12.6284 8.41728Z"
                stroke="#737373"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_274_10940">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span style={{ marginLeft: '2px', color: '#737373' }}>
            서울시 강서구
          </span>
        </>
      ),
      description: `비글, 골든 리트리버 전문 브리더로 어쩌구`,
      statsTop: [
        { title: '개체수', value: '5마리' },
        { title: '총 경력', value: '3년' },
      ],
      statsBottom: [
        { title: '리뷰', value: '5.0 (22)' },
        { title: '신뢰 등급', value: '2등급' },
      ],
    },
    {
      title: '페이지 2',
      content: <div>내용 없음</div>,
    },
    {
      title: '페이지 3',
      content: <div>내용 없음</div>,
    },
    {
      title: '페이지 4',
      content: <div>내용 없음</div>,
    },
    {
      title: '페이지 5',
      content: <div>내용 없음</div>,
    },
    {
      title: '페이지 6',
      content: <div>내용 없음</div>,
    },
    {
      title: '페이지 7',
      content: <div>내용 없음</div>,
    },
  ];

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;
      const pageHeight = window.innerHeight;
      const currentPage = Math.round(scrollPosition / pageHeight);
      setActivePage(currentPage);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <C.Container ref={containerRef}>
      <C.Pagination>
        {pages.map((_, index) => (
          <C.Dot key={pages[index].title} active={index === activePage} />
        ))}
      </C.Pagination>
      {pages.map((page) => (
        <C.PageContainer key={page.title}>
          {page.title === '😊 행복한 분양의 시작 - 해피 브리더' && (
            <>
              <C.Header>
                <C.Img src={img} alt="Profile Image" />
                <C.Title>{page.title}</C.Title>
                {page.subtitle && <C.Subtitle>{page.subtitle}</C.Subtitle>}
              </C.Header>
              <C.Description>{page.description}</C.Description>
              <C.Stats>
                <C.StatsTopBottom>
                  <C.StatsColumn>
                    {page.statsTop?.map((stat) => (
                      <C.StatItem key={stat.title}>
                        <C.StatTitle>{stat.title}</C.StatTitle>
                        <C.StatValue>{stat.value}</C.StatValue>
                      </C.StatItem>
                    ))}
                  </C.StatsColumn>
                  <C.StatsColumn>
                    {page.statsBottom?.map((stat) => (
                      <C.StatItem key={stat.title}>
                        <C.StatTitle>{stat.title}</C.StatTitle>
                        <C.StatValue>{stat.value}</C.StatValue>
                      </C.StatItem>
                    ))}
                  </C.StatsColumn>
                </C.StatsTopBottom>
              </C.Stats>
            </>
          )}
          {page.content && <div>{page.content}</div>}
        </C.PageContainer>
      ))}
    </C.Container>
  );
}
