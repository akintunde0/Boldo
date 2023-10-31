import React from "react";
import "./Home.css";
import harry from "../Assets/harry-img.png";

function Enterprise() {
  return (
    <div>
      <div className="enterprise">
        <div className="enterprise-body">
          <div className="enterprise-head">
            <div className="enterprise-head-left">
              <p className="head-text-white">
                An enterprise template to ramp up your company website
              </p>
            </div>
            <div className="arrows">
              <button className="arrow">&LeftArrow;</button>
              <button className="arrow">&rightarrow;</button>
            </div>
          </div>

          <div className="grid-container-enterprise">
            <div className="testimonial1">
              <p>
                “Buyer buzz partner network disruptive non-disclosure agreement
                business”
              </p>
              <div className="testimonial-desc">
                <div className="testimonial-img">
                  <img src={harry} alt="" />
                </div>
                <div className="testimonial-name">
                  <p className="testimonial-name1">Harry Porter</p>
                  <p className="testimonial-name2">General Manager @ Howarts</p>
                </div>
              </div>
            </div>
            <div className="testimonial2">
              <p>
                “Learning curve infrastructure value proposition advisor
                strategy user experience hypotheses investor.”
              </p>
              <div className="testimonial-desc">
                <div className="testimonial-img">
                  <img src={harry} alt="" />
                </div>
                <div className="testimonial-name">
                  <p className="testimonial-name1">Harry Porter</p>
                  <p className="testimonial-name2">Ambassador @ MC</p>
                </div>
              </div>
            </div>
            <div className="testimonial3">
              <p>
                “Release facebook responsive web design business model canvas
                seed money monetization.”
              </p>
              <div className="testimonial-desc">
                <div className="testimonial-img">
                  <img src={harry} alt="" />
                </div>
                <div className="testimonial-name">
                  <p className="testimonial-name1">Harry Porter</p>
                  <p className="testimonial-name2">Team Leader @ Cisco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enterprise;
