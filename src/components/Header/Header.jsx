import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
  // need to pass the parameter {isEditing}
  //funtionality for create button
  //  const [isEditing, setIsEditng] = useState(initialIsEditing);

  //  const setEditMode = () => setIsEditng(true);
  //  const setNormalMode = () => setIsEditng(false);
  // const { currentUser, logout } = useContext();

  return (
    //fragments:-React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
    // To return multiple elements from a React component, you'll need to wrap the element in a root element

    <section className="header">
      {/* division for logo */}
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      {/* division for navigation on leftside of the header */}
      <div className="navLeft">
        <Link className="links" to="/Crochet">
          <h4>Crochet</h4>
        </Link>
        <Link className="links" to="/DressPatterns">
          <h4>Dress Patterns</h4>
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

      {/* division for navigation on rightside of the header */}
      <div className="navRight">
        <Link className="links" to="/login">
          <h4>Login</h4>
        </Link>
        <Link className="links" to="/signUp">
          <h4>SignUp</h4>
        </Link>
        <Link className="links" to="/write">
          <h4>Write</h4>
        </Link>
        <Link className="links" to="/cart">
          <ShoppingCartIcon fontSize="large" />
        </Link>
      </div>
    </section>
  );
}
