import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/style/productItem.css";
import { ContextUpdate } from "../../contexts/ContextProvider";
import ButtonAddTo from "./ButtonAddTo";

const ProductItem = (newProps) => {
  const { formatLink, formatNumber } = useContext(ContextUpdate);
  const { product } = newProps;
  const { discount, id, img, name, price, tags } = product;
  return (
    <div className="product-item-container">
      <div className="product-item">
        <div className="product-item-img">
          <div className="img-swap-container">
            <div className="btn-container">
              <ButtonAddTo product={product} />
            </div>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={`/product/${formatLink(name)}`}
            >
              <div className="img-container">
                <img src={img[0]} alt={name} className="img-swap-1" />
                <img src={img[1]} alt={name} className="img-swap-2" />
              </div>
              {discount !== 0 ? (
                <span className="on-sale">
                  -{discount != 0 ? discount : null}%
                </span>
              ) : null}
              {tags.includes("Hot") ? (
                <div className="tags">
                  <span>{tags.includes("Hot") ? "Hot" : null}</span>
                </div>
              ) : null}
            </Link>
          </div>
        </div>
        <div className="product-item-detail">
          <h5>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={`/product/${formatLink(name)}`}
            >
              {name}
            </Link>
          </h5>
          <p>
            <span className={discount !== 0 ? "price-before" : "base-price"}>
              ${formatNumber(price)}
            </span>
            {discount !== 0 && (
              <span className="new-price">
                ${formatNumber(price * (1 - discount / 100))}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
