import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='max-w-11/12 mx-auto'>

            <NavBar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Root;