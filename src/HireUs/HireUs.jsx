import React from "react";
import './HireUs.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import hire from '../Assets/hireImg.svg'
import MicroscopeLineIcon from 'remixicon-react/MicroscopeLineIcon';
import TimeLineIcon from 'remixicon-react/TimeLineIcon';
import EmotionHappyLineIcon from 'remixicon-react/EmotionHappyLineIcon';


const HireUs = () => {
    return(
        <div className="container hire">
            <div className="hire-us">
                <div className="hire-left align-item-center">
                    <h6>HIRE US</h6>
                    <h2>Why Work with <span>Svastsys</span></h2>
                    <p>Usually, a model is created after conducting an interview, referred to as business analysis. The interview consists of a facilitator.</p>
                    <div className="quotes">
                        <div className="item">
                            <div className="quotes-img col-lg-1 col-2">
                                <div className="icon">
                                    <MicroscopeLineIcon className="ri-microscope--line"></MicroscopeLineIcon>
                                </div>
                                {/* <img src={} alt=""></img> */}
                            </div>
                            <div className="quotes-det col-lg-11 col-10">
                                <h5>Expertise on Multiple Platforms</h5>
                                <p>Twinnet has elite development team which has proficient expertise on the cutting-edge technologies and tools.</p>
                            </div>
                            
                        </div>
                        <div className="item">
                            <div className="quotes-img col-lg-1 col-2">
                            <div className="icon">
                                    <TimeLineIcon className="ri-microscope--line"></TimeLineIcon>
                                </div>
                                {/* <img src={} alt=""></img> */}
                            </div>
                            <div className="quotes-det">
                                <h5>More than Decade of Experience</h5>
                                <p>Twinnet has elite development team which has proficient expertise on the cutting-edge technologies and tools.</p>
                            </div>
                            
                        </div>
                        <div className="item">
                            <div className="quotes-img col-lg-1 col-2">
                            <div className="icon">
                                    <EmotionHappyLineIcon className="ri-microscope--line"></EmotionHappyLineIcon>
                                </div>
                                {/* <img src={} alt=""></img> */}
                            </div>
                            <div className="quotes-det">
                                <h5>Happy Clients base Across Globe</h5>
                                <p>Twinnet has elite development team which has proficient expertise on the cutting-edge technologies and tools.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
{/* image */}
                <div className="col-lg-6 col-md-6 d-flex align-items-center order-lg-2 order-md-2">
                <div className="home-right">
                    <img src={hire} alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default HireUs;