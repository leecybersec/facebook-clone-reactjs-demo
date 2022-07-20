import React from "react";
import "./HomePage.css";
import BodyLeft from "./BodyLeft";
import BodyMiddle from "./BodyMiddle";
import BodyRight from "./BodyRight";

function HomePage() {
  return (
    <div className="homePage">
      <BodyLeft />
      <BodyMiddle />
      <BodyRight />
    </div>
  );
}

export default HomePage;
