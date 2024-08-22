export default function loadImageFromURL(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    // img.crossOrigin = 'anonymous'; // 크로스 오리진 문제를 피하기 위해 필요할 수 있습니다.
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
  });
}
