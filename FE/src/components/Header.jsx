import { useContext } from "react";
import "../assets/style/header.css";
import { Context } from "../contexts/ContextProvider";
import UserMenu from "./UserMenu";
import HeaderSlide from "./HeaderSlide";

const Header = () => {
  const { isHomePath } = useContext(Context);
  let checked;
  isHomePath.pathname === "/" ? (checked = true) : (checked = false);
  return (
    <header className="header">
      {checked && <HeaderSlide />}
      <UserMenu />
    </header>
  );
};

export default Header;
