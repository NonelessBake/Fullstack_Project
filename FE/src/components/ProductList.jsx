import { useContext } from "react";
import ProductItem from "./ProductItem";
import { Context } from "../contexts/ContextProvider";
import "../assets/style/productList.css";
function ProductList() {
  const { productList } = useContext(Context);
  return (
    <div className="show-home-products">
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
