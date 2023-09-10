import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContextProvider from "./contexts/ContextProvider";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import Cart from "./pages/Cart";
import Layout from "./layout/Layout";
import ProductDetail from "./components/Product/ProductDetail";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
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
