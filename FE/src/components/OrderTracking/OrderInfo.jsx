import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import OrderProduct from "./OrderProduct";
import "../../assets/style/orderInfo.css";
const OrderInfo = () => {
  const { showOrderList } = useContext(ContextValue);
  console.log(showOrderList);
  let totalPrice = null;
  showOrderList.forEach((product) => {
    totalPrice +=
      product.price * (1 - product.discount / 100) * product.quantity;
  });
  return (
    <div className="order-tracking-info">
      <h4
        style={{
          textAlign: "center",
          borderBottom: "1px solid black",
          width: "100%",
          padding: "10px 15px",
        }}
      >
        Your Order
      </h4>
      <div className="order-product-info">
        {showOrderList?.map((product) => (
          <div key={product.id}>
            <OrderProduct product={product} />
          </div>
        ))}
      </div>
      <h3
        style={{
          padding: 20,
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid black",
          width: "100%",
          justifyContent: "center",
        }}
      >
        Subtotal: ${totalPrice?.toFixed(2)}
      </h3>
    </div>
  );
};

export default OrderInfo;
