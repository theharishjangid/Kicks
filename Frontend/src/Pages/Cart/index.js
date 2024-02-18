import React from "react";

const Cart = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__page__container">
      <h2>Cart</h2>
    </div>
  );
};

export default Cart;
