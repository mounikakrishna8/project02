import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="Footer-bottomRight">
        <i className="footerIcon fa-brands fa-instagram"></i>
        <i className="footerIcon fa-brands fa-youtube"></i>
        <i className="footerIcon fa-brands fa-pinterest"></i>
      </div>
      <span className="footer-left">
        <Link className="links" to="/ContactUs">
          <h4>Contact Us</h4>
        </Link>
        <Link className="links" to="/About">
          <h4>AboutUs</h4>
        </Link>
      </span>
    </div>
  );
}
