import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContextProvider from "./contexts/ContextProvider";
import ProductDetail from "./components/ProductDetail";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import Cart from "./pages/Cart";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="shop" element={<Shop />} />
            <Route index element={<Home />} />
            <Route path="product/:productId" element={<ProductDetail />} />
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
