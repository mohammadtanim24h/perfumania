import React from "react";
import "./NotFound.css";
import notFoundPic from "../../images/404.jpg";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found">
                <h1 className="text-center text-danger">Oops!</h1>
                <div className="text-center">
                    <img className="img-fluid" src={notFoundPic} alt="" />
                </div>
                <div className="text-center">
                    <h3 className="text-danger">Page Not Found</h3>
                    <p>The page you are looking for is unavailable.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
