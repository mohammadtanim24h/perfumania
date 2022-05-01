import React from "react";
import { Table } from "react-bootstrap";
import usePerfumes from "../../hooks/usePerfumes";
import PerfumeTable from "../PerfumeTable/PerfumeTable";
import './ManageInventory.css';

const ManageInventory = () => {
    const [perfumes, setPerfumes] = usePerfumes();

    // Handle Perfume Deletion
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/perfume/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="mt-3">
            <h2 className="text-center theme-text my-3 ">Manage Inventory</h2>
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
                    {
                        perfumes.map(perfume => <PerfumeTable key={perfume._id} perfume={perfume} handleDelete={handleDelete}></PerfumeTable>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;
