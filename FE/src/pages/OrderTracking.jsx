import "../assets/style/orderTracking.css";
import { useContext } from "react";
import { ContextValue } from "../contexts/ContextProvider";
import OrderStatus from "../components/OrderTracking/OrderStatus";
import OrderInfo from "../components/OrderTracking/OrderInfo";
import OrderTrackingForm from "../components/OrderTracking/OrderTrackingForm";

const OrderTracking = () => {
  const { isOrderExist } = useContext(ContextValue);

  return (
    <>
      {!isOrderExist ? (
        <OrderTrackingForm />
      ) : (
        <div>
          <OrderStatus />
          <OrderInfo />
        </div>
      )}
    </>
  );
};

export default OrderTracking;
