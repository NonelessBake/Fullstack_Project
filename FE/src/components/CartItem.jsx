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
    <tr className="cart-product">
      <td className="product-name">
        <img
          src={img[0]}
          style={{ maxWidth: 200 }}
          alt="name"
          className="product-img"
        />
        <span className="product-name">{name}</span>
      </td>
      <td className="product-price">{newPrice.toFixed(2)}</td>
      <td className="prouct-quantity">
        <div className="quantity">
          <button
            onClick={() => onDecreaseQuantityItem(carItem)}
            className="change-quantity-btn"
          >
            -
          </button>
          <span className="quantity-text">{quantity}</span>
          <button
            onClick={() => onIncreaseQuantityItem(carItem)}
            className="change-quantity-btn"
          >
            +
          </button>
        </div>
      </td>
      <td className="product-subtotal">
        <span>${(newPrice * quantity).toFixed(2)}</span>
      </td>
      <td className="product-remove">
        <button
          className="remove-btn"
          onClick={() => onRemoveCartItem(carItem)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
