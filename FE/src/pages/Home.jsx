import { useEffect, useState } from "react";
import "../assets/style/home.css";
import axios from "axios";
import Category from "../components/Category";
import { Link, NavLink } from "react-router-dom";
const Home = () => {
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
  console.log(imagesBanner);
  return (
    <section className="home">
      <h1>Top Categories</h1>
      <Category />
      <section className="banner-direct">
        <div className="banner-container-home">
          <div className="content-banner">
            <p>FROM LOVESEATS TO SECTIONALS.</p>
            <h1>Comfy Lounging</h1>
            <p className="banner-link-to">
              <NavLink>Explore Collection</NavLink>
            </p>
          </div>
          <img
            src={imagesBanner[0]}
            alt={imagesBanner[0]}
            className="banner-img"
          />
        </div>
        <div className="banner-container-home">
          <div className="content-banner">
            <p>SALE UP TO 20% OFF ALL ITEMS</p>
            <h1>Scandinavian Style</h1>
            <p className="banner-link-to">
              <NavLink>Explore Collection</NavLink>
            </p>
          </div>
          <img
            src={imagesBanner[1]}
            alt={imagesBanner[1]}
            className="banner-img"
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
