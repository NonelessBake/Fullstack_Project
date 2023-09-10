import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import OrderProduct from "./OrderProduct";
import "../../assets/style/orderInfo.css";
const OrderInfo = () => {
  const { customerOrderList } = useContext(ContextValue);
  let totalPrice = null;
  customerOrderList[0]?.infoProducts?.forEach((product) => {
    totalPrice +=
      product.price * (1 - product.discount / 100) * product.quantity;
  });
  return (
    <div className="order-tracking-info">
      <h3
        style={{
          textAlign: "center",
          borderBottom: "1px solid black",
          width: "100%",
          padding: "15px",
        }}
      >
        Your Order
      </h3>
      <div>
        {customerOrderList?.map((product) => (
          <div key={product.id}>
            <OrderProduct product={product?.infoProducts} />
          </div>
        ))}
      </div>
      <h2 style={{ marginTop: 50 }}>Subtotal: ${totalPrice?.toFixed(2)}</h2>
    </div>
  );
};

export default OrderInfo;
