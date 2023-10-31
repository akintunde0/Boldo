import React from "react";
import "./Home.css";
import office from "../Assets/bigofficespace-img.png";

function Environment() {
  return (
    <div>
      <div className="environment">
        <img src={office} alt="" />
        <div className="environment-grid">
          <div className="head-text">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </div>
          <div>
            <p className="question">We connect our customers with the best?</p>
            <p className="question">Android research & development rockstar?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Environment;
