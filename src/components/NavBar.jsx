import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <div className='bg-amber-500 p-5 flex justify-between items-center'>
            <div>
                <h2>logo space</h2>
            </div>

            <div className='flex gap-6 items-center'>
                <ul className='flex gap-6'>
                    <Link to="/"><li className='font-semibold text-xl text-amber-900 hover:text-amber-950  duration-500'>Home</li></Link>
                    <Link to="/"><li className='font-semibold text-xl text-amber-900 hover:text-amber-950  duration-500'>About us</li></Link>
                    <Link to="/"><li className='font-semibold text-xl text-amber-900 hover:text-amber-950 duration-500'>Our Products</li></Link>
                    <Link to="/"><li className='font-semibold text-xl text-amber-900 hover:text-amber-950  duration-500'>Contact</li></Link>
                </ul>
                <div>
                    <button className='btn rounded-full bg-amber-900 hover:bg-amber-950 duration-500 text-amber-100 flex items-center gap-2'>Join us <FaUserFriends /></button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;