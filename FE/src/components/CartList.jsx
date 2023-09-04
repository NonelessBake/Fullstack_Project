import { useContext } from "react";
import "../assets/style/cartList.css";
import { Context } from "../contexts/ContextProvider";
import CartItem from "./CartItem";
const CartList = () => {
  const { cart } = useContext(Context);

  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th className="product">PRODUCT</th>
          <th className="price">PRICE</th>
          <th className="quantity">QUANTITY </th>
          <th className="subtotal">SUBTOTAL</th>
          <th className="remove">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((carItem) => (
          <CartItem carItem={carItem} key={carItem.id} />
        ))}
      </tbody>
    </table>
  );
};

export default CartList;
