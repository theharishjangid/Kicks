import React from "react";
import "./Reviews.scss";
import { PrimaryButton, ReviewCard } from "../../../Components";
import Profile1 from "../../../Assets/Reviews/1.png";
import Profile2 from "../../../Assets/Reviews/2.png";
import Profile3 from "../../../Assets/Reviews/3.png";
import Review1 from "../../../Assets/Reviews/review1.png";
import Review2 from "../../../Assets/Reviews/review2.png";
import Review3 from "../../../Assets/Reviews/review3.png";

const Reviews = () => {
  return (
    <div className="app__page__container app__flex home__reviews__container">
      <div className="home__reviews__container-heading">
        <h2>Reviews</h2>
        <PrimaryButton name="see all" to="/reviews"/>
      </div>
      <div className="home__reviews__container-body">
        <ReviewCard
          name="Ryan Garcia"
          feedback="Highly recommend! Fantastic service, speedy delivery and top-notch shoes!"
          rating={5.0}
          profile_img={Profile1}
          review_img={Review1}
        />
        <ReviewCard
          name="Sarah Johnson"
          feedback="Absolutely love my new kicks! Stylish, comfortable and arrived right on time!"
          rating={4.5}
          profile_img={Profile2}
          review_img={Review2}
        />
        <ReviewCard
          name="James Wilson"
          feedback="My go-to for shoe shopping! Always reliable with great deals and fast shipping."
          rating={4.7}
          profile_img={Profile3}
          review_img={Review3}
        />
      </div>
    </div>
  );
};

export default Reviews;
