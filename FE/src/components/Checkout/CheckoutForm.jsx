import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import CheckoutCartList from "./CheckoutCartList";
import "../../assets/style/checkoutForm.css";
const CheckoutForm = () => {
  const { cart } = useContext(ContextValue);
  const cartPOST = cart.map((item) => {
    delete item.status;
    return {
      id: crypto.randomUUID(),
      item,
      orderConfirmation: false,
      transferToCarrier: false,
      delivery: false,
      receive: false,
    };
  });
  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      countryOrRegion: "",
      streetAddress: "",
      postcodeOrZip: "",
      townOrCity: "",
      phone: "",
      emailAddress: "",
      notes: "",
    },
    onSubmit: () => {
      axios.post({
        method: "POST",
        url: "http://localhost:3000/orderInfos",
        data: {
          id: crypto.randomUUID(),
          infoCustomer: values,
          infoProducts: cartPOST,
        },
      });
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-info">
            <h3>Billing details</h3>
            <div className="form-group">
              <label htmlFor="">First name</label>
              <input
                value={values.firstName}
                onChange={handleChange}
                name="firstName"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Last name</label>
              <input
                value={values.lastName}
                onChange={handleChange}
                name="lastName"
                type="text"
              />
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
                Country / Region
              </label>
              <div className="select-wrapper">
                <select></select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Street address</label>
              <input
                value={values.streetAddress}
                onChange={handleChange}
                name="streetAddress"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Postcode/ Zip (optional)</label>
              <input
                value={values.postcodeOrZip}
                onChange={handleChange}
                name="postcodeOrZip"
                type="number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Town / City</label>
              <input
                value={values.townOrCity}
                onChange={handleChange}
                name="townOrCity"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Phone</label>
              <input
                value={values.phone}
                onChange={handleChange}
                name="phone"
                type="number"
                id=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email address</label>
              <input
                value={values.emailAddress}
                onChange={handleChange}
                name="emailAddress"
                type="email"
              />
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
            <CheckoutCartList />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
