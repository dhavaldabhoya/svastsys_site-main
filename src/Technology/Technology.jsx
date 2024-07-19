import React, { useState } from "react";
import './Technology.css'
import curve3 from '../Assets/curve-3.png'


const Technology = () => {

    const [menu, setMenu] = useState("Mobile");

    const Mobile = () => {
        return (
            <div className="content">
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Android_Studio_Icon.svg/1200px-Android_Studio_Icon.svg.png" alt="Android Studio" />
                    <p>Android Studio</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Xcode_icon_with_hammer.svg/1200px-Xcode_icon_with_hammer.svg.png" alt="Xcode" />
                    <p>Xcode</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/React_logo.svg/1200px-React_logo.svg.png" alt="React Native" />
                    <p>React Native</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flutter_Logo.svg/1200px-Flutter_Logo.svg.png" alt="Flutter" />
                    <p>Flutter</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kotlin_logo.svg/1200px-Kotlin_logo.svg.png" alt="Kotlin" />
                    <p>Kotlin</p>
                </div>
            </div>
        )
    }
    const Frontend = () => {
        return (
            <div className="content">
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Android_Studio_Icon.svg/1200px-Android_Studio_Icon.svg.png" alt="Angular JS" />
                    <p>Angular JS</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Xcode_icon_with_hammer.svg/1200px-Xcode_icon_with_hammer.svg.png" alt="React JS" />
                    <p>React JS</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/React_logo.svg/1200px-React_logo.svg.png" alt="Typescript" />
                    <p>Typescript</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flutter_Logo.svg/1200px-Flutter_Logo.svg.png" alt="HTML5" />
                    <p>HTML5</p>
                </div>
            </div>
        )
    }
    const Backend = () => {
        return (
            <div className="content">
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Android_Studio_Icon.svg/1200px-Android_Studio_Icon.svg.png" alt="Node JS" />
                    <p>Node JS</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Xcode_icon_with_hammer.svg/1200px-Xcode_icon_with_hammer.svg.png" alt="PHP" />
                    <p>PHP</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/React_logo.svg/1200px-React_logo.svg.png" alt="Laravel" />
                    <p>Laravel</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flutter_Logo.svg/1200px-Flutter_Logo.svg.png" alt="CodeIgniter" />
                    <p>CodeIgniter</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flutter_Logo.svg/1200px-Flutter_Logo.svg.png" alt="Express.JS" />
                    <p>Express.JS</p>
                </div>
            </div>
        )
    }
    const Design = () => {
        return (
            <div className="content">
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Android_Studio_Icon.svg/1200px-Android_Studio_Icon.svg.png" alt="Photoshop" />
                    <p>Photoshop</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Xcode_icon_with_hammer.svg/1200px-Xcode_icon_with_hammer.svg.png" alt="Figma" />
                    <p>Figma</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/React_logo.svg/1200px-React_logo.svg.png" alt="Illustrator" />
                    <p>Illustrator</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flutter_Logo.svg/1200px-Flutter_Logo.svg.png" alt="After Effects" />
                    <p>After Effects</p>
                </div>
            </div>
        )
    }
    const Database = () => {
        return (
            <div className="content">
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Android_Studio_Icon.svg/1200px-Android_Studio_Icon.svg.png" alt="MongoDB" />
                    <p>MongoDB</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Xcode_icon_with_hammer.svg/1200px-Xcode_icon_with_hammer.svg.png" alt="Firebase" />
                    <p>Firebase</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/React_logo.svg/1200px-React_logo.svg.png" alt="PostgreSQL" />
                    <p>PostgreSQL</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flutter_Logo.svg/1200px-Flutter_Logo.svg.png" alt="MySQL" />
                    <p>MySQL</p>
                </div>
            </div>
        )
    }
    const Infrastructure = () => {
        return (
            <div className="content">
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Android_Studio_Icon.svg/1200px-Android_Studio_Icon.svg.png" alt="Amazon Web Service" />
                    <p>Amazon Web Service</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Xcode_icon_with_hammer.svg/1200px-Xcode_icon_with_hammer.svg.png" alt="Google Cloud" />
                    <p>Google Cloud</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/React_logo.svg/1200px-React_logo.svg.png" alt="PostgreSQL" />
                    <p>Digital Ocean</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flutter_Logo.svg/1200px-Flutter_Logo.svg.png" alt="Microsoft Azure" />
                    <p>Microsoft Azure</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flutter_Logo.svg/1200px-Flutter_Logo.svg.png" alt="Selenium" />
                    <p>Selenium</p>
                </div>
                <div className="item-tech">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flutter_Logo.svg/1200px-Flutter_Logo.svg.png" alt="MySQL" />
                    <p>Gradle</p>
                </div>
            </div>
        )
    }


    const renderMenuContent = () => {
        switch (menu) {
            case "Mobile":
                return <Mobile />;
            case "Frontend":
                return <Frontend/>; // Replace with actual frontend content
            case "Backend":
                return <Backend/>; // Replace with actual backend content
            case "Design":
                return <Design/>; // Replace with actual design content
            case "Database":
                return <Database/>; // Replace with actual database content
            case "Infrastructure":
                return <Infrastructure/>; // Replace with actual infrastructure content
            default:
                return null;
        }
    };

    return (
        <>
        <div class="portfolio-bg-curve">
               <img src={curve3} alt="" />
          </div>
        <div className="container te-main fadeInLeft">
            <div className="tech-head">
                <h3>Technologies We<br />Work With</h3>
            </div>
            <div>
                <div className="mytit">
                    <div className="title-tech">
                        <p onClick={() => { setMenu("Mobile") }} style={{ color: menu === "Mobile" ? "#086ad8" : "#686666" }}  >Mobile{menu === "Mobile" ? <hr /> : <></>}</p>
                        <p onClick={() => { setMenu("Frontend") }} style={{ color: menu === "Frontend" ? "#086ad8" : "#686666" }} >Frontend{menu === "Frontend" ? <hr /> : <></>}</p>
                        <p onClick={() => { setMenu("Backend") }} style={{ color: menu === "Backend" ? "#086ad8" : "#686666" }} >Backend{menu === "Backend" ? <hr /> : <></>}</p>
                        <p onClick={() => { setMenu("Design") }}  style={{ color: menu === "Design" ? "#086ad8" : "#686666" }} >Design{menu === "Design" ? <hr /> : <></>}</p>
                        <p onClick={() => { setMenu("Database") }}  style={{ color: menu === "Database" ? "#086ad8" : "#686666" }} >Database{menu === "Database" ? <hr /> : <></>}</p>
                        <p onClick={() => { setMenu("Infrastructure") }} style={{ color: menu === "Infrastructure" ? "#086ad8" : "#686666" }} >Infrastructure{menu === "Infrastructure" ? <hr /> : <></>}</p>
                    </div>
                    {renderMenuContent()}

                </div>
            </div>
        </div></>
    )
}

export default Technology;


