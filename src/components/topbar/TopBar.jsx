

// import React from 'react';
import "./topbar.css";
import userImage from "../../Images/userImage.png"

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-youtube"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">BLOG</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>

      <div className="topRight">
        <image
          className="topImg"
          src = {userImage} alt="UserImg" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  );
}
