import React, { useEffect } from "react";
import "./Login.css";
import "../Component.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import LoginContainer from "./LoginContainer";
import RegisterContainer from "./RegisterContainer";
import { loginLinks, languages } from "../Data";
import { axios } from "axios";

function Login() {
  return (
    <div className="loginPage">
      <div className="login">
        <div className="login__text">
          <img
            src="https://camo.githubusercontent.com/5f5ab1a46677524ae3fa0f1253fa1a9f50e328f83ada0494eed0d931943d1fac/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38392f46616365626f6f6b5f4c6f676f5f253238323031392532392e7376672f3235363070782d46616365626f6f6b5f4c6f676f5f253238323031392532392e7376672e706e67"
            alt=""
          />
          <h2>
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <HashRouter>
          <Routes>
            <Route path="/" exact element={<LoginContainer />}></Route>
            <Route path="/register" element={<RegisterContainer />}></Route>
          </Routes>
        </HashRouter>
      </div>
      <div className="login__footer">
        <div>
          <div className="login__languages">
            {languages.map((language, index) => (
              <span key={index} className="login__language">
                {language}
              </span>
            ))}
            <span className="plus">+</span>
          </div>
          <div className="login__links">
            {loginLinks.map((link, index) => (
              <span key={index}>{link}</span>
            ))}
          </div>
          <div>Meta &copy; 2022</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
