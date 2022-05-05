import React, { useEffect } from "react";
import "./Login.css";
import { GiPartyPopper } from "react-icons/gi";
import auth from '../../Firebase/firebase.init';
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import PageTitle from "../PageTitle/PageTitle";

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

    // navigate to protected route or homepage
    useEffect(() => {
        if (user) {
            console.log(user);
            navigate(from, { replace: true });
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
                        <input className="mb-3" name="email" placeholder="Email" type="email" required/>
                        <input className="mb-3" name="password" placeholder="Password" type="password" required/>
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
