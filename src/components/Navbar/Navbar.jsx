git// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () =>{
//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/create"> Create Post</Link>
//         </nav>
//     );
// };

// export default Navbar;



// import React from 'react';
import Logo from "../../Images/Logo.png";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="log">
          {/* <img src={Logo} alt="" /> */}
        </div>
        <div className="links">
          <Link className="links" to="/?category=crochet">
            <h6>Crochet</h6>
            <h6>Drafting Dress Patterns</h6>
            <h6>Quilting</h6>
          </Link>
        <span>Username</span>
        <span>Logout</span>
        <span className="write">
          <Link to="/write">Write</Link>
        </span>
        </div>
      </div>
    </div>


    // <div className="navbar">
    //   <div className="navbarCenter">
    //     <ul className="navbarList">
    //       <li className="navbarListItem">HOME</li>
    //       <li className="navbarListItem">ABOUT</li>
    //       <li className="navbarListItem">CONTACT</li>
    //       <li className="navbarListItem">BLOG</li>
    //       <li className="navbarListItem">LOGOUT</li>
    //     </ul>
    //   </div>
    // </div>
  );
}



