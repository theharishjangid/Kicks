import React from "react";
import "./Footer.scss";
import Logo from "../../Assets/logo.svg";
import FooterLogo from "../../Assets/footer_logo.svg";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { useFormik } from "formik";
import { object, string } from "yup";

const LoginSchema = object({
  email: string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
});

const Footer = () => {
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
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
  return (
    <div className="app__container app__flex app__footer__container">
      <div className="app__flex app__footer__top">
        <div className=" app__flex app__footer__top-newsletter_form">
          <h3>Join our KicksPlus Club & get 15% off</h3>
          <p className="p-text">Sign up for free! Join the community.</p>
          <form onSubmit={handleSubmit}>
            <div className="big_input_validation">
              <input type="email" placeholder="Email address" name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}/>
              {errors.email && touched.email ? <p>{errors.email}</p> : null}
            </div>
            <button type="submit" disabled={!(isValid && dirty)}>submit</button>
          </form>
        </div>
        <div className="app__flex app__footer__top-logo">
          <img src={Logo} alt="logo" />
          <FaPlus />
        </div>
      </div>
      <div className="app__footer__bottom-container">
        <div className="app__footer__bottom">
          <div className="app__footer__bottom-about">
            <h6>About us</h6>
            <p>
              We are the biggest hyperstore in the town. We got you all covered
              with our exclusive collections and latest drops.
            </p>
          </div>
          <div className="app__footer__bottom-links_container">
            <div className="app__footer__bottom-links">
              <h6>Categories</h6>
              <Link
                to={{
                  pathname: "/products",
                  search: new URLSearchParams({
                    category: "sneaker",
                  }).toString(),
                }}
              >
                Sneaker
              </Link>
              <Link
                to={{
                  pathname: "/products",
                  search: new URLSearchParams({
                    category: "basketball",
                  }).toString(),
                }}
              >
                Basketball
              </Link>
              <Link
                to={{
                  pathname: "/products",
                  search: new URLSearchParams({
                    category: "running",
                  }).toString(),
                }}
              >
                Running
              </Link>
              <Link
                to={{
                  pathname: "/products",
                  search: new URLSearchParams({
                    category: "outdoor",
                  }).toString(),
                }}
              >
                Outdoor
              </Link>
              <Link
                to={{
                  pathname: "/products",
                  search: new URLSearchParams({
                    category: "golf",
                  }).toString(),
                }}
              >
                Golf
              </Link>
              <Link
                to={{
                  pathname: "/products",
                  search: new URLSearchParams({
                    category: "hiking",
                  }).toString(),
                }}
              >
                Hiking
              </Link>
            </div>
            <div className="app__footer__bottom-links">
              <h6>Company</h6>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blogs">Blogs</Link>
            </div>
            <div className="app__footer__bottom-links">
              <h6>Follow us</h6>
              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img src={FooterLogo} alt="logo_big" />
        <div className="app__footer__copyright">
          © All rights reserved | Developed by{" "}
          <a
            href="https://theharishjangid.github.io/harishjangid/"
            target="_blank"
            rel="noreferrer"
          >
            Harish Jangid
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
