import { Link, useParams } from "react-router-dom";
import "../assets/style/home.css";
import Category from "../components/Category";
const Home = () => {
  const { params } = useParams();
  console.log(params);
  return <section className="home"></section>;
};

export default Home;
