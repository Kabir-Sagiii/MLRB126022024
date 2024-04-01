import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="navbarContainer">
      <div className="title">
        <h2>E-kart</h2>
      </div>
      <div className="menus">
        1<a href="">Home</a>
        <a href="">Profile</a>
        <a href="">Products</a>
        <a href="">ContactDetails</a>
      </div>
    </div>
  );
}

export default Nav;
