import React from "react";

const Checkout = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__page__container">
      <h2>Checkout</h2>
    </div>
  );
};

export default Checkout;
