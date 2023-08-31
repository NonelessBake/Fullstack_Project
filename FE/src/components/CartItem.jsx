import { useContext } from "react";
import "../assets/style/cartItem.css";
import { Context } from "../contexts/ContextProvider";

const CartItem = (newProps) => {
  const { carItem } = newProps;
  const { id, price, discount, img, quantity, name } = carItem;
  const { onIncreaseQuantityItem, onDecreaseQuantityItem, onRemoveCartItem } =
    useContext(Context);
  const newPrice = price * (1 - discount / 100);

  return (
    <tr>
      <td>
        <img src={img[0]} style={{ maxWidth: 200 }} alt="name" />
        <div className="cart-item-name">{name}</div>
      </td>
      <td>{newPrice.toFixed(2)}</td>
      <td>
        <button onClick={() => onIncreaseQuantityItem(carItem)}>+</button>
        <div>{quantity}</div>
        <button onClick={() => onDecreaseQuantityItem(carItem)}>-</button>
      </td>
      <td>
        <span>${(newPrice * quantity).toFixed(2)}</span>
      </td>
    </tr>
  );
};

export default CartItem;
