import React from 'react';

const OurLocation = () => {
    return (
        <div>
            <div className='my-3'>
                <h1 className='my-3 text-center'>Our location</h1>
                <div className='row mt-3 g-4 mx-2'>
                    <div className="col-md-6">
                        <div style={{ width: "100%" }}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=dhaka,%20bangladesh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/">gps smartwatches</a></iframe></div>
                    </div>
                    <div className="col-md-6">
                        <h2>Get in our touch</h2>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Your name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Your comment</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>

                            <button className='update-button my-3'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurLocation;