import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myIyems, setMyitems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allfruits`)
            .then(res => res.json())
            .then(data => {
                const MyNewItems = data.filter(item => item.email === user.email);
                setMyitems(MyNewItems)
            })

    }, [])



    return (
        <div className='container'>
            <h1 className='text-center my-4'>My Items</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                {
                    myIyems.map(item =>
                        <div className="col">
                            <div style={{ border: "2px solid #009688" }} className="card set-border">
                                <img src={item.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">{item.name}</h3>
                                    <p className="card-text">{item.description}</p>
                                    <h5>Supplire: {item.supplier}</h5>
                                    <h3>$ {item.price}</h3>
                                    <h4>Quantity: {item.quantity}</h4>
                                </div>
                                <button className='w-25 update-button m-2'><svg style={{ height: '20px', cursor: 'pointer', color: '#fff' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg></button>

                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default MyItems;