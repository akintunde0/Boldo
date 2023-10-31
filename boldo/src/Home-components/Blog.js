import React, { useEffect, useState } from "react";
import "./Home.css";
import chandler from "../Assets/chandler-img.png";
import walking from "../Assets/walking-img.png";
import lady from "../Assets/phonelady-img.png";
import standguy from "../Assets/standinguy-img.png";

//import { Reactcomponent as kaheempg } from "../Assets/chandler-img.png";

function Blog() {
  const [state, setState] = useState('');
  const today = new Date();
  const date = () => {
    let date2 = today.toDateString();
    setState(date2);
  };
  useEffect(() => {
    date();
  });
  return (
    <div>
      <div className="blog">
        <div className="blog-header">
          <h5>Our blog</h5>
          <p className="head-text">
            Value proposition accelerator product management venture
          </p>
        </div>
        <div className="news-grid1">
          <div>
            <img src={walking} alt="" />
            <h5 className="category">
              Category <span id="date2">{state}</span>
            </h5>
            <p className="news-text">
              Pitch termsheet backing validation focus release.
            </p>
            <br />
            <div className="tags">
              <div className="tag-img">
                <img src={chandler} alt="" />
              </div>
              <div className="tag-name">Chandler Bing</div>
            </div>
          </div>
          <div>
            <img src={lady} alt="" />
            <h5 className="category">
              Category <span id="date3">{state}</span>
            </h5>
            <p className="news-text">
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </p>
            <div className="tags">
              <div className="tag-img">
                <img src={chandler} alt="" />
              </div>
              <div className="tag-name">Chandler Bing</div>
            </div>
          </div>
          <div>
            <img src={standguy} alt="" />
            <h5 className="category">
              Category <span id="date4">{state}</span>
            </h5>
            <p className="news-text">
              Beta prototype sales iPad gen-z marketing network effects value
              proposition.
            </p>
            <div className="tags">
              <div className="tag-img">
                <img src={chandler} alt="" />
              </div>
              <div className="tag-name">Chandler Bing</div>
            </div>
          </div>
        </div>
        <div className="load">
          <button className="load-btn">Load more</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
