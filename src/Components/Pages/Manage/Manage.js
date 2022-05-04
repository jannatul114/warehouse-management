import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Manage = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allfruits')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const deleteItem = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const url = `http://localhost:5000/allfruits/${id}`
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
    return (
        <div className='mt-4'>
            <h1 className='text-center my-3'>Manage Inventories</h1>
            <div className='w-75 mx-auto'>
                <Table striped bordered hover>
                    <thead>
                        <tr style={{ border: '2px solid #009688' }} className=''>
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
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.supplier}</td>
                                    <td className='d-flex justify-content-center'>
                                        <svg onClick={() => deleteItem(item._id)} style={{ height: '20px', cursor: 'pointer', color: '#009688' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </div>
            <div className='d-flex justify-content-center'>
                <Link to={'/additems'} ><button className='update-button fw-bold'>Add a new Item</button></Link>
            </div>
        </div>
    );
};

export default Manage;