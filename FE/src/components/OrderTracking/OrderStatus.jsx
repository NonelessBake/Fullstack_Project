import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";
import "../../assets/style/orderStatus.css";
const OrderStatus = () => {
  const { customerOrderList } = useContext(ContextValue);
  return (
    <div className="order-status">
      <div className="flexing-status">
        <span
          className={`${
            customerOrderList?.status?.orderConfirmation
              ? " active-status"
              : "waiting-status"
          }`}
        >
          <BsCheckCircle size={30} />
        </span>
        <span
          style={{ background: "transparent" }}
          className={
            customerOrderList?.status?.orderConfirmation
              ? " active-status"
              : "waiting-status"
          }
        >
          Order Confirmed
        </span>
      </div>
      <BsArrowRight
        size={30}
        color={`${
          customerOrderList?.status?.orderConfirmation ? "green" : "868686"
        }`}
      />
      <div className="flexing-status">
        <span
          className={`${
            customerOrderList?.status?.transferToCarrier
              ? "active-status"
              : "waiting-status"
          }`}
        >
          <BsCheckCircle size={30} />
        </span>
        <span
          style={{ background: "transparent" }}
          className={
            customerOrderList?.status?.transferToCarrier
              ? " active-status"
              : "waiting-status"
          }
        >
          Transfering to carrier
        </span>
      </div>
      <BsArrowRight
        size={30}
        color={`${
          customerOrderList?.status?.transferToCarrier ? "green" : "868686"
        }`}
      />
      <div className="flexing-status">
        <span
          className={`${
            customerOrderList?.status?.delivery
              ? "active-status"
              : "waiting-status"
          }`}
        >
          <BsCheckCircle size={30} />
        </span>
        <span
          style={{ background: "transparent" }}
          className={
            customerOrderList?.status?.delivery
              ? " active-status"
              : "waiting-status"
          }
        >
          Delivering
        </span>
      </div>
      <BsArrowRight
        size={30}
        color={`${customerOrderList?.status?.delivery ? "green" : "868686"}`}
      />
      <div className="flexing-status">
        <span
          className={`${
            customerOrderList?.status?.receive
              ? "active-status"
              : "waiting-status"
          }`}
        >
          <BsCheckCircle size={30} />
        </span>
        <span
          style={{ background: "transparent" }}
          className={
            customerOrderList?.status?.receive
              ? " active-status"
              : "waiting-status"
          }
        >
          Receive
        </span>
      </div>
    </div>
  );
};

export default OrderStatus;
