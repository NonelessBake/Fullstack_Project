import { useContext } from "react";
import "../assets/style/category.css";
import { Link } from "react-router-dom";
import { Context } from "../contexts/ContextProvider";
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Category = () => {
  const { slideCategory } = useContext(Context);
  return (
    <>
      <h1>Top Categories</h1>
      <div className="category">
        <Carousel
          responsive={responsive}
          infinite={true}
          itemClass="carousel-item-padding-15-px"
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
                  <Link to={`/category/${item.link}`}>{item.alt}</Link>
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
