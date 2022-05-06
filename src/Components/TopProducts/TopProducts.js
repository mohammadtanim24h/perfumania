import React, { useEffect, useState } from 'react';
import TopProduct from '../TopProduct/TopProduct';

const TopProducts = () => {
    const [perfumes, setPerfumes] = useState([]);
    useEffect(() => {
        fetch("https://murmuring-stream-35906.herokuapp.com/topProducts")
            .then(res => res.json())
            .then(data => setPerfumes(data));
    }, [])
    
    return (
        <div className='text-center container my-5'>
            <h2 className='text-secondary mb-3'>Top products from our warehouse.</h2>
            <p className='lead mb-3'>The perfumes that were sold the most in the last month.</p>
            <div className="row mt-5">
                {
                    perfumes.map(perfume => <TopProduct key={perfume._id} perfume={perfume}></TopProduct>)
                }
            </div>
        </div>
    );
};

export default TopProducts;