import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container login-container mt-5">
            <div className="custom-login">
                <div className="login-left">
                    <h3 className="text-center mt-3">Login</h3>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <input className="mb-3" placeholder="Type your email" type="email" {...register("email")} required/>
                        <input className="mb-3" placeholder="Type your password" type="password" {...register("password")} required/>
                        <p className="text-center">Forgot password? <span className="reset" style={{cursor: 'pointer'}}>Reset</span></p>
                        <input className="submit-btn w-50 mx-auto rounded-pill" type="submit" />
                        {/* ---Or--- style */}
                        <div className="d-flex justify-content-center align-items-center mx-auto mt-3" style={{width: '80%'}}>
                            <div style={{width: '40%', height: '1px', backgroundColor: 'lightgray'}} ></div>
                            <div className="mx-2">Or</div>
                            <div style={{width: '40%', height: '1px', backgroundColor: 'lightgray'}} ></div>
                        </div>
                    </form>
                </div>
                <div className="login-right">
                    <h2 className="text-center">Welcome Back</h2>
                </div>
            </div>
        </div>
    );
};

export default Login;
