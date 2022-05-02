import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import usePerfumes from "../../hooks/usePerfumes";
import PerfumeTable from "../PerfumeTable/PerfumeTable";
import "./ManageInventory.css";

const ManageInventory = () => {
    const navigate = useNavigate();
    const [perfumes, setPerfumes] = usePerfumes();

    // Handle Perfume Deletion
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/perfume/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                const remaining = perfumes.filter(
                    (perfume) => perfume._id !== id
                );
                setPerfumes(remaining);
            });
    };
    return (
        <div className="mt-3">
            <h2 className="text-center text-secondary my-3">Manage Inventory</h2>
            <Table bordered hover className="custom-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sold</th>
                        <th className="text-center">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {perfumes.map((perfume) => (
                        <PerfumeTable
                            key={perfume._id}
                            perfume={perfume}
                            handleDelete={handleDelete}
                        ></PerfumeTable>
                    ))}
                </tbody>
            </Table>
            <div className="text-center">
                <button
                    onClick={() => navigate("/addItems")}
                    className="theme-btn mt-3"
                >
                    Add Items <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    );
};

export default ManageInventory;
