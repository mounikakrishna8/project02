// import Navbar from "../Navbar/Navbar.jsx";
// import Footer from "../Footer/Footer.jsx";

import "./Blog.css";

import { Link } from "react-router-dom";

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

export default function Blog() {
  return (
    <div className="Blog">
      {/* <Navbar /> */}
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
      {/* <Footer /> */}
    </div>
  );
}
