import { useContext } from "react";
import { Context } from "../contexts/ContextProvider";
import "../assets/style/collection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
const Collection = () => {
  const { collection } = useContext(Context);
  return (
    <section className="collection">
      <h1>Collection</h1>
      <div className="collection-container">
        <Carousel centerMode infinite={true} responsive={responsive}>
          {collection.map((item, id) => (
            <div key={id} className="collection-image-container">
              <img
                src={item.img}
                alt={item.title}
                className="collection-image"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Collection;
