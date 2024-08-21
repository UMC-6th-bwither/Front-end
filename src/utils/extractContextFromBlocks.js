export default function extractTextFromBlocks(blocks) {
  if (!blocks) return '';

  return blocks
    .map((block) => {
      const textWithTags = block.data.text; // block 객체에서 text 값 추출
      if (textWithTags) {
        return textWithTags.replace(/<\/?[^>]+(>|$)/g, ''); // HTML 태그 제거
      }
      return '';
    })
    .join(' '); // 줄글로 연결
}
