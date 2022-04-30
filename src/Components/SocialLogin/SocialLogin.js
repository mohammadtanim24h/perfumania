import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import google from '../../images/icons8-google.png';
import facebook from '../../images/icons8-facebook.png';
import github from '../../images/icons8-github.png';

const SocialLogin = () => {
    // Google Sign in
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    
    // Github Sign in 

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center mx-auto mt-3" style={{width: '80%'}}>
                <div style={{width: '40%', height: '1px', backgroundColor: 'lightgray'}} ></div>
                <div className="mx-2">Or</div>
                <div style={{width: '40%', height: '1px', backgroundColor: 'lightgray'}} ></div>
            </div>
            <div className="my-3">
                <button onClick={() => signInWithGoogle()} className="d-block mx-auto mb-2 social-btn"> <img width={36} src={google} alt="" /> Sign in with Google</button>
                <button className="d-block mx-auto mb-2 social-btn"> <img width={36} src={facebook} alt="" /> Sign in with Facebook</button>
                <button className="d-block mx-auto mb-2 social-btn"> <img width={36} src={github} alt="" /> Sign in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;