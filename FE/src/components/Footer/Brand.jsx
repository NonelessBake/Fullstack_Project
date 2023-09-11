import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";
import "../../assets/style/brand.css";
const Brand = () => {
  const { brand } = useContext(ContextValue);
  return (
    <section className="brand">
      <div className="brand-container">
        {brand.map((item, index) => (
          <div key={index} className="brand-image">
            <Link>
              <img src={item.img}></img>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
