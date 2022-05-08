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
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (user) {
        navigate(from, { replace: true });
    }

    //showing loading when loading or sending
    if (loading || sending) {
        <Loading></Loading>
    }

    //showing error
    useEffect(() => {
        toast(error?.message)
    }, [error])


    //user login with jwt token
    const userLogin = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post(`https://sleepy-ocean-93953.herokuapp.com/login`, { email })
        localStorage.setItem('accessToken', data.accessToken);

    }

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



    return (
        <div>
            <ToastContainer />
            <div className='w-50 p-2 mx-auto my-3'>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={userLogin}>
                    <input ref={emailRef} className='w-100 p-3' placeholder='Email' style={{ borderRadius: "30px" }} type="email" name='email' required />
                    <br />
                    <input ref={passwordRef} placeholder='Password' className='w-100 my-3 p-3' style={{ borderRadius: "30px" }} type="password" name='password' required />
                    <br />
                    <div className='d-flex justify-content-center'>
                        <input type="submit" className='update-button' value="Login" />
                    </div>
                    <p className='text-center fs-5'>Don't have any account? <Link className='fw-bold' style={{ color: '#009688' }} to={'/registar'}>Registar</Link> </p>
                    {
                        error && <p className='text-center text-danger'>{error?.message}</p>
                    }
                </form>
                <p className='text-center fs-5'>Forget password? <button onClick={resetPassword} style={{ textDecoration: 'underline', color: '#009688' }} className='bg-white border-0 '>reset</button></p>
                <div className='mx-auto'>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Login;