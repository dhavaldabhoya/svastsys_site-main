import React from "react";
import './HappyClient.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import curve4 from '../Assets/curve-4.png'
const HappyClient = () => {
    return(
        <><div class="blog-bg-curve">
        <img src={curve4} alt=""/>
    </div>
        <div className="container client">
            <div className="happy-client">
                <p>
                    <span className="counter2" >170</span>
                    +
                </p>
                <h5>HAPPY CLIENTS</h5>
            </div>

            <div className="happy-client">
                <p>
                    <span className="counter2" >245</span>
                    +
                </p>
                <h5>FINISHED PROJECT</h5>
            </div>
            
            <div className="happy-client">
                <p>
                    <span className="counter2" >35</span>
                    +
                </p>
                <h5>SKILLED EXPERTS</h5>
            </div>

            <div className="happy-client">
                <p>
                    <span className="counter2" >15</span>
                    +
                </p>
                <h5>Teams</h5>
            </div>
        </div></>
    )
}

export default HappyClient;