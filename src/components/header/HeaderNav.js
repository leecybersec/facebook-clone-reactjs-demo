import React, { useState } from "react";
import "./HeaderNav.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

function HeaderNav() {
  const [activeNav, setActiveNav] = useState(0);
  const navs = [
    {
      link: "/",
      icon: <HomeOutlinedIcon />,
      text: "Home",
    },
    {
      link: "/watch",
      icon: <OndemandVideoOutlinedIcon />,
      text: "Watch",
    },
    {
      link: "/marketplace",
      icon: <StorefrontOutlinedIcon />,
      text: "Marketplace",
    },
  ];
  const changeActive = (index) => {
    if (activeNav === index) {
      return "header__middleItem header__middleItem--active";
    }
    return "header__middleItem";
  };

  return (
    <nav className="header__middle">
      {navs.map((nav, index) => (
        <Link
          to={nav.link}
          className={changeActive(index)}
          key={index}
          onClick={() => {
            setActiveNav(index);
          }}
          id={index}
        >
          {nav.icon}
          <p>{nav.text}</p>
        </Link>
      ))}
    </nav>
  );
}

export default HeaderNav;
