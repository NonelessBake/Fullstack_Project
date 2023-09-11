import { useContext } from "react";
import "../../assets/style/category.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { responsiveCategory } from "../../CarouselResponsive/CarouselRes";

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
  return (
    <>
      <div className="category">
        <h2>Top Categories</h2>
        <Carousel
          responsive={responsiveCategory}
          infinite={true}
          itemClass="carousel-item-padding-15-px"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          draggable={true}
        >
          {slideCategory.map((item, index) => (
            <div className="slide-category-container" key={index}>
              <div className="slide">
                <div className="scale-container">
                  <div className="scale-hover">
                    <Link to="/">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="slide"
                      ></img>
                    </Link>
                  </div>
                </div>
                <h6>
                  <Link to={`/category/${item.link}`}>
                    {item.alt.toUpperCase()}
                  </Link>
                </h6>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Category;
