import React from "react";
import "./About.css";
import michael from "../Assets/michael-img.png";
import pam from "../Assets/pam-img.png";
import dwight from "../Assets/dwight-img.png";

function Team() {
  return (
    <div>
      <div class="our-team">
        <div class="team-intro">
          <h5 class="team-head">Our team</h5>
          <p class="head-text">The people behind the work</p>
          <p class="team-text">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>
        <div class="team-grid1">
          <div>
            <img src={michael} />
            <p class="team-name">Michael Scott</p>
            <p class="team-desc">General Manager</p>
          </div>
          <div>
            <img src={michael} />
            <p class="team-name">Michael Scott</p>
            <p class="team-desc">General Manager</p>
          </div>
          <div>
            <img src={michael} />
            <p class="team-name">Michael Scott</p>
            <p class="team-desc">General Manager</p>
          </div>
        </div>
        <div class="team-grid2">
          <div class="about-tags">
            <div class="about-tagimg">
              <img src={pam} />
            </div>
            <div class="about-tagname">
              <p class="tag-name1">Pam Beetsley</p>
              <p class="tag-name2">General Manager</p>
            </div>
          </div>
          <div class="about-tags">
            <div class="about-tagimg">
              <img src={pam} />
            </div>
            <div class="about-tagname">
              <p class="tag-name1">Pam Beetsley</p>
              <p class="tag-name2">General Manager</p>
            </div>
          </div>
        </div>
        <div class="team-grid3">
          <div class="about-tags">
            <div class="about-tagimg">
              <img src={dwight} />
            </div>
            <div class="about-tagname">
              <p class="tag-name1">Dwight Schrute</p>
              <p class="tag-name2">General Manager</p>
            </div>
          </div>
          <div class="about-tags">
            <div class="about-tagimg">
              <img src={dwight} />
            </div>
            <div class="about-tagname">
              <p class="tag-name1">Dwight Schrute</p>
              <p class="tag-name2">General Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
