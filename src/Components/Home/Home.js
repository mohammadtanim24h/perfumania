import React, { useState } from "react";
import usePerfumes from "../../hooks/usePerfumes";
import Banner from "../Banner/Banner";
import Perfume from "../Perfume/Perfume";
import "./Home.css";

const Home = () => {
    const [perfumes] = usePerfumes();
    return (
        <div>
            <Banner></Banner>
            <div id="perfumes" className="container my-5">
            <h2 className="text-secondary text-center display-5 mb-5">Perfumes</h2>
            <div className="row g-5 mb-5">
                {perfumes.map((perfume) => (
                    <Perfume key={perfume._id} perfume={perfume}></Perfume>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Home;
