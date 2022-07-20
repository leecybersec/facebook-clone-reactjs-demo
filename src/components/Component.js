import React from "react";
import "./Component.css";

function Avatar({ size, src }) {
  return (
    <div className="avatar">
      <img src={src} width={size} height={size} alt="" />
    </div>
  );
}

function Btn({ IconBtn }) {
  return (
    <div className="btn">
      <IconBtn />
    </div>
  );
}

export { Btn };
export default Avatar;
