import { Link } from "react-router-dom";
import "../assets/style/footer.css";
import { useContext } from "react";
import { Context } from "../contexts/ContextProvider";

const Footer = () => {
  const { bannerImages } = useContext(Context);
  return (
    <footer className="footer">
      <section className="banner">
        <div className="banner-container">
          {bannerImages.map((item, index) => (
            <div key={index} className="banner-image">
              <Link>
                <img src={item}></img>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="social-link-container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/logo.png.webp"
            alt=""
          />
        </div>
        <ul className="social-link">
          <li className="twitter link">
            <Link>
              <i className="uil uil-twitter"></i>
            </Link>
          </li>
          <li className="instagram link">
            <Link>
              <i className="uil uil-instagram"></i>
            </Link>
          </li>
          <li className="facebook link">
            <Link>
              <i className="uil uil-facebook-f"></i>
            </Link>
          </li>
          <li className="youtube link">
            <Link>
              <i className="uil uil-youtube"></i>
            </Link>
          </li>
        </ul>
      </section>
      <section className="link-container">
        <div className="">
          <h2>GET HELP</h2>
          <ul className="fast-link">
            <li>
              <Link to="/">Contact & FAQ</Link>
            </li>
            <li>
              <Link to="/">Track Your Order</Link>
            </li>
            <li>
              <Link to="/">Shipping & Delivery</Link>
            </li>
            <li>
              <Link to="/">Visit Brisbane Studio</Link>
            </li>
            <li>
              <Link to="/">Interest Free Finance</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>SERVICES</h2>
          <ul className="fast-link">
            <li>
              <Link to="/">Assembly Guides</Link>
            </li>
            <li>
              <Link to="/">Furniture Packages & Fitouts</Link>
            </li>
            <li>
              <Link to="/">Trade Programme</Link>
            </li>
            <li>
              <Link to="/">Sale</Link>
            </li>
            <li>
              <Link to="/">New Designs</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>CONNECT</h2>
          <ul className="fast-link">
            <li>
              <Link to="/">Twiter</Link>
            </li>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">Pinterest</Link>
            </li>
            <li>
              <Link to="/">Jobs</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>CATEGORIES</h2>
          <ul className="fast-link">
            <li>
              <Link to="/">Armchairs</Link>
            </li>
            <li>
              <Link to="/">Bath Room</Link>
            </li>
            <li>
              <Link to="/">Dining Chairs</Link>
            </li>
            <li>
              <Link to="/">Dining Tables</Link>
            </li>
            <li>
              <Link to="/">Living Room</Link>
            </li>
          </ul>
        </div>
      </section>
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
    </footer>
  );
};

export default Footer;
