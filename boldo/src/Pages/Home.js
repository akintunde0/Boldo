import React from "react";
import "../Home-components/Home.css";
import Blog from "../Home-components/Blog";
import Headbody from "../Home-components/Headbody";
import Enterprise from "../Home-components/Enterprise";
import Environment from "../Home-components/Environment";
import Imagegrid from "../Home-components/Imagegrid";
import Service from "../Home-components/Service";

function Home() {
  return (
    <div className="size">
      <Headbody />
      <Service />
      <Imagegrid />

      <Enterprise />

      <Blog />
      <Environment />
    </div>
  );
}

export default Home;
