import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function BlogPage() {
  const navigate = useNavigate();

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

  const handleBlog = async (event, BData) => {
    event.preventDefault();
    // making a http request
    const res = await axios.post("/api/auth", BData);

    if (res.data.success) {
      navigate("/Blog");
    }
  };

  return (
    <div className="Blog">
      <Header />
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
              <button onClick={handleBlog}>Read More...</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
