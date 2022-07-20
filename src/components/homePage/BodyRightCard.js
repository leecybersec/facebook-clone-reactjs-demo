import React from "react";
import "./BodyRightCard.css";
import "../Data";

function BodyRightCard({ haveStory, online, imgUrl, description }) {
  return (
    <div className="bodyRight__Card">
      <img
        src={imgUrl}
        className={`avatarUser ${haveStory && "avatarUser--haveStory"}`}
        alt=""
      />
      {online === "online" && <div className="greenDot"></div>}
      <p>{description}</p>
    </div>
  );
}

export default BodyRightCard;
