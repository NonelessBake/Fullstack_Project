import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // Format Function
  const formatLink = (string) => {
    return string.toLowerCase().replaceAll(" ", "-");
  };
  const formatNumber = (price) => price.toFixed(2);
  // Format Function

  // Header Component
  const isHomePath = useLocation();
  const activeClass = (params) => {
    return params.isActive ? "active-item" : "";
  };
  const [backgroundImgs, setBackGroundImg] = useState([]);
  const fetchBackground = async () => {
    return axios.get("http://localhost:3000/headerSlide").then((res) => {
      setBackGroundImg(res.data);
    });
  };

  // Header Component

  // Bannner
  const [banner, setBanner] = useState([]);
  const fetchBanner = async () => {
    return axios.get("http://localhost:3000/imagesBanner").then((res) => {
      setBanner(res.data);
    });
  };

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

  // Products Fetch API
  const [productList, setProductList] = useState([]);
  const fetchProducts = async () => {
    return axios
      .get(`http://localhost:3000/products`)
      .then((res) => setProductList(res.data));
  };

  // Products Fetch API

  // Shoping Cart
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const setCartLocalStorage = (cartList) => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  };

  const onAddToCart = (product) => {
    if (!cart.includes(product)) {
      product.quantity = 1;
      setCart((prev) => [...prev, product]);
      setCartLocalStorage([...cart, product]);
    } else {
      product.quantity++;
      setCartLocalStorage([...cart]);
    }
  };

  const onIncreaseQuantityItem = (cartItem) => {
    cartItem.quantity++;
    setCart((prev) => [...prev]);
    setCartLocalStorage([...cart]);
  };

  const onDecreaseQuantityItem = (cartItem) => {
    if (cartItem.quantity < 2) {
      setCart((prev) => prev.filter((item) => item.id !== cartItem.id));
      setCartLocalStorage(cart.filter((item) => item !== cartItem));
    } else {
      cartItem.quantity--;
      setCart((prev) => [...prev]);
      setCartLocalStorage([...cart]);
    }
  };

  const onRemoveCartItem = (cartItem) => {
    setCart((prev) => prev.filter((item) => item !== cartItem));
    setCartLocalStorage(cart.filter((item) => item !== cartItem));
  };

  let totalCartQuantity = null;
  let totalCartPrice = null;

  cart.forEach((cartItem) => {
    totalCartPrice += cartItem.price * (1 - cartItem.discount / 100);
    totalCartQuantity += cartItem.quantity;
  });

  totalCartPrice = totalCartPrice?.toFixed(2);

  // const [inputQuantity, setInputQuantity] = useState();
  // const handleChangeQuantity = (e) =>{
  //   setInputQuantity()
  // }

  // Shoping Cart

  // HomeProduct Component
  const [showList, setShowList] = useState("Latest Products");

  const homeProductList =
    showList !== "Latest Products"
      ? showList === "Best Sellers"
        ? productList.slice(10, 17).map((item) => item)
        : productList.slice(20, 26).map((item) => item)
      : productList.slice(0, 10).map((item) => item);

  const [imgShow, setImgShow] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const onHover = (id, isHovered) => {
    setImgShow(id);
    setIsHovered(isHovered);
  };

  const onShowHomeProducts = (show) => {
    setShowList(show);
  };
  // HomeProduct Component

  // Collection Component
  const [collection, setCollection] = useState([]);
  const fetchCollection = async () => {
    return await axios.get("http://localhost:3000/imgSlide").then((res) => {
      setCollection(res.data);
    });
  };

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  // Collection Component

  // Footer Component
  const [brand, setBrand] = useState([]);
  const fetchBrand = async () => {
    return axios.get("http://localhost:3000/brand").then((res) => {
      setBrand(res.data);
    });
  };

  useEffect(() => {
    fetchBackground();
    fetchBanner(), fetchProducts();
    fetchCollection();
    fetchBrand();
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Footer Component
  return (
    <Context.Provider
      value={{
        productList,
        activeClass,
        isHomePath,
        backgroundImgs,
        brand,
        bannerImages,
        showList,
        onShowHomeProducts,
        homeProductList,
        formatLink,
        formatNumber,
        onHover,
        imgShow,
        isHovered,
        slideCategory,
        collection,
        windowSize,
        onAddToCart,
        onIncreaseQuantityItem,
        onDecreaseQuantityItem,
        onRemoveCartItem,
        totalCartPrice,
        totalCartQuantity,
        cart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
