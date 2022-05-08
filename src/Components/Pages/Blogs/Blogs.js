import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='my-3'>
            <h1 className='text-center my-3'>FAQs</h1>
            <div className='container'>
                <div className='row d-flex justify-content-center m-2'>
                    <div className="col-lg-5 col-md-6 col-sm-12 col-12 bg-color shadow-lg rounded-3 p-3">
                        <h3 className='text-center text-dark'>what is the Difference between javascript and nodejs?</h3>

                        <h5 className='my-3'>Difference between javascript and nodejs are: </h5>
                        <p>1. javascript is a programming language . it runs in web browser on the other hand Node.js is an interpreter or running environment for JavaScript.</p>
                        <p>2. Javascript can only run in the browsers but by help of node.js javasctipt will run outside of browser</p>
                        <p>3. javascript used is client-side but nodejs used in server side</p>
                        <p>4. javascript basically used in fontend development but node.js use to server side development.</p>
                        <p>5. javascript is an update version of ECMA scripts which is written by c++ but nodejs is written by c, c++ and javascript</p>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 col-12 bg-color shadow-lg rounded-3 p-2">
                        <h3 className='text-center'>When should you use nodejs and when should you use mongodb?</h3>
                        <p>node.js ia a run-time environment thats hepls javascript to run outside of web browser and it used when building fast scalable server side and real time, networking application . Mongodb is NoSql database , used when your data is document centric and dosen't fir into the schema of relational database or is your data is unstructered, etc. mongodb is used to developing scalable applications </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-color shadow-lg rounded-3 p-3">
                        <h3 className='text-center'> Differences between sql and nosql databases</h3>
                        <h5 className='my-3'>Difference between Sql and nosql are: </h5>
                        <p>1. sql databases are not suited for hierarchical data storage but npsql databases are best suited for hierarchical data storage.</p>
                        <p>2. sql database Follows ACID property but nosql database Follows CAP(consistency, availability, partition tolerance)</p>
                        <p>3. sql database are Vertically Scalable	but nosql database are Horizontally scalable.</p>
                        <p>4. SQL database are RELATIONAL DATABASE MANAGEMENT SYSTEM but Nosql are Non-relational or distributed database system.</p>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;