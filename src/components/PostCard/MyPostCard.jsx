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

function CheckBox({ checked, setChecked }) {
  const clickHandler = (e) => {
    e.stopPropagation();
    setChecked(!checked);
  };

  return (
    <P.CheckBoxContainer onClick={clickHandler}>
      {checked ? (
        <img src="/img/checkedCheck.svg" alt="checkbox" />
      ) : (
        <img src="/img/uncheckedCheck.svg" alt="checkbox" />
      )}
    </P.CheckBoxContainer>
  );
}

export default function MyPostCard({
  onClick,
  editMode,
  category,
  petType,
  postTitle,
  postContent,
  postThumbnailSrc,
  timeStampKR,
  viewCount,
  bookmarkCount,
  deleteChecked,
  setDeleteChecked,
}) {
  return (
    <P.MyPost onClick={onClick}>
      {editMode && (
        <CheckBox checked={deleteChecked} setChecked={setDeleteChecked} />
      )}
      <P.FlexGrowBox>
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
      </P.FlexGrowBox>
    </P.MyPost>
  );
}
