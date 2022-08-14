import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import "../Component";
import Avatar from "../Component.js";
import HeaderNav from "./HeaderNav";
import { useUserContext } from "../../store/Context";
import { actionsType } from "../../store/actions";
import { auth } from "../firebase";
import { toast } from "react-toastify";

function Header() {
  let [{ user }, dispatch] = useUserContext();
  const [showHeaderInfo, setShowHeaderInfo] = useState(
    window.innerWidth > 1260
  );

  useEffect(() => {
    const handleResize = () => {
      setShowHeaderInfo(window.innerWidth > 1260);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  const handleClickLogout = async () => {
    await auth.signOut();
    await dispatch({
      type: actionsType.SET_USER,
      user: null,
    });
    toast.success("Logout successful");
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <HeaderNav />

      <div className="header__right">
        {showHeaderInfo && (
          <div className="header__info">
            <Avatar
              src={
                user.photoURL ??
                "https://us.123rf.com/450wm/hugok1000/hugok10001905/hugok1000190500198/123291745-default-profile-avatar-illustration-in-blue-and-white-no-person-.jpg"
              }
              size="28"
            />
            <span>{user.displayName ?? user.email}</span>
          </div>
        )}
        <div className="header__btn">
          <AppsOutlinedIcon />
          <p>Menu</p>
        </div>
        <div className="header__btn">
          <ChatBubbleOutlinedIcon />
          <p>Messenger</p>
        </div>
        <div className="header__btn">
          <NotificationsIcon />
          <p>Notifications</p>
        </div>
        <div className="header__btn" onClick={handleClickLogout}>
          <LogoutIcon />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
