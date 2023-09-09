import { ProductList } from "../components";
import ShopTools from "../components/Product/ShopTools";
import "../assets/style/shop.css";
const Shop = () => {
  return (
    <div className="shop-container">
      <ShopTools />
      <ProductList />
    </div>
  );
};

export default Shop;
