import { createContext, useState } from "react";

export const ActicleContext = createContext({})

export const ActicleProvier = ({ children }) => {
  const [dataProduct,setDataProduct] = useState([])
  const [dataUser,setDataUser] = useState([])
  const sum = (prices) => {
    let total = 0;
    prices.forEach((price) => {
      total += price;
    });
    return total;
  };
  // boxModal
  return <ActicleContext.Provider value={
    {sum,setDataProduct,dataProduct,dataUser,setDataUser
    }
  }>
    {children}
  </ActicleContext.Provider>
}