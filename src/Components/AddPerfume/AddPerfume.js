import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import "./AddPerfume.css";
import Swal from "sweetalert2";

const AddPerfume = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        fetch("http://localhost:5000/perfume", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Item Added Successfully!",
                        text: "Your Perfume was added Successfully.",
                        icon: "success",
                        confirmButtonText: "Close",
                    });
                }
                e.target.reset();
            });
    };
    return (
        <div className="login-container my-3">
            <h2 className="text-secondary text-center mb-2">
                Add Inventory Item
            </h2>
            <form className="add-item-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Perfume Name"
                    {...register("name")}
                    required
                />
                <input
                    placeholder="Price"
                    type="number"
                    {...register("price")}
                    required
                />
                <input
                    placeholder="Email"
                    type="email"
                    defaultValue={user.email}
                    readOnly
                    {...register("email")}
                    required
                />
                <textarea
                    placeholder="Description"
                    {...register("description")}
                    required
                />
                <input placeholder="Image URL" {...register("img")} required />
                <input
                    placeholder="Supplier"
                    {...register("supplier")}
                    required
                />
                <input
                    placeholder="Quantity"
                    type="number"
                    {...register("quantity")}
                    required
                />
                <input
                    placeholder="Sold"
                    defaultValue="0"
                    type="number"
                    {...register("sold")}
                    required
                />
                <input
                    type="submit"
                    className="add-btn w-25 mx-auto exclude-add d-flex justify-content-center mt-3"
                    value="Add Item"
                />
            </form>
        </div>
    );
};

export default AddPerfume;
