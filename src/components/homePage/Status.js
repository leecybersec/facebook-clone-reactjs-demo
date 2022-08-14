import React, { useState } from "react";
import "./Status.css";
import Avatar from "../Component";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoIcon from "@mui/icons-material/Photo";
import MoodIcon from "@mui/icons-material/Mood";
import "../Component.css";
import { useUserContext } from "../../store/Context";

function Status() {
  let [status, setStatus] = useState("");

  const [{ user }, dispatch] = useUserContext();
  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      dispatch({
        type: "add_post",
        post: {
          name: user.displayName ?? user.email,
          imageAva:
            user.photoURL ??
            "https://us.123rf.com/450wm/hugok1000/hugok10001905/hugok1000190500198/123291745-default-profile-avatar-illustration-in-blue-and-white-no-person-.jpg",
          caption: status,
          timeAgo: Date(),
          imageUrl: null,
          likes: 0,
          comments: 0,
          shares: 0,
        },
      });
      setStatus("");
    }
  };

  return (
    <div className="status container">
      <div className="status__top">
        <Avatar
          src={
            user.photoURL ??
            "https://us.123rf.com/450wm/hugok1000/hugok10001905/hugok1000190500198/123291745-default-profile-avatar-illustration-in-blue-and-white-no-person-.jpg"
          }
          size="40"
        />
        <input
          type="text"
          placeholder={`What's on your mind, ${user.displayName ?? user.email}`}
          onKeyDown={handleKeyDown}
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        />
      </div>
      <div className="status__bottom">
        <div className="status__tag">
          <VideocamIcon style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>
        <div className="status__tag">
          <PhotoIcon style={{ color: "green" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="status__tag">
          <MoodIcon style={{ color: "orange" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default Status;
