/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const ContextValue = createContext();
export const ContextUpdate = createContext();
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
      setCart((prev) => [...prev]);
      setCartLocalStorage([...cart]);
    }
  };

  const checkMaxValue = (value, maxValue) => {
    if (value > maxValue) return maxValue;
    return value;
  };
  const onChangeQuantityItem = (value, carItem) => {
    console.log({ value, carItem });
    let index = cart.findIndex((item) => item.id === carItem.id);
    let newCart = [...cart];
    if (index !== -1) {
      let newItem = newCart[index];
      newItem.quantity =
        value?.length > 0
          ? checkMaxValue(Number(value), Number(carItem.status))
          : 1;
      setCart([...newCart]);
      setCartLocalStorage([...newCart]);
    }
  };

  const onIncreaseQuantityItem = (cartItem) => {
    if (cartItem.quantity === cartItem.status) return cartItem;
    else {
      cartItem.quantity++;
      setCart((prev) => [...prev]);
      setCartLocalStorage([...cart]);
    }
  };
  const onDecreaseQuantityItem = (cartItem) => {
    if (cartItem.quantity < 2) {
      cartItem.quantity = 1;
      setCart((prev) => [...prev]);
      setCartLocalStorage([...cart]);
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
    totalCartQuantity += cartItem.quantity;
    totalCartPrice +=
      cartItem.price * (1 - cartItem.discount / 100) * cartItem.quantity;
  });
  totalCartPrice = totalCartPrice?.toFixed(2);
  let isCartEmpty = true;
  cart.length === 0 ? (isCartEmpty = true) : (isCartEmpty = false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Shoping Cart

  // HomeProduct Component
  const [showList, setShowList] = useState("Latest Products");
  const homeProductList =
    showList !== "Latest Products"
      ? showList === "Best Sellers"
        ? productList.slice(10, 17).map((item) => item)
        : productList.slice(20, 26).map((item) => item)
      : productList.slice(0, 10).map((item) => item);

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
    <ContextValue.Provider
      value={{
        productList,
        isHomePath,
        backgroundImgs,
        brand,
        bannerImages,
        showList,
        homeProductList,
        slideCategory,
        collection,
        windowSize,
        totalCartPrice,
        totalCartQuantity,
        cart,
        isCartEmpty,
        show,
      }}
    >
      <ContextUpdate.Provider
        value={{
          activeClass,
          onShowHomeProducts,
          formatNumber,
          formatLink,
          onAddToCart,
          onIncreaseQuantityItem,
          onDecreaseQuantityItem,
          onRemoveCartItem,
          onChangeQuantityItem,
          handleClose,
          handleShow,
        }}
      >
        {children}
      </ContextUpdate.Provider>
    </ContextValue.Provider>
  );
};

export default ContextProvider;
