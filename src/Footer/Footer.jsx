import './Footer.css'
import React from 'react'
import logo from '../Assets/logo.png'
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon';
import InstagramFillIcon from 'remixicon-react/InstagramFillIcon';
import FacebookBoxFillIcon from 'remixicon-react/FacebookBoxFillIcon';
import WhatsappFillIcon from 'remixicon-react/WhatsappFillIcon';
import Map2FillIcon from 'remixicon-react/MapPin2FillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import PhoneFillIcon from 'remixicon-react/PhoneFillIcon';

const Footer = () => {
    return(
        <div className=' footer'>
            <footer>
                <div className='container'>
                    <div className='row spacebet'>
                        <div className='col-lg-4 col-mg-5 left'>
                            <a href='#' className='logo'>
                                <img src={logo} alt=''></img>
                            </a>
                            <p>We deliver web and mobile app development services to global businesses, with 100% project delivery success. Hire the best programmers at affordable prices. Our design-focused approach and project execution processes help you to deliver the right solutions.</p>
                            <ul>
                                <li><a href='https://www.linkedin.com/company/svastsystechnology/'><LinkedinBoxFillIcon className="some-class" size={26} /></a></li>
                                <li><a href='https://www.instagram.com/svastsys.tech/'><InstagramFillIcon className="some-class" size={26} /></a></li>
                                <li><a href='https://www.instagram.com/svastsys.tech/'><FacebookBoxFillIcon className="some-class" size={26} /></a></li>
                                <li><a><WhatsappFillIcon className="some-class" size={26} /></a></li>
                            </ul>
                        </div>
                        <div className='col-lg-2 col-mg-3 center'>
                            <div className='heading'>Navigation</div>
                            <ul>
                                <li><a className='active'>Home</a></li>
                                <li><a className='active'>About</a></li>
                                <li><a className='active'>Career</a></li>
                                <li><a className='active'>Contact</a></li>
                                <li><a className='active'>Work Process</a></li>
                                <li><a className='active'>Engagement Model</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-mg-3 center'>
                        <div className='heading'>Services</div>
                            <ul>
                                <li><a className='active'>Web Development</a></li>
                                <li><a className='active'>App Development</a></li>
                                <li><a className='active'>Digital Marketing</a></li>
                                <li><a className='active'>E-Commerce Development</a></li>
                                <li><a className='active'>DevOps</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-mg-4 right'>
                            <div className='heading'>Primary Contact</div>
                            <ul>
                                <li className='d-flex align-content-center'>
                                    <div className='icon pt-1'><Map2FillIcon className="some-class" size={20} /></div>
                                    <a href=''>The Galleria, 303, Yogi Chowk Rd,<br/> nr. Anupam Business Hub,<br/> Yogi Chowk Ground, Chikuwadi,<br/> Nana Varachha, Surat, Gujarat 394105</a>
                                </li>
                                <li className='d-flex align-content-center'>
                                    <div className='icon align-items-center'><MailFillIcon className="some-class" size={20} /></div>
                                    <a href=''>svastsys.tech@gmail.com</a>
                                </li>
                                <li className='d-flex align-content-center'>
                                    <div className='icon align-items-center'><PhoneFillIcon className="some-class" size={20} /></div>
                                    <a href=''>+91 7990842236</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='copyright d-flex align-items-center justify-content-center mt-3'>
                        <p>© 2021 All Rights Reserved</p>
                        <div  className="dot"></div>
                        <p>
                            <a href="">Terms of Service</a>  |
                            <a href="">  Privacy Policy</a>  |
                            <a href="">  Sitemap</a>
                        </p>

                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;