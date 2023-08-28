import "../assets/style/home.css";
import Category from "../components/Category";
import HomeProducts from "../components/HomeProducts";
import Banner from "../components/Banner";
import ShopByStle from "../components/ShopByStle";
const Home = () => {
  return (
    <section className="home">
      <Category />
      <Banner />
      <ShopByStle />
      <HomeProducts />
      <section></section>
    </section>
  );
};

export default Home;
