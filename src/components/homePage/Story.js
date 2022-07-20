import React from "react";
import "./Story.css";
import StoryCard from "./StoryCard";
import { friends } from "../Data";
import "../Component.css";

function Story() {
  return (
    <div className="story container">
      {friends.map((friend, index) => {
        return (
          friend.haveStory && (
            <StoryCard
              backgroundUrl={friend.storyUrl}
              userUrl={friend.imageUrl}
              description={friend.name}
              key={index}
            />
          )
        );
      })}
    </div>
  );
}

export default Story;
