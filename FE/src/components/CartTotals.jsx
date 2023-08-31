import { useContext } from "react";
import "../assets/style/cartTotals.css";
import { Context } from "../contexts/ContextProvider";
import { NavLink } from "react-router-dom";

const CartTotals = () => {
  const { totalCartPrice } = useContext(Context);
  return (
    <div>
      <div>
        <h3>CART TOTALS</h3>
        <div>
          <p>Subtotal</p>
          <p>{totalCartPrice}</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>Shipping to: </p>
        </div>
        <div>
          <p>Total</p>
          <p>{totalCartPrice}</p>
        </div>
      </div>
      <div>
        <NavLink to="/checkout">
          <button>PROCEED TO CHECKOUT</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CartTotals;
