import React from "react";
import "./ShoeCard.scss";

const ShoeCard = (props) => {
  return (
    <div className="shoe_card__container">
      <div className="shoe_card__container-img">
        <p>{props.tag}</p>
      </div>
      <div className="shoe_card__container-body">
        <h4>{props.title}</h4>
        <button>
          View Product - <span>{props.price}</span>
        </button>
      </div>
    </div>
  );
};

export default ShoeCard;
