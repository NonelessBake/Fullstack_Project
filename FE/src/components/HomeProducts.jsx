import { useEffect, useState } from "react";
import "../assets/style/homeProducts.css";
import { Link } from "react-router-dom";
import axios from "axios";
const HomeProducts = () => {
  const [homeProducts, setHomeProducts] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [showList, setShowList] = useState("Latest Products");
  const fetchProducts = async () => {
    return axios
      .get(`http://localhost:3000/products`)
      .then((res) => setHomeProducts(res.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const onShowHomeProducts = (show) => {
    setShowList(show);
  };
  const newList =
    showList !== "Latest Products"
      ? showList === "Best Sellers"
        ? homeProducts.slice(10, 17).map((item) => item)
        : homeProducts.slice(20, 26).map((item) => item)
      : homeProducts.slice(0, 10).map((item) => item);
  const formatLink = (string) => {
    return string.toLowerCase().replaceAll(" ", "-");
  };
  const [showImg, setShowImg] = useState(0);
  const imgOnMouseEvent = (id) => {
    setShowImg(id);
  };

  return (
    <div className="product-section">
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
            <div className="product-home">
              <div className="product-home-img">
                {item.discount != 0 ? (
                  <span className="on-sale">
                    <span>-{item.discount != 0 ? item.discount : null}%</span>
                  </span>
                ) : null}
                {item.tags.includes("Hot") ? (
                  <span className="tags">
                    <span>{item.tags.includes("Hot") ? "Hot" : null}</span>
                  </span>
                ) : null}

                <Link to={`/shop/${formatLink(item.name)}`}>
                  <img
                    className={showImg === item.id ? "fade-out" : "fade-in"}
                    onMouseOver={() => imgOnMouseEvent(item.id)}
                    onMouseOut={() => imgOnMouseEvent(0)}
                    src={item.img[showImg === item.id ? 1 : 0]}
                    alt={item.name}
                  />
                </Link>
              </div>
              <div className="product-home-detail">
                <h5>
                  <Link to={`/shop/${formatLink(item.name)}`}>{item.name}</Link>
                </h5>
                <p>
                  <span className="price-before">${item.price.toFixed(2)}</span>
                  <span className="new-price">
                    $
                    {Math.round(item.price * (1 - item.discount / 100)).toFixed(
                      2
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
