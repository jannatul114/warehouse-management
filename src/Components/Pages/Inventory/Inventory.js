import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Inventory = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth)
    const [itemDetail, setItemDetail] = useState({});
    useEffect(() => {
        fetch(`https://sleepy-ocean-93953.herokuapp.com/allfruits/${id}`)
            .then(res => res.json())
            .then(data => {
                setItemDetail(data)
            })
    }, [id])

    const delivered = () => {
        const name = itemDetail?.name;
        const img = itemDetail?.img;
        const supplier = itemDetail?.supplier;
        const price = itemDetail?.price;
        const description = itemDetail?.description;
        const sold = JSON.parse(itemDetail?.sold) <= JSON.parse(itemDetail?.quantity) ? JSON.parse(itemDetail?.sold) + 1 : JSON.parse(itemDetail?.sold)
        const quantity = JSON.parse(itemDetail?.quantity) !== 0 ? JSON.parse(itemDetail?.quantity) - 1 : JSON.parse(itemDetail?.quantity)

        const updatingItems = { name, img, supplier, price, description, quantity, sold };
        console.log(itemDetail.sold);
        setItemDetail(updatingItems)
        console.log(updatingItems);

        const url = `https://sleepy-ocean-93953.herokuapp.com/allfruits/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatingItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    const handleRestoke = (event) => {
        event.preventDefault();
        const name = itemDetail?.name;
        const img = itemDetail?.img;
        const supplier = itemDetail?.supplier;
        const price = itemDetail?.price;
        const description = itemDetail?.description;
        const quantity = JSON.parse(itemDetail.quantity) + parseInt(event.target.quantity.value)
        const updatingQuantity = { name, img, supplier, price, description, quantity };
        setItemDetail(updatingQuantity)
        const url = `https://sleepy-ocean-93953.herokuapp.com/allfruits/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatingQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset()
            })
        console.log(itemDetail);


    }
    return (
        <div className='container'>
            {itemDetail?.img ? <div className="row d-flex justify-content-center align-items-center my-3">
                <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                    <div>
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
                                        <p className="card-text"> <span className='fw-bold'>Sold:</span> {itemDetail?.sold}</p>
                                        <p className="card-text"><span className='fw-bold'>Id:</span> {id}</p>

                                        <button className='update-button' onClick={delivered}>{itemDetail.quantity !== 0 ? 'deliverd' : 'Sold Out'}</button>
                                    </div>

                                </div>
                            </div>
                            <div className="card-footer">
                                <p className="card-text"><span className='fw-bold'>Description:</span> {itemDetail?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
                    <h1>Restoke item</h1>
                    <form onSubmit={handleRestoke}>
                        <input name='quantity' type="text" className="form-control w-75" id="exampleInputEmail1" placeholder="quantity you want to restoke" required />
                        <input className='m-3 update-button' type="submit" value="Restoke" />
                    </form>
                </div>
            </div> : <Loading></Loading>


            }
        </div>
    );
};

export default Inventory;