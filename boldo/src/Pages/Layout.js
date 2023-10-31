import React from "react";
import Navbar from "../Home-components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Footer from "../Home-components/Footer";

function Layout() {
  return (
    <div className="Body">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
