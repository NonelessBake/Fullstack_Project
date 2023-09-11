import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import "../assets/style/page404.css";
const Error404 = () => {
  return (
    <div className="page-404">
      <h1 className="title">404</h1>
      <h2 className="content">Oops! That page can't be found. </h2>
      <p className="sub-title">
        We're really sorry but we can't seem to find the page you were looking
        for.
      </p>
      <Link to="/">
        Back To Homepage <BsArrowRight />
      </Link>
    </div>
  );
};

export default Error404;
