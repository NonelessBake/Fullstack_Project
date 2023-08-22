
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/style/footer.css";
import axios from "axios";
const ProductItem = () => {
  const url = "http://localhost:3000/products";
  const [productItem, setProductItem] = useState([]);
  const fetchProductItem = async () => {
    return axios.get(url).then((res) => {
      setProductItem(res.data);
    });
  };
  useEffect(() => {
    fetchProductItem();
  }, []);
  const [showImg, setShowImg] = useState(0);
  const imgOnMouseEvent = (id) => {
    setShowImg(id);
  };

  return (
    <div>
      <div className="show-home-products">
        {productItem.map((item) => (
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

                <Link to={`/shop/${(item.name)}`}>
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
                  <Link to={`/shop${(item.name)}`}>{item.name}</Link>
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
  )
}

export default ProductItem
