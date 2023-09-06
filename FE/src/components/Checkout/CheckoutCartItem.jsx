import React from "react";

const CheckoutCartItem = (newProps) => {
  const { cartItem } = newProps;
  const { price, discount, img, quantity, name } = cartItem;
  const newPrice = price * (1 - discount / 100);
  return <div></div>;
};

export default CheckoutCartItem;
