import React from "react";
import Hero from "./Hero/Hero";
import New from "./New/New";
import Categories from "./Categories/Categories";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Hero />
      <New />
      <Categories />
      <Reviews />
    </React.Fragment>
  );
};

export default Home;
