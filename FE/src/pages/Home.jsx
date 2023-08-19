import { Link } from "react-router-dom";
import "../assets/style/home.css";
import Category from "../components/Category";
const Home = () => {
  return (
    <section className="home">
      <div className="slide">
        <button className="change-slide slide-left"> &lt; </button>
        <img
          className="img-slide"
          src="https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-6.jpg.webp"
          alt=""
        />
        <button className="change-slide slide-right"> &gt;</button>
      </div>
      <div>asdasd</div>
    </section>
  );
};

export default Home;
