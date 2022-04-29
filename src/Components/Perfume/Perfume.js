import React from "react";
import { Card } from "react-bootstrap";
import "./Perfume.css";

const Perfume = ({ perfume }) => {
    const { name, img, description, price, supplier, quantity } = perfume;
    return (
        <div className="col-lg-6">
            <div className="perfume-card">
                <img className="img-fluid" src={img} alt="" />
                <div className="perfume-info">
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>{description.length > 130 ? description.slice(0, 130) + '...' : description}</p>
                    <p>Supplier: {supplier}</p>
                </div>
            </div>
        </div>
    );
};

export default Perfume;
