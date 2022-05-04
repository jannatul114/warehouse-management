import React from 'react';
import loading from '../../../images/fruits/loading.gif';
const Loading = () => {
    return (
        <div className=' mx-auto'>
            <div className='d-flex justify-content-center'>
                <img src={loading} alt="" />
            </div>
        </div>
    );
};

export default Loading;