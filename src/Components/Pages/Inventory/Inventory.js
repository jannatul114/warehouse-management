import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/allfruits/${id}`)
            .then(res => res.json())
            .then(data => setItemDetail(data))
    }, [id])

    const delivered = () => {
        const name = itemDetail?.name;
        const email = itemDetail?.email;
        const img = itemDetail?.img;
        const supplier = itemDetail?.supplier;
        const price = itemDetail?.price;
        const description = itemDetail?.description;
        const quantity = JSON.parse(itemDetail?.quantity) !== 0 ? JSON.parse(itemDetail?.quantity) - 1 : JSON.parse(itemDetail?.quantity)

        const updatingItems = { name, email, img, supplier, price, description, quantity };
        setItemDetail(updatingItems)

        const url = `http://localhost:5000/allfruits/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatingItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
        console.log(itemDetail);
    }
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
                                <h2 className="card-title"><span className='fw-bold'>{itemDetail?.name}</span></h2>
                                <p className="card-text"> <span className='fw-bold'>Price:</span> {itemDetail?.price}</p>
                                <p className="card-text"><span className='fw-bold'>Supplire:</span> {itemDetail?.supplier}</p>
                                <p className="card-text"> <span className='fw-bold'>Quantity:</span> {itemDetail?.quantity}</p>
                                <p className="card-text"><span className='fw-bold'>Id:</span> {itemDetail._id}</p>

                                <button className='update-button' onClick={delivered}>Delivered</button>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer">
                        <p className="card-text"><span className='fw-bold'>Description:</span> {itemDetail?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;