import React from "react";
import { FaVine } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <section className="absolute">
      <div className="nav-bar-con">
        <div className="brand-con">
          <FaVine className="getty" />
          <span className="brand">Getty Blogs</span>
        </div>

        <div >
          <Link to="/"><span className="navs">home</span></Link>
          <Link to="/blog"><span className="navs">Blog</span></Link>
          <Link to="/project"><span className="navs">Projects</span></Link>
          <Link to="/services"><span className="navs">Services</span></Link>
          <button className="btn navs" style={{backgroundColor:"rgb(251,32,86)"}}>Take Action</button>
        </div>

      </div>
      </section>
    </>
  );
};

export default Navbar;
