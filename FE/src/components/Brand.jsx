import { useContext } from "react";
import { Context } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import "../assets/style/brand.css";
const Brand = () => {
  const { brandImages } = useContext(Context);
  return (
    <section className="brand">
      <div className="brand-container">
        {brandImages.map((item, index) => (
          <div key={index} className="brand-image">
            <Link>
              <img src={item}></img>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
