import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Subscribe from "../../components/Subscribe/Subscribe.jsx";
import Blog from "../../components/Blog/Blog.jsx";

import Quilting from "../../components/Quilting/Quilting.jsx";
import DressPatterns from "../../components/DressPatterns/DressPatterns.jsx";
import "./Home.css";
// import { Link } from "react-router-dom";
import Crochet from "../../components/Crochet/Crochet.jsx";

export default function Home() {
  return (
    <section className="home">
      <Header />

      <div className="outer-wrapper">
        <div className="wrapper1">
          {/* <Link to="http://localhost:5173/Crochet"> Crochet</Link> */}
          <Crochet />
        </div>

        <div className="wrapper1">
          <Quilting />
        </div>

        <div className="wrapper1">
          <DressPatterns />
        </div>
      </div>

      {/* show latest Blog Post or reviews */}
      <Blog />
      <Subscribe />
      <Footer />
    </section>
  );
}
