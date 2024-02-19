import React from "react";
import CartList from "./CartList/CartList";
import Suggestions from "../ProductDetail/Suggestions/Suggestions";

const Cart = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__page__container">
      <CartList />
      <Suggestions />
    </div>
  );
};

export default Cart;
