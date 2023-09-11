/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ContextUpdate, ContextValue } from "../../contexts/ContextProvider";
import "../../assets/style/collection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { responsiveCollection } from "../../CarouselResponsive/CarouselRes";

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
        <BsArrowLeft />
      </button>
      <button
        onClick={() => {
          next();
          onNextSlide();
        }}
        className="change-slide-btn next-button"
      >
        <BsArrowRight />
      </button>
    </div>
  );
};
const Collection = () => {
  const { collection, windowSize, activeIndex } = useContext(ContextValue);
  const { onPrevSlide, onNextSlide } = useContext(ContextUpdate);
  return (
    <section className="collection">
      <h2>Collection</h2>
      <div className="collection-container">
        <Carousel
          arrows={false}
          containerClass="carousel-container"
          customButtonGroup={
            windowSize.innerWidth < 1024 ? null : (
              <ButtonGroup
                onPrevSlide={onPrevSlide}
                onNextSlide={onNextSlide}
              />
            )
          }
          draggable={windowSize.innerWidth < 1024 ? true : false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          centerMode={windowSize.innerWidth < 1024 ? false : true}
          responsive={responsiveCollection}
          itemClass="carousel-item-padding-20-px"
          infinite={true}
        >
          {collection.map((item) => (
            <div key={item.id} className="collection-item">
              <div className="collection-image-container">
                <Link>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="collection-image"
                  />
                </Link>
                {item.id === activeIndex && (
                  <div className="collection-title-container">
                    <div className="collection-title">
                      <h3>{item.title}</h3>
                      <Link>
                        <button className="shop-collection-btn">
                          SHOP COLLECTION
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Collection;
