import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyPerfume = ({perfume}) => {
    const { name, img, description, price, supplier, quantity, _id } = perfume;
    return (
        <div className="col-lg-6">
            <div className="perfume-card">
                <div className="perfume-info">
                    <h4 className="text-secondary">{name}</h4>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>{description.length > 133 ? description.slice(0, 133) + '...' : description}</p>
                    <p>Supplier: {supplier}</p>
                    <button className='theme-btn rounded-pill'>Delete</button>
                </div>
                <img className="img-fluid" src={img} alt="" />
            </div>
        </div>
    );
};

export default MyPerfume;