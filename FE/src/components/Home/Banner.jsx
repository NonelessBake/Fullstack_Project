import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import "../../assets/style/banner.css";
const Banner = () => {
  const { bannerImgs } = useContext(ContextValue);
  return (
    <section className="banner-direct">
      <div className="banner-direct-container">
        {bannerImgs.map((item, index) => (
          <div key={index} className="banner-container-home">
            <div className="banner-highlight">
              <div className="content-banner ">
                <p>
                  {index === 0
                    ? "FROM LOVESEATS TO SECTIONALS."
                    : "SALE UP TO 20% OFF ALL ITEMS"}
                </p>
                <h1>Comfy Lounging</h1>
                <p className="banner-link-to">
                  <NavLink>Explore Collection</NavLink>
                </p>
              </div>
              <div className="banner-img">
                <Link>
                  <img src={item.img} alt={index} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
