import { useContext } from "react";
import { ContextUpdate, ContextValue } from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";
import "../../assets/style/cartPopup.css";
import { BsBagX } from "react-icons/bs";
import "../../assets/style/cartEmpty.css";
const CartPopup = () => {
  const { isCartEmpty, cart, totalCartPrice } = useContext(ContextValue);
  const { onRemoveCartItem, handleClose, formatNumber } =
    useContext(ContextUpdate);

  const CartEmpty = () => {
    return (
      <div className="cart-empty">
        <BsBagX size={70} />
        <h4 className="empty-cart-popup">No products in the cart.</h4>
        <Link to="/shop" onClick={handleClose}>
          Go to the shop
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="cart-popup-container">
        {isCartEmpty ? (
          <CartEmpty />
        ) : (
          <>
            <div className="cart-popup">
              {cart.map((cartItem) => (
                <div key={cartItem.id} className="cart-item-container">
                  <div className="cart-item-info-container">
                    <div className="cart-item-img-container">
                      <img
                        src={cartItem.img[0]}
                        alt=""
                        className="cart-item-img"
                      />
                    </div>
                    <div className="cart-item-info">
                      <div>{cartItem.name}</div>
                      <div>Quantity: {cartItem.quantity} </div>
                      <div>
                        $
                        {formatNumber(
                          cartItem.price *
                            (1 - cartItem.discount / 100) *
                            cartItem.quantity
                        )}
                      </div>
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
            <div className="link-cart-container">
              <div className="price-and-cart-link">
                <div className="cart-total-price">
                  <p>Total:</p>
                  <p>${totalCartPrice}</p>
                </div>
                <div className="direct-cart-link">
                  <Link to="/cart" onClick={handleClose}>
                    VIEW CART
                  </Link>
                  <Link to="/checkout" onClick={handleClose}>
                    CHECKOUT
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPopup;
