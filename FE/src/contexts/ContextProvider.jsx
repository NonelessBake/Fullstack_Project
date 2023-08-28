import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // Header Component
  const activeClass = (params) => {
    return params.isActive ? "active-item" : "";
  };
  const [backgroundImgs, setBackGroundImg] = useState([]);
  const isHomePath = useLocation();
  const fetchBackground = async () => {
    return axios.get("http://localhost:3000/headerSlide").then((res) => {
      setBackGroundImg(res.data);
    });
  };
  useEffect(() => {
    fetchBackground();
  }, []);

  // Header Component

  // Bannner
  const [banner, setBanner] = useState([]);
  const fetchBanner = async () => {
    return axios.get("http://localhost:3000/imagesBanner").then((res) => {
      setBanner(res.data);
    });
  };
  useEffect(() => {
    fetchBanner();
  }, []);
  const bannerImages = banner.map((item) => item.img);
  // Banner

  // Category Component
  const slideCategory = [
    {
      link: "bath-room",
      alt: "Bath Room",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/cate-img-2.jpg.webp",
    },
    {
      link: "lightning",
      alt: "Lightning",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/Image-116.jpg.webp",
    },
    {
      link: "living-room",
      alt: "Living Room",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/cate-img-1.jpg.webp",
    },
    {
      link: "office",
      alt: "Office",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/cate-img-5.jpg.webp",
    },
    {
      link: "table",
      alt: "Table",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/cate-img-3.jpg.webp",
    },
    {
      link: "seating",
      alt: "Seating",
      src: "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/cate-img-4.jpg.webp",
    },
  ];

  // Category Component
  // ButtonAddTo Component
  /* Logic here */
  // ButtonAddTo Component

  // HomeProduct Component
  const [homeProducts, setHomeProducts] = useState([]);
  const [showList, setShowList] = useState("Latest Products");
  const fetchProducts = async () => {
    return axios
      .get(`http://localhost:3000/products`)
      .then((res) => setHomeProducts(res.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const onShowHomeProducts = (show) => {
    setShowList(show);
  };
  const newList =
    showList !== "Latest Products"
      ? showList === "Best Sellers"
        ? homeProducts.slice(10, 17).map((item) => item)
        : homeProducts.slice(20, 26).map((item) => item)
      : homeProducts.slice(0, 10).map((item) => item);

  const [imgShow, setImgShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const onHover = (id, isHovered) => {
    setImgShow(id);
    setIsHovered(isHovered);
  };

  const formatLink = (string) => {
    return string.toLowerCase().replaceAll(" ", "-");
  };
  const formatNumber = (price) => price.toFixed(2);
  // HomeProduct Component

  // Footer Component
  const [brand, setBrand] = useState([]);
  const fetchBrand = async () => {
    return axios.get("http://localhost:3000/brand").then((res) => {
      setBrand(res.data);
    });
  };
  useEffect(() => {
    fetchBrand();
  }, []);
  const brandImages = brand.map((item) => item.img);
  // Footer Component
  return (
    <Context.Provider
      value={{
        activeClass,
        isHomePath,
        backgroundImgs,
        brandImages,
        bannerImages,
        showList,
        onShowHomeProducts,
        newList,
        formatLink,
        formatNumber,
        onHover,
        imgShow,
        isHovered,
        slideCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
