import "../assets/style/homeProducts.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/ContextProvider";
import ButtonAddto from "./ButtonAddTo";
const HomeProducts = () => {
  const {
    showList,
    onShowHomeProducts,
    newList,
    formatLink,
    formatNumber,
    onHover,
    imgShow,
    isHovered,
  } = useContext(Context);
  return (
    <section className="product-section">
      <div className="show-change">
        <button
          className={`show-btn ${
            showList === "Latest Products" ? "active-btn" : "deactive-btn"
          }`}
          onClick={() => onShowHomeProducts("Latest Products")}
        >
          <span className="highlight-show">Latest Products</span>
        </button>
        <button
          className={`show-btn ${
            showList === "Best Sellers" ? "active-btn" : "deactive-btn"
          }`}
          onClick={() => onShowHomeProducts("Best Sellers")}
        >
          <span className="highlight-show"> Best Sellers</span>
        </button>
        <button
          className={`show-btn ${
            showList === "Featured Products" ? "active-btn" : "deactive-btn"
          }`}
          onClick={() => onShowHomeProducts("Featured Products")}
        >
          <span className="highlight-show">Featured Products</span>
        </button>
      </div>
      <div className="show-home-products">
        {newList.map((item) => (
          <div key={item.id} className="product-home-container">
            {item.img.length === 0 ? (
              <div>Loading...</div>
            ) : (
              <div className="product-home">
                <div className="product-home-img">
                  <Link to={`/shop/${formatLink(item.name)}`}>
                    <div
                      className="img-swap-container"
                      onMouseOver={() => onHover(item.id, true)}
                      onMouseOut={() => onHover(item.id, false)}
                    >
                      {imgShow === item.id ? (
                        isHovered ? (
                          <ButtonAddto />
                        ) : null
                      ) : null}
                      <img
                        src={item.img[0]}
                        alt={item.name}
                        className="img-swap-1"
                      />
                      <img
                        src={item.img[1]}
                        alt={item.name}
                        className="img-swap-2"
                      />
                      {item.discount != 0 ? (
                        <span className="on-sale">
                          <span>
                            -{item.discount != 0 ? item.discount : null}%
                          </span>
                        </span>
                      ) : null}
                      {item.tags.includes("Hot") ? (
                        <div className="tags">
                          <span>
                            {item.tags.includes("Hot") ? "Hot" : null}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </Link>
                </div>
                <div className="product-home-detail">
                  <h5>
                    <Link to={`/shop/${formatLink(item.name)}`}>
                      {item.name}
                    </Link>
                  </h5>
                  <p>
                    <span className="price-before">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="new-price">
                      ${formatNumber(item.price * (1 - item.discount / 100))}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProducts;
