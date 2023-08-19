import { Link } from "react-router-dom";
import "../assets/style/home.css";
import Category from "../components/Category";
const Home = () => {
  const imgSlide = [
    {
      id: 1,
      img: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-4.jpg.webp",
    },
    {
      id: 2,
      img: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-5.jpg.webp",
    },
    {
      id: 3,
      img: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2021/01/img5-3.jpg.webp",
    },
    {
      id: 4,
      img: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-6.jpg.webp",
    },
    {
      id: 5,
      img: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-7.jpg.webp",
    },
    {
      id: 6,
      img: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-8.jpg.webp",
    },
  ];
  const imagesBanner = [
    {
      id: 1,
      img: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2021/01/img5-1.jpg.webp",
    },
    {
      id: 2,
      img: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2021/01/img5-2.jpg.webp",
    },
  ];
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
