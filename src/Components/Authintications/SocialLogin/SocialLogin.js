import React, { useEffect } from 'react';
import './SocialLogin.css';
import google from '../../../images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    // let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (error) {
            toast(error?.message);
        }
    }, [error])

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [user])
    return (
        <div className=''>
            <div className='w-50 mx-auto d-flex align-items-center'>
                <div style={{ borderBottom: '3px solid #009688' }} className='w-50'>
                </div>
                <p className='fs-3 p-2'>or</p>
                <div style={{ borderBottom: '3px solid #009688' }} className='w-50 '>
                </div>
            </div>
            <div className='w-25 mx-auto d-flex justify-center'>
                <button onClick={() => signInWithGoogle()} className='google d-flex align-items-center'>
                    Signin with
                    <img className='ms-3' style={{ height: '35px' }} src={google} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;