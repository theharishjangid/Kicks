import React from "react";
import "./LoginForm.scss";
import { JoinClub } from "../../../Components";
import { FaArrowRight, FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";

const LoginSchema = object({
  email: string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter the password")
    .matches(/[a-z]/, "Password must contain at least 1 lower case letter")
    .matches(/[A-Z]/, "Password must contain at least 1 upper case letter")
    .matches(/[0-9]/, "Password must contain at least 1 number")
    .matches(/[^\w]/, "Password must contain at least 1 special character"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      loggedIn: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
  return (
    <div className="login__container">
      <div className="login__container-form">
        <h4>Login</h4>
        <h6>
          <span>Forgot your password?</span>
        </h6>
        <form onSubmit={handleSubmit}>
          <div className="input_validation">
            <input
              type="email"
              placeholder="Email*"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>
          <div className="input_validation">
            <input
              type="password"
              name="password"
              placeholder="Password*"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          <div className="checkbox-input__alignment">
            <input
              type="checkbox"
              id="loggedIn"
              name="loggedIn"
              value={values.loggedIn}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label for="loggedIn">
              Keep me logged in - applies to all log in options below.{" "}
              <span>More info</span>
            </label>
          </div>
          <button type="submit" disabled={!(isValid && dirty)}>
            Email Login <FaArrowRight />
          </button>
        </form>
        <h6 className="sign_up-redirect">
          Don't have an account?{" "}
          <span
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign Up
          </span>
        </h6>
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
