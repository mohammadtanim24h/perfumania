import React from "react";
import Swal from "sweetalert2";
import issues from "../../images/issues.png";
import "./ReportIssues.css";

const ReportIssues = () => {
    const handleReportIssue = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const description = e.target.description.value;
        if (email && description) {
            Swal.fire({
                title: "Issue reported succesfully!",
                text: "We successfully received your report.",
                icon: "success",
                confirmButtonText: "Close",
            });
        }
        e.target.reset();
    };
    return (
        <div className="container issue-container my-5">
            <h3 className="text-center mb-3 theme-text">Report Issues</h3>
            <div className="report-container">
                <form onSubmit={handleReportIssue} className="report-field">
                    <input
                        className="mb-2 form-control"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        className="form-control mb-2"
                        name="description"
                        placeholder="Issue Description"
                        cols="25"
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit" className="theme-btn">
                        Report
                    </button>
                </form>
                <div className="report-img">
                    <img className="img-fluid" src={issues} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ReportIssues;
