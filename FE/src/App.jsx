import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContextProvider from "./contexts/ContextProvider";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<ProductList />}></Route>
          <Route path="/product" element={<ProductDetail/>}></Route>
        </Routes>
        <Footer />
      </ContextProvider>
    </Router>
  );
}

export default App;
