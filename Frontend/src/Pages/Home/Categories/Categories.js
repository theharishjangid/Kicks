import React from "react";
import "./Categories.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CategoriesCard } from "../../../Components";
import SneakerShoes from "../../../Assets/sneaker.png";
import BasketballShoes from "../../../Assets/basketball.png";
import RunnerShoes from "../../../Assets/runner.png";
import OutdoorShoes from "../../../Assets/outdoor.png";
import GolfShoes from "../../../Assets/golf.png";
import HikingShoes from "../../../Assets/hiking.png";

const Categories = () => {
  return (
    <div className="app__flex home__categories__parent-container">
      <div className="home__categories__container">
        <div className="home__categories__container-heading">
          <h2>Categories</h2>
          <div>
            <IoIosArrowBack />
            <IoIosArrowForward />
          </div>
        </div>
        <div className="app__flex home__categories__container-body">
          <CategoriesCard image={SneakerShoes} name="sneaker" id={1} />
          <CategoriesCard image={BasketballShoes} name="basketball" id={2} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
