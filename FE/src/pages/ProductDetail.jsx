import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextUpdate, ContextValue } from "../contexts/ContextProvider";
import "../assets/style/productDetail.css";
function ProductDetail() {
  const { productName } = useParams();
  const { productList, currentImageDetail, quantityAdd } =
    useContext(ContextValue);
  const {
    onIncreaseQuantityAdd,
    onDecreaseQuantityAdd,
    formatLink,
    formatNumber,
    onChangeImageDetail,
    onAddDetailItem,
    handleChangeQuantityAdd,
  } = useContext(ContextUpdate);
  const productDetailItem = productList?.filter(
    (product) => formatLink(product.name) === productName
  );

  return (
    <>
      {productDetailItem[0] ? (
        <>
          <div className="product-detail-container">
            <div className="grid-product-detail">
              <div className="detail-images">
                <div className="image-show">
                  <img
                    src={productDetailItem[0].img[currentImageDetail]}
                    alt=""
                  />
                </div>
                <div className="img-to-choose">
                  {productDetailItem[0].img.map((image, index) => (
                    <div
                      className={`choose ${
                        currentImageDetail === index && "current"
                      }`}
                      key={index}
                      onClick={() => (
                        window.scrollTo(0, 200), onChangeImageDetail(index)
                      )}
                    >
                      <img src={image} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="detail-infos">
                <h1>{productDetailItem[0].name}</h1>
                <div>
                  <span
                    className={`price ${
                      productDetailItem[0].discount === 0
                        ? "base-price"
                        : "before-price"
                    }`}
                  >
                    ${productDetailItem[0].price}
                  </span>

                  <span className="price new-price">
                    $
                    {formatNumber(
                      productDetailItem[0].price *
                        (1 - productDetailItem[0].discount / 100)
                    )}
                  </span>
                  <div className="discount">
                    {productDetailItem[0].discount}%
                  </div>
                  <hr />
                  <p className="detail-describe">
                    {productDetailItem[0].discription}
                  </p>
                  <hr />
                  <h3
                    className={`${
                      productDetailItem[0].status === 0 ? "out-stock" : "stock"
                    }`}
                  >
                    Stock: {productDetailItem[0].status}
                  </h3>
                  <div className="add-cart">
                    <div className="change-quant">
                      <button onClick={onIncreaseQuantityAdd}>+</button>
                      <input
                        type="text"
                        value={quantityAdd}
                        onChange={handleChangeQuantityAdd}
                      />
                      <button onClick={onDecreaseQuantityAdd}>-</button>
                    </div>
                    <div className="add-cart-btn">
                      <button
                        onClick={() => onAddDetailItem(productDetailItem[0])}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <dir>Product not exists</dir>
      )}
    </>
  );
}

export default ProductDetail;
