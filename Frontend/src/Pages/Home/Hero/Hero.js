import React from "react";
import "./Hero.scss";
import { PrimaryButton } from "../../../Components";
import HeroSub1 from "../../../Assets/hero_sub1.png";
import HeroSub2 from "../../../Assets/hero_sub2.png";

const Hero = () => {
  return (
    <div className="app__page__container app__flex home__hero__container">
      <h1>
        Do it <span>right</span>
      </h1>
      <div className="home__hero__section">
        <div className="home__hero__left_side">
          <p className="home__hero__left_side-tag">Nike product of the year</p>
          <div className="home__hero__left_side-heading">
            <h2>Nike air max</h2>
            <p>Nike introducing the new air max for everyone's comfort</p>
            <PrimaryButton name="shop now" />
          </div>
        </div>
        <div className="home__hero__right_side">
          <img src={HeroSub1} alt="hero sub 1" />
          <img src={HeroSub2} alt="hero sub 2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
