import "../assets/style/orderTracking.css";
import { useContext } from "react";
import { ContextUpdate, ContextValue } from "../contexts/ContextProvider";
import OrderStatus from "../components/OrderTracking/OrderStatus";
import OrderInfo from "../components/OrderTracking/OrderInfo";
import OrderTrackingForm from "../components/OrderTracking/OrderTrackingForm";
import { BsArrowLeft } from "react-icons/bs";

const OrderTracking = () => {
  const { customerOrderList } = useContext(ContextValue);
  const { backToTrackingPage } = useContext(ContextUpdate);
  return (
    <>
      {!customerOrderList?.length > 0 ? (
        <OrderTrackingForm />
      ) : (
        <div>
          <div className="back-to-tracking" onClick={backToTrackingPage}>
            <BsArrowLeft />
            Tracking Another Order
          </div>
          <OrderStatus />
          <OrderInfo />
        </div>
      )}
    </>
  );
};

export default OrderTracking;
