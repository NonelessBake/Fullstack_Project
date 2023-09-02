import { useContext } from "react";
import { Context } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import "../assets/style/cartPopup.css";
const CartPopup = () => {
  const { isCartEmpty, cart, onRemoveCartItem, totalCartPrice } =
    useContext(Context);
  const CartEmpty = () => {
    return (
      <div>
        <h4>No products in the cart.</h4>
        <Link to="/shop">
          Go to the shop <span></span>
        </Link>
      </div>
    );
  };

  return (
    <div className="cart-popup-container">
      {isCartEmpty ? (
        <CartEmpty />
      ) : (
        <div className="cart-popup">
          {cart.map((cartItem) => (
            <div key={cartItem.id} className="cart-item-container">
              <div className="cart-item-info-container">
                <div className="cart-item-img-container">
                  <img src={cartItem.img[0]} alt="" className="cart-item-img" />
                </div>
                <div className="cart-item-info">
                  <div>{cartItem.name}</div>
                  <div>Quantity: {cartItem.quantity} </div>
                  <div>${(cartItem.price * cartItem.quantity).toFixed(2)}</div>
                </div>
              </div>
              <div className="remove-btn-container">
                <button
                  className="remove-item-btn"
                  onClick={() => onRemoveCartItem(cartItem)}
                >
                  x
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="link-cart-container">
        <div className="price-and-cart-link">
          <div className="cart-total-price">
            <p>Total:</p>
            <p>${totalCartPrice}</p>
          </div>
          <div className="direct-cart-link">
            <Link>VIEW CART</Link>
            <Link>CHECKOUT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
