import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import CheckoutCartItem from "./CheckoutCartItem";
import "../../assets/style/checkoutCartList.css";
const CheckoutCartList = () => {
  const { cart, totalCartPrice } = useContext(ContextValue);
  return (
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
          <select name="payment checkout-flex" id="">
            <option value="hand">Pay after the delivery</option>
            <option value="bank">Bank Transfer</option>
            <option value="visa">Visa</option>
          </select>
        </div>
      </div>
      <button type="submit" className="order-btn">
        Confirm Order
      </button>
    </div>
  );
};

export default CheckoutCartList;
