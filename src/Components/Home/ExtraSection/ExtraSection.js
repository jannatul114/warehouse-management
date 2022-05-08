import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import './ExtraSection.css';
const ExtraSection = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://sleepy-ocean-93953.herokuapp.com/allfruits')
            .then(res => res.json())
            .then(data => {
                const filtering = data.filter(item => item.quantity < 130)
                console.log(filtering);
                setItems(filtering)
            })
    }, [])
    return (
        <div className='my-3'>
            <div className="container text-center">
                <h1 className='my-3'>Our Best selling products</h1>
            </div>
            {items[0]?.img ? <div className="">
                <div className="img-container container ">
                    <div className="row d-flex justify-content-center">
                        {
                            items.map(item =>
                                <div className="col-md-3 img-container">
                                    <img className='w-100 imgs' src={item.img} alt="" />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div> : <div className='d-flex justify-content-center'>
                <Loading></Loading>
            </div>

            }
        </div>

    );
};

export default ExtraSection;