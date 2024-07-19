// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import './Navbar.css';
import logo from '../Assets/logo.png'
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/dist/js/bootstrap.bundle.min";




import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "../Icons";
import curve1 from '../Assets/curve-1.png'
const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <><div class="single-welcome-slide">

            <div class="background-curve">
                <img src={curve1} alt="" />
            </div>
        </div>
            <nav className="navbar">

                <div className="nav-container">
                    <a href="#" ><img src={logo} ></img></a>


                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="#"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="#services"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#hireus"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Hire Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#technology"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                technology
                            </a>
                        </li>
                        <div className="get-a-quote ml-4 mr-3">
                        <a href="#" className="btn uza-btn">Contact Us</a>
                    </div>
                    </ul>
                    
                    <div className="nav-icon" onClick={handleClick}>
                        {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

                        {click ? (
                            <span className="icon">
                                <HamburgetMenuClose />{" "}
                            </span>
                        ) : (
                            <span className="icon">
                                <HamburgetMenuOpen />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;




