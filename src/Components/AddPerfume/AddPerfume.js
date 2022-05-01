import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import './AddPerfume.css';

const AddPerfume = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/perfume", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    };
    return (
        <div className="login-container my-5">
            <h2 className="theme-text text-center">Add Items</h2>
            <form className="add-item-form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Perfume Name" {...register("name")} required />
                <input placeholder="Price" type="number" {...register("price")} required />
                <input placeholder="Email" type="email" defaultValue={user.email} readOnly {...register("email")} required />
                <textarea placeholder="Description" {...register("description")} required />
                <input placeholder="Image URL" {...register("img")} required />
                <input placeholder="Supplier" {...register("supplier")} required />
                <input placeholder="Quantity" type="number" {...register("quantity")} required />
                <input placeholder="Sold" defaultValue="0" type="number" {...register("sold")} required />
                <input type="submit" className="add-btn w-25 mx-auto exclude-add d-flex justify-content-center mt-3" value="Add Item" />
            </form>
        </div>
    );
};

export default AddPerfume;
