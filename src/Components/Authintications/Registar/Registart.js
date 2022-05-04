import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Footer from '../../Shared/Footer/Footer';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import swal from 'sweetalert';

const Registart = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    useEffect(() => {
        if (error) {
            toast(error?.message);
        }
    }, [error])


    if (user) {
        navigate('/home');
    }
    const handleRegistar = async event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);

    }
    return (
        <div>
            <div className='w-50 p-2 mx-auto my-3'>
                <h1 className='text-center'>Registar</h1>
                <form onSubmit={handleRegistar} >
                    <input className='w-100 p-3' placeholder='Name (optional)' style={{ borderRadius: "30px" }} type="text" name='name' />
                    <br />
                    <input className='w-100 p-3 my-3' placeholder='Email' style={{ borderRadius: "30px" }} type="email" name='email' />
                    <br />
                    <input placeholder='Password' className='w-100 my-2 p-3' style={{ borderRadius: "30px" }} type="password" name='password' />
                    <br />
                    <p className='text-center fs-5'>Already have an account? <Link className='fw-bold' style={{ color: '#009688' }} to={'/login'}>Login</Link> </p>
                    <div className='d-flex justify-content-center'>
                        <button className='explore-button'><span className='btn-span'></span>Registar</button>
                    </div>

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

export default Registart;