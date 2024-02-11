import React from "react";
import "./CategoriesCard.scss";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CategoriesCard = (props) => {
  const styles = {
    backgroundColor: props.id % 2 === 0 ? "var(--light_blue-color)" : "var(--off_white-color)",
  };
  return (
    <div className="app__flex category_card__container" style={styles}>
      <img src={props.image} alt={props.name} />
      <div className="category_card__container-title">
        <p>{props.name} <br /> Shoes</p>
        <Link
          to={{
            pathname: "/products",
            search: new URLSearchParams({
              category: props.name,
            }).toString(),
          }}
        >
          <BsFillArrowUpRightSquareFill />
        </Link>
      </div>
    </div>
  );
};

export default CategoriesCard;
