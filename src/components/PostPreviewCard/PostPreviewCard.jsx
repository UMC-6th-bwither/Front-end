/* eslint-disable react/prop-types */
import * as S from './PostPreviewCard.style';

function PostIcon({ src }) {
  return (
    <S.PostIconContainer>
      <S.PostIconImage src={src} />
    </S.PostIconContainer>
  );
}

function PostPreviewCard({
  communityName,
  postTitle,
  postContent,
  postThumbnailSrc,
  viewCount,
  commentCount,
  bookmarkCount,
}) {
  return (
    <S.Post>
      <S.PostWrapper>
        <S.TextWrapper>
          <S.CommunityName>{communityName}</S.CommunityName>
          <S.PostTitle>{postTitle}</S.PostTitle>
          <S.PostContent>{postContent}</S.PostContent>
        </S.TextWrapper>

        <S.PostIconLayout>
          <S.PostIconFrame>
            <PostIcon src="/icons/community_view.svg" />
            <S.PostIconContent>{viewCount}</S.PostIconContent>
          </S.PostIconFrame>
          <S.PostIconFrame>
            <PostIcon src="/icons/community_comment.svg" />
            <S.PostIconContent>{commentCount}</S.PostIconContent>
          </S.PostIconFrame>
          <S.PostIconFrame>
            <PostIcon src="/icons/community_bookmark.svg" />
            <S.PostIconContent>{bookmarkCount}</S.PostIconContent>
          </S.PostIconFrame>
        </S.PostIconLayout>
      </S.PostWrapper>

      <S.ThumbnailImg src={postThumbnailSrc} alt="Image Thumbnail" />
    </S.Post>
  );
}

export default PostPreviewCard;
