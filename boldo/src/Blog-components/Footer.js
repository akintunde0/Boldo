import React from "react";
import logo from "../Assets/Boldologo.png";

function Footer() {
  return (
    <div>
      <div class="footer">
        <div class="footer-head">
          <div class="footer-head-body">
            <p class="footer-text">
              An enterprise template to ramp up your company website
            </p>
            <div class="register-grid">
              <div>
                <input
                  class="input-field"
                  type="email"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <button class="footer-btn">Start now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-foot">
          <div class="footer-grid">
            <div>
              <div class="item1">
                <img src={logo} />
              </div>
              <div class="item2">
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </div>
            </div>
            <div class="footer-services">
              <div>
                <b>Landing</b>
              </div>
              <div>
                <b>Company</b>
              </div>
              <div>
                <b>Resources</b>
              </div>
              <div class="footer-size">Home</div>
              <div class="footer-size">Home</div>
              <div class="footer-size">Home</div>
              <div class="footer-size">Products</div>
              <div class="footer-size">
                Career <span class="highlight">Hiring!</span>
              </div>
              <div class="footer-size">Products</div>
              <div class="footer-size">Services</div>
              <div class="footer-size">Services</div>
              <div class="footer-size">Services</div>
            </div>
          </div>
          <div class="copyright">All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
