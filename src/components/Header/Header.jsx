import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  const [username, setUsername] = useState(null);
  const cart = useSelector((state) => state.cart);

  // to put user info inplace of login
  useEffect(() => {
    axios
      .get("http://localhost:4090/profile", { withCredentials: true })
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((error) => {
        console.error("There was an error fetching the user info:", error);
      });
  }, []);

  //logout functionality
  async function logout() {
    try {
      // Invalidated the session on the server-side
      await axios.post(
        "http://localhost:4090/logout",
        {},
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    //fragments:-React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
    // To return multiple elements from a React component, you'll need to wrap the element in a root element

    <section className="header">
      {/* division for logo */}
      <Link to="/">
        <div className="logo">
          <img src="/assets/Images/logo/Logo.png" alt="" />
        </div>
      </Link>

      {/* division for navigation on leftside of the header */}

      <div className="navLeft">
        <Link className="links" to="/Crochet">
          <h4>Crochet</h4>
        </Link>
        <Link className="links" to="/Patterns">
          <h4>Patterns</h4>
        </Link>
        <Link className="links" to="/Quilting">
          <h4>Quilting</h4>
        </Link>
        <Link className="links" to="/Blog">
          <h4>Blog</h4>
        </Link>
        <Link className="links" to="/Shop">
          <h4>Shop</h4>
        </Link>
      </div>

      {/* header search icon from material ui */}

      <div className="header-search">
        <input type="text" id="header-name" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      {/* division for navigation on rightside of the header */}
      <div className="navRight">
        {/* if we have user name create post or else show login register */}

        {username && (
          <>
            <Link to="/profile">{username}</Link>
            <Link className="links" to="/writePost">
              <h4>Write</h4>
            </Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link className="links" to="/login">
              <h4>Login</h4>
            </Link>
            <Link className="links" to="/signUp">
              <h4>SignUp</h4>
            </Link>
          </>
        )}

        {/* here we gave custom style to remove the default decor i.e.underline */}

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            {/* <span className="nav__itemLineOne">Basket</span> */}
            <ShoppingCartIcon fontSize="large" />
            <span className="nav__itemLineTwo nav__basketCount">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
