import React from 'react';
import './SocialLogin.css';
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
            <div className='d-flex justify-center'>
                <button className='google'>Signin with</button>
            </div>
        </div>
    );
};

export default SocialLogin;