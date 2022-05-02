import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import MyPerfume from "../MyPerfume/MyPerfume";

const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [perfumes, setPerfumes] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/perfumes?email=${email}`)
            .then((res) => res.json())
            .then((data) => setPerfumes(data));
    }, [email]);
    return (
        <div className="my-3 container">
            <h2 className="mb-3 text-secondary text-center">My Items</h2>
            <div className="row mb-3">
                {perfumes.map((perfume) => (
                    <MyPerfume key={perfume._id} perfume={perfume}></MyPerfume>
                ))}
            </div>
        </div>
    );
};

export default MyItems;
