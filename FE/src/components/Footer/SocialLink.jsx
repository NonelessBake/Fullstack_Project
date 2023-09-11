import { Link } from "react-router-dom";
import "../../assets/style/socialLink.css";

const SocialLink = () => {
  return (
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
  );
};

export default SocialLink;
