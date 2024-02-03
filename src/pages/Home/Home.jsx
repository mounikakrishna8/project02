import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Subscribe from "../../components/Subscribe/Subscribe.jsx";

import crochetImg from "../../../public/assets/Images/Home/crochetImg.jpg";
import QuiltingImg from "../../../public/assets/Images/Home/QuiltingImg.jpeg";
import DressPatternsImg from "../../../public/assets/Images/Home/DressPatternsImg.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import Post from "../../components/Post/Post.jsx";

export default function Home() {
  return (
    <section className="home">
      <Header />

      <div className="outer-wrapper">
        <Link to="/crochet" style={{ textDecoration: "none" }}>
          <div className="wrapper1">
            {/* <Link to="http://localhost:5173/Crochet"> Crochet</Link> */}
            {/* <Crochet /> */}
            <img src={crochetImg} alt="crochetImage" />
            <h3>Crochet</h3>
          </div>
        </Link>

        <Link to="/quilting" style={{ textDecoration: "none" }}>
          <div className="wrapper1">
            {/* <Quilting /> */}
            <img src={QuiltingImg} alt="Quiltingtools" />
            <h3>Quilting</h3>
          </div>
        </Link>

        <Link to="/Patterns" style={{ textDecoration: "none" }}>
          <div className="wrapper1">
            {/* <DressPatterns /> */}
            <img src={DressPatternsImg} alt="DressPatternsImg" />
            <h3>Patterns</h3>
          </div>
        </Link>
      </div>
      <Post />
      <div className="news-letter-section"></div>
      <Subscribe />
      <Footer />
    </section>
  );
}
