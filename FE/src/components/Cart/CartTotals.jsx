import { useContext } from "react";
import "../../assets/style/cartTotals.css";
import { ContextValue } from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { totalCartPrice } = useContext(ContextValue);
  return (
    <div className="cart-total">
      <p className="title">CART TOTALS</p>
      <div className="content">
        <div>
          <p>Subtotal</p>
          <p>${totalCartPrice}</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>Free shipping</p>
        </div>
        <div>
          <p>Total</p>
          <p className="total-price">${totalCartPrice}</p>
        </div>
        <Link to="/checkout">PROCEED TO CHECKOUT</Link>
      </div>
    </div>
  );
};

export default CartTotals;
