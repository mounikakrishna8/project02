// import React from 'react';
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

// import {useState} from "react";
// import { useContext } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  // need to pass the parameter {isEditing}
  //funtionality for create button
  //  const [isEditing, setIsEditng] = useState(initialIsEditing);

  //  const setEditMode = () => setIsEditng(true);
  //  const setNormalMode = () => setIsEditng(false);
  // const { currentUser, logout } = useContext();

  return (
    <div className="navbar">
      <div className="container">
        <div className="links">
          <Link className="links" to="/?category=crochet">
            <h4>Crochet</h4>
          </Link>
          <Link className="links" to="/?category=DessPatterns">
           <h4>Dress Patterns</h4> 
          </Link>
          <Link className="links" to="/?category=Quilting">
            <h4>Quilting</h4>
          </Link>
          <span className="navRight"></span>
          <Link className="links" to="/login">
           <h4>Login</h4>
          </Link>
          <span className="write">
            <Link className="links" to="/write">
              <h4>Write</h4>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
