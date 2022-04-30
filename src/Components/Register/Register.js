import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';
import { GiPartyPopper } from "react-icons/gi";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container login-container mt-5">
            <div className="custom-login">
                <div className="login-left">
                    <h3 className="text-center mt-3">Register</h3>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <input className="mb-3" placeholder="Name (Optional)" {...register("name")}/>
                        <input className="mb-3" placeholder="Email" type="email" {...register("email")} required/>
                        <input className="mb-3" placeholder="Password" type="password" {...register("password")} required/>
                        <input className="mb-3" placeholder="Confirm Password" type="password" {...register("confirmPassword")} required/>
                        <input className="submit-btn w-50 mx-auto rounded-pill" type="submit" value="Register" />
                    </form>
                    <p className="text-center mt-3">Already a Member? <Link className="theme-text" to="/login">Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
                <div className="login-right">
                    <div>
                        <h2 className="text-center mt-3">Welcome! <GiPartyPopper className="mb-2"></GiPartyPopper> </h2>
                        <p className="text-center">Register using Email and Password.</p>
                        <p className="text-center">Please share your personal details to start your journey with us</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;