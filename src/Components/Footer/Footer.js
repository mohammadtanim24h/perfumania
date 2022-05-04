import React from "react";
import "./Footer.css";
import facebook from '../../images/icons8-facebook.png';
import twitter from '../../images/icons8-twitter.png';
import instagram from '../../images/icons8-instagram.png';
import youtube from '../../images/icons8-youtube-48.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="footer-left col-md-4">
                        <div>
                            <h3>Perfumania</h3>
                            <p>&copy;Copyright {year} All rights Reserved</p>
                        </div>
                    </div>
                    <div className="footer-right col-md-8">
                        <div>
                            <h5>Address</h5>
                            <li>15412 Detroit Ave</li>
                            <li>Lakewood, Ohio</li>
                            <li>United States</li>
                        </div>
                        <div>
                            <h5>Legal</h5>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                        </div>
                        <div>
                            <h5>About</h5>
                            <li>Benefits</li>
                            <li>Team</li>
                            <li>Executives</li>
                        </div>
                        <div className="text-center">
                            <h4>Social Media</h4>
                           <div className=" d-flex justify-content-center align-items-center social">
                            <img style={{cursor: 'pointer'}} width={36} className="me-2" src={facebook} alt="facebook" />
                            <img style={{cursor: 'pointer'}} width={36} className="me-2" src={twitter} alt="twitter" />
                            <img style={{cursor: 'pointer'}} width={36} className="me-2" src={instagram} alt="instagram" />
                            <img style={{cursor: 'pointer'}} width={36} className="me-2" src={youtube} alt="youtube" />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
