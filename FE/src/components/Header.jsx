import { useEffect, useState } from "react";
import "../assets/style/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header">
        <header className="header-container">
          <div className="top-bar-container">
            <div className="top-bar-left">
              <div className="store-location">
                <Link to="/contact">
                  <div className="">
                    <i className="uil uil-location-point"></i>
                    <span>Store Location</span>
                  </div>
                </Link>
              </div>
              <div className="support-email">
                <Link to="/contact">
                  <div>
                    <i className="uil uil-envelope"></i>
                    <span>support@funio.com</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" top-bar-right">
              <div className="gift-cards">
                <Link to="/404">Gift Cards</Link>
              </div>
              <div className="faqs">
                <Link to="/faqs">FAQs</Link>
              </div>
            </div>
          </div>
          <div className="nav-bar-container row">
            <div className="nav-bar-left col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="logo-container">
                <Link to="/">
                  <img
                    className="funio-logo"
                    src="https://wpbingosite.com/wordpress/funio/wp-content/uploads/2020/12/logo2.png"
                    alt=""
                  />
                </Link>
              </div>
              <ul className="nav-link-item">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>
                  <Link to="/">Product</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Page</Link>
                </li>
              </ul>
            </div>
            <div className="nav-bar-right col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <i className="uil uil-search"></i>
              <i className="uil uil-user"></i>
              <i className="uil uil-star"></i>
              <i className="uil uil-shopping-cart">
                <span className="cart-quantity">{/* quantity here */}10</span>
              </i>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
