import React from "react";
import useProductsCount from "../../hooks/useProductsCount";
import useQuantity from "../../hooks/useQuantity";
import useSold from "../../hooks/useSold";
import "./Dashboard.css";

const Dashboard = () => {
    const sold = useSold();
    const quantity = useQuantity();
    const productsCount = useProductsCount();
    return (
        <div className="container">
            <div className="dashboard-container">
                <div className="perfumes-sold">
                    <h1>{sold}</h1>
                    <h5>Total Perfumes Sold</h5>
                </div>
                <div className="total-quantity">
                    <h1>{quantity}</h1>
                    <h5>Total Quantity</h5>
                </div>
                <div className="total-products">
                    <h1>{productsCount}</h1>
                    <h5>Number of Products</h5>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
