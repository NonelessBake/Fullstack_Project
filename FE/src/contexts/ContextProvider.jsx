/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";

export const ContextValue = createContext();
export const ContextUpdate = createContext();
const ContextProvider = ({ children }) => {
  // Fetch API
  const baseURL = "http://localhost:3000/";
  const headerSlideImgs = useFetch(`${baseURL + "headerSlide"}`);
  const bannerImgs = useFetch(`${baseURL + "imagesBanner"}`);
  const productList = useFetch(`${baseURL + "products"}`);
  const countryList = useFetch(`${baseURL + "countries"}`);
  const collection = useFetch(`${baseURL + "imgSlide"}`);
  const brand = useFetch(`${baseURL + "brand"}`);
  // Fetch API

  // Format Function
  const formatLink = (string) => {
    return string.toLowerCase().replaceAll(" ", "-");
  };
  const formatNumber = (price) => price.toFixed(2);
  // Format Function

  // Header Component
  const getPath = useLocation();
  const activeClass = (params) => {
    return params.isActive ? "active-item" : "";
  };
  // Header Component

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
          product.price * (1 - product.discount / 100) >= priceFilter[0] &&
          product.price * (1 - product.discount / 100) <= priceFilter[1]
      )
    : productList.filter(
        (product) =>
          product.price * (1 - product.discount / 100) >= priceFilter[0] &&
          product.price * (1 - product.discount / 100) <= priceFilter[1]
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
  const [orderList, setOrderList] = useState([]);
  const fetchOrderList = async () => {
    try {
      await axios
        .get(`${baseURL + "orderInfos"}`)
        .then((res) => setOrderList(res.data));
    } catch (err) {
      console.log("fetchOrderList", err);
    }
  };
  useEffect(() => {
    fetchOrderList();
  }, []);
  const onOrderSuccess = () => {
    fetchOrderList();
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
  const onTrack = async (id, email) => {
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
    } else {
      alert("Can not found your order");
      setIsOrderExist(false);
    }
  };
  const backToTrackingPage = () => {
    setCustomerOrderList([]);
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
        getPath,
        headerSlideImgs,
        brand,
        bannerImgs,
        showList,
        homeProductList,
        collection,
        windowSize,
        totalCartPrice,
        totalCartQuantity,
        cart,
        isCartEmpty,
        show,
        categoryList,
        priceFilter,
        selectedCategory,
      }}
    >
      <ContextUpdate.Provider
        value={{
          backToTrackingPage,
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
