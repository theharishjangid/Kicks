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
              We are the biggest hyperstore in the town. We got you all covered
              with our exclusive collections and latest drops.
            </p>
          </div>
          <div className="app__footer__bottom-links_container">
            <div className="app__footer__bottom-links">
              <h5>Categories</h5>
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
                    category: "runner",
                  }).toString(),
                }}
              >
                Runner
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
              <h5>Company</h5>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blogs">Blogs</Link>
            </div>
            <div className="app__footer__bottom-links">
              <h5>Follow us</h5>
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
