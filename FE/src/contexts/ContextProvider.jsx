import { createContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
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
  const userLogin = useFetch(`${baseURL + "user"}`);
  // Fetch API

  // Login
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const onAdminLogin = (username, password) => {
    const getIndexUser = userLogin.findIndex(
      (info) => info.userName === username && info.password === password
    );
    if (getIndexUser === -1) {
      setIsAdmin(false);
      setLoginSuccess(false);
      setLoginFail(true);
    } else {
      userLogin[getIndexUser].admin === true
        ? (setIsAdmin(true), setLoginSuccess(true), setLoginFail(false))
        : (setIsAdmin(false), setLoginSuccess(true), setLoginFail(false));
    }
  };
  // Login

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

  const withSelectedCategory = productList.filter(
    (product) =>
      product.category.includes(selectedCategory) &&
      product.price * (1 - product.discount / 100) >= priceFilter[0] &&
      product.price * (1 - product.discount / 100) <= priceFilter[1]
  );
  const noSelectedCategory = productList.filter(
    (product) =>
      product.price * (1 - product.discount / 100) >= priceFilter[0] &&
      product.price * (1 - product.discount / 100) <= priceFilter[1]
  );
  const filteredList = selectedCategory
    ? withSelectedCategory
    : noSelectedCategory;

  const [filterParams, setfilterParams] = useSearchParams();
  const handleSortChange = (event) => {
    setfilterParams({ sort: event.target.value });
  };
  filterParams.get("sort") === "asc"
    ? filteredList.sort((a, b) => {
        return (
          a.price * (1 - a.discount / 100) - b.price * (1 - b.discount / 100)
        );
      })
    : filteredList.sort((a, b) => {
        return (
          b.price * (1 - b.discount / 100) - a.price * (1 - a.discount / 100)
        );
      });

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
    const index = cart.findIndex((cartItem) => product.id === cartItem.id);
    if (index === -1) {
      product.quantity = 1;
      setCart((prev) => [...prev, product]);
      setCartLocalStorage([...cart, product]);
    } else {
      cart[index].quantity++;
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
        value?.length > 0 ? checkMaxValue(Number(value), Number(1000)) : 1;
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

  // Product Detail
  const [currentImageDetail, setCurrentImageDetail] = useState(0);
  const [quantityAdd, setQuantityAdd] = useState(1);
  const handleChangeQuantityAdd = (e) => {
    if (e.target.value > 1000) setQuantityAdd(1000);
    else setQuantityAdd(Number(e.target.value));
  };

  const onIncreaseQuantityAdd = () => {
    if (quantityAdd > 1000) setQuantityAdd(1000);
    else setQuantityAdd(quantityAdd + 1);
  };
  const onDecreaseQuantityAdd = () => {
    if (quantityAdd <= 1) return;
    setQuantityAdd(quantityAdd - 1);
  };

  const onChangeImageDetail = (index) => setCurrentImageDetail(index);
  const onAddDetailItem = (product) => {
    const index = cart.findIndex((cartItem) => product.id === cartItem.id);
    if (index === -1) {
      product.quantity = quantityAdd;
      setCart((prev) => [...prev, product]);
      setCartLocalStorage([...cart, product]);
      setQuantityAdd(1);
    } else {
      cart[index].quantity += quantityAdd;
      setCart((prev) => [...prev]);
      setCartLocalStorage([...cart]);
      setQuantityAdd(1);
    }
  };
  // Product Detail

  // Collection Home
  const [activeIndex, setactiveIndex] = useState(1);

  const maxIndex = collection.length;
  const minIndex = 1;

  const onPrevSlide = () => {
    setactiveIndex(activeIndex + 1);
    activeIndex <= minIndex
      ? setactiveIndex(maxIndex)
      : setactiveIndex(activeIndex - 1);
  };
  const onNextSlide = () => {
    setactiveIndex(activeIndex + 1);

    activeIndex >= maxIndex
      ? setactiveIndex(minIndex)
      : setactiveIndex(activeIndex + 1);
  };
  // Collection Home

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
          (orderProduct) =>
            orderProduct.id === id &&
            orderProduct.infoCustomer.emailAddress === email
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

  const showOrderList = customerOrderList
    ? customerOrderList[0]?.infoProducts?.map((item) => ({
        ...item,
        ...productList.find((el) => el.id === item.id),
      }))
    : [];
  // Tracking order

  // Collection Component
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());
  // Collection Component

  // Footer Component

  // Handle resize window
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // Handle resize window

  return (
    <ContextValue.Provider
      value={{
        loginSuccess,
        productList,
        isAdmin,
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
        filterParams,
        activeIndex,
        showOrderList,
        currentImageDetail,
        quantityAdd,
        loginFail,
      }}
    >
      <ContextUpdate.Provider
        value={{
          onIncreaseQuantityAdd,
          onDecreaseQuantityAdd,
          onChangeImageDetail,
          onAdminLogin,
          onNextSlide,
          onPrevSlide,
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
          handleSortChange,
          handleChangeQuantityAdd,
          onAddDetailItem,
        }}
      >
        {children}
      </ContextUpdate.Provider>
    </ContextValue.Provider>
  );
};

export default ContextProvider;
