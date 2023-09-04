import { Link } from "react-router-dom";
import "../../assets/style/termAndPayment.css";
const TermAndPayment = () => {
  return (
    <section className="privacy-payment">
      <div className="privacy">
        <div className="name">© 2021 Funio Furniture Store</div>
        <ul className="privacy-link">
          <li>
            <Link>PRIVACY</Link>
          </li>
          <li>
            <Link>TERMS</Link>
          </li>
          <li>
            <Link>*PROMO T&CS APPLY (VIEW HERE)</Link>
          </li>
        </ul>
      </div>
      <div className="payment">
        <div>
          <img
            src="https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/06/paymet.png.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default TermAndPayment;
