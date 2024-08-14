/* eslint-disable react/prop-types */
import * as P from './PostCard.style';
import TimeStampParser from '../TimeStampParser/TimeStampParser';

function PostIcon({ src }) {
  return (
    <P.PostIconContainer>
      <P.PostIconImage src={src} />
    </P.PostIconContainer>
  );
}

export default function MyPostCard({
  postTitle,
  postContent,
  postThumbnailSrc,
  timeStampKR,
  viewCount,
  bookmarkCount,
}) {
  return (
    <P.MyPost>
      <P.PostCategoryTag>정보공유</P.PostCategoryTag>
      <P.PostWrapper>
        <div>
          <P.MyPostTitle>{postTitle}</P.MyPostTitle>
          <P.PostContent>{postContent}</P.PostContent>
        </div>
        <P.ThumbnailWrapper>
          <P.ThumbnailImg src={postThumbnailSrc} alt="Image Thumbnail" />
        </P.ThumbnailWrapper>
      </P.PostWrapper>

      <P.PostIconLayout>
        <P.PostTimestamp>
          <TimeStampParser>{timeStampKR}</TimeStampParser>
        </P.PostTimestamp>
        <P.PostIconFrame>
          <PostIcon src="/icons/community_view.svg" />
          <P.PostIconContent>{viewCount}</P.PostIconContent>
        </P.PostIconFrame>
        <P.PostIconFrame>
          <PostIcon src="/icons/community_bookmark.svg" />
          <P.PostIconContent>{bookmarkCount}</P.PostIconContent>
        </P.PostIconFrame>
      </P.PostIconLayout>
    </P.MyPost>
  );
}
