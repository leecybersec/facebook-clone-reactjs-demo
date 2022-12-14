import React, { useEffect, useRef, useState } from "react";
import "./RegisterContainer.css";
import "../Component.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [showPsw, setShowPwd] = useState(false);

  const navigate = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleShowPwd = () => {
    setShowPwd(!showPsw);
  };

  const handleClick = async () => {
    if (email !== "" && password !== "") {
      try {
        const user = await auth.createUserWithEmailAndPassword(email, password);
        setEmail("");
        setPassword("");
        toast.success("Register successful!");
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    } else {
      toast.error("Register unsuccessful!");
    }
  };
  return (
    <div className="register__container container">
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        ref={inputRef}
        required
      />
      <div className="register__pwdText">
        <input
          type={!showPsw ? "password" : "text"}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
        {!showPsw ? (
          <VisibilityIcon onClick={handleShowPwd} />
        ) : (
          <VisibilityOffIcon onClick={handleShowPwd} />
        )}
      </div>
      <button className="register__btn" type="submit" onClick={handleClick}>
        Register
      </button>
      <p>
        Already have an account ? <Link to="/">Login now</Link>
      </p>
    </div>
  );
}

export default RegisterContainer;
