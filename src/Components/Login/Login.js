import React, { useEffect } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { GiPartyPopper } from "react-icons/gi";
import auth from '../../Firebase/firebase.init';
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
    // Login hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
    };

    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            console.log(user);
            navigate('/');
        }
    }, [user]);

    return (
        <div className="container login-container mt-5">
            <div className="custom-login">
                <div className="login-left">
                    <h3 className="text-center mt-3">Login</h3>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <input className="mb-3" placeholder="Email" type="email" {...register("email")} required/>
                        <input className="mb-3" placeholder="Password" type="password" {...register("password")} required/>
                        <p className="text-center">Forgot password? <span className="reset" style={{cursor: 'pointer'}}>Reset</span></p>
                        {error && <p className="text-center text-danger">{error.message.slice(10, )}</p> }
                        <input className="submit-btn w-50 mx-auto rounded-pill" type="submit" value="Login" />
                    </form>
                    <p className="text-center mt-3">New to Perfumania? <Link className="theme-text" to="/register">Register</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
                <div className="login-right">
                    <div>
                        <h2 className="text-center mt-3">Welcome Back <GiPartyPopper className="mb-2"></GiPartyPopper> </h2>
                        <p className="text-center">Login using Email and Password.</p>
                        <p className="text-center">Enter your personal details and continue your journey with us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
