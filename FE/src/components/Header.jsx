import { useEffect, useState } from "react";
import "../assets/style/header.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const Header = () => {
  const url = "http://localhost:3000/imgSlide";
  const [backgroundImgs, setBackGroundImg] = useState([]);
  const isHomePath = useLocation();
  const fetchBackground = async () => {
    return axios.get(url).then((res) => {
      setBackGroundImg(res.data);
    });
  };
  useEffect(() => {
    fetchBackground();
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const length = backgroundImgs.length;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  const getBackground = backgroundImgs.map((item) => item.img);

  // useEffect(() => {
  //   const slideInterval = setInterval(() => nextSlide(), 5000);
  //   const slideClearInterval = () => clearInterval(slideClearInterval);
  // }, [currentSlide]);
  return (
    <section
      className="header"
      style={
        isHomePath.pathname === "/"
          ? {
              backgroundImage: `url(${getBackground[currentSlide]})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100%",
              height: "100vh",
              backgroundAttachment: "fixed",
            }
          : null
      }
    >
      {isHomePath.pathname === "/" ? (
        <button className="slide-left slide-btn" onClick={prevSlide}>
          &lt;
        </button>
      ) : null}
      {isHomePath.pathname === "/" ? (
        <button className="slide-right slide-btn" onClick={nextSlide}>
          &gt;
        </button>
      ) : null}
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
            <button>
              <i className="uil uil-search"></i>
            </button>
            <button>
              <i className="uil uil-user"></i>
            </button>
            <button>
              <i className="uil uil-star"></i>
            </button>
            <button>
              <i className="uil uil-shopping-cart">
                <span className="cart-quantity">{/* quantity here */}10</span>
              </i>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
