export default function convertBlobUrlToHttpUrl(blobUrl) {
  if (blobUrl.startsWith('blob:')) {
    return blobUrl.substring(5);
  }
  return blobUrl;
}
