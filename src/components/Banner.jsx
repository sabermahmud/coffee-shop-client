import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[url(../../src/assets/imgs/hero-bg.jpg)] bg-cover bg-center h-svh w-full'>
            <div className='bg-linear-to-br from-[#000000] to-[#2C1A12]/20 p-5 h-full'>
                <div className=' py-5'>
                    <h3 className='text-[#F5F1ED] text-xl md:text-3xl font-bold mb-2'>Discover Your Perfect Coffee at</h3>
                    <h1 className='text-4xl  md:text-7xl text-[#825222] font-extrabold bebas mb-4'>COFFEE <span className='great-vibes font-extralight text-3xl md:text-5xl m-0'>Everyware</span></h1>
                    <p className='lg:text-lg text-gray-400 great-vibes mb-5'>
                        We offer a wide variety of coffees for you to choose from and enjoy the best coffee in town.
                    </p>
                    <button className='btn'>Order Online</button>
                </div>
            </div>
            {/* <div>
                <img src="../../src/assets/imgs/hero-img.png" className='w-full' alt="coffee mog" />
            </div> */}
        </div>
    );
};

export default Banner;