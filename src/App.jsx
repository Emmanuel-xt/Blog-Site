import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <body>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/project" element={<Project />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};

export default App;
