import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [perfume, setPerfume] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [sold, setSold] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/perfume/${id}`)
            .then(res => res.json())
            .then(data => {
                setPerfume(data);
                setQuantity(data.quantity);
                setSold(data.sold);
            })
    }, [id])

    const handleDeliver = () => {
        if(quantity > 0) {
            setSold(sold + 1);
            setQuantity(quantity - 1);
            fetch(`http://localhost:5000/perfume/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({quantity: quantity - 1, sold: sold + 1})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }

    const handleRestock = (e) => {
        e.preventDefault();
        const restockQuantity = parseInt(e.target.quantity.value);
        setQuantity(quantity + restockQuantity);
        fetch(`http://localhost:5000/perfume/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({quantity: quantity + restockQuantity})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        e.target.reset();
    }
    return (
        <div className="container">
            <div className='inventory-single row mt-5'>
                <div className="col-lg-6">
                    <div className="perfume-card exclude">
                        <div className="perfume-info">
                            <h4 className="text-secondary">{perfume?.name}</h4>
                            <p>Price: ${perfume?.price}</p>
                            <p>Quantity: {quantity}</p>
                            <p>{perfume?.description}</p>
                            <p>Supplier: {perfume?.supplier}</p>
                            <p>Sold: {sold}</p>
                            {quantity === 0 ? <p className='text-danger' style={{fontSize: '18px'}}> <i className="fa-solid fa-x"></i> Sold Out</p> : '' }
                            <button className='delivered-btn rounded-pill' onClick={handleDeliver}>Deliver</button>
                        </div>
                        <img className="img-fluid" src={perfume?.img} alt="" />
                    </div>
                </div>
                <div className='col-lg-6 restock-section'>
                    <div>
                        <h4 className='text-center theme-text'>Restock Items</h4>
                        <form onSubmit={handleRestock}>
                            <input className='restock-input' name='quantity' type="number" placeholder='Quantity' /> 
                            <button className='restock-btn mt-2' type='submit'>Restock</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;