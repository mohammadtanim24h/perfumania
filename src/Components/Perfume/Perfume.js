import React from "react";
import "./Perfume.css";

const Perfume = ({ perfume }) => {
    const { name, img, description, price, supplier, quantity } = perfume;
    return (
        <div className="col-lg-6">
            <div className="perfume-card">
                <div className="perfume-info">
                    <h4 className="text-secondary">{name}</h4>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>{description.length > 130 ? description.slice(0, 130) + '...' : description}</p>
                    <p>Supplier: {supplier}</p>
                    <button className="update-btn rounded-pill">Update</button>
                </div>
                <img className="img-fluid" src={img} alt="" />
            </div>
        </div>
    );
};

export default Perfume;
