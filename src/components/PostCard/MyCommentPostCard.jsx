/* eslint-disable react/prop-types */
import * as P from './PostCard.style';
import TimeStampParser from '../TimeStampParser/TimeStampParser';

function PostIcon({ src }) {
  return (
    <P.MyCommentPostIconContainer>
      <P.PostIconImage src={src} />
    </P.MyCommentPostIconContainer>
  );
}

export default function MyCommentPostCard({
  postTitle,
  postContent,
  postThumbnailSrc,
  timeStampKR,
  likeCount,
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
          <PostIcon src="/icons/thumbs_up_gray.svg" />
          <P.PostIconContent>{likeCount}</P.PostIconContent>
        </P.PostIconFrame>
      </P.PostIconLayout>
    </P.MyPost>
  );
}
