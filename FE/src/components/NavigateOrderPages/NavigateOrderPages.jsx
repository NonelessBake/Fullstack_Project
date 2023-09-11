import { useContext } from "react";
import { ContextValue } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

const NavigateOrderPages = () => {
  const { getPath } = useContext(ContextValue);
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}
    >
      <div className="show-change">
        <button
          onClick={() => navigate("/cart")}
          className={`show-btn ${
            getPath.pathname === "/cart" ? "active-btn" : "deactive-btn"
          }`}
        >
          <span className="highlight-show">SHOPPING CART</span>
        </button>
        <button
          onClick={() => navigate("/checkout")}
          className={`show-btn ${
            getPath.pathname === "/checkout" ? "active-btn" : "deactive-btn"
          }`}
        >
          <span className="highlight-show"> CHECKOUT</span>
        </button>
        <button
          onClick={() => navigate("/order-tracking")}
          className={`show-btn ${
            getPath.pathname === "/order-tracking"
              ? "active-btn"
              : "deactive-btn"
          }`}
        >
          <span className="highlight-show">ORDER TRACKING</span>
        </button>
      </div>
    </div>
  );
};

export default NavigateOrderPages;
