import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      Page not Found 404
      <Link to="/">Back to home</Link>{" "}
    </div>
  );
};

export default Error404;
