import { useContext, useMemo } from "react";
import "../../assets/style/cartItem.css";
import { ContextUpdate } from "../../contexts/ContextProvider";

const CartItem = (newProps) => {
  const { cartItem } = newProps;
  console.log(cartItem);
  const { price, discount, img, quantity, name, status } = cartItem;
  const {
    onIncreaseQuantityItem,
    onDecreaseQuantityItem,
    onRemoveCartItem,
    onChangeQuantityItem,
  } = useContext(ContextUpdate);
  const newPrice = price * (1 - discount / 100);
  const total = useMemo(() => {
    if (Number(newPrice) === 0 || Number(quantity) === 0) return 1;
    return (newPrice * quantity).toFixed(2);
  }, [newPrice, quantity]);
  console.log(status);
  return (
    <tr className="cart-product">
      <td className="product-info">
        <div className="product-info-flex">
          <img
            src={img[0]}
            style={{ maxWidth: 200 }}
            alt="name"
            className="product-img"
          />
          <div>
            <div className="product-name">{name}</div>
            <div className="product-stock">Stock: {status}</div>
          </div>
        </div>
      </td>
      <td className="product-price">${newPrice.toFixed(2)}</td>
      <td className="prouct-quantity">
        <div className="product-quantity">
          <button
            onClick={() => onDecreaseQuantityItem(cartItem)}
            className="change-quantity-btn"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            className="quantity"
            onChange={(e) => {
              onChangeQuantityItem(e.target.value, cartItem);
            }}
          />
          <button
            onClick={() => onIncreaseQuantityItem(cartItem)}
            className="change-quantity-btn"
          >
            +
          </button>
        </div>
      </td>
      <td className="product-subtotal">
        <span>${total}</span>
      </td>
      <td className="product-remove">
        <button
          className="remove-btn"
          onClick={() => onRemoveCartItem(cartItem)}
        >
          x
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
