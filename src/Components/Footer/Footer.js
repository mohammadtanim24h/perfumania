import React from "react";
import "./Footer.css";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer container text-center">
            <div className="row">
                <div className="footer-left col-md-6">
                    <div>
                        <h3>Perfumania</h3>
                        <p>&copy;Copyright {year} All rights Reserved</p>
                    </div>
                </div>
                <div className="footer-right col-md-6">
                    <div className="text-start">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </div>
                    <div>
                        <h5>Address</h5>
                        <li>15412 Detroit Ave</li>
                        <li>Lakewood, Ohio</li>
                        <li>United States</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
