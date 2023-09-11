import { ProductList } from "../components";
import ShopTools from "../components/Product/ShopTools";
import "../assets/style/shop.css";

const Shop = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: 50 }}>Shop</h1>
      <div className="shop-container">
        <ShopTools />
        <ProductList />
      </div>
    </>
  );
};

export default Shop;
