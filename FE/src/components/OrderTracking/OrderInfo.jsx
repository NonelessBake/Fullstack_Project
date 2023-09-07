import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";

const OrderInfo = () => {
  const { customerOrderList } = useContext(ContextValue);
  return (
    <div>
      {customerOrderList.map((product) => (
        <div></div>
      ))}
    </div>
  );
};

export default OrderInfo;
