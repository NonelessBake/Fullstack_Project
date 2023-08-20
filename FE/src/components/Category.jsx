import { useState } from "react";
import "../assets/style/category.css";
import { Link } from "react-router-dom";
const Category = () => {
  const slideCategory = [
    {
      link: "bath-room",
      alt: "Bath Room",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/cate-img-2.jpg.webp",
    },
    {
      link: "lightning",
      alt: "Lightning",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/Image-116.jpg.webp",
    },
    {
      link: "living-room",
      alt: "Living Room",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/cate-img-1.jpg.webp",
    },
    {
      link: "office",
      alt: "Office",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/cate-img-5.jpg.webp",
    },
    {
      link: "table",
      alt: "Table",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/cate-img-3.jpg.webp",
    },
    {
      link: "seating",
      alt: "Seating",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/cate-img-4.jpg.webp",
    },
  ];

  const prevSlide = () => {};
  const nextSlide = () => {};

  return (
    <div className="category">
      <button className="carousel-slide-prev carousel-slide-btn">&lt;</button>
      {slideCategory.map((item, index) => (
        <div key={index} className="slide-image">
          <Link to="/">
            <img src={item.src} alt={item.alt} className="slide"></img>
          </Link>
          <h6>
            <Link to={`/category/${item.link}`}>{item.alt}</Link>
          </h6>
        </div>
      ))}
      <button className="carousel-slide-next carousel-slide-btn">&gt;</button>
    </div>
  );
};

export default Category;
