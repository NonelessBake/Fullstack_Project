import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import "../../assets/style/headerSlide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
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
    items: 1,
  },
};

const HeaderSlide = () => {
  const { backgroundImgs } = useContext(ContextValue);

  return (
    <span className="z-index-home">
      <Carousel
        infinite={true}
        responsive={responsive}
        autoPlaySpeed={4000}
        autoPlay={true}
      >
        {backgroundImgs.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={index} className="image-header-slide" />
          </div>
        ))}
      </Carousel>
    </span>
  );
};

export default HeaderSlide;
