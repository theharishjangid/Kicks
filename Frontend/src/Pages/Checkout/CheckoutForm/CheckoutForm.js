import React, { useState } from "react";
import "./CheckoutForm.scss";
import useCart from "../../../Context/CartContext";
import { CheckoutItem } from "../../../Components";

const CheckoutForm = () => {
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const { cartItems } = useCart();
  let priceSum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    priceSum += cartItems[i]["price"];
  }
  let tax = priceSum * 0.18;
  let delivery = cartItems.length > 0 ? 6.99 : 0;
  return (
    <div className="checkout_form__container">
      <div className="checkout_form__container-form">
        <h6>Login and Checkout faster</h6>
        <h4>Contact Details</h4>
        <p>We will use these details to keep you inform about your delivery.</p>
        <form>
          <input type="email" placeholder="Email" name="email" />
          <h4>Shipping Address</h4>
          <div className="name__input">
            <input type="text" placeholder="First Name*" name="firstName" />
            <input type="text" placeholder="Last Name*" name="lastName" />
          </div>
          <div className="address__input">
            <p>Start typing your street address or zip code for suggestion</p>
            <input
              type="text"
              placeholder="Find Delivery Address*"
              name="lastName"
            />
          </div>
          <div className="tel__input">
            <p>E.g. (123) 456-7890</p>
            <input type="tel" placeholder="Phone Number*" name="lastName" />
          </div>
          <h4>Delivery</h4>
          <div
            className={
              deliveryOption === "standard"
                ? "form__cards selected_card"
                : "form__cards"
            }
            onClick={() => setDeliveryOption("standard")}
          >
            <div>
              <h5>Standard Delivery</h5>
              <span>$6.00</span>
            </div>
            <h6>Enter your address to see when you'll get your order</h6>
          </div>
          <div
            className={
              deliveryOption === "store"
                ? "form__cards selected_card"
                : "form__cards"
            }
            onClick={() => setDeliveryOption("store")}
          >
            <div>
              <h5>Collect in store</h5>
              <span>Free</span>
            </div>
            <h6>Pay now, collect in store</h6>
          </div>
          <div className="checkbox__input">
            <div>
              <input
                type="checkbox"
                id="billingInfo"
                name="billingInfo"
                defaultChecked
              />
              <label for="billingInfo">
                My billing and delivery information are the same
              </label>
            </div>
            <div>
              <input type="checkbox" id="age" name="age" defaultChecked />
              <label for="age">I'm 13+ year old</label>
            </div>
          </div>
          <h6 className="newsletter__heading">
            Also want product updates with our newsletter?
          </h6>
          <div className="checkbox__input">
            <div>
              <input
                type="checkbox"
                id="marketingEmail"
                name="marketingEmail"
                defaultChecked
              />
              <label for="marketingEmail">
                Yes, I’d like to receive emails about exclusive sales and more.
              </label>
            </div>
          </div>
          <button type='submit'>REVIEW AND PAY</button>
        </form>
      </div>
      <div className="app__flex checkout_form__container-body">
        <div className="checkout_form__container-summary">
          <h4>Order Summary</h4>
          <div className="checkout_form__container-summary_data">
            <p>
              {cartItems.length > 1
                ? `${cartItems.length} Items`
                : `${cartItems.length} Item`}
            </p>
            <p>${priceSum.toFixed(2)}</p>
          </div>
          <div className="checkout_form__container-summary_data">
            <p>Delivery</p>
            <p>${delivery}</p>
          </div>
          <div className="checkout_form__container-summary_data">
            <p>{"Sales Tax (18%)"}</p>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className="checkout_form__container-summary_total">
            <p>Total</p>
            <p>${(priceSum + delivery + tax).toFixed(2)}</p>
          </div>
        </div>
        <div className="checkout_form__container-bag">
          <h4>Order Details</h4>
          <div className="app__flex checkout_form__container-bag_items">
            {cartItems.map((cartItem) => (
              <CheckoutItem cartItem={cartItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
