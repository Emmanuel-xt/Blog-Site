import React from "react";
import BlogImage from "../blog-images/BlogImage.jpg";

import BlogImage1 from "../blog-images/BlogImage.jpg";
import BlogImage2 from "../blog-images/blogii.jpg";
import BlogImage3 from "../blog-images/Blogiii.jpg";
import BlogImage4 from "../blog-images/blog-4.jpg";
import BlogImage5 from "../blog-images/blog-5.jpg";
import BlogImage6 from "../blog-images/blog-6.jpg";

const blogs = [
  {
    img: BlogImage1,
    title: "How to Travel Like a Local: 5 Best Tips For Amazing Trips",
  },
  {
    img: BlogImage2,
    title: "What Does a Travel Guide Do? How to Become a Travel Guide",
  },
  {
    img: BlogImage3,
    title: "18 Easy Steps for Planning Your Next Trip Perfectly",
  },
  {
    img: BlogImage4,
    title: "8 Cool Digital Nomad Tools You Should Be Using",
  },
  {
    img: BlogImage5,
    title: "Travel Blogging For Beginners In 7 Easy Steps",
  },
  {
    img: BlogImage6,
    title: "Europe, I’m Gonna Miss You! My 6 Favorite Hidden Gems in Europe",
  },
];

const Blogs = () => {
  return (
    <>
        <h2>LATEST ARTICLES</h2>
      <div className="blogs">
        {
            blogs.map( (blog , index )  => (
                <div className="blog" key={index}>
                <img src={blog.img} alt="" />
                <div className="texts">
                <h4 className="blog-title">{blog.title}</h4>
            <p className="summary">
              If you’ve ever felt like the world is too big, too confusing or
              just downright overwhelming to tackle on your own, then this blog
              post is for you. I know what it feels like when it seems like
              there are so many things in front of us that we can't do anything
              about because they're just too big. It's not true though! Finding
              ways to be more savvy and less overwhelmed by our lives is
              actually really easy with these 61 tips that will make you a
              savvier traveler and give you some peace of mind at home. Read on
              if travel has been on your mind lately but maybe you don't have
              the time or money to take a break from life right now – this post
              is perfect for all types of travelers! 1. Be prepared with a
              travel kit that includes necessities such as medications Make sure
              to carry a travel kit with you when going on vacation. This will
              make it easy for you to stay healthy while away from home by
              including things like medicine and other items that are essential
              for your health. Whether you're going for a week or two on
              vacation, or on a business trip, make sure to travel prepared. My
              travel kit always includes tons of medicine. I don't want to catch
              something while out on the road, so I'm prepared for anything!
              It’s also a good idea to include emergency contact information
              into your travel kit. 2. Keep your passport handy at all times –
              don't put it in a safe or locker Don't leave your passport in a
              safe. I don't want to sound like your mother, but you should keep
              it with you at all times because if it's stolen then that could
              cause problems when going through security or leaving the country.
              Always keep your passport in a place you can easily access it in
              case you need to make an emergency exit. 3. Update apps to your
              destination's currency to track your spending You can track your
              spending more easily if you update the apps on your phone to the
              destination's currency. That way, it will be easier for you to
              check how much money you have left so that there are no surprises
              when it comes time to pay.
            </p>
          </div>
        </div>

            ))
        }
      </div>
    </>
  );
};

export default Blogs;
