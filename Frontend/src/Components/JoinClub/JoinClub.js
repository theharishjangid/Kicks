import React from "react";
import "./JoinClub.scss";
import { FaArrowRight } from "react-icons/fa6";

const JoinClub = () => {
  return (
    <div className="join_club__container">
      <h4>Join Kicks Club Get Rewarded Today.</h4>
      <p>
        As kicks club member you get rewarded with what you love for doing what
        you love. Sign up today and receive immediate access to these Level 1
        benefits:
      </p>
      <ul>
        <li>Free shipping</li>
        <li>A 15% off voucher for your next purchase</li>
        <li>Access to Members Only products and sales</li>
        <li>Access to Kicks Running and Training apps</li>
        <li>Special offers and promotions</li>
      </ul>
      <p>
        Join now to start earning points, reach new levels and unlock more
        rewards and benefits from Kicks Club.
      </p>
      <button>
        Join the Club <FaArrowRight />
      </button>
    </div>
  );
};

export default JoinClub;
