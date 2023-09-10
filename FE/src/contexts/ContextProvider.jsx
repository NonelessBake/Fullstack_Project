/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export const ContextValue = createContext();
export const ContextUpdate = createContext();
const ContextProvider = ({ children }) => {
  // Fetch API

  // Home slide
  const backgroundImgs = useFetch("http://localhost:3000/headerSlide");
  // Home Slide

  // Bannner
  const banner = useFetch("http://localhost:3000/imagesBanner");
  // Bannner

  // Products
  const productList = useFetch("http://localhost:3000/products");
  // Products

  // Country List
  const countryList = useFetch("http://localhost:3000/countries");
  // Country List

  // Order List
  const orderList = useFetch("http://localhost:3000/orderInfos");
  // Order List

  // Collection
  const collection = useFetch("http://localhost:3000/imgSlide");
  // Collection

  // Brand
  const brand = useFetch("http://localhost:3000/brand");
  // Brand

  // Fetch API

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
  // Header Component

  // Bannner
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

  // Products
  const productCategory = productList.map((product) => product.category);

  let counter = {};
  productCategory
    ?.join()
    .split(",")
    .forEach((name) => (counter[name] ? counter[name]++ : (counter[name] = 1)));
  const categoryList = Object.entries(counter);

  const [selectedCategory, setSelectedCategory] = useState();
  const onChooseCategory = (categoryType) => {
    setSelectedCategory(categoryType);
  };
  const [priceFilter, setpriceFilter] = useState([0, 400]);
  const priceRangeSelector = (e, newValue) => {
    setpriceFilter(newValue);
  };
  const filteredList = selectedCategory
    ? productList.filter(
        (product) =>
          product.category.includes(selectedCategory) &&
          product.price >= priceFilter[0] &&
          product.price <= priceFilter[1]
      )
    : productList.filter(
        (product) =>
          product.price >= priceFilter[0] && product.price <= priceFilter[1]
      );
  // Products

  // ButtonAddTo Component
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

  // ButtonAddTo Component

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

  // Checkout Components
  const onOrderSuccess = () => {
    totalCartQuantity = 0;
    setCart([]);
    localStorage.removeItem("cart");
  };
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };
  const orderDate = [
    monthNames[date.getMonth()],
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join("-");

  // Checkout Components

  // Tracking order
  const [isOrderExist, setIsOrderExist] = useState(false);
  const [customerOrderList, setCustomerOrderList] = useState([]);
  const onTrack = (id, email) => {
    let findId = orderList.findIndex((item) => item.id === id);
    let findEmail = orderList.findIndex(
      (item) => item.id === id && item.infoCustomer.emailAddress === email
    );
    if (!orderList.length) return;
    if (findId !== -1 && findEmail !== -1) {
      setIsOrderExist(true);
      setCustomerOrderList(
        orderList.filter(
          (product) =>
            product.id === id && product.infoCustomer.emailAddress === email
        )
      );
    } else alert("Can not found your order");
  };
  // Tracking order

  // Collection Component

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  // Collection Component

  // Footer Component

  useEffect(() => {
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
        customerOrderList,
        isOrderExist,
        orderDate,
        countryList,
        filteredList,
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
        categoryList,
        priceFilter,
      }}
    >
      <ContextUpdate.Provider
        value={{
          onChooseCategory,
          onTrack,
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
          onOrderSuccess,
          priceRangeSelector,
        }}
      >
        {children}
      </ContextUpdate.Provider>
    </ContextValue.Provider>
  );
};

export default ContextProvider;
