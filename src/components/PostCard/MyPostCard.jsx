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
  category,
  petType,
  postTitle,
  postContent,
  postThumbnailSrc,
  timeStampKR,
  viewCount,
  bookmarkCount,
}) {
  return (
    <P.MyPost>
      <P.PostCategoryTag>{category}</P.PostCategoryTag>
      <P.PostWrapper>
        <div>
          <P.MyPostTitle>{postTitle}</P.MyPostTitle>
          <P.PostContent>{postContent}</P.PostContent>
        </div>
        {postThumbnailSrc && (
          <P.ThumbnailWrapper>
            <P.ThumbnailImg src={postThumbnailSrc} alt="Image Thumbnail" />
          </P.ThumbnailWrapper>
        )}
      </P.PostWrapper>

      <P.PostIconLayout>
        <P.PostTimestamp>
          <TimeStampParser>{timeStampKR}</TimeStampParser>
        </P.PostTimestamp>
        <P.PostIconFrame>
          <PostIcon src="/icons/community_view.svg" />
          <P.PostIconContent>
            {viewCount !== null ? viewCount : 0}
          </P.PostIconContent>
        </P.PostIconFrame>
        <P.PostIconFrame>
          <PostIcon src="/icons/community_bookmark.svg" />
          <P.PostIconContent>
            {bookmarkCount !== null ? bookmarkCount : 0}
          </P.PostIconContent>
        </P.PostIconFrame>
      </P.PostIconLayout>
    </P.MyPost>
  );
}
