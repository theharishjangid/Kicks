import React from "react";
import "./CartList.scss";
import useCart from "../../../Context/CartContext";
import { CartItem } from "../../../Components";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useCart();
  let priceSum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    priceSum += cartItems[i]["price"];
  }
  let tax = priceSum * 0.18;
  let delivery = cartItems.length > 0 ? 6.99 : 0;
  const handleRemove = (item) => {
    const currentCart = cartItems;
    currentCart.pop(item);
    setCartItems(currentCart);
  };
  return (
    <div className="app__flex cart_list__container">
      <div className="cart_list__container-heading">
        <h4>Saving to celebrate</h4>
        <p>
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while supplies last. No code needed.
        </p>
        <h6>Join us or Sign-in</h6>
      </div>
      <div className="cart_list__container-body">
        <div className="cart_list__container-bag">
          <h4>Your Bag</h4>
          <p className="cart_list__container-bag_desc">
            Items in your bag not reserved- check out now to make them yours.
          </p>
          <div className="app__flex cart_list__container-bag_items">
            {cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} handleRemove={handleRemove} />
            ))}
          </div>
        </div>
        <div className="cart_list__container-summary">
          <h4>Order Summary</h4>
          <div className="cart_list__container-summary_data">
            <p>{cartItems.length} Items</p>
            <p>${priceSum.toFixed(2)}</p>
          </div>
          <div className="cart_list__container-summary_data">
            <p>Delivery</p>
            <p>${delivery}</p>
          </div>
          <div className="cart_list__container-summary_data">
            <p>{"Sales Tax (18%)"}</p>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className="cart_list__container-summary_total">
            <p>Total</p>
            <p>${(priceSum + delivery + tax).toFixed(2)}</p>
          </div>
          <button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            checkout
          </button>
          <h6>User a promo code</h6>
        </div>
      </div>
    </div>
  );
};

export default CartList;
