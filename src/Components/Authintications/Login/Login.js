import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Footer from '../../Shared/Footer/Footer';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';

const Login = () => {
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading || sending) {
        <Loading></Loading>
    }
    const emailRef = useRef('');
    const passwordRef = useRef('');

    useEffect(() => {
        if (error) {
            toast(error?.message);
            console.log(error?.message);
        }
    }, [error])

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('email sent')
        }
        else {
            toast('please enter your email')
        }
    }


    const userLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post(`https://sleepy-ocean-93953.herokuapp.com/login`, { email })
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='w-50 p-2 mx-auto my-3'>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={userLogin}>
                    <input ref={emailRef} className='w-100 p-3' placeholder='Email' style={{ borderRadius: "30px" }} type="email" name='email' required />
                    <br />
                    <input ref={passwordRef} placeholder='Password' className='w-100 my-3 p-3' style={{ borderRadius: "30px" }} type="password" name='password' required />
                    <br />
                    <div className='d-flex justify-content-center'>
                        <button className='explore-button'><span className='btn-span'></span>Login</button>
                    </div>
                    <p className='text-center fs-5'>Don't have any account? <Link className='fw-bold' style={{ color: '#009688' }} to={'/registar'}>Registar</Link> </p>

                </form>
                <p className='text-center fs-5'>Forget password? <button onClick={resetPassword} style={{ textDecoration: 'underline', color: '#009688' }} className='bg-white border-0 '>reset</button></p>
                <div className='mx-auto'>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <ToastContainer />
            <Footer></Footer>
        </div>

    );
};

export default Login;