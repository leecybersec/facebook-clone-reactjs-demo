import React, { useState } from "react";
import "./BodyLeft.css";
import BodyLeftCard from "./BodyLeftCard";
import menu from "../Data";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useUserContext } from "../../store/Context";

function BodyLeft() {
  const [{ user }, dispatch] = useUserContext();

  let [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((show = !show));
  };

  return (
    <div className="body__left">
      <BodyLeftCard
        imgUrl={
          user.photoURL ??
          "https://us.123rf.com/450wm/hugok1000/hugok10001905/hugok1000190500198/123291745-default-profile-avatar-illustration-in-blue-and-white-no-person-.jpg"
        }
        description={user.displayName ?? user.email}
      />
      {show
        ? menu.map((item, index) => (
            <BodyLeftCard
              imgUrl={item.urlImg}
              description={item.description}
              key={index}
            />
          ))
        : menu
            .slice(0, 4)
            .map((item, index) => (
              <BodyLeftCard
                imgUrl={item.urlImg}
                description={item.description}
                key={index}
              />
            ))}
      <div className="bodyLeft__Card" onClick={handleShow}>
        <div>{show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</div>
        <p>{show ? "Show Less" : "Show More"}</p>
      </div>
    </div>
  );
}

export default BodyLeft;
