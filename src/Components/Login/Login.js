import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { GiPartyPopper } from "react-icons/gi";
import google from '../../images/icons8-google.png';
import facebook from '../../images/icons8-facebook.png';
import github from '../../images/icons8-github.png';

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
                    <div className="my-3">
                        <button className="d-block mx-auto mb-2 social-btn"> <img width={36} src={google} alt="" /> Sign in with Google</button>
                        <button className="d-block mx-auto mb-2 social-btn"> <img width={36} src={facebook} alt="" /> Sign in with Facebook</button>
                        <button className="d-block mx-auto mb-2 social-btn"> <img width={36} src={github} alt="" /> Sign in with Github</button>
                    </div>
                </div>
                <div className="login-right">
                    <div>
                        <h3 className="text-center mt-3">Welcome Back <GiPartyPopper className="mb-2"></GiPartyPopper> </h3>
                        <p className="text-center">Login using Email and Password.</p>
                        <p className="text-center">Enter your personal details and continue your journey with us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
