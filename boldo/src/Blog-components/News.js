import React, { useEffect, useState } from "react";
import "./Blog.css";
import walking from "../Assets/walking-img.png";
import chandler from "../Assets/chandler-img.png";
import lady from "../Assets/phonelady-img.png";
import guy from "../Assets/standinguy-img.png";
import phoneguy from "../Assets/phoneguy-img.png";
import office from "../Assets/officespace-img.png";
import handshake from "../Assets/handshake-img.png";

function News() {
  const [state, setState] = useState("");
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
      <div className="news">
        <p className="news-head">Latest news</p>
        <div className="news-grid1">
          <div>
            <img src={walking} />
            <h5 className="category">
              Category <span id="date2">{state}</span>
            </h5>
            <p className="news-text">
              Pitch termsheet backing validation focus release.
            </p>
            <br />
            <div className="blog-tags">
              <div className="blog-tagimg">
                <img src={chandler} />
              </div>
              <div className="blog-tagname">Chandler Bing</div>
            </div>
          </div>
          <div>
            <img src={lady} />
            <h5 className="category">
              Category <span id="date3">{state}</span>
            </h5>
            <p className="news-text">
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </p>
            <div className="blog-tags">
              <div className="blog-tagimg">
                <img src={chandler} />
              </div>
              <div className="blog-tagname">Chandler Bing</div>
            </div>
          </div>
          <div>
            <img src={guy} />
            <h5 className="category">
              Category <span id="date4">{state}</span>
            </h5>
            <p className="news-text">
              Beta prototype sales iPad gen-z marketing network effects value
              proposition.
            </p>
            <div className="blog-tags">
              <div className="blog-tagimg">
                <img src={chandler} />
              </div>
              <div className="blog-tagname">Chandler Bing</div>
            </div>
          </div>
          <div>
            <img src={phoneguy} />
            <h5 className="category">
              Category <span id="date5">{state}</span>
            </h5>
            <p className="news-text">
              Pitch termsheet backing validation focus release.
            </p>
            <br />

            <div className="blog-tags">
              <div className="blog-tagimg">
                <img src={chandler} />
              </div>
              <div className="blog-tagname">Chandler Bing</div>
            </div>
          </div>
          <div>
            <img src={office} />
            <h5 className="category">
              Category <span id="date6">{state}</span>
            </h5>
            <p className="news-text">
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </p>
            <div className="blog-tags">
              <div className="blog-tagimg">
                <img src={chandler} />
              </div>
              <div className="blog-tagname">Chandler Bing</div>
            </div>
          </div>
          <div>
            <img src={handshake} />
            <h5 className="category">
              Category <span id="date7">{state}</span>
            </h5>
            <p className="news-text">
              Beta prototype sales iPad gen-z marketing network effects value
              proposition.
            </p>
            <div className="blog-tags">
              <div className="blog-tagimg">
                <img src={chandler} />
              </div>
              <div className="blog-tagname">Chandler Bing</div>
            </div>
          </div>
        </div>
        <div className="news-grid2"></div>
      </div>
      <div className="load">
        <button className="load-btn">Load More</button>
      </div>
    </div>
  );
}

export default News;
