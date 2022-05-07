import React, { useEffect, useState } from 'react';
import OurLocation from '../Pages/OurLocation/OurLocation';
import Footer from '../Shared/Footer/Footer';
import Loading from '../Shared/Loading/Loading';
import Banner from './Banner/Banner';
import ExtraSection from './ExtraSection/ExtraSection';
import Items from './Items/Items';

const Home = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://sleepy-ocean-93953.herokuapp.com/allfruits')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            {
                items[0]?.img ?
                    <div>
                        <Banner></Banner>
                        <ExtraSection></ExtraSection>
                        <div className="container ">
                            <div className='d-flex justify-centent-center'>
                                <Items></Items>
                            </div>
                            <OurLocation></OurLocation>
                        </div>
                    </div> : <Loading></Loading>
            }
            <Footer></Footer>

        </div>
    );
};

export default Home;