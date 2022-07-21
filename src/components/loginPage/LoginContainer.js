import React, { useState } from "react";
import "./LoginContainer.css";
import { auth, provider } from "../firebase";
import { useUserContext } from "../../store/Context";
import { actionsType } from "../../store/actions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function LoginContainer() {
  const [state, dispatch] = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPsw, setShowPwd] = useState(false);

  const handleClickLoginBtn = async () => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);

      await dispatch({
        type: actionsType.SET_USER,
        user: user.user,
      });
      toast.success("Login successful");
    } catch (error) {
      console.log(error);
      toast.error("Login unsuccessful");
    }
  };

  const handleShowPwd = () => {
    setShowPwd(!showPsw);
  };
  const handleClickGgBtn = async () => {
    try {
      const user = await auth.signInWithPopup(provider);
      await dispatch({
        type: actionsType.SET_USER,
        user: user.user,
      });
      toast.success("Login successful");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login__container container">
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="login__pwdText">
        <input
          type={!showPsw ? "password" : "text"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {!showPsw ? (
          <VisibilityIcon onClick={handleShowPwd} />
        ) : (
          <VisibilityOffIcon onClick={handleShowPwd} />
        )}
      </div>
      <button
        className="login__btn"
        type="submit"
        onClick={handleClickLoginBtn}
      >
        Log in
      </button>
      <p className="login__fotgotText">Forgot password ?</p>
      <div className="login__orText">
        <h5>Or</h5>
      </div>
      <p className="login__text">Login with</p>
      <div className="login__media">
        <button
          className="login__google"
          type="submit"
          onClick={handleClickGgBtn}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
          <p>Google</p>
        </button>
      </div>
      <p>
        Not have an account ?{" "}
        <Link to="/facebook-clone-reactjs-demo/register">Register now</Link>
      </p>
    </div>
  );
}

export default LoginContainer;
