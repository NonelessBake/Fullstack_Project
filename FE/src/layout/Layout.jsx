import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { useContext } from "react";
import { ContextValue } from "../contexts/ContextProvider";
import NavigateOrderPages from "../components/NavigateOrderPages/NavigateOrderPages";
const Layout = () => {
  const { getPath } = useContext(ContextValue);
  let checked = false;
  const orderPages = ["/checkout", "/order-tracking", "/cart"];
  orderPages.includes(getPath.pathname) ? (checked = true) : (checked = false);
  return (
    <>
      <Header />
      {checked && <NavigateOrderPages />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
