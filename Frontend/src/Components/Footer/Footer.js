import React from "react";
import "./Footer.scss";
import Logo from "../../Assets/logo.svg";
import FooterLogo from "../../Assets/footer_logo.svg";
import {
  FaPlus,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="app__container app__flex app__footer__container">
      <div className="app__flex app__footer__top">
        <div className=" app__flex app__footer__top-newsletter_form">
          <h3>Join our KicksPlus Club & get 15% off</h3>
          <p>Sign up for free! Join the community.</p>
          <form>
            <input type="email" placeholder="Email address" />
            <button type="submit">submit</button>
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
            <h5>About us</h5>
            <p>
              We are the biggest hyperstore in the town. We got you all cover
              with our exclusive collections and latest drops.
            </p>
          </div>
          <div className="app__footer__bottom-links_container">
            <div className="app__footer__bottom-links">
              <h5>Categories</h5>
              <p>Runners</p>
              <p>Sneakers</p>
              <p>Basketball</p>
              <p>Outdoor</p>
              <p>Golf</p>
              <p>Hiking</p>
            </div>
            <div className="app__footer__bottom-links">
              <h5>Company</h5>
              <p>About</p>
              <p>Contact</p>
              <p>Blogs</p>
            </div>
            <div className="app__footer__bottom-links">
              <h5>Follow us</h5>
              <div>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaTiktok />
              </div>
            </div>
          </div>
        </div>
        <img src={FooterLogo} alt="logo_big" />
        <div className="app__footer__copyright">
          © All rights reserved | Made with ❤️ by Harish Jangid
        </div>
      </div>
    </div>
  );
};

export default Footer;