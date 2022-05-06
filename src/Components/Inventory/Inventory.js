import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageTitle from '../PageTitle/PageTitle';
import './Inventory.css';

const Inventory = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [perfume, setPerfume] = useState({});
    const [reload, setReload] = useState(false);
    useEffect(() => {
        fetch(`https://murmuring-stream-35906.herokuapp.com/perfume/${id}`)
            .then(res => res.json())
            .then(data => {
                setPerfume(data);
            })
    }, [id, reload])

    // Perfume Deliver
    const handleDeliver = () => {
        if(parseInt(perfume?.quantity) === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Not enough perfumes to deliver!',
              })
        }
        if(parseInt(perfume?.quantity) > 0) {
            fetch(`https://murmuring-stream-35906.herokuapp.com/perfume/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({quantity: parseInt(perfume?.quantity) - 1, sold: parseInt(perfume?.sold) + 1})
            })
            .then(res => res.json())
            .then(data => {
                setReload(!reload);
            })
        }
    }

    // Perfume Restock
    const handleRestock = (e) => {
        e.preventDefault();
        const restockQuantity = parseInt(e.target.quantity.value);
        if(restockQuantity < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You cannot stock negative quantity!',
              })
            e.target.reset();
            return;
        }
        fetch(`https://murmuring-stream-35906.herokuapp.com/perfume/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({quantity: parseInt(perfume?.quantity) + restockQuantity})
        })
        .then(res => res.json())
        .then(data => {
            setReload(!reload);
        })
        e.target.reset();
    }
    return (
        <div className="container">
            <PageTitle title="Inventory"></PageTitle>
            <div className='inventory-single row mt-5'>
                <div className="col-lg-6">
                    <div className="perfume-card exclude">
                        <div className="perfume-info">
                            <h4 className="text-secondary">{perfume?.name}</h4>
                            <p>Price: ${perfume?.price}</p>
                            <p>{perfume?.description}</p>
                            <p>Product ID: {perfume?._id}</p>
                            <p>Supplier: {perfume?.supplier}</p>
                            <p>Quantity: {perfume?.quantity}</p>
                            <p>Sold: {perfume?.sold}</p>
                            {perfume?.quantity === 0 ? <p className='text-danger' style={{fontSize: '18px'}}> <i className="fa-solid fa-x"></i> Sold Out</p> : '' }
                            <button className='delivered-btn rounded-pill' onClick={handleDeliver}>Delivered</button>
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
            <div className="text-center">
                <Link to="/manageInventories">
                    <button className="manage-inventories-btn">
                        Manage Inventories
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;