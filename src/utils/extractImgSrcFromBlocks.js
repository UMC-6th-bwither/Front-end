export default function extractFirstImageUrl(blocks) {
  const imageBlock = blocks.find((block) => {
    const parsedBlock = JSON.parse(block.block); // JSON 문자열을 객체로 변환
    return parsedBlock.type === 'image';
  });

  if (imageBlock) {
    const parsedBlock = JSON.parse(imageBlock.block);
    return parsedBlock.data.file.url; // 첫 번째 이미지의 URL 반환
  }

  return null; // 이미지 블록이 없을 경우 null 반환
}
