import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import "../../assets/style/headerSlide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveHomeSlide } from "../../CarouselResponsive/CarouselRes";

const HeaderSlide = () => {
  const { headerSlideImgs, windowSize } = useContext(ContextValue);

  return (
    <span className="z-index-home">
      <Carousel
        infinite={true}
        responsive={responsiveHomeSlide}
        autoPlaySpeed={4000}
        autoPlay={true}
        draggable={windowSize.innerWidth < 1024 ? true : false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        ssr={true}
        swipeable={true}
      >
        {headerSlideImgs.length > 0 &&
          headerSlideImgs.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={index} className="image-header-slide" />
            </div>
          ))}
      </Carousel>
    </span>
  );
};

export default HeaderSlide;
