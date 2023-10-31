import React from "react";
import Headbody from "../About-components/Headbody";
import Number from "../About-components/Number";
import Story from "../About-components/Story";
import Team from "../About-components/Team";
import Blog from "../About-components/Blog";

function About() {
  return (
    <div className="about-size">
      <Headbody />
      <Number />
      <Story />
      <Team />
      <Blog />
    </div>
  );
}

export default About;
