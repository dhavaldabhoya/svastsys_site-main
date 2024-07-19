import React from "react";
import './Industries.css'
import styled, { css } from 'styled-components'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import curve3 from '../Assets/curve-3.png'
const Industries = () => {
     const TexhnologyRegisterContainer = styled.div`
    width: 360px;
    @media (min-width:0px) and (max-width:360px) {
         width: 50%;
    }
    `;

     return (
          <><div class="portfolio-bg-curve">
               <img src={curve3} alt="" />
          </div>
               <div className="container">
                    <div className="industries-title">
                         <p>Industries We  Serve</p>
                         <p></p>
                    </div>
                    <div className="industries_items">
                         <TexhnologyRegisterContainer className="industries_single_items">
                              <div className="industries_icon">
                                   {/* <img src={ios} alt="" /> */}
                              </div>
                              <div className="industries_item_title">
                                   <h5>Housing & Real Estate</h5>
                              </div>
                         </TexhnologyRegisterContainer>
                         <TexhnologyRegisterContainer className="industries_single_items">
                              <div className="industries_icon">
                                   {/* <img src={ios} alt="" /> */}
                              </div>
                              <div className="industries_item_title">
                                   <h5>Travel & Hospitality</h5>
                              </div>
                         </TexhnologyRegisterContainer>
                         <TexhnologyRegisterContainer className="industries_single_items">
                              <div className="industries_icon">
                                   {/* <img src={ios} alt="" /> */}
                              </div>
                              <div className="industries_item_title">
                                   <h5>Education & e-learning</h5>
                              </div>
                         </TexhnologyRegisterContainer>
                         <TexhnologyRegisterContainer className="industries_single_items">
                              <div className="industries_icon">
                                   {/* <img src={ios} alt="" /> */}
                              </div>
                              <div className="industries_item_title">
                                   <h5>Logistics & Distribution</h5>
                              </div>
                         </TexhnologyRegisterContainer>
                         <TexhnologyRegisterContainer className="industries_single_items">
                              <div className="industries_icon">
                                   {/* <img src={ios} alt="" /> */}
                              </div>
                              <div className="industries_item_title">
                                   <h5>Social Networking</h5>
                              </div>
                         </TexhnologyRegisterContainer>
                         <TexhnologyRegisterContainer className="industries_single_items">
                              <div className="industries_icon">
                                   {/* <img src={ios} alt="" /> */}
                              </div>
                              <div className="industries_item_title">
                                   <h5>Healthcare & Fitness</h5>
                              </div>
                         </TexhnologyRegisterContainer>
                         <TexhnologyRegisterContainer className="industries_single_items">
                              <div className="industries_icon">
                                   {/* <img src={ios} alt="" /> */}
                              </div>
                              <div className="industries_item_title">
                                   <h5>Agriculture</h5>
                              </div>
                         </TexhnologyRegisterContainer>
                         <TexhnologyRegisterContainer className="industries_single_items">
                              <div className="industries_icon">
                                   {/* <img src={ios} alt="" /> */}
                              </div>
                              <div className="industries_item_title">
                                   <h5>Banking Services</h5>
                              </div>
                         </TexhnologyRegisterContainer>
                         <TexhnologyRegisterContainer className="industries_single_items">
                              <div className="industries_icon">
                                   {/* <img src={ios} alt="" /> */}
                              </div>
                              <div className="industries_item_title">
                                   <h5>Food & Restaurant</h5>
                              </div>
                         </TexhnologyRegisterContainer>
                         <TexhnologyRegisterContainer className="industries_single_items">
                              <div className="industries_icon">
                                   {/* <img src={ios} alt="" /> */}
                              </div>
                              <div className="industries_item_title">
                                   <h5>Sports</h5>
                              </div>
                         </TexhnologyRegisterContainer>
                    </div>
               </div></>
     );
}

export default Industries;