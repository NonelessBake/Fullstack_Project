import { useContext } from "react";
import ProductItem from "./ProductItem";
import { ContextUpdate, ContextValue } from "../../contexts/ContextProvider";
import "../../assets/style/productList.css";
function ProductList() {
  const { searchParams, filteredList } = useContext(ContextValue);
  const { handleSortChange } = useContext(ContextUpdate);

  searchParams.get("sort") === "asc"
    ? filteredList.sort((a, b) => {
        return (
          a.price * (1 - a.discount / 100) - b.price * (1 - b.discount / 100)
        );
      })
    : filteredList.sort((a, b) => {
        return (
          b.price * (1 - b.discount / 100) - a.price * (1 - a.discount / 100)
        );
      });

  return (
    <div className="product-list-container">
      <div style={{ padding: 15 }}>
        <select value={searchParams.get("sort")} onChange={handleSortChange}>
          <option hidden disabled selected value>
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
