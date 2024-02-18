import React from "react";

const Reviews = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__page__container">
      <h2>Reviews</h2>
    </div>
  );
};

export default Reviews;
