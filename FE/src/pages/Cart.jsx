import CartList from "../components/CartList";
import CartTotals from "../components/CartTotals";
import "../assets/style/cart.css";
import { useContext } from "react";
import { Context } from "../contexts/ContextProvider";

function Cart() {
  const { isCartEmpty } = useContext(Context);
  return (
    <div className="cart">
      {isCartEmpty ? (
        <div>Your Cart Is Currently Empty.</div>
      ) : (
        <>
          <CartList />
          <CartTotals />
        </>
      )}
    </div>
  );
}

export default Cart;
