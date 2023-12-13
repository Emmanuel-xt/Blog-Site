import React from "react";
import Blogiii from '../blog-images/Blogiii.jpg'
import woman from '../blog-images/woman.jpg'
import tourism from '../blog-images/tourism.jpg'

const Touch = () => {
    return ( 
        <>
        <div className="touch-con">
            <div className="touch-texts">
                <h3>What do We do?</h3>
                <p>We are experts in React 
                    , we live with react and react with us,
                    we create all kinds of website
                    including ones with proffessional react 
                    features.We also create innovative weebsites 
                    with just Html, css and Javascript but our main 
                    field is React an django, therefore feel free to
                     contact us because we are ever ready
                </p>
                <button className="btn m">Get in Touch</button>
            </div>

            <div className="touch-img">
                <img src={woman} alt="" />
                <img src={tourism} alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Touch;