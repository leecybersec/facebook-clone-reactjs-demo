import React from "react";
import "./StoryCard.css";

function StoryCard({ backgroundUrl, userUrl, description }) {
  return (
    <div className="storyCard">
      <img className="storyCard__background" src={backgroundUrl} alt="" />
      <img className="storyCard__imgUser" src={userUrl} alt="" />
      <p className="storyCard__description">{description}</p>
      <div className="storyCard__fill"></div>
    </div>
  );
}

export default StoryCard;
