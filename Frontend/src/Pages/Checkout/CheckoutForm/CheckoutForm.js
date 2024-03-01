import React, { useState } from "react";
import "./CheckoutForm.scss";
import useCart from "../../../Context/CartContext";
import { CheckoutItem } from "../../../Components";
import { useFormik } from "formik";
import { object, string, boolean } from "yup";

const CheckOutSchema = object({
  email: string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  firstName: string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .required("Please enter your first name"),
  lastName: string()
    .max(100, "Last name cannot exceed 100 characters")
    .required("Please enter your last name"),
  address: string().required("Please enter the address"),
  number: string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Phone number is not valid")
    .required("Please enter the Phone number"),
  age: boolean().oneOf([true], "You must be above 13 years to place an order"),
  billingInfo: boolean().oneOf(
    [true],
    "Billing and delivery address should be same to proceed"
  ),
});

const CheckoutForm = () => {
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      number: "",
      delivery: deliveryOption,
      billingInfo: true,
      age: true,
      marketingEmail: true,
    },
    validationSchema: CheckOutSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
  const { cartItems } = useCart();
  let priceSum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    priceSum += cartItems[i]["price"];
  }
  let tax = priceSum * 0.18;
  let delivery = (cartItems.length > 0 && deliveryOption === "standard") ? 6.99 : 0;
  return (
    <div className="checkout_form__container">
      <div className="checkout_form__container-form">
        <h6>Login and Checkout faster</h6>
        <h4>Contact Details</h4>
        <p>We will use these details to keep you inform about your delivery.</p>
        <form onSubmit={handleSubmit}>
          <div className="big_input_validation">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>
          <h4>Shipping Address</h4>
          <div className="name__input">
            <div className="big_input_validation">
              <input
                type="text"
                placeholder="First Name*"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName ? (
                <p>{errors.firstName}</p>
              ) : null}
            </div>
            <div className="big_input_validation">
              <input
                type="text"
                placeholder="Last Name*"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName ? (
                <p>{errors.lastName}</p>
              ) : null}
            </div>
          </div>
          <div className="address__input">
            <p className="p-text">Start typing your street address or zip code for suggestion</p>
            <div className="big_input_validation">
              <input
                type="text"
                placeholder="Find Delivery Address*"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.address && touched.address ? (
                <p>{errors.address}</p>
              ) : null}
            </div>
          </div>
          <div className="tel__input">
            <p className="p-text">E.g. (123) 456-7890</p>
            <div className="big_input_validation">
              <input
                type="tel"
                placeholder="Phone Number*"
                name="number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.number && touched.number ? <p>{errors.number}</p> : null}
            </div>
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
            <div className="big_input_validation">
              <input
                type="checkbox"
                name="billingInfo"
                checked={values.billingInfo}
                onChange={handleChange}
              />
              <label htmlFor="billingInfo">
                My billing and delivery information are the same
              </label>
              {errors.billingInfo ? <p>{errors.billingInfo}</p> : null}
            </div>
            <div className="big_input_validation">
              <input
                type="checkbox"
                name="age"
                checked={values.age}
                onChange={handleChange}
              />
              <label htmlFor="age">I'm 13+ year old</label>
              {errors.age ? <p>{errors.age}</p> : null}
            </div>
          </div>
          <h6 className="newsletter__heading">
            Also want product updates with our newsletter?
          </h6>
          <div className="checkbox__input">
            <div>
              <input
                type="checkbox"
                name="marketingEmail"
                checked={values.marketingEmail}
                onChange={handleChange}
              />
              <label htmlFor="marketingEmail">
                Yes, I'd like to receive emails about exclusive sales and more.
              </label>
            </div>
          </div>
          <button type="submit" disabled={!(isValid && dirty)}>
            REVIEW AND PAY
          </button>
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
