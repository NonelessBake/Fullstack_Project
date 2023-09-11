import Brand from "./Brand";
import SocialLink from "./SocialLink";
import FooterShortLink from "./FooterShortLink";
import TermAndPayment from "./TermAndPayment";
import "../../assets/style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Brand />
      <SocialLink />
      <FooterShortLink />
      <TermAndPayment />
    </footer>
  );
};

export default Footer;
