import { useFormik } from "formik";
import { useContext } from "react";
import { ContextUpdate } from "../../contexts/ContextProvider";
import { OrderTrackingValidate } from "../Validate/FormValidate";

const OrderTrackingForm = () => {
  const { onTrack } = useContext(ContextUpdate);
  const { values, handleChange, handleSubmit, resetForm, errors } = useFormik({
    initialValues: {
      orderId: "",
      emailAddress: "",
    },
    onSubmit: () => {
      onTrack(values.orderId, values.emailAddress);
      resetForm();
    },
    validationSchema: OrderTrackingValidate,
  });
  return (
    <>
      <form className="order-tracking" onSubmit={handleSubmit}>
        <p>
          {`To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.`}
        </p>
        <div className="order-id">
          <label>Order ID</label>
          <input
            type="text"
            name="orderId"
            value={values.orderId}
            onChange={handleChange}
            placeholder="Enter your order ID"
          />
          <small className="text-muted">{errors.orderId}</small>
        </div>
        <div className="order-email">
          <label>Billing email</label>
          <input
            type="email"
            name="emailAddress"
            value={values.emailAddress}
            onChange={handleChange}
          />
          <small className="text-muted">{errors.emailAddress}</small>
        </div>
        <button type="submit">TRACK</button>
      </form>
    </>
  );
};

export default OrderTrackingForm;
