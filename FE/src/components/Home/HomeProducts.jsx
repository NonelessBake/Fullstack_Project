import "../../assets/style/homeProducts.css";
import { useContext } from "react";
import { ContextUpdate, ContextValue } from "../../contexts/ContextProvider";
import ProductItem from "../Product/ProductItem";
const HomeProducts = () => {
  const { showList, homeProductList } = useContext(ContextValue);
  const { onShowHomeProducts } = useContext(ContextUpdate);
  return (
    <section className="home-products">
      <div className="show-change">
        <button
          className={`show-btn ${
            showList === "Latest Products" ? "active-btn" : "deactive-btn"
          }`}
          onClick={() => onShowHomeProducts("Latest Products")}
        >
          <span className="highlight-show">Latest Products</span>
        </button>
        <button
          className={`show-btn ${
            showList === "Best Sellers" ? "active-btn" : "deactive-btn"
          }`}
          onClick={() => onShowHomeProducts("Best Sellers")}
        >
          <span className="highlight-show"> Best Sellers</span>
        </button>
        <button
          className={`show-btn ${
            showList === "Featured Products" ? "active-btn" : "deactive-btn"
          }`}
          onClick={() => onShowHomeProducts("Featured Products")}
        >
          <span className="highlight-show">Featured Products</span>
        </button>
      </div>
      <div className="show-home-products">
        {homeProductList.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default HomeProducts;
