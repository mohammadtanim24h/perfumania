import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePerfumes from "../../hooks/usePerfumes";
import Banner from "../Banner/Banner";
import Dashboard from "../Dashboard/Dashboard";
import Loading from "../Loading/Loading";
import PageTitle from "../PageTitle/PageTitle";
import Perfume from "../Perfume/Perfume";
import ReportIssues from "../ReportIssues/ReportIssues";
import TopProducts from "../TopProducts/TopProducts";
import "./Home.css";

const Home = () => {
    const [perfumes] = usePerfumes();
    if(perfumes.length === 0) {
        return <Loading></Loading>
    }
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
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
            
            <h2 className="text-center text-secondary">Dashboard</h2>
            <Dashboard></Dashboard>
            
            <TopProducts></TopProducts>
            <ReportIssues></ReportIssues>
        </div>
    );
};

export default Home;
