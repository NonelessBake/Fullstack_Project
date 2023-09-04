import { NavLink } from "react-router-dom";

const Payment = () => {
  return (
    <section className="home-products">
      <div className="show-change">
        <button>
          <span className="highlight-show">
            <NavLink to="cart">Shopping Cart</NavLink>
          </span>
        </button>
        <button>
          <span className="highlight-show">
            <NavLink to="checkout">Checkout</NavLink>
          </span>
        </button>
        <button>
          <span className="highlight-show">
            <NavLink to="order-tracking">Order Tracking</NavLink>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Payment;
