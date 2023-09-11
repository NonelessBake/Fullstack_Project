import { useContext } from "react";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import { ContextValue } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import "../assets/style/checkout.css";
const Checkout = () => {
  const { cart } = useContext(ContextValue);
  return (
    <div>
      {!cart.length ? (
        <div className="checkout-empty">
          <div>
            <div className="empty-content">Your cart is currently empty</div>
            <Link to="/shop">
              <BsArrowLeft />
              <span style={{ padding: "0 10px" }}>Return to shop</span>
            </Link>
          </div>
        </div>
      ) : (
        <CheckoutForm />
      )}
    </div>
  );
};

export default Checkout;
