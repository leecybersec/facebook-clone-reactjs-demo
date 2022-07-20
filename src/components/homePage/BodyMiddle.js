import React from "react";
import "./BodyMiddle.css";
import Status from "./Status";
import Story from "./Story";
import Feed from "./Feed";

function BodyMiddle() {
  return (
    <div className="body__middle">
      <Story />
      <Status />
      <Feed />
    </div>
  );
}

export default BodyMiddle;
