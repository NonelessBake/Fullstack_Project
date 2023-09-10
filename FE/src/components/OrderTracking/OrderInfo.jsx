import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import OrderItem from "./OrderItem";

const OrderInfo = () => {
  const { customerOrderList } = useContext(ContextValue);
  return (
    <div>
      {customerOrderList.map((product) => (
        <div key={product.id}>
          <OrderItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default OrderInfo;
