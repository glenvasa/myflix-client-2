import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import { RegistrationView } from '../registration-view/registration-view';

// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login-view.css";

import { Link } from "react-router-dom";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameErr, setUsernameErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      axios
        .post("https://myflix2020.herokuapp.com/login", {
          Username: username,
          Password: password,
        })
        .then((response) => {
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch((e) => {
          console.log("no such user");
          alert("Please make sure to enter all login information correctly");
        });
    }
  };

  const formValidation = () => {
    const usernameErr = {};
    const passwordErr = {};
    let isValid = true;

    if (username.trim().length < 1) {
      usernameErr.usernameMissing = "Username is required to login";
      isValid = false;
    }

    if (username.trim().length < 5 && username.trim().length >= 1) {
      usernameErr.usernameShort = "Username is at least 5 characters";
      isValid = false;
    }

    if (password.trim().length < 1) {
      passwordErr.passwordMissing = "Password is required to login";
      isValid = false;
    }

    setUsernameErr(usernameErr);
    setPasswordErr(passwordErr);
    return isValid;
  };

  const buttonAnimation = (e) => {
    const regButton = document.querySelector(".button-register");
    const loginButton = document.querySelector(".button-login");
    // const loginInput = document.querySelector('.login-item .input')
    if (e.target.classList.contains("button-login")) {
      regButton.style.transform = "translateY(-600px) translateX(800px)";
      loginButton.addEventListener("mouseout", () => {
        regButton.style.transform = "translateY(0px) translateX(0px)";
        // loginInput.style.background = "#510916"
      });
    } else {
      loginButton.style.transform = "translateX(-1000px)";
      regButton.addEventListener("mouseout", () => {
        loginButton.style.transform = "translateX(0px)";
      });
    }
  };

  return (
    <div className="login-view">
      <h2>Welcome to MYFLIX!</h2>

      <Form className="login-form">
        <Form.Group controlId="formBasicUsername" className="login-item">
          <Form.Label>Enter Username: </Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // placeholder="enter username"
            className="input"
          />
          {Object.keys(usernameErr).map((key) => {
            return (
              <div
                className="validation-error"
                key={key}
                style={{ color: "red" }}
              >
                {usernameErr[key]}
              </div>
            );
          })}
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="login-item">
          <Form.Label>Enter Password: </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // placeholder="enter password"
            className="input"
          />
          {Object.keys(passwordErr).map((key) => {
            return (
              <div
                className="validation-error"
                key={key}
                style={{ color: "red" }}
              >
                {passwordErr[key]}
              </div>
            );
          })}
        </Form.Group>
        <div className="login-buttons">
          <button
            onMouseOver={(e) => {
              buttonAnimation(e);
            }}
            onClick={handleSubmit}
            type="submit"
            className="button-login mx-auto"
          >
            LOGIN
          </button>
          <Link to={"/register"}>
            <button
              onMouseOver={(e) => {
                buttonAnimation(e);
              }}
              className="button-register ml-3"
            >
              REGISTER
            </button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};
