import React from "react";
import "./CategoriesCard.scss";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CategoriesCard = (props) => {
  const styles = {
    backgroundColor: props.id % 2 === 0 ? "#FAFAFA" : "#ECEEF0",
  };
  return (
    <div className="app__flex category_card__container" style={styles}>
      <img src={props.image} alt={props.name} />
      <div className="category_card__container-title">
        <p>{props.name} Shoes</p>
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
