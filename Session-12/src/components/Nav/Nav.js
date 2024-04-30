import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import TitleLogo from "../../Images/logotitle.png";

function Nav() {
  return (
    <div className="navbarContainer shadow p-3">
      <div className="title">
        <h2 className="h1">eCommKart</h2>
        {/* <img src={TitleLogo} width={250} height={100} /> */}
      </div>
      <div className="menus">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        {/* <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link> */}
        <button className="btn btn-outline-danger">Logout</button>
      </div>
    </div>
  );
}

export default Nav;
