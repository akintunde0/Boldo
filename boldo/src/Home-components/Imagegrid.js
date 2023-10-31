import React from "react";
import "./Home.css";
import home1 from "../Assets/Home-img1.png";
import home2 from "../Assets/Home-img2.png";
import home3 from "../Assets/Home-img4.png";

function Imagegrid() {
  return (
    <div>
      <div className="imgs">
        <div className="grid-container1">
          <div>
            <img src={home1} alt="" />
          </div>
          <div>
            <img src={home2} alt="" />
          </div>
        </div>
        <div className="grid-container2">
          <div className="imgs-text">
            <p className="head-text">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>
            <div className="marketing">
              <p className="top-marketing">
                We connect our customers with the best.
              </p>
              <p className="last-marketing">
                Advisor success customer launch party.
              </p>
              <p className="last-marketing">Business-to-consumer long tail.</p>
            </div>
          </div>
          <div>
            <img src={home3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imagegrid;
