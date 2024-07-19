import React from "react";
import './Home.css'
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'
import '../Animate.css'
import homeImg from '../Assets/home.svg'
const Home = () => {
    return(
        <div className="home container" >
            <div className="home-left fadeInLeft">
                <h2>Web and Mobile Apps Development Company</h2>
                <div>
                    <p>Your Dedicated Software Development Ally</p>
                    <h3>We provide top-tier web and mobile app development services to global enterprises, boasting a flawless project delivery record. Hire our expert programmers at competitive rates. Our design-centric approach and efficient execution processes ensure the delivery of optimal solutions tailored to your needs.</h3>
                </div>
                
                <div className="home-latest-btn">
                    <div>CONTACT US</div>
                </div>
            </div>
        <div className="home-right fadeInRight">
            <img src={homeImg} alt="" />
        </div>
    </div>
    );
}

export default Home;

// {/* <h3>We provide top-tier web and mobile app development services to global enterprises, boasting a flawless project delivery record. Hire our expert programmers at competitive rates. Our design-centric approach and efficient execution processes ensure the delivery of optimal solutions tailored to your needs.</h3> */}