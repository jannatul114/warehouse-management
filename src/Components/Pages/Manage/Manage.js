import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import './Manage.css';
const Manage = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://sleepy-ocean-93953.herokuapp.com/allfruits')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const deleteItem = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const url = `https://sleepy-ocean-93953.herokuapp.com/allfruits/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining);
                })
        }
    }

    const handleUpdate = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='mt-4 manage-table'>
            <h1 className='text-center my-3'>Manage Inventories</h1>
            <div className='w-75 mx-auto'>
                {
                    items[0]?.img ? <Table className='table' striped bordered responsive hover>
                        <thead>
                            <tr style={{ border: '2px solid #009688' }} className=''>
                                <th>images</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Supplire</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody style={{ border: '2px solid #009688' }}>
                            {
                                items.map(item =>
                                    <tr key={item._id}>
                                        <td > <img style={{ height: '30px' }} src={item.img} alt="" /> </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.supplier}</td>
                                        <td className='d-flex justify-content-around px-3'>
                                            <svg onClick={() => deleteItem(item._id)} style={{ height: '20px', cursor: 'pointer', color: '#009688' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            <svg onClick={() => handleUpdate(item._id)} style={{ height: '20px', cursor: 'pointer', color: '#009688' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </Table> : <Loading></Loading>
                }
            </div>
            <div className='d-flex justify-content-center'>
                <Link to={'/additems'} ><button className='update-button fw-bold'>Add a new Item</button></Link>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Manage;