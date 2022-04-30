import React from "react";
import "./Login.css";
import loginImg from "../../images/login-img.jpg";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container login-container">
            <div className="row w-75 mx-auto">
                <div className="col-lg-6">
                    <h3 className="text-center mt-5 mb-3 theme-text">Login</h3>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <input className="mb-3" placeholder="Type your email" type="email" {...register("email")} required/>
                        <input className="mb-3" placeholder="Type your password" type="password" {...register("password")} required/>
                        <input className="submit-btn" type="submit" />
                    </form>
                </div>
                <div className="col-lg-6 login-right">
                    
                </div>
            </div>
        </div>
    );
};

export default Login;
