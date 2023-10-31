import React from "react";
import "./Blog.css";
import logo from "../Assets/Boldologo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div class="blog-nav">
        <div class="blog-toplogo">
          <img src={logo} />
        </div>
        <div class="blog-navproducts">
          <div class="blog-navlist">
            <NavLink to="/">Home</NavLink>
          </div>

          <div class="blog-navlist">
            <NavLink to="/blog">Blog</NavLink>
          </div>
          <div class="blog-navlist">
            <NavLink to="/about">About</NavLink>
          </div>
          <div>
            <button class="blog-login">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
