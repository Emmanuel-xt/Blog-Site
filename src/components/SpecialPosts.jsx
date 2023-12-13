import React from "react";
import hiking from  '../blog-images/hiking-v1.jpg'
import walking from  '../blog-images/walking-v1.jpg'

const posts = [
  {
    title: "Everest Camp Trek",
    img:  hiking ,
    text: "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit."
  },
  {
    title: "Walking Holiday",
    img:  walking,
    text: "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit."
  },
]

const SpecialPost = () => {
  return (
    <>
      <div className="special-blogs">
        {
          posts.map((post , index) => (
            <div className="special-blog"  key={post.index}>
            <img src={post.img} alt="" />
            <div className="texts">
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <button className="btn m">Learn More</button>
            </div>
        </div>
            
          ))
        }
        </div>
    </>
  );
};

export default SpecialPost;
