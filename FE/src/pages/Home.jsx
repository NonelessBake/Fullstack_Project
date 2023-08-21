import { useEffect, useState } from "react";
import "../assets/style/home.css";
import axios from "axios";
import Category from "../components/Category";
import { Link, NavLink } from "react-router-dom";
import HomeProducts from "../components/HomeProducts";
const Home = () => {
  const shopStyleImgs = [
    {
      content: "Classic Traditional",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-6.jpg.webp",
    },
    {
      content: "Modern Boho",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-7.jpg.webp",
    },
    {
      content: "Retro Mid Century",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-8.jpg.webp",
    },
  ];
  const [banner, setBanner] = useState([]);
  const fetchBanner = async () => {
    return axios.get("http://localhost:3000/imagesBanner").then((res) => {
      setBanner(res.data);
    });
  };
  useEffect(() => {
    fetchBanner();
  }, []);
  const imagesBanner = banner.map((item) => item.img);

  return (
    <section className="home">
      <h1>Top Categories</h1>
      <Category />
      <section className="banner-direct">
        <div className="banner-direct-container">
          {imagesBanner.map((item, index) => (
            <div key={index} className="banner-container-home">
              <div className="banner-highlight">
                <div className="content-banner ">
                  <p>
                    {index === 0
                      ? "FROM LOVESEATS TO SECTIONALS."
                      : "SALE UP TO 20% OFF ALL ITEMS"}
                  </p>
                  <h1>Comfy Lounging</h1>
                  <p className="banner-link-to">
                    <NavLink>Explore Collection</NavLink>
                  </p>
                </div>
                <div className="banner-img">
                  <Link>
                    <img src={item} alt={item} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="shop-style">
        <h1>Shop by style</h1>
        <div className="shop-by-style ">
          {shopStyleImgs.map((item, index) => (
            <div key={index} className="shop-by-style-cotainer">
              <div className="bg-highlight bg-highlight-img ">
                <div className="shop-style-content-container">
                  <h2 className="style-content">{item.content}</h2>
                  <p className="hidden-link-to">
                    <Link>Explore now</Link>
                  </p>
                </div>
                <div className="background-shop-style-bottom ">
                  <Link>
                    <img src={item.src} alt={item.content} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <HomeProducts />
      </section>
    </section>
  );
};

export default Home;
