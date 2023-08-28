import { useEffect, useState } from "react";
import "../assets/style/home.css";
import axios from "axios";
import Category from "../components/Category";
import { Link, NavLink } from "react-router-dom";
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
