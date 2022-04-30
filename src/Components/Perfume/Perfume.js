import React from "react";
import { useNavigate } from "react-router-dom";
import "./Perfume.css";

const Perfume = ({ perfume }) => {
    const { name, img, description, price, supplier, quantity, _id } = perfume;
    const navigate = useNavigate();
    return (
        <div className="col-lg-6">
            <div className="perfume-card">
                <div className="perfume-info">
                    <h4 className="text-secondary">{name}</h4>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>{description.length > 133 ? description.slice(0, 133) + '...' : description}</p>
                    <p>Supplier: {supplier}</p>
                    <button onClick={() => navigate(`/inventory/${_id}`)} className="update-btn rounded-pill">Update</button>
                </div>
                <img className="img-fluid" src={img} alt="" />
            </div>
        </div>
    );
};

export default Perfume;
