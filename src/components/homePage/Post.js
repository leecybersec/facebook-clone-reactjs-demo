import React, { useState } from "react";
import Avatar from "../Component";
import "./Post.css";
import ClearIcon from "@mui/icons-material/Clear";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { useUserContext } from "../../store/Context";

function Post({
  name,
  imageAva,
  caption,
  timeAgo,
  imageUrl,
  likes,
  comments,
  shares,
  id,
}) {
  const [state, dispatch] = useUserContext();
  const handleDelete = () => {
    dispatch({
      type: "delete_post",
      id: id,
    });
  };
  const [like, setLike] = useState(false);
  const handleClickLike = () => {
    setLike(!like);
  };

  return (
    <div className="post container">
      <div className="post__header">
        <div className="post__left">
          <Avatar src={imageAva} size="40" />
          <div className="post__info">
            <h4>{name}</h4>
            <p className="post__time">{timeAgo}</p>
          </div>
        </div>
        <div className="post__edit" onClick={handleDelete}>
          <ClearIcon />
        </div>
      </div>
      <div className="post__content">{caption}</div>
      {imageUrl && <img src={imageUrl} alt="" />}
      <div className="post__bottom">
        <div className="post__interact">
          <div
            className={
              !like
                ? "post__interactItem"
                : "post__interactItem post__interactItem--like"
            }
          >
            <ThumbUpOutlinedIcon />
            <p className="post__countLike">{!like ? likes : likes + 1}</p>
          </div>
          <div className="post__interactRight">
            <div className="post__interactItem">
              <p className="post__countComment">{comments}</p>
              <p>Comments</p>
            </div>
            <div className="post__interactItem">
              <p className="post__countShare">{shares}</p>
              <p>Share</p>
            </div>
          </div>
        </div>
        <div className="post__btns">
          <div
            className={!like ? "post__btn" : "post__btn post__btn--like"}
            onClick={handleClickLike}
          >
            <ThumbUpOutlinedIcon />
            <p>Like</p>
          </div>
          <div className="post__btn">
            <ModeCommentOutlinedIcon />
            <p>Comment</p>
          </div>
          <div className="post__btn">
            <ShareIcon />
            <p>Share</p>
          </div>
        </div>
        <div className="post__comment">
          <div className="post__writeComment">
            <Avatar
              src={
                state.user._delegate.photoURL ??
                "https://us.123rf.com/450wm/hugok1000/hugok10001905/hugok1000190500198/123291745-default-profile-avatar-illustration-in-blue-and-white-no-person-.jpg"
              }
              size="32"
            />
            <input type="text" placeholder="Write your's comment..." />
          </div>
          <div className="post__showComment"></div>
        </div>
      </div>
    </div>
  );
}

export default Post;
