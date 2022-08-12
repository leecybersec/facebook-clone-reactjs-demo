import React from "react";
import "./Story.css";
import StoryCard from "./StoryCard";
import { friends } from "../Data";
import "../Component.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Story() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    <div className="">
      <div className="story">
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  );
}

export default Story;
