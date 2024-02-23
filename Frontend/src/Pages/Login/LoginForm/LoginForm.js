import React from "react";
import "./LoginForm.scss";
import { JoinClub } from "../../../Components";
import { FaArrowRight, FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="login__container">
      <div className="login__container-form">
        <h4>Login</h4>
        <h6>
          <span>Forgot your password?</span>
        </h6>
        <form>
          <div>
            <input type="email" placeholder="Email*" />
          </div>
          <div>
            <input type="password" placeholder="Password*" />
          </div>
          <div className="checkbox-input__alignment">
            <input
              type="checkbox"
              id="loggedIn"
              name="loggedIn"
              defaultChecked
            />
            <label for="loggedIn">
              Keep me logged in - applies to all log in options below.{" "}
              <span>More info</span>
            </label>
          </div>
          <button type="submit">
            Email Login <FaArrowRight />
          </button>
        </form>
        <div className="social_auth">
          <FaGoogle />
          <FaApple />
          <FaFacebook />
        </div>
        <h6>
          By clicking on 'Log In' you agree to our website{" "}
          <span>KicksClub Terms & Conditions</span>, Kicks{" "}
          <span>Privacy Notice</span> and <span>Terms & Conditions</span>.
        </h6>
      </div>
      <JoinClub />
    </div>
  );
};

export default LoginForm;
