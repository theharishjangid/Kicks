import React from "react";
import "./SignUp.scss";
import { JoinClub } from "../../../Components";
import { FaArrowRight, FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="sign_up__container">
      <div className="sign_up__container-form">
        <h4>Register</h4>
        <h6>Sign up with</h6>
        <div className="social_auth">
          <FaGoogle />
          <FaApple />
          <FaFacebook />
        </div>
        <h6>OR</h6>
        <form>
          <h5>Your Name</h5>
          <div>
            <input type="text" placeholder="First Name*" />
          </div>
          <div>
            <input type="text" placeholder="Last Name*" />
          </div>
          <h5>Gender</h5>
          <div className="gender-input">
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                defaultChecked
              />
              <label for="winter">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" id="female" />
              <label for="winter">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" id="other" />
              <label for="winter">Other</label>
            </div>
          </div>
          <h5>Login Details</h5>
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
              By clicking on 'Log In' you agree to our website{" "}
              <span>KicksClub Terms & Conditions</span>, Kicks{" "}
              <span>Privacy Notice</span> and <span>Terms & Conditions</span>.
            </label>
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
            Register <FaArrowRight />
          </button>
        </form>
      </div>
      <JoinClub />
    </div>
  );
};

export default SignUp;
