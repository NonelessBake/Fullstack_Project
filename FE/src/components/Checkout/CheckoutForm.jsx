import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import { ContextUpdate, ContextValue } from "../../contexts/ContextProvider";
import "../../assets/style/checkoutForm.css";
import "../../assets/style/checkoutCartList.css";

import CheckoutFormValidate from "./CheckoutFormValidate";
import CheckoutCartItem from "./CheckoutCartItem";
const CheckoutForm = () => {
  const { cart, countryList, orderDate, totalCartPrice } =
    useContext(ContextValue);

  const { onOrderSuccess } = useContext(ContextUpdate);
  const cartPOST = cart.map((item) => {
    delete item.status;
    return item;
  });

  const OId =
    crypto.randomUUID(5) +
    Math.round(new Date().getTime() / (Math.random() * 100));

  const { values, handleChange, handleSubmit, resetForm, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      countryOrRegion: "Afghanistan",
      streetAddress: "",
      postcodeOrZip: "",
      townOrCity: "",
      phone: "",
      emailAddress: "",
      paymentMethod: "Pay after the delivery",
      notes: "",
    },
    onSubmit: () => {
      axios
        .post("http://localhost:3000/orderInfos", {
          date: orderDate,
          id: OId,
          infoCustomer: values,
          infoProducts: cartPOST,
          status: {
            orderConfirmation: false,
            transferToCarrier: false,
            delivery: false,
            receive: false,
          },
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      alert(`Your tracking order is: ${OId}`);
      onOrderSuccess();
      resetForm();
    },
    validationSchema: CheckoutFormValidate,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-info">
            <h3>Billing details</h3>
            <div className="form-group">
              <label htmlFor="">
                First name <span className="required">*</span>
              </label>
              <input
                value={values.firstName}
                onChange={handleChange}
                name="firstName"
                type="text"
              />
              <small className="text-muted">{errors.firstName}</small>
            </div>
            <div className="form-group">
              <label htmlFor="">
                Last name <span className="required">*</span>
              </label>
              <input
                value={values.lastName}
                onChange={handleChange}
                name="lastName"
                type="text"
              />
              <small className="text-muted">{errors.lastName}</small>
            </div>
            <div className="form-group">
              <label htmlFor="">Company name (optional)</label>
              <input
                value={values.companyName}
                onChange={handleChange}
                name="companyName"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">
                Country / Region <span className="required">*</span>
              </label>
              <select
                className="select-country"
                name="countryOrRegion"
                onChange={handleChange}
                value={values.countryOrRegion}
              >
                {countryList.map((country, index) => (
                  <option value={country.name} key={index}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">
                Street address <span className="required">*</span>
              </label>
              <input
                value={values.streetAddress}
                onChange={handleChange}
                name="streetAddress"
                type="text"
              />
              <small className="text-muted">{errors.streetAddress}</small>
            </div>
            <div className="form-group">
              <label htmlFor="">Postcode/ Zip (optional)</label>
              <input
                value={values.postcodeOrZip}
                onChange={handleChange}
                name="postcodeOrZip"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                Town / City <span className="required">*</span>
              </label>
              <input
                value={values.townOrCity}
                onChange={handleChange}
                name="townOrCity"
                type="text"
              />
              <small className="text-muted">{errors.townOrCity}</small>
            </div>
            <div className="form-group">
              <label htmlFor="">
                Phone <span className="required">*</span>
              </label>
              <input
                value={values.phone.toString()}
                onChange={handleChange}
                name="phone"
                type="text"
                id=""
              />
              <small className="text-muted">{errors.phone}</small>
            </div>
            <div className="form-group">
              <label htmlFor="">
                Email address <span className="required">*</span>
              </label>
              <input
                value={values.emailAddress}
                onChange={handleChange}
                name="emailAddress"
                type="email"
              />
              <small className="text-muted">{errors.emailAddress}</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>
              <textarea
                value={values.notes}
                onChange={handleChange}
                name="notes"
                id="exampleFormControlTextarea1"
                rows={3}
                className="notes"
                placeholder={
                  "Notes about your order, e.g. special notes for delivery."
                }
              />
            </div>
          </div>
          <div className="form-item">
            <div className="checkout-cart-list">
              <h3>Product</h3>
              <div className="cart-list">
                {cart.map((cartItem) => (
                  <CheckoutCartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
              <div className="checkout-subtotal checkout-flex">
                <div>Subtotal</div>
                <div>${totalCartPrice}</div>
              </div>
              <div className="checkout-ship checkout-flex">
                <div>Shipping</div>
                <div>Free shipping</div>
              </div>
              <div className="checkout-total-price checkout-flex">
                <div>Total</div>
                <div>${totalCartPrice}</div>
              </div>
              <div className="checkout-payment checkout-flex">
                <div>Payment method</div>
                <div>
                  <select
                    name="paymentMethod"
                    onChange={handleChange}
                    value={values.paymentMethod}
                  >
                    <option value="Pay after the delivery">
                      Pay after the delivery
                    </option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Visa">Visa</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="order-btn">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
