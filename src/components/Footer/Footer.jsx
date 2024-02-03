import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        <Link
          className="links"
          to="/ContactUs"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h4>Contact Us</h4>
        </Link>
        <Link
          className="links"
          to="/About"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h4>AboutUs</h4>
        </Link>
      </div>
      <div className="footer-right"> &copy;{year} BlogApp</div>
    </div>
  );
}
