import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    console.log(id);

    const [itemDetail, setItemDetail] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/allfruits/${id}`)
            .then(res => res.json())
            .then(data => setItemDetail(data))
    }, [id])
    return (
        <div>
            <div className='d-flex justify-content-center my-3'>
                <div className="card mb-3 shadow p-2 m-3" style={{ maxWidth: '840px', border: '2px solid #009688' }}>
                    <div className="row g-0">
                        <div className="col-md-5">
                            <div className="d-flex justify-content-center align-item-center">
                                <img src={itemDetail.img} className="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h2 className="card-title">Name: {itemDetail?.name}</h2>
                                <p className="card-text">Description: {itemDetail?.description}</p>
                                <p className="card-text">Price: {itemDetail?.price}</p>
                                <p className="card-text">Supplire: {itemDetail?.supplier}</p>
                                <p className="card-text">Quantity: {itemDetail?.quantity}</p>
                                <p className="card-text">Id: {itemDetail?._id}</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;