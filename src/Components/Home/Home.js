import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Items from './Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container d-flex justify-centent-center">
                <Items></Items>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;