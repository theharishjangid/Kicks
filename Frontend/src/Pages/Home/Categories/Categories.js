import React from "react";
import "./Categories.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CategoriesCard } from "../../../Components";
import BasketballShoes from "../../../Assets/basketball.png";
import sneakerShoes from "../../../Assets/sneakers.png";

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
          <CategoriesCard image={sneakerShoes} name="Sneaker" id={1} />
          <CategoriesCard image={BasketballShoes} name="Basketball" id={2} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
