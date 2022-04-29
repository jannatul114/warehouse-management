import React from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import sliver1 from '../../../images/slide-1.jpg'
import sliver2 from '../../../images/slide-2.jpg'
import sliver3 from '../../../images/slide-3.jpg'

import './Banner.css';
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className='container slider-container'>
                    <div className='row d-flex justify-content-between align-items-center'>
                        <div className='col-md-5 col-lg-5 col-12 col-sm-12'>
                            <h1 className='fs-1 fw-bold lh-md'><span className='highlight'>W</span>e are the best provider of fresh, premium quality fruits in <span className='highlight'>Bangladesh</span></h1>
                            <p className='fs-5'>get first class quality fruits from us!! </p>
                            <button className='explore-button'><span className='btn-span'></span> Explore more</button>
                        </div>
                        <div className='col-md-5 col-lg-5 col-12 col-sm-12'>
                            <img className='w-100 slider-img rounded-3' src={sliver1} alt="" />
                        </div>
                    </div>

                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div className='container slider-container'>
                    <div className='row d-flex justify-content-between align-items-center'>
                        <div className='col-md-5 col-lg-5 col-12 col-sm-12'>
                            <h1 className='fs-1 fw-bold lh-md'><span className='highlight'>W</span>e are the best provider of fresh, premium quality fruits in <span className='highlight'>Bangladesh</span></h1>
                            <p className='fs-5'>get first class quality fruits from us!! </p>
                            <button className='explore-button'><span className='btn-span'></span> Explore more</button>
                        </div>
                        <div className='col-md-5 col-lg-5 col-12 col-sm-12'>
                            <img className='w-100 slider-img rounded-3' src={sliver2} alt="" />
                        </div>
                    </div>

                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='container slider-container'>
                    <div className='row d-flex justify-content-between align-items-center'>
                        <div className='col-md-5 col-lg-5 col-12 col-sm-12'>
                            <h1 className='fs-1 fw-bold lh-md'><span className='highlight'>W</span>e are the best provider of fresh, premium quality fruits in <span className='highlight'>Bangladesh</span></h1>
                            <p className='fs-5'>get first class quality fruits from us!! </p>
                            <button className='explore-button'><span className='btn-span'></span> Explore more</button>
                        </div>
                        <div className='col-md-5 col-lg-5 col-12 col-sm-12'>
                            <img className='w-100 slider-img rounded-3' src={sliver3} alt="" />
                        </div>
                    </div>

                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;