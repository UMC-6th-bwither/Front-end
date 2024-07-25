/* eslint-disable react/prop-types */

function formatDateTime(date) {
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}/${month}/${day} ${hours}:${minutes}`;
}

export default function TimeStampParser({ children }) {
  if (typeof children === 'undefined') return <span>시간 없음</span>;

  const now = new Date();
  const timeStampDate = new Date(children);
  const timeDiff = now - timeStampDate;
  const minutesDiff = Math.floor(timeDiff / 1000 / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);

  let parsedTimeStamp = '';

  if (minutesDiff < 0) {
    parsedTimeStamp = '미래 시간';
  } else if (minutesDiff < 60) {
    // 1분전 ~ 59분전
    parsedTimeStamp = `${minutesDiff}분 전`;
  } else if (hoursDiff < 24) {
    // 1시간 이후 ~ 해당 날짜 자정 이전까지
    parsedTimeStamp = `${hoursDiff}시간 전`;
  } else if (daysDiff === 1) {
    // 어제
    parsedTimeStamp = '어제';
  } else if (daysDiff === 2) {
    // 그저께
    parsedTimeStamp = '그저께';
  } else if (timeStampDate.getFullYear() === now.getFullYear()) {
    // 날짜 시간 표기
    const month = String(timeStampDate.getMonth() + 1).padStart(2, '0');
    const day = String(timeStampDate.getDate()).padStart(2, '0');
    const hours = String(timeStampDate.getHours()).padStart(2, '0');
    const minutes = String(timeStampDate.getMinutes()).padStart(2, '0');
    parsedTimeStamp = `${month}/${day} ${hours}:${minutes}`;
  } else {
    // 연도 표기
    parsedTimeStamp = formatDateTime(timeStampDate);
  }

  return <span>{parsedTimeStamp}</span>;
}
