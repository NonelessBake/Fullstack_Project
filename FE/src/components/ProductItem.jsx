import { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/style/productItem.css";
import { Context } from "../contexts/ContextProvider";
import ButtonAddTo from "./ButtonAddTo";
const ProductItem = (newProps) => {
  const { formatLink, formatNumber, onHover, imgShow, isHovered } =
    useContext(Context);
  const { product } = newProps;
  const { discount, id, img, name, price, tags } = product;
  console.log(product);
  return (
    <div className="product-item-container">
      {/* {img.length === 0 ? (
        <div>Loading...</div>
      ) : ( */}
      <div className="product-item">
        <div className="product-item-img">
          <Link to={`/shop/${formatLink(name)}`}>
            <div
              className="img-swap-container"
              onMouseOver={() => onHover(id, true)}
              onMouseOut={() => onHover(id, false)}
            >
              {imgShow === id ? isHovered ? <ButtonAddTo /> : null : null}
              <img src={img[0]} alt={name} className="img-swap-1" />
              <img src={img[1]} alt={name} className="img-swap-2" />
              {discount != 0 ? (
                <span className="on-sale">
                  -{discount != 0 ? discount : null}%
                </span>
              ) : null}
              {tags.includes("Hot") ? (
                <div className="tags">
                  <span>{tags.includes("Hot") ? "Hot" : null}</span>
                </div>
              ) : null}
            </div>
          </Link>
        </div>
        <div className="product-item-detail">
          <h5>
            <Link to={`/shop/${formatLink(name)}`}>{name}</Link>
          </h5>
          <p>
            <span className="price-before">${price.toFixed(2)}</span>
            <span className="new-price">
              ${formatNumber(price * (1 - discount / 100))}
            </span>
          </p>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default ProductItem;
