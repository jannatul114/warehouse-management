import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import fruits from '../../../images/fruit.png'
const LangMark = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>Product Landmark</h1>
            <div className='container'>
                <div className='d-flex my-4'>
                    <div className="row d-flex justify-content-around m-3 g-3 ">
                        <div className="col-md-3 team-bg p-2">
                            <div className='d-flex justify-content-center'>
                                <img className='w-25' src='http://cdn.onlinewebfonts.com/svg/img_373849.png' alt="" />

                            </div>
                            <h2 className='text-center my-2'><span className='highlight'>N</span>ame</h2>
                        </div>
                        <div className="col-md-3 mt-2 team-bg p-2">
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='w-50' src='https://icon-library.com/images/procurement-icon/procurement-icon-4.jpg' alt="" />

                                </div>
                                <h2 className='text-center my-2'><span className='highlight'>S</span>upplire</h2>
                            </div>
                        </div>
                        <div className="col-md-3 mt-2 team-bg p-2">
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='w-25' src='https://cdn3.iconfinder.com/data/icons/business-part-2-1/48/Tag-Brand-Cost-Label-Name-Price-512.png' alt="" />

                                </div>
                                <h2 className='text-center my-2'><span className='highlight'>P</span>rice</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='d-flex my-4'>
                    <div className="row d-flex justify-content-around m-3 g-3 ">

                        <div className="col-md-4 my-3 team-bg p-2 mt-3">
                            <div>
                                <div className='d-flex justify-content-center '>
                                    <img className='w-25' src='https://icon-library.com/images/quantity-icon/quantity-icon-12.jpg' alt="" />
                                </div>
                                <h2 className='text-center my-2'><span className='highlight'>Q</span>uantity</h2>
                            </div>
                        </div>
                        <div className="col-md-4 my-3 team-bg p-2 mt-3">
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='w-25' src='https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False' alt="" />
                                </div>
                                <h2 className='text-center my-2'><span className='highlight'>I</span>mage</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LangMark;