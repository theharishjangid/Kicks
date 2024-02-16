import React from "react";
import "./ShoeCard.scss";
import { useNavigate } from 'react-router-dom';

const ShoeCard = (props) => {
  const navigate = useNavigate();
  const styles = {
    backgroundImage: `url(${props.image})`,
  };
  return (
    <div className="shoe_card__container">
      <div className="shoe_card__container-img" style={styles}>
        {props.tag && <p>{props.tag}</p>}
      </div>
      <div className="shoe_card__container-body">
        <h5>{props.name}</h5>
        <button onClick={() => {navigate(`/products/${props.productId}`)}} >
          View Product - <span>${props.price}</span>
        </button>
      </div>
    </div>
  );
};

export default ShoeCard;
