import { useContext } from "react";
import "../assets/style/cartList.css";
import { Context } from "../contexts/ContextProvider";
import CartItem from "./CartItem";
const CartList = () => {
  const { cart } = useContext(Context);
  return (
    <table>
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY </th>
          <th>SUBTOTAL</th>
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
