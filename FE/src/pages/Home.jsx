import "../assets/style/home.css";
import Category from "../components/Home/Category";
import HomeProducts from "../components/Home/HomeProducts";
import Banner from "../components/Home/Banner";
import Collection from "../components/Home/Collection";
import SubcribeForm from "../components/Home/SubcribeForm";
import ShopByStyle from "../components/Home/ShopByStyle";
const Home = () => {
  return (
    <section className="home">
      <Category />
      <Banner />
      <HomeProducts />
      <Collection />
      <ShopByStyle />
      <SubcribeForm />
    </section>
  );
};

export default Home;
