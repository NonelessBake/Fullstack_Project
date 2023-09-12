import { useContext } from "react";
import ProductItem from "./ProductItem";
import { ContextUpdate, ContextValue } from "../../contexts/ContextProvider";
import "../../assets/style/productList.css";
function ProductList() {
  const { filterParams, filteredList } = useContext(ContextValue);
  const { handleSortChange } = useContext(ContextUpdate);

  return (
    <div className="product-list-container">
      <div style={{ padding: "15px 0" }}>
        <select
          value={filterParams.get("sort")}
          onChange={handleSortChange}
          style={{ padding: "5px 10px", cursor: "pointer" }}
        >
          <option hidden disabled selected>
            Short Price
          </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="shop-products">
        {filteredList.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
