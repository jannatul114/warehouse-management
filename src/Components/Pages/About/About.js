import React from 'react';
import about from '../../../images/about.png';
import './About.css';
import img1 from '../../../images/icon-1.png';
import img2 from '../../../images/icon-2.png';
import img3 from '../../../images/icon-3.png';
import Footer from '../../Shared/Footer/Footer';
const About = () => {
    return (
        <div>
            <div className='container'>
                <div className="row d-flex align-items-center">
                    <div className="col-md-8">
                        <img className='w-100' src={about} alt="" />
                    </div>
                    <div className="col-md-4">
                        <h1 className='fs-1 fw-bold'><span className='highlight'>A</span>bout us</h1>
                        <p className='fs-3 text-before'>We are the top provideer of best quality and fresh fruits in bangladesh.  </p>
                        <button className='update-button my-2'>Explore more about us</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <h1 className='text-center my-3 fs-1 fw-bold'>Our Speciality</h1>
                <div className='d-flex my-4'>
                    <div className="row d-flex justify-content-around">
                        <div className="col-md-4">
                            <div className='d-flex justify-content-center'>
                                <img className='w-25' src={img1} alt="" />
                            </div>
                            <h2 className='text-center my-2'><span className='highlight'>Safe</span>Transport</h2>
                        </div>
                        <div className="col-md-4 mt-2">
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='w-25' src={img2} alt="" />
                                </div>
                                <h2 className='text-center my-2'><span className='highlight'>Smart</span>Managment</h2>
                            </div>
                        </div>
                        <div className="col-md-6 my-3">
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='w-25' src={img3} alt="" />
                                </div>
                                <h2 className='text-center my-2'><span className='highlight'>garden</span>Fresh</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <h1 className='text-center mb-4 fs-1 fw-bold'>Our Team Members</h1>
                <div className='row d-flex justify-content-around mt-4 mx-3'>
                    <div className='col-md-3 team-bg p-3 m-4 rounded-3'>
                        <div className='d-flex justify-content-center'>
                            <img className='w-25 rounded-circle' src='https://randomuser.me/api/portraits/men/44.jpg' alt="" />
                        </div>
                        <h1 className='text-center'>Jonson</h1>
                        <p className='text-before text-center'>I work with fruits vally with lot of fun. we carefull about our product quality</p>
                    </div>
                    <div className='col-md-3 team-bg p-3 m-4 rounded-3'>
                        <div className='d-flex justify-content-center'>
                            <img className='w-25 rounded-circle ' src='https://randomuser.me/api/portraits/women/27.jpg' alt="" />
                        </div>
                        <h1 className='text-center'>Milly</h1>
                        <p className='text-before text-center'>I work with fruits vally with lot of fun. we carefull about our product quality</p>
                    </div>
                    <div className='col-md-3 team-bg p-3 m-4 rounded-3'>
                        <div className='d-flex justify-content-center'>
                            <img className='w-25 rounded-circle' src='https://randomuser.me/api/portraits/men/29.jpg' alt="" />
                        </div>
                        <h1 className='text-center'>Tomas</h1>
                        <p className='text-before text-center'>I work with fruits vally with lot of fun. we carefull about our product quality</p>
                    </div>
                    <div className='col-md-4 team-bg p-3 m-4 rounded-3'>
                        <div className='d-flex justify-content-center'>
                            <img className='w-25 rounded-circle' src='https://randomuser.me/api/portraits/women/75.jpg' alt="" />
                        </div>
                        <h1 className='text-center'>Jully</h1>
                        <p className='text-before text-center'>I work with fruits vally with lot of fun. we carefull about our product quality</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;