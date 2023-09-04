import { useContext } from "react";
import "../assets/style/cartTotals.css";
import { Context } from "../contexts/ContextProvider";
import { NavLink } from "react-router-dom";

const CartTotals = () => {
  const { totalCartPrice } = useContext(Context);
  return (
    <div className="cart-total">
      <p className="title">CART TOTALS</p>
      <div className="content">
        <div>
          <p>Subtotal</p>
          <p>{totalCartPrice}</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>Free shipping</p>
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
