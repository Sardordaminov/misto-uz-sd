import React, { useState } from "react";
import "./style.css";
import Modal from "../../components/authorization/Modal";

const Login = () => {
  const [modalActive, setModalActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLostPasswordClick = () => {};

  const handleLoginClick = () => {};
  const handleNewCustomerClick = () => {};

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
        />
      </div>
      <label>Password</label>
      <div className="pass">
        <input
          type={"password"}
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

      <button className="create-login-btn" onClick={() => setModalActive(true)}>
        Create Your Account
      </button>

      <Modal active={modalActive} setActive={setModalActive}>
        <h2>REGISTRATION</h2>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
