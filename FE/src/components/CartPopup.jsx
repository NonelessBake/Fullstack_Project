import React from "react";
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
                <img src={cartItem.img[0]} alt="" className="cart-item-img" />

                <div className="cart-item-info">
                  <p>{cartItem.name}</p>
                  <p>Quantity: {cartItem.quantity} </p>
                  <p>${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
                </div>
              </div>
              <div className="cart-item-remove">
                <button onClick={() => onRemoveCartItem(cartItem)}>X</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total-price">
        <p>Total:</p>
        <p>${totalCartPrice}</p>
      </div>
      <div>
        <Link to="/cart">
          <button>VIEW CART </button>
        </Link>
        <Link>
          <button>CHECK OUT</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPopup;
