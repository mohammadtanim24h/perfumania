import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../Firebase/firebase.init";
import MyPerfume from "../MyPerfume/MyPerfume";
import PageTitle from "../PageTitle/PageTitle";
import "./MyItems.css";

const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [perfumes, setPerfumes] = useState([]);
    const [unauthorizedMessage, setUnauthorizedMessage] = useState("");
    useEffect(() => {
        fetch(`https://murmuring-stream-35906.herokuapp.com/myPerfumes?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.authorization === 'successful') {
                    setPerfumes(data.perfumes);
                }
                if(data.authorization === 'failed') {
                    setPerfumes(data.perfumes);
                    setUnauthorizedMessage("You are Unauthorized. To update your Access Token, Please login again.");
                }
            });
    }, [email]);

    // Delete Perfume
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
                Swal.fire(
                    "Deleted!",
                    "Your Perfume has been deleted.",
                    "success"
                );
            }
        });
    };
    return (
        <div className="my-3 container my-items-container">
            <PageTitle title="My Items"></PageTitle>
            <h2 className="mb-3 text-secondary text-center">My Items: {perfumes.length}</h2>
            <h4 className="mb-3 text-danger text-center">{unauthorizedMessage && unauthorizedMessage}</h4>
            <div className="row mb-3">
                {perfumes.map((perfume) => (
                    <MyPerfume
                        key={perfume._id}
                        perfume={perfume}
                        handleDelete={handleDelete}
                    ></MyPerfume>
                ))}
            </div>
        </div>
    );
};

export default MyItems;
