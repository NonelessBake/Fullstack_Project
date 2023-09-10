import { useContext } from "react";
import "../../assets/style/header.css";
import { ContextValue } from "../../contexts/ContextProvider";
import UserMenu from "./UserMenu";
import HeaderSlide from "./HeaderSlide";

const Header = () => {
  const { getPath } = useContext(ContextValue);
  let checked;
  getPath.pathname === "/" ? (checked = true) : (checked = false);
  return (
    <section className="header">
      {checked === true ? <HeaderSlide /> : null}
      <UserMenu />
    </section>
  );
};

export default Header;
