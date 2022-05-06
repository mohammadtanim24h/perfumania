import React from "react";
import issues from "../../images/issues.png";
import './ReportIssues.css';

const ReportIssues = () => {
    return (
        <div className="container issue-container my-5">
            <h3 className="text-center mb-3 theme-text">Report Issues</h3>
            <div className="report-container">
                <div className="report-field">
                    <input className="mb-2 form-control" type="email" placeholder="Your Email" />
                    <textarea className="form-control mb-2" placeholder="Issue Description" cols="25" rows="5"></textarea>
                    <button className="theme-btn">Report</button>
                </div>
                <div className="report-img">
                    <img className="img-fluid" src={issues} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ReportIssues;
