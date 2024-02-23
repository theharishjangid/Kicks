import React from "react";
import "./CheckoutItem.scss";

const CheckoutItem = (props) => {
  const cartItem = props.cartItem;
  return (
    <div className="app__flex checkout__container">
      <div className="app__flex checkout__container-image">
        <img src={cartItem.image1} alt={cartItem.name} />
      </div>
      <div className="checkout__container-body">
        <h5 className="heading_text">{cartItem.name}</h5>
        <p>
          {cartItem.gender[0]}'s {cartItem.categories[0]} Shoes
        </p>
        <p>Color: {cartItem.color}</p>
        <div>
          <p>Size: {cartItem.size}</p>
          <p>Quantity: 1</p>
        </div>
        <h5 className="heading_text checkout__price">
          ${cartItem.price.toFixed(2)}
        </h5>
      </div>
    </div>
  );
};

export default CheckoutItem;
