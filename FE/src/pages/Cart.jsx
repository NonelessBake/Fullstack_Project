import CartList from "../components/CartList";
import CartTotals from "../components/CartTotals";
import "../assets/style/cart.css";

function Cart() {
  return (
    <div className="cart">
      <CartList />
      <CartTotals />
    </div>
  );
}

export default Cart;
