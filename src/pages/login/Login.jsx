import React, { useState } from "react";
import "./style.css";
import Modal from "../../components/authorization/Modal";

const Login = () => {
  const [modalActive, setModalActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLostPasswordClick = () => { };

  function handleLoginClick() { }
  const handleNewCustomerClick = () => { };

  return (
    <div className="login-page">
      <h3>LOGIN</h3>
      <p>If you have an account with us, please log in</p>
      <label>E-mail</label>
      <div>
        <input
          type={"email"}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inp"
          required
        />
      </div>
      <label>Password</label>
      <div className="pass">
        <input
          type={"password"}
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <p onClick={() => handleLostPasswordClick()}>Lost your password?</p>
      <button className="login-btn" onClick={() => handleLoginClick()}>
        Sign In
      </button>
      <div className="or">
        <div></div>
        or
        <div></div>
      </div>
      <div className="socialIcons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-google"></i>
        <i className="fa-brands fa-apple"></i>
      </div>
      <p onClick={() => handleNewCustomerClick()}>New Customer?</p>

      <button className="create-new-btn" onClick={() => setModalActive(true)}>
        Create Your Account
      </button>

      <Modal active={modalActive} setActive={setModalActive}>
        <h2>Registration</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullName">Phone Number:</label>
            <input
              type="tel"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
