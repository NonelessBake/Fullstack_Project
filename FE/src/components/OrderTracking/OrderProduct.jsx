import { useContext } from "react";
import { ContextUpdate } from "../../contexts/ContextProvider";
import "../../assets/style/orderProduct.css";
const OrderProduct = (newProps) => {
  const { product } = newProps;
  const { formatNumber } = useContext(ContextUpdate);
  const { img, name, quantity, price, discount } = product;
  const newPrice = formatNumber(price * (1 - discount / 100));
  return (
    <div className="order-tracking-product">
      <div className="info">
        <span className="img">
          <img src={img[0]} alt="" />
        </span>
        <div className="name-quantity">
          <span>{name}</span>
          <span>Quantity: {quantity}</span>
        </div>
      </div>
      <div className="price">${newPrice}</div>
    </div>
  );
};

export default OrderProduct;
