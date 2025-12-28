import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex bg-white  my-10 p-5 lg:p-5 justify-between  items-center text-center md:text-left w-full'>
            <div className=' py-5'>
                <h2 className='text-gray-400 text-5xl font-extrabold mb-3'>If You Need Black Coffee</h2>
                <h3 className='text-amber-600/60 text-xl md:text-3xl font-bold mb-2'>Discover your best coffee in</h3>
                <h1 className='text-4xl  md:text-7xl text-amber-950 font-extrabold bebas mb-4'>COFFEE <span className='great-vibes font-extralight text-3xl md:text-5xl m-0'>Everyware</span></h1>
                <p className='lg:text-lg text-gray-400 great-vibes mb-5'>
                    We have variety of coffee you can choose and enjoy the best coffee in the town.
                </p>
                <button className='btn'>Order Online</button>
            </div>
            <div>
                <img src="../../src/assets/imgs/hero-img.png" className='w-full' alt="coffee mog" />
            </div>
        </div>
    );
};

export default Banner;