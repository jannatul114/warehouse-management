import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/not-found.gif'
const NotFound = () => {
    return (
        <div>
            <div className='d-flex justify-centent-center'>
                <img className='w-50 mx-auto mt-4' src={notFound} alt="" />
            </div>
            <div className='d-flex justify-content-center my-3'>
                <button style={{ border: '2px solid #009688', cursor: 'pointer' }} className='p-2'><Link to={'/home'} style={{ textDecoration: 'none', color: '#009688' }} >Go Home</Link></button>
            </div>

        </div>
    );
};

export default NotFound;