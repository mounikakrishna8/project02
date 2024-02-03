import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./BlogPage.css";
import Post from "../../components/Post/Post";

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="Blog">
        <Post />
        <Post />
      </div>
      <Footer />
    </>
  );
}
