import { useContext, useState } from "react";
import { Context } from "../contexts/ContextProvider";
import "../assets/style/collection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const responsiveCollection = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    deviceType: "superLargeDesktop",
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    deviceType: "desktop",
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    deviceType: "tablet",
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    deviceType: "mobile",
  },
};
const ButtonGroup = ({ next, previous, onPrevSlide, onNextSlide }) => {
  return (
    <div className="carousel-button-group">
      <button
        className="change-slide-btn prev-button"
        onClick={() => {
          onPrevSlide();
          previous();
        }}
      >
        <BsArrowLeft />
      </button>
      <button
        onClick={() => {
          onNextSlide();
          next();
        }}
        className="change-slide-btn next-button"
      >
        <BsArrowRight />
      </button>
    </div>
  );
};
const Collection = () => {
  const { collection, windowSize } = useContext(Context);
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = collection.length - 1;
  const minIndex = 0;

  const onPrevSlide = () => {
    if (activeIndex <= minIndex) setActiveIndex(maxIndex);
    else setActiveIndex(activeIndex - 1);
  };
  const onNextSlide = () => {
    if (activeIndex >= maxIndex) setActiveIndex(minIndex);
    else setActiveIndex(activeIndex + 1);
  };

  return (
    <section className="collection">
      <h2>Collection</h2>
      <div className="collection-container">
        <Carousel
          ssr={true}
          containerClass="carousel-container"
          arrows={false}
          customButtonGroup={
            <ButtonGroup onPrevSlide={onPrevSlide} onNextSlide={onNextSlide} />
          }
          draggable={false}
          centerMode={windowSize.innerWidth < 1024 ? false : true}
          responsive={responsiveCollection}
          itemClass="carousel-item-padding-20-px"
          infinite={true}
        >
          {collection.map((item, index) => (
            <div key={item.id} className="collection-item">
              <div className="collection-image-container">
                <Link>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="collection-image"
                  />
                </Link>
                {index === activeIndex ? (
                  <div className="collection-title-container  ">
                    <div className="collection-title">
                      <h3>{item.title}</h3>
                      <Link>
                        <button className="shop-collection-btn">
                          SHOP COLLECTION
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Collection;
