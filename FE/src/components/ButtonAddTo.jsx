import "../assets/style/buttonAddTo.css";
const ButtonAddTo = () => {
  return (
    <div className="btn-add-to">
      <button className="btn-add btn-add-to-cart">
        <i className="uil uil-shopping-cart"></i>
      </button>
      <button className="btn-add btn-add-to-wishlist">
        <i className="uil uil-star"></i>
      </button>
      <button className="btn-add btn-detail">
        <i className="uil uil-search"></i>
      </button>
    </div>
  );
};

export default ButtonAddTo;
