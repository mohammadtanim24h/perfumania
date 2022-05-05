import React, { useEffect, useRef } from "react";
import "./Login.css";
import { GiPartyPopper } from "react-icons/gi";
import auth from '../../Firebase/firebase.init';
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import PageTitle from "../PageTitle/PageTitle";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // Login hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    // Login Function
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    };

    // Password reset
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if(email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent!');
        }
        else {
            toast('Email is required to send password reset email');
        }
    }

    // navigate to protected route or homepage
    useEffect(() => {
        if (user) {
            const email = user?.user?.email;
            fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({email})
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("accessToken", data.token);
                // Navigate after successful login
                navigate(from, { replace: true });
            })
        }
    }, [user]);

    // Loading spinner
    if(loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="container login-container mt-5">
            <PageTitle title="Login"></PageTitle>
            <div className="custom-login">
                <div className="login-left">
                    <h3 className="text-center mt-3">Login</h3>
                    <form className="login-form" onSubmit={handleLogin}>
                        <input className="mb-3" ref={emailRef} name="email" placeholder="Email" type="email" required/>
                        <input className="mb-3" name="password" placeholder="Password" type="password" required/>
                        <p className="text-center">Forgot password? <span className="reset" onClick={resetPassword} style={{cursor: 'pointer'}}>Reset</span></p>
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
