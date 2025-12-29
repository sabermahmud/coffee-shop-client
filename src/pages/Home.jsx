import React from 'react';
import Banner from '../components/Banner';
import BestSeller from '../components/BestSeller';
import Shops from './Shops';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BestSeller/>
            <Shops/>
        </div>
    );
};

export default Home;