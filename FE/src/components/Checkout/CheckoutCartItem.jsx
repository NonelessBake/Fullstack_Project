import { useContext } from "react";
import "../../assets/style/checkoutCartItem.css";
import { ContextUpdate } from "../../contexts/ContextProvider";

const CheckoutCartItem = (newProps) => {
  const { cartItem } = newProps;
  const { formatNumber } = useContext(ContextUpdate);
  const { price, discount, img, quantity, name } = cartItem;
  const newPrice = price * (1 - discount / 100);
  return (
    <div className="checkout-cart-item">
      <div className="checkout-cart">
        <div className="checkout-cart-img-container">
          <img src={img[0]} alt={name} />
        </div>
        <div className="checkout-cart-info">
          <div className="checkout-cart-name">{name}</div>
          <div className="checkout-cart-quantity">QTY: {quantity}</div>
        </div>
      </div>
      <div className="checkout-cart-price">
        ${formatNumber(newPrice * quantity)}
      </div>
    </div>
  );
};

export default CheckoutCartItem;
