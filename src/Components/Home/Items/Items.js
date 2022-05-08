import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import './items.css';
const Items = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://sleepy-ocean-93953.herokuapp.com/allfruits')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    if (items.length > 6) {
        const slicing = items.slice(0, 6);
        setItems(slicing)
    }
    return (
        <div className='d-flex justify-content-center'>
            <div>
                <h1 className='text-center my-4'>Inventory items</h1>
                <div className='d-flex justify-content-center'>
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-5 mx-2 ">
                        {items[0]?.img ?
                            items.map(item =>
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
                                        <div className="card-footer">
                                            <Link to={`/inventory/${item._id}`}> <button className='update-button'>Update</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ) : <Loading></Loading>
                        }
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <Link to={'/manage'} style={{ textDecoration: 'none' }} className='update-button mt-3'>Manage inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default Items;