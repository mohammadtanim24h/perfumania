import React, { useEffect } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import google from '../../images/icons8-google.png';
import facebook from '../../images/icons8-facebook.png';
import github from '../../images/icons8-github.png';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // Google Sign in
    const [signInWithGoogle, userGoogle, , errorGoogle] = useSignInWithGoogle(auth);

    // Github Sign in 
    const [signInWithGithub, userGit, , errorGit] = useSignInWithGithub(auth);

    // navigate to protected route or homepage
    useEffect(() => {
        if(userGoogle || userGit) {
            const email = userGoogle?.user?.email || userGit?.user?.email;
            fetch("https://murmuring-stream-35906.herokuapp.com/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({email})
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("accessToken", data.token);
                // navigate after successful login
                navigate(from, { replace: true });
            })
        }
    }, [userGoogle, userGit])
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center mx-auto mt-3" style={{width: '85%'}}>
                <div style={{width: '40%', height: '1px', backgroundColor: 'lightgray'}} ></div>
                <div className="mx-2">Or</div>
                <div style={{width: '40%', height: '1px', backgroundColor: 'lightgray'}} ></div>
            </div>
            <div className="my-3">
                {errorGit && <p className='text-center text-danger'>Error: {errorGit.message.slice(16, )}</p> }
                {errorGoogle && <p className='text-center text-danger'>Error: {errorGoogle.message.slice(16, )}</p> }
                <button onClick={() => signInWithGoogle()} className="d-block mx-auto mb-2 social-btn"> <img width={36} src={google} alt="" /> Sign in with Google</button>
                <button className="d-block mx-auto mb-2 social-btn"> <img width={36} src={facebook} alt="" /> Sign in with Facebook</button>
                <button onClick={() => signInWithGithub()} className="d-block mx-auto mb-2 social-btn"> <img width={36} src={github} alt="" /> Sign in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;