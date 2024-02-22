import React from "react";
import "./style.css";

const Login = () => {
  const handleCloseButtonClick = () => { };
  const handleLostPasswordClick = () => { };
  const handleLoginClick = () => { };
  return (
    <div className="login-page">
      <div className="top">
        <h3>LOGIN</h3>
        <button
          type="button"
          className="close-button"
          onClick={() => handleCloseButtonClick()}
        >
          X
        </button>
      </div>
      <p>If you have an account with us, please log in</p>
      <label>E-mail</label>
      <br />
      <input type={"email"} placeholder="Enter your email"></input>
      <br />
      <label>Password</label>
      <br />
      <input type={"password"} placeholder="Your password"></input>
      <br />
      <p onClick={() => handleLostPasswordClick()}>Lost your password?</p>
      <button className="login-btn" onClick={() => handleLoginClick()}>
        LOGIN
      </button>
      <p>or</p>
      <br />
      <div>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-google"></i>
        <i className="fa-brands fa-apple"></i>
      </div>
    </div>
  );
};

export default Login;
