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
import { useContext } from "react";

import {Link} from "react-router-dom";

export default function Navbar() { // need to pass the parameter {isEditing}
   //funtionality for create button
  //  const [isEditing, setIsEditng] = useState(initialIsEditing);

  //  const setEditMode = () => setIsEditng(true);
  //  const setNormalMode = () => setIsEditng(false);
     const { currentUser, logout } = useContext();

  return (
    <div className="navbar">
      <div className="container">
        <div className="links">
          <Link className="links" to="/?category=crochet">
            <h6>Crochet </h6>
            <h6> Dress Patterns</h6>
            <h6>Quilting</h6>
          </Link>
        <span className="navRight">{currentUser?.username}</span>
        <span onClick={logout}>Logout</span>
        <Link className="link" to="/login"> Login </Link>
        <span className="create">
          <Link className="links" to="/create">Create</Link>
        </span>
        </div>
      </div>
    </div>


  );
}



