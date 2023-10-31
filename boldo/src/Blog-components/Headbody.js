import React from "react";
import "./Blog.css";
import bloghead from "../Assets/bloghead-img.png";
import chandler from "../Assets/chandler-img.png";
import { useEffect } from "react";
import { useState } from "react";

function Headbody() {
  const [state, setState] = useState("");
  const today = new Date();
  const date = () => {
    let date1 = today.toDateString();
    setState(date1);
  };
  useEffect(() => {
    date();
  });
  return (
    <div>
      <div className="blog-topic">
        <h5>Blog</h5>
        <p className="head-text">Thoughts and words</p>
      </div>
      <div className="header-grid">
        <div className="header-img">
          <img src={bloghead} />
        </div>
        <div className="header-info">
          <h5 className="category">
            Category <span id="date1">{state}</span>
          </h5>
          <p className="header-subtext">
            Pitch termsheet backing validation focus release.
          </p>
          <div className="tags">
            <div className="tag-img">
              <img src={chandler} />
            </div>
            <div className="tag-name">Chandler Bing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headbody;
