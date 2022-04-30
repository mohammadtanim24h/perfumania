import React from "react";
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-spinner">
            <div className="spinner-grow text-danger" role="status"></div>
        </div>
    );
};

export default Loading;
