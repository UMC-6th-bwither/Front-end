export default function convertToKST(utcTimeString) {
  const utcTime = new Date(utcTimeString); // 입력된 UTC 시간 문자열을 Date 객체로 변환
  const kstTime = new Date(utcTime.getTime() + 9 * 60 * 60 * 1000); // 9시간을 더해 KST로 변환

  return kstTime.toISOString(); // 변환된 KST 시간을 ISO 문자열 형식으로 반환
}
