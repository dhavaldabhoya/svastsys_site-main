import React from "react";
import './Services.css'
import styled, { css } from 'styled-components'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import curve2 from '../Assets/curve-2.png'
const Services = () => {
     const TexhnologyRegisterContainer = styled.div`
//     width: 360px;
    @media (min-width:0px) and (max-width:360px) {
     //     width: 100%;
    }
    `;

     return (
          <>
          <div class="about-bg-pattern">
            <img src={curve2} alt=""/>
        </div>
          <div className="container servc">
               <div className="services-title">
                    <p >Exclusive services for</p>
                    <p>your business</p>
               </div>
               <div className="feature_items fadeInRightBig">
                    <div className="feature_single_items">
                         <div className="feature_icon">
                              {/* <img src={ios} alt="" /> */}
                         </div>
                         <div className="feature_item_title">
                              <h3>Website Development</h3>
                              <p>We specialize in top-quality web applications, with a team of expert developers. Our services are trusted by leading global companies, and Silicon Nexus is renowned for innovation and cutting-edge technology. Let us serve your web application needs.</p>
                         </div>
                    </div>
                    <div className="feature_single_items">
                         <div className="feature_icon">
                              {/* <img src={ios} alt="" /> */}
                         </div>
                         <div className="feature_item_title">
                              <h3>Mobile Application Development</h3>
                              <p>We provide top-tier, customized mobile apps for various business sectors. Our expertise spans Mobile App Development, Android, iOS, and React Native,ensuring feature-rich solutions for our clients.</p>
                         </div>
                    </div>

                    <div className="feature_single_items">
                         <div className="feature_icon">
                              {/* <img src={ios} alt="" /> */}
                         </div>
                         <div className="feature_item_title">
                              <h3>Game Development</h3>
                              <p>Unity, a leading game development engine, supports both 2D and 3D game development and is widely used for VR and AR solutions. Available for free evaluation, it has evolved into a versatile platform for complex XR projects. When you face bugs or issues, Svastsys is here to assist you.</p>
                         </div>
                    </div>
                    <div className="feature_single_items">
                         <div className="feature_icon">
                              {/* <img src={ios} alt="" /> */}
                         </div>
                         <div className="feature_item_title">
                              <h3>Marketing & Branding</h3>
                              <p>Digital marketing encompasses all marketing activities on digital channels, including computers, mobile phones, and other electronic devices. It covers email, mobile, content, blog posts, SEO, and social media marketing, connecting businesses with over 3.6 billion internet users worldwide. Its ability to target specific demographics and integrate into strategic marketing plans makes it highly effective for increasing engagement and attracting business.</p>
                         </div>
                    </div>
                    <div className="feature_single_items">
                         <div className="feature_icon">
                              {/* <img src={ios} alt="" /> */}
                         </div>
                         <div className="feature_item_title">
                              <h3>E-commerce Solutions</h3>
                              <p>We offer comprehensive E-commerce solutions, designed to enhance your online business. Our services include custom website development, secure payment gateways, and seamless user experiences to boost your sales and customer satisfaction.</p>
                         </div>
                    </div>
                    <div className="feature_single_items">
                         <div className="feature_icon">
                              {/* <img src={ios} alt="" /> */}
                         </div>
                         <div className="feature_item_title">
                              <h3>UI/UX Designing</h3>
                              <p>We offer expert UI/UX design services to create intuitive and visually appealing digital experiences. Our designs focus on user satisfaction and seamless interaction to enhance your product's functionality and appeal.</p>
                         </div>
                    </div>
               </div>
          </div></>
     );
}

export default Services;