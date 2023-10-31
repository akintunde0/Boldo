import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";
import walking from "../Assets/walking-img.png";
import handshake from "../Assets/handshake-img.png";
import bloghead from "../Assets/bloghead-img.png";

function Service() {
  return (
    <div className="body2">
      <div className="header">
        <h5>Our services</h5>
        <p className="head-text">
          Handshake infographic mass market crowdfunding iteration.
        </p>
      </div>
      <div className="flex-container">
        <div>
          <img src={walking} alt="" />
          <p>Cool feature title</p>
          <NavLink className="explore">Explore page</NavLink>
        </div>
        <div>
          <img src={handshake} alt="" />
          <p>Cool feature title</p>
          <NavLink className="explore">Explore page</NavLink>
        </div>
        <div>
          <img src={bloghead} alt="" />
          <p>Cool feature title</p>
          <NavLink className="explore">Explore page</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Service;
