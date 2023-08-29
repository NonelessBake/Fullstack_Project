import "../assets/style/home.css";
import Category from "../components/Category";
import HomeProducts from "../components/HomeProducts";
import Banner from "../components/Banner";
import ShopByStle from "../components/ShopByStle";
import Collection from "../components/Collection";
import SubcribeForm from "../components/SubcribeForm";
const Home = () => {
  return (
    <section className="home">
      <Category />
      <Banner />
      <HomeProducts />
      <Collection />
      <ShopByStle />
      <SubcribeForm />
    </section>
  );
};

export default Home;
