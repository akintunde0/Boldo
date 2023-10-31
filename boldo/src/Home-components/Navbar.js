import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import logo from "../Assets/Boldologo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="top-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-products">
          <div className="nav-list">
            <NavLink to="/">Home</NavLink>
          </div>

          <div className="nav-list">
            <NavLink to="/blog">Blog</NavLink>
          </div>
          <div className="nav-list">
            <NavLink to="/about">About</NavLink>
          </div>
          <div>
            <button className="login">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
