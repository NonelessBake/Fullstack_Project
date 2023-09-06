import React, { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import CheckoutCartItem from "./CheckoutCartItem";

const CheckoutCartList = () => {
  const { cart } = useContext(ContextValue);
  return (
    <div>
      {cart.map((cartItem) => (
        <CheckoutCartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CheckoutCartList;
