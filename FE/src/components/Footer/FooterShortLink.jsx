import { Link } from "react-router-dom";
import "../../assets/style/footerShortLink.css";
const FooterShortLink = () => {
  return (
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
  );
};

export default FooterShortLink;
