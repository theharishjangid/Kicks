import React from "react";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Checkout = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__page__container">
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
