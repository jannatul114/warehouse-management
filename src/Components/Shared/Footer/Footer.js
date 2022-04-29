import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="foo text-center text-lg-start text-dark">

            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 d-flex align-items-center">

                            <h6 className="fw-bold mb-4">
                                <h1>Fruit Vally</h1>
                            </h6>

                        </div>







                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <p className="text-reset">Pricing</p>
                            </p>
                            <p>
                                <p className="text-reset">Settings</p>
                            </p>
                            <p>
                                <p className="text-reset">Orders</p>
                            </p>
                            <p>
                                <p className="text-reset">Help</p>
                            </p>
                        </div>



                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> Dhaka, Bangladesh</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                fruitsvally@gmail.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 111 222 222</p>
                            <p><i className="fas fa-print me-3"></i> + 01 333 666 444</p>
                        </div>

                    </div>

                </div>
            </section>



            <div className="text-center p-4 copyright-part">
                © 2022 Copyright: Jannatul mithila</div>

        </footer>

    );
};

export default Footer;