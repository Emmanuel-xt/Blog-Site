import React from "react";

import Body from "./Body";
import Blogs from "./Blogs";
import SpecialPost from "./SpecialPosts";
import Brief from './Brief'
import Touch from './Touch'

const Home = () => {
  return (
    <>
      <section className="bg">
        <Body />
      </section>

      <section className="blog-sec-con">
        <div className="blogs-sec">
          <Blogs />
        </div>
      </section>

      <section className="special-blogs-con">
        <div className="special-blogs">
          <SpecialPost />
        </div>
      </section>

      <div className="brief-sec-con">
        <Brief />
      </div>

      <div className="touch-sec-con">
        <Touch />
      </div>
    </>
  );
};

export default Home;
