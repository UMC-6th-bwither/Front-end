export default function extractFirstImageUrl(blocks) {
  const imageBlock = blocks.find((block) => {
    return block.type === 'IMAGE' || block.type === 'image'; // 이미지 타입의 블록을 찾음
  });

  if (imageBlock) {
    return imageBlock.data.file.url; // 첫 번째 이미지의 URL 반환
  }

  return null; // 이미지 블록이 없을 경우 null 반환
}
