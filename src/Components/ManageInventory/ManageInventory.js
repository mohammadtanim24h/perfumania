import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import usePerfumes from "../../hooks/usePerfumes";
import PageTitle from "../PageTitle/PageTitle";
import PerfumeTable from "../PerfumeTable/PerfumeTable";
import "./ManageInventory.css";

const ManageInventory = () => {
    const navigate = useNavigate();
    const [perfumes, setPerfumes] = usePerfumes();

    // Handle Perfume Deletion
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            iconColor: "#FFC107",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3DBE29",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://murmuring-stream-35906.herokuapp.com/perfume/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount === 1) {
                            const remaining = perfumes.filter(
                                (perfume) => perfume._id !== id
                            );
                            setPerfumes(remaining);
                        }
                    });
                Swal.fire("Deleted!", "Your Perfume has been deleted.", "success");
            }
        });
    };
    return (
        <div className="mt-3">
            <PageTitle title="Manage Inventory"></PageTitle>
            <h2 className="text-center text-secondary my-3">
                Manage Inventory
            </h2>
            <h4 className="text-center text-secondary">
                Total Perfumes: {perfumes.length}
            </h4>
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
