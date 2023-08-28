import { useContext, useState } from "react";
import { Context } from "../contexts/ContextProvider";
import "../assets/style/collection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsiveCollection = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const Collection = () => {
  const { collection } = useContext(Context);
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = collection.length - 1;
  const minIndex = 0;
  console.log(activeIndex);
  const onPrevSlide = () => {
    if (activeIndex <= minIndex) setActiveIndex(maxIndex);
    else setActiveIndex(activeIndex - 1);
  };
  const onNextSlide = () => {
    if (activeIndex >= maxIndex) setActiveIndex(minIndex);
    else setActiveIndex(activeIndex + 1);
  };
  const ButtonGroup = ({ next, previous, onPrevSlide, onNextSlide }) => {
    return (
      <div className="carousel-button-group">
        <button
          className="change-slide-btn prev-button"
          onClick={() => {
            previous();
            onPrevSlide();
          }}
        >
          <i className="uil uil-left-arrow-to-left" />
        </button>
        <button
          onClick={() => {
            next(), onNextSlide();
          }}
          className="change-slide-btn next-button"
        >
          <i className="uil uil-arrow-to-right"></i>
        </button>
      </div>
    );
  };
  return (
    <section className="collection">
      <h1>Collection</h1>
      <div className="collection-container">
        <Carousel
          autoPlay={false}
          arrows={false}
          customButtonGroup={
            <ButtonGroup onPrevSlide={onPrevSlide} onNextSlide={onNextSlide} />
          }
          draggable={false}
          centerMode={true}
          infinite={true}
          responsive={responsiveCollection}
          itemClass="carousel-item-padding-20-px"
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
              </div>
              {index === activeIndex ? (
                <div className="collection-title-container  ">
                  <div className="collection-title">
                    <h3>{item.title}</h3>
                    <Link>
                      <button className="shop-collection-btn">
                        <p>SHOP COLLECTION</p>
                      </button>
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Collection;
