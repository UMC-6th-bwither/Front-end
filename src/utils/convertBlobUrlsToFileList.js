export default async function convertBlobUrlsToFileList(blobUrls) {
  const fileList = await Promise.all(
    blobUrls.map(async (blobUrl) => {
      const response = await fetch(blobUrl.id);
      const blob = await response.blob();
      return new File([blob], blobUrl.name, { type: blob.type });
    }),
  );

  return fileList;
}

// // Example usage
// const blobUrls = [
//   {
//     id: 'blob:http://localhost:5173/abb4371b-77b1-46af-a205-e08ac2c77d87',
//     name: 'tanya-yarosh-nHaDoTRsQvg-unsplash.jpg',
//   },
//   {
//     id: 'blob:http://localhost:5173/0aca374d-d7ac-4549-a1ea-9fdcd1d7f948',
//     name: 'alexander-mass-WVlffK6p8xc-unsplash.jpg',
//   },
// ];

// convertBlobUrlsToFileList(blobUrls).then((fileList) => {
//   console.log(fileList);
//   // fileList는 File 객체들의 배열이 됩니다.
// });
