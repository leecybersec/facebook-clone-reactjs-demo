import React from "react";
import "./Login.css";
import "../Component.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginContainer from "./LoginContainer";
import RegisterContainer from "./RegisterContainer";

function Login() {
  return (
    <div className="login">
      <img
        src="https://camo.githubusercontent.com/5f5ab1a46677524ae3fa0f1253fa1a9f50e328f83ada0494eed0d931943d1fac/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38392f46616365626f6f6b5f4c6f676f5f253238323031392532392e7376672f3235363070782d46616365626f6f6b5f4c6f676f5f253238323031392532392e7376672e706e67"
        alt=""
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/facebook-clone-reactjs-demo/"
            exact
            element={<LoginContainer />}
          ></Route>
          <Route
            path="/facebook-clone-reactjs-demo/register"
            exact
            element={<RegisterContainer />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Login;
