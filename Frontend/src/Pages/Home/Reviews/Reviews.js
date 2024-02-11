import React from "react";
import "./Reviews.scss";
import { PrimaryButton, ReviewCard } from "../../../Components";
import ReviewsData from "../../../Data/Reviews";

const Reviews = () => {
  return (
    <div className="app__page__container app__flex home__reviews__container">
      <div className="home__reviews__container-heading">
        <h2>Reviews</h2>
        <PrimaryButton name="see all" to="/reviews" />
      </div>
      <div className="home__reviews__container-body">
        {ReviewsData.map((review) => (
          <ReviewCard
            name={review.name}
            feedback={review.feedback}
            rating={review.rating}
            profile_img={review.profile_img}
            review_img={review.review_img}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
