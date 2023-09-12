import { useContext, useMemo } from "react";
import "../../assets/style/cartItem.css";
import { ContextUpdate } from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";

const CartItem = (newProps) => {
  const { cartItem } = newProps;
  const { price, discount, img, quantity, name, status } = cartItem;
  const {
    onIncreaseQuantityItem,
    onDecreaseQuantityItem,
    onRemoveCartItem,
    onChangeQuantityItem,
    formatNumber,
    formatLink,
  } = useContext(ContextUpdate);
  const newPrice = price * (1 - discount / 100);
  const total = useMemo(() => {
    if (Number(newPrice) === 0 || Number(quantity) === 0) return 0;
    return formatNumber(newPrice * quantity);
  }, [formatNumber, newPrice, quantity]);
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
            <div className="product-name">
              <Link
                to={`/product/${formatLink(name)}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {name}
              </Link>
            </div>
            <div className="product-stock">Stock: {status}</div>
          </div>
        </div>
      </td>
      <td className="product-price">${formatNumber(newPrice)}</td>
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
