import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";

const ShopTools = () => {
  const { categoryList } = useContext(ContextValue);
  return (
    <div className="filter-tool">
      <div className="filter-category">
        <div>CATEGORIES</div>
        {categoryList.map((category, index) => (
          <button className="category-btn" key={index}>
            <span className="type-category">{category[0]}</span>
            <span className="number-product-by-category">{category[1]}</span>
          </button>
        ))}
      </div>
      <div className="filter-price"></div>
    </div>
  );
};

export default ShopTools;
