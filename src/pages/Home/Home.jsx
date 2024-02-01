import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Subscribe from "../../components/Subscribe/Subscribe.jsx";

import crochetImg from "../../../public/assets/Images/Home/crochetImg.jpg";
import QuiltingImg from "../../../public/assets/Images/Home/QuiltingImg.jpeg";
import DressPatternsImg from "../../../public/assets/Images/Home/DressPatternsImg.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Post Title 1",
      date: "2023-02-15",
      description: "This is a brief description of Post 1.",
    },
    {
      id: 2,
      title: "Post Title 2",
      date: "2023-07-22",
      description: "This is a brief description of Post 2.",
    },
    {
      id: 3,
      title: "Post Title 3",
      date: "2023-11-09",
      description: "This is a brief description of Post 3.",
    },
    // ... more posts
  ];
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

        <Link to="/dresspatters" style={{ textDecoration: "none" }}>
          <div className="wrapper1">
            {/* <DressPatterns /> */}
            <img src={DressPatternsImg} alt="DressPatternsImg" />
            <h3>DressPatterns</h3>
          </div>
        </Link>
      </div>

      {/* show latest Blog Post or reviews */}
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            {/* {console.log(post.id)} */}
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button>Read More...</button>
            </div>
          </div>
        ))}
      </div>
      <div className="news-letter-section">
        <Subscribe />
      </div>
      <Footer />
    </section>
  );
}
