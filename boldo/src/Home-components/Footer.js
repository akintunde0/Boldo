import React from "react";
import "./Home.css";
import logo from "../Assets/Boldologo.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-head">
          <div className="footer-head-body">
            <p className="head-text-white">
              An enterprise template to ramp up your company website
            </p>
            <div className="register-grid">
              <div>
                <input
                  className="input-field"
                  type="email"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <button className="footer-btn">Start now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-foot">
          <div className="footer-grid">
            <div>
              <div className="item1">
                <img src={logo} alt="" />
              </div>
              <div className="item2">
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </div>
            </div>
            <div className="footer-services">
              <div>
                <b>Landing</b>
              </div>
              <div>
                <b>Company</b>
              </div>
              <div>
                <b>Resources</b>
              </div>
              <div className="footer-size">Home</div>
              <div className="footer-size">Home</div>
              <div className="footer-size">Home</div>
              <div className="footer-size">Products</div>
              <div className="footer-size">
                Career <span className="highlight">Hiring!</span>
              </div>
              <div className="footer-size">Products</div>
              <div className="footer-size">Services</div>
              <div className="footer-size">Services</div>
              <div className="footer-size">Services</div>
            </div>
          </div>

          <div className="copyright">All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
