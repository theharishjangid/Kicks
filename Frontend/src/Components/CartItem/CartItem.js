import React, { useState } from "react";
import "./CartItem.scss";
import { IoHeart, IoHeartOutline, IoTrashBinOutline } from "react-icons/io5";

const CartItem = (props) => {
  const { cartItem, handleRemove } = props;

  const [wishlistToggle, setWishlistToggle] = useState(false);
  const handleWishlist = () => {
    setWishlistToggle(!wishlistToggle);
  };
  return (
    <div className="app__flex cart_item__container">
      <div className="app__flex cart_item__container-image">
        <img src={cartItem.image1} alt={cartItem.name} />
      </div>
      <div className="cart_item__container-body_container">
        <div className="cart_item__container-body">
          <div className="cart_item__container-body_details">
            <h5>{cartItem.name}</h5>
            <p>
              {cartItem.gender[0]}'s {cartItem.categories[0]} Shoes
            </p>
            <p>Color: {cartItem.color}</p>
            <div>
              <p>Size: {cartItem.size}</p>
              <p>Quantity: 1</p>
            </div>
          </div>
          <h5 className="cart_item__price">${cartItem.price.toFixed(2)}</h5>
        </div>
        <div className="cart_item__container-body_icons">
          {wishlistToggle ? (
            <IoHeart onClick={handleWishlist} />
          ) : (
            <IoHeartOutline onClick={handleWishlist} />
          )}
          <IoTrashBinOutline onClick={() => handleRemove(cartItem)} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
