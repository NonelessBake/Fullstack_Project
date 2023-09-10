import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import "../../assets/style/headerSlide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveHomeSlide } from "../CarouselResponsive/CarouselRes";

const HeaderSlide = () => {
  const { backgroundImgs } = useContext(ContextValue);

  return (
    <span className="z-index-home">
      <Carousel
        infinite={true}
        responsive={responsiveHomeSlide}
        autoPlaySpeed={4000}
        autoPlay={true}
      >
        {backgroundImgs.length > 0 &&
          backgroundImgs.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={index} className="image-header-slide" />
            </div>
          ))}
      </Carousel>
    </span>
  );
};

export default HeaderSlide;
