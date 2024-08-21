export default function convertToKST(utcTimeString) {
  if (!utcTimeString) return null;

  const utcTime = new Date(utcTimeString);
  const kstTime = new Date(utcTime.getTime() + 9 * 60 * 60 * 1000);

  return kstTime.toISOString();
}
