import React from "react";
import "./SignUp.scss";
import { JoinClub } from "../../../Components";
import { FaArrowRight, FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { useFormik } from "formik";
import { object, string, boolean } from "yup";

const SignUpSchema = object({
  firstName: string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .required("Please enter your first name"),
  lastName: string()
    .max(100, "Last name cannot exceed 100 characters")
    .required("Please enter your last name"),
  gender: string().required("Please select a gender"),
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
  tnc: boolean().oneOf(
    [true],
    "You must accept the terms and conditions to login"
  ),
});

const SignUp = () => {
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
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: "",
      tnc: true,
      loggedIn: true,
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
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
        <form onSubmit={handleSubmit}>
          <h5>Your Name</h5>
          <div className="input_validation">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName ? (
              <p>{errors.firstName}</p>
            ) : null}
          </div>
          <div className="input_validation">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName ? (
              <p>{errors.lastName}</p>
            ) : null}
          </div>
          <h5>Gender</h5>
          <div className="gender-input input_validation">
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={values.gender === "male"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={values.gender === "female"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={values.gender === "other"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="other">Other</label>
            </div>
            {errors.gender ? <p>{errors.gender}</p> : null}
          </div>
          <h5>Login Details</h5>
          <div className="input_validation">
            <input
              type="email"
              name="email"
              placeholder="Email*"
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
          <div className="checkbox-input__alignment big_input_validation">
            <input
              type="checkbox"
              name="tnc"
              checked={values.tnc}
              onChange={handleChange}
            />
            <label htmlFor="tnc">
              By clicking on 'Log In' you agree to our website{" "}
              <span>KicksClub Terms & Conditions</span>, Kicks{" "}
              <span>Privacy Notice</span> and <span>Terms & Conditions</span>.
            </label>
            {errors.tnc ? <p>{errors.tnc}</p> : null}
          </div>
          <div className="checkbox-input__alignment">
            <input
              type="checkbox"
              name="loggedIn"
              checked={values.loggedIn}
              onChange={handleChange}
            />
            <label htmlFor="loggedIn">
              Keep me logged in - applies to all log in options below.{" "}
              <span>More info</span>
            </label>
          </div>
          <button type="submit" disabled={!(isValid && dirty)}>
            Register <FaArrowRight />
          </button>
        </form>
      </div>
      <JoinClub />
    </div>
  );
};

export default SignUp;
