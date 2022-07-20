import React from "react";
import "./BodyRight.css";
import BodyRightCard from "./BodyRightCard";
import { friends } from "../Data";

function BodyRight() {
  return (
    <div className="body__right">
      <h3>Contact</h3>
      {friends.map((friend, index) => (
        <BodyRightCard
          imgUrl={friend.imageUrl}
          haveStory={friend.haveStory}
          online={friend.state}
          description={friend.name}
          key={index}
        />
      ))}
    </div>
  );
}

export default BodyRight;
