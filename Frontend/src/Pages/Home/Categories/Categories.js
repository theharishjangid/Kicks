import React, { useState } from "react";
import "./Categories.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CategoriesCard } from "../../../Components";
import CategoriesData from "../../../Data/Categories";

const Categories = () => {
  const [categoryIndex, setCategoryIndex] = useState({ start: 0, end: 2 });
  const [buttonStyles, setButtonStyles] = useState({
    Back: { backgroundColor: "var(--light_gray-color)", cursor: "auto" },
    Forward: {},
  });
  const handleBackButton = () => {
    if (categoryIndex.start === 2) {
      setButtonStyles({
        ...buttonStyles,
        Back: { backgroundColor: "var(--light_gray-color)", cursor: "auto" },
      });
      setCategoryIndex({
        start: categoryIndex.start - 2,
        end: categoryIndex.end - 2,
      });
    } else if (categoryIndex.start === 4) {
      setButtonStyles({ ...buttonStyles, Forward: {} });
      setCategoryIndex({
        start: categoryIndex.start - 2,
        end: categoryIndex.end - 2,
      });
    }
  };
  const handleNextButton = () => {
    if (categoryIndex.end === 2) {
      setButtonStyles({ ...buttonStyles, Back: {} });
      setCategoryIndex({
        start: categoryIndex.start + 2,
        end: categoryIndex.end + 2,
      });
    } else if (categoryIndex.end === 4) {
      setButtonStyles({
        ...buttonStyles,
        Forward: { backgroundColor: "var(--light_gray-color)", cursor: "auto" },
      });
      setCategoryIndex({
        start: categoryIndex.start + 2,
        end: categoryIndex.end + 2,
      });
    }
  };
  return (
    <div className="app__flex home__categories__parent-container">
      <div className="home__categories__container">
        <div className="home__categories__container-heading">
          <h2>Categories</h2>
          <div>
            <IoIosArrowBack
              onClick={handleBackButton}
              style={buttonStyles.Back}
            />
            <IoIosArrowForward
              onClick={handleNextButton}
              style={buttonStyles.Forward}
            />
          </div>
        </div>
        <div className="app__flex home__categories__container-body">
          {CategoriesData.slice(categoryIndex.start, categoryIndex.end).map(
            (category, index) => (
              <CategoriesCard
                image={category.image}
                name={category.name}
                id={index}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
