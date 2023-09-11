import { useContext } from "react";
import "../../assets/style/buttonAddTo.css";
import { ContextUpdate } from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";
const ButtonAddTo = (newProps) => {
  const { product } = newProps;
  const { onAddToCart } = useContext(ContextUpdate);
  return (
    <div className="btn-add-to">
      <button
        onClick={() => onAddToCart(product)}
        className="btn-add btn-add-to-cart"
      >
        <i className="uil uil-shopping-cart"></i>
      </button>
      <button className="btn-add btn-add-to-wishlist">
        <i className="uil uil-star"></i>
      </button>
      <Link to="" className="btn-add">
        <i className="uil uil-search"></i>
      </Link>
    </div>
  );
};

export default ButtonAddTo;
