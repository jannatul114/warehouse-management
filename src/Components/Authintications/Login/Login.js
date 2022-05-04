import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Footer from '../../Shared/Footer/Footer';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        <p>loading...</p>
    }
    const emailRef = useRef()
    const passwordRef = useRef()

    useEffect(() => {
        if (error) {
            toast(error?.message);
            console.log(error?.message);
        }
    }, [error])

    if (user) {
        navigate(from, { replace: true });
    }

    // const handlechangePassword = async () => {
    //     const email = emailRef.current.value;
    //     if (email) {
    //         await sendPasswordResetEmail(email);
    //         toast('email sent')
    //     }
    //     else {
    //         toast('please enter your email')
    //     }
    // }


    const userLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className='w-50 p-2 mx-auto my-3'>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={userLogin}>
                    <input ref={emailRef} className='w-100 p-3' placeholder='Email' style={{ borderRadius: "30px" }} type="email" name='email' />
                    <br />
                    <input ref={passwordRef} placeholder='Password' className='w-100 my-3 p-3' style={{ borderRadius: "30px" }} type="password" name='password' />
                    <br />
                    <div className='d-flex justify-content-center'>
                        <button className='explore-button'><span className='btn-span'></span>Login</button>
                    </div>
                    <p className='text-center fs-5'>Don't have any account? <Link className='fw-bold' style={{ color: '#009688' }} to={'/registar'}>Registar</Link> </p>


                </form>
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