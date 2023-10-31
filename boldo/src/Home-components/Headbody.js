import React from "react";
import "./Home.css";
import chart1 from "../Assets/Chart1.png";
import chart2 from "../Assets/chart2.png";
import chart3 from "../Assets/chart3.png";
import logo from "../Assets/Boldologo.png";
import logo2 from "../Assets/Prestologo.png";

function Headbody() {
  return (
    <div>
      <div className="head">
        <div className="leftcolumn">
          <p className="head-text">
            Save time by building fast website templates
          </p>
          <p className="sub-text">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="btns">
            <div>
              <button className="btntemplate">Buy Template</button>
            </div>
            <div>
              <button className="btnexplore">Explore</button>
            </div>
          </div>
        </div>
        <div className="rightcolumn">
          <div>
            <img src={chart1} alt="" />
          </div>
          <div className="chart-grid">
            <div>
              <img className="chart2" src={chart2} alt="" />
            </div>
            <div>
              <img className="chart3" src={chart3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container1">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logo2} alt="" />
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logo2} alt="" />
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Headbody;
