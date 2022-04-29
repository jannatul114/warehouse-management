import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div>
            <div className='w-50 p-2 mx-auto my-3'>
                <h1 className='text-center'>Login</h1>
                <form>
                    <input className='w-100 p-3' placeholder='Email' style={{ borderRadius: "30px" }} type="Email" name='Email' />
                    <br />
                    <input placeholder='Password' className='w-100 my-3 p-3' style={{ borderRadius: "30px" }} type="password" name='password' />
                    <br />
                    <div className='d-flex justify-content-center'>
                        <button className='explore-button'><span className='btn-span'></span>Login</button>
                    </div>
                    <p className='text-center fs-5'>Don't have any account? <Link className='fw-bold' style={{ color: '#009688' }} to={'/registar'}>Registar</Link> </p>

                    <div className='mx-auto'>
                        <SocialLogin></SocialLogin>
                    </div>
                </form>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;