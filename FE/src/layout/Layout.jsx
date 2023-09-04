import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

//may kia tuong tu vay
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
