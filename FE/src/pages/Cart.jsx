import "../assets/style/cart.css";
import { useContext } from "react";
import { ContextValue } from "../contexts/ContextProvider";
import CartList from "../components/Cart/CartList";
import CartTotals from "../components/Cart/CartTotals";

function Cart() {
  const { isCartEmpty } = useContext(ContextValue);
  return (
    <div className="cart">
      {isCartEmpty ? (
        <div style={{ marginBottom: 100 }}>Your Cart Is Currently Empty.</div>
      ) : (
        <div className="cart-container">
          <CartList />
          <CartTotals />
        </div>
      )}
    </div>
  );
}

export default Cart;
