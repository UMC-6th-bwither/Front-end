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

export default function PostCard({
  petType,
  postId,
  onClick,
  profileImgSrc,
  profileName,
  postTitle,
  postContent,
  postThumbnailSrc,
  timeStampKR,
  viewCount,
  bookmarkCount,
}) {
  return (
    <P.Post onClick={onClick}>
      <P.PostUserProfile>
        <P.UserProfileImageConatiner>
          <P.UserProfileImage src={profileImgSrc} />
        </P.UserProfileImageConatiner>
        <P.UserProfileName>{profileName}</P.UserProfileName>
      </P.PostUserProfile>
      <P.PostWrapper>
        <div>
          <P.PostTitle>{postTitle}</P.PostTitle>
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
    </P.Post>
  );
}
