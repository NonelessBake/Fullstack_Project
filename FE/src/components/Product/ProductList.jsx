import { useContext } from "react";
import ProductItem from "./ProductItem";
import { ContextValue } from "../../contexts/ContextProvider";
import "../../assets/style/productList.css";
function ProductList() {
  const { filteredList } = useContext(ContextValue);

  return (
    <div className="shop-products">
      {filteredList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
