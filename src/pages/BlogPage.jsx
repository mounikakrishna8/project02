import axios from "axios";
import { useNavigate } from "react-router-dom";
import Blog from "../components/Blog/Blog.jsx";

export default function BlogPage() {
  const navigate = useNavigate();

  const handleBlog = async (event, BData) => {
    event.preventDefault();
    // making a http request
    const res = await axios.post("/api/auth", BData);

    if (res.data.success) {
      navigate("/Blog");
    }
  };

  return (
    <>
      <Blog onBlog={handleBlog} />
    </>
  );
}
