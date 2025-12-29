import React from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { FaBarsStaggered } from 'react-icons/fa6';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { Link } from 'react-router';


const NavBar = () => {
    return (
        <div className='bg-[#110703] p-5 w-full flex justify-between items-center'>

            <div className='navStart'>
                <img src="../../src/assets/imgs/logo.png" className='hidden lg:block  w-30 h-10 object-cover' alt="" />

                <button className='lg:hidden btn-ghost  text-amber-950'><FaBarsStaggered /></button>
            </div>

            <div className='navMiddle  items-center'>
                <img src="../../src/assets/imgs/logo.png" className='lg:hidden  w-20 md:w-40' alt="" />
                {/* menu/listitems */}
                <ul className='hidden lg:flex gap-6'>
                    <Link to="/"><li className=' text-base text-gray-500 hover:text-[#D4A373]  duration-500 great-vibes '>Home</li></Link>
                    <Link to="/"><li className=' text-base text-gray-500 hover:text-[#D4A373]  duration-500 great-vibes '>About us</li></Link>
                    <Link to="/"><li className=' text-base text-gray-500 hover:text-[#D4A373] duration-500 great-vibes '>Our Products</li></Link>
                    <Link to="/"><li className=' text-base text-gray-500 hover:text-[#D4A373]  duration-500 great-vibes '>Contact</li></Link>
                </ul>
            </div>
            <div className='navEnd flex items-center gap-3'>
                <button className='btn-ghost text-amber-950 hover:text-[#D4A373] duration-500 text-lg md:text-2xl'> <CiSearch /></button>
                <button className='btn-ghost text-amber-950 hover:text-[#D4A373] duration-500 text-lg md:text-2xl indicator'> 
                <CiShoppingCart /> 
                <div className='badge bg-amber-50 text-amber-950 hover:text-[#D4A373] border border-amber-950 badge-xs  indicator-item'>0</div></button>
                <button className='btn-ghost text-amber-950 hover:text-[#D4A373] duration-500 text-lg md:text-2xl'> <LiaUserFriendsSolid /></button>
            </div>
        </div>
    );
};

export default NavBar;