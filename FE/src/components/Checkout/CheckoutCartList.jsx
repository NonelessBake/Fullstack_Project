import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import CheckoutCartItem from "./CheckoutCartItem";

const CheckoutCartList = () => {
  const { cart, totalCartPrice } = useContext(ContextValue);
  return (
    <div>
      <div>
        <h3>Product</h3>
        {cart.map((cartItem) => (
          <CheckoutCartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div>
        <h4>Subtotal</h4>
        <p>{totalCartPrice}</p>
      </div>
      <div>
        <h4>Shipping</h4>
        <p>Free shipping</p>
      </div>
      <div>
        <h4>Total</h4>
        <p>{totalCartPrice}</p>
      </div>
      <div>
        <h4>Payment method</h4>
        <div>
          <select name="payment" id="">
            <option value="hand">Pay after the delivery</option>
            <option value="bank">Bank Transfer</option>
            <option value="visa">Visa</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartList;
