import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-text text-center">
                <h2 className="my-2">Perfumania</h2>
                <h4 className="my-2">The Largest Perfume Warehouse</h4>
                <p className="my-2">Welcome to Perfumania. We have the largest warehouse of perfumes in the whole world. The collection we have here is next level.</p>
                <a className="explore-btn btn mt-3 rounded-pill" href="#perfumes">View Items</a>
            </div>
        </div>
    );
};

export default Banner;