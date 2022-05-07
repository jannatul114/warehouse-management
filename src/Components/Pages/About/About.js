import React from 'react';
import about from '../../../images/about.png';
import './About.css';
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
                    </div>
                </div>
            </div>

            <div className="container">
                <h1 className='text-center my-3'>Our Speciality</h1>
                <div className="row">
                    <div className="col-md-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum enim sint labore ab? Animi culpa adipisci eaque modi minus perspiciatis, quis repellat iusto asperiores odit odio deserunt pariatur aliquid eligendi facilis quas iste quae placeat quaerat veniam a voluptatibus totam quidem recusandae. Ipsa vitae blanditiis ratione? Incidunt, ea hic.
                    </div>
                    <div className="col-md-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum enim sint labore ab? Animi culpa adipisci eaque modi minus perspiciatis, quis repellat iusto asperiores odit odio deserunt pariatur aliquid eligendi facilis quas iste quae placeat quaerat veniam a voluptatibus totam quidem recusandae. Ipsa vitae blanditiis ratione? Incidunt, ea hic.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;