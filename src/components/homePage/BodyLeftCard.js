import React from "react";
import "./BodyLeftCard.css";
import Avatar from "../Component";

function BodyLeftCard({ imgUrl, description }) {
  return (
    <div className="bodyLeft__Card">
      <Avatar src={imgUrl} size="36" />
      <p>{description}</p>
    </div>
  );
}

export default BodyLeftCard;
