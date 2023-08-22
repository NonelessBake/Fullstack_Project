import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<ProductList />}></Route>
          <Route path="/product" element={<ProductDetail/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
