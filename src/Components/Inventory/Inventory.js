import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [perfume, setPerfume] = useState({});
    const [sold, setSold] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/perfume/${id}`)
            .then(res => res.json())
            .then(data => setPerfume(data))
    }, [id])
    return (
        <div className="container">
            <div className='inventory-single row mt-5'>
                <div className="col-lg-6">
                    <div className="perfume-card exclude">
                        <div className="perfume-info">
                            <h4 className="text-secondary">{perfume?.name}</h4>
                            <p>Price: ${perfume?.price}</p>
                            <p>Quantity: {perfume?.quantity}</p>
                            <p>{perfume?.description}</p>
                            <p>Supplier: {perfume?.supplier}</p>
                            <p>Sold: {sold}</p>
                            <button className='delivered-btn rounded-pill' onClick={() => setSold(sold + 1)}>Delivered</button>
                        </div>
                        <img className="img-fluid" src={perfume?.img} alt="" />
                    </div>
                </div>
                <div className='col-lg-6 restock-section'>
                    <div>
                        <h4 className='text-center theme-text'>Restock Items</h4>
                        <form>
                            <input className='restock-input' type="number" placeholder='Quantity' /> 
                            <button className='restock-btn mt-2' type='submit'>Restock</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;