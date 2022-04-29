import React from 'react';
import './SocialLogin.css';
import google from '../../../images/google.png';
const SocialLogin = () => {
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
                <button className='google d-flex align-items-center'>
                    Signin with
                    <img className='ms-3' style={{ height: '35px' }} src={google} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;