import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContextProvider from "./contexts/ContextProvider";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import Cart from "./pages/Cart";
import Layout from "./layout/Layout";
import Error404 from "./pages/Error404";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Error404 />} />
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:productName" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-tracking" element={<OrderTracking />} />
          </Route>
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
