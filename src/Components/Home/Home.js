import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePerfumes from "../../hooks/usePerfumes";
import Banner from "../Banner/Banner";
import Perfume from "../Perfume/Perfume";
import TopProducts from "../TopProducts/TopProducts";
import "./Home.css";

const Home = () => {
    const [perfumes] = usePerfumes();
    return (
        <div>
            <Banner></Banner>
            <div id="perfumes" className="container my-5">
                <h2 className="text-secondary text-center display-5 mb-5">
                    Perfumes
                </h2>
                <div className="row mb-5">
                    {perfumes?.slice(0, 6)?.map((perfume) => (
                        <Perfume key={perfume._id} perfume={perfume}></Perfume>
                    ))}
                </div>
                <div className="text-center">
                    <Link to="/manageInventories">
                        <button className="manage-inventories-btn">
                            Manage Inventories
                        </button>
                    </Link>
                </div>
            </div>
            <div className="container">
                <hr className="my-3" />
            </div>
            <TopProducts></TopProducts>
        </div>
    );
};

export default Home;
