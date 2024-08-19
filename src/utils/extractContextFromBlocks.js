export default function extractTextFromBlocks(blocks) {
  return blocks
    .map((block) => {
      const parsedBlock = JSON.parse(block.block); // JSON 문자열을 객체로 변환
      const textWithTags = parsedBlock.data.text; // text 값 추출
      if (textWithTags) {
        return textWithTags.replace(/<\/?[^>]+(>|$)/g, ''); // HTML 태그 제거
      }
      return '';
    })
    .join(' '); // 줄글로 연결
}
