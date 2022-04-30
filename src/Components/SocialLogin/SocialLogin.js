import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import google from '../../images/icons8-google.png';
import facebook from '../../images/icons8-facebook.png';
import github from '../../images/icons8-github.png';

const SocialLogin = () => {
    // Google Sign in
    const [signInWithGoogle, userGoogle, , errorGoogle] = useSignInWithGoogle(auth);

    // Github Sign in 
    const [signInWithGithub, userGit, , errorGit] = useSignInWithGithub(auth);
    if(userGit) {
        console.log(userGit);
    }
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