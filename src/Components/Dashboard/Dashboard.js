import React from "react";
import useSold from "../../hooks/useSold";
import "./Dashboard.css";

const Dashboard = () => {
    const sold = useSold();
    return (
        <div className="container">
            <div className="dashboard-container">
                <div className="perfumes-sold">
                    <h1>{sold}</h1>
                    <h5>Total Perfumes Sold</h5>
                </div>
                <div className="total-quantity">
                    <h1>Quantity</h1>
                    <h5>Total Products Available</h5>
                </div>
                <div className="total-products">
                    <h1>Products</h1>
                    <h5>Number of Products</h5>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
