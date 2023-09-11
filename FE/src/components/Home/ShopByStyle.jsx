import { Link } from "react-router-dom";
import "../../assets/style/shopByStyle.css";
const ShopByStyle = () => {
  const shopStyleImgs = [
    {
      content: "Classic Traditional",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-6.jpg.webp",
    },
    {
      content: "Modern Boho",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-7.jpg.webp",
    },
    {
      content: "Retro Mid Century",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img5-8.jpg.webp",
    },
  ];

  return (
    <section className="shop-style">
      <h2>Shop by style</h2>
      <div className="shop-by-style ">
        {shopStyleImgs.map((item, index) => (
          <div key={index} className="shop-by-style-cotainer">
            <div className="bg-highlight bg-highlight-img ">
              <div className="shop-style-content-container">
                <h2 className="style-content">{item.content}</h2>
                <p className="hidden-link-to">
                  <Link>Explore now</Link>
                </p>
              </div>
              <div className="background-shop-style-bottom ">
                <Link>
                  <img src={item.src} alt={item.content} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByStyle;
